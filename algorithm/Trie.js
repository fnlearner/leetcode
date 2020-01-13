/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.child =[]
    this.isEnd = false
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let root = this
    const toCharArray = word.split('')
    for(let item of toCharArray){
        if(!root.child[item]){
             root.child[item] = new Trie()
        }
        root = root.child[item]
    }
    root.isEnd = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let root = this
    const toCharArray = word.split('')
       for(let item of toCharArray){
        if(!root.child[item])return false
        root = root.child[item]
    }
    return root.isEnd
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
        let root = this
        const toCharArray = prefix.split('')
        for(let item of toCharArray){
            if(!root) return false
            root = root.child[item]
        }
        return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const obj = new Trie()
// obj.insert('apple')
// obj.insert('orange')
// console.log()
console.log(obj.search('o'))

// console.log(obj.startsWith('app'))
// console.log(obj.search('apple'))
// console.log(obj)
// console.log(obj.startsWith('app'))