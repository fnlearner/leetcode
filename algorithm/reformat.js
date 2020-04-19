/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let result =''
    const arr = s.split('')
    const isNumber = arr.every(item=>item.charCodeAt() <=57)
    const isCharactor = arr.every(item=>{
      return  item.charCodeAt()>='a'.charCodeAt()&&item.charCodeAt() <=122
    })
    // console.log(isNumber,isCharactor)
    if(s.length === 1) return s;
    if(isNumber || isCharactor) return ''
    // console.log(arr)
    const numbers = arr.filter(item=>item.charCodeAt() <=57)
    const charactors = arr.filter(item=>{
       return item.charCodeAt()>='a'.charCodeAt()&&item.charCodeAt() <=122
    })
    console.log(numbers, charactors)
    while(numbers.length && charactors.length){
        if(charactors.length)
            result+=charactors.pop()
        if(numbers.length)
            result+=numbers.pop()
        // result+= charactors.pop()||''+numbers.pop()||''
    }
    // console.log(result)
    if(numbers.length === 1){
        result = numbers.pop()+result
    }else if(numbers.length >1){
        return ''
    }else if(charactors.length === 1){
        result += charactors.pop()
    }else if(charactors.length >1){
        return ''
    }
    console.log(result)
    return result
    
};
reformat("ab123")