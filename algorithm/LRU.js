/**
 * 用哈希表和双链表来实现LRU算法
 */
/**
 * @param {number} capacity
 */
const has = Object.prototype.hasOwnProperty
function Node(key,value,pre=null,next=null){
    this.pre = next
    this.next = pre
    this.key = key
    this.value = value
}
function DoubleList(){
    this.head = new Node(-1,-1)
    this.tail = new Node(-1,-1)
    this.head.next = this.tail
    this.tail.pre = this.head
    this.size = 0
    const that = this
    this.addFirst = function addFirst(x){
        x.next = this.head.next
        x.pre = this.head

        this.head.next.pre = x
        this.head.next = x
        that.size++
    }
    this.remove = function remove(x){
        x.pre.next = x.next
        x.next.pre = x.pre
        that.size--
    }
    this.removeLast = function rmeoveLast(){
        if(that.tail === that.head){
            return null
        }
        const x = that.tail.pre
        this.remove(x)
        return x
    }
    this.getSize = function getSize(){
        return that.size;
    }
}
var LRUCache = function(capacity) {
      this.cache = new DoubleList()
      this.capacity = capacity
      this.map = {}
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!has.call(this.map,key))
        return -1
    const val = this.map[key].value
    this.put(key,val)
    return val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const item = new Node(key,value)
    if(has.call(this.map,key)){
        this.cache.remove(this.map[key])
        this.cache.addFirst(item)
        this.map[key] = item
    }else{
        if(this.capacity === this.cache.getSize()){
            const lastNode = this.cache.removeLast()
            Reflect.deleteProperty(this.map,lastNode.key)
        }
        this.cache.addFirst(item)
        this.map[key] = item
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */