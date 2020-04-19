/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    while(gap < len/3) {          //动态定义间隔序列
        gap =gap*3+1;
    }
    for (gap; gap > 0; gap = Math.floor(gap/3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
}
var displayTable = function(orders) {
    const hashmap = new Map()
    const foodItems = orders.map(item=>item[2]).sort();
    for(let i=0;i<foodItems.length-1;i++){
        if(foodItems[i] === foodItems[i+1]){
            foodItems.splice(i,1)
            --i
            continue
        }
    }
    for(let item of orders){
        const tableName = item[1]
        const foodItem = item[2]
        if(!hashmap.has(tableName)){
            hashmap.set(tableName,new Map())
            const foodMenu = hashmap.get(tableName)
            foodMenu.set(foodItem,1)
        }else{
            const foodMenu = hashmap.get(tableName)
            if(!foodMenu.has(foodItem)){
                foodMenu.set(foodItem,1)
            }else{
                let item = foodMenu.get(foodItem)
                ++item
                foodMenu.set(foodItem,item)
            }
        }
    }
    foodItems.unshift('Table')
    const result =[]
    // result.push(foodItems)
    let numbers = shellSort([...hashmap.keys()].map(Number))
    console.log(numbers)
    numbers = numbers.map(String)
    for(let key of numbers){
        const arr = []
        arr.push(key)
        const foodMenu = hashmap.get(key)
        const rest = foodItems.slice(1).map(item=>foodMenu.get(item)||'0').map(String)
        arr.push(...rest)
        result.push(arr)
        // console.log('rest',rest)
        // console.log(key)
    }
    // result.sort((a,b)=>+a[0]>+b[0])
    result.unshift(foodItems)
    // console.log(hashmap)
    // console.log(foodItems)
    return result
};