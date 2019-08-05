/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let buills=0,cows=0;
   
    return `${buills}A${cows}B`;
};

console.log("getHint(\"11\",\"10\"):", getHint("11","10"));
getHint("11","10");