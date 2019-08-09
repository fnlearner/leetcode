/**
 * @param {string} S
 * @return {boolean}
 */
var isValid = function(S) {
    let temp= '';
    while(S.indexOf('abc')!=-1){
        temp= S.split('abc').filter(item=>item).join("");
        S = temp;
    }
    const isFlag=(str)=>{
         return str =='';
    }
    return isFlag(S);

};
console.log(isValid("abcabcababcccc"));