const isUnique = (arr)=>{
    const equals = (a, b) => {
        if (a === b) return true;
        if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
        if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
        if (a === null || a === undefined || b === null || b === undefined) return false;
        if (a.prototype !== b.prototype) return false;
        let keys = Object.keys(a);
        if (keys.length !== Object.keys(b).length) return false;
        return keys.every(k => equals(a[k], b[k]));
      };
    
    for(let i =0;i<arr.length;i++){
        for(let j =i+1;j<arr.length;j++){
            if(!!equals(arr[i],arr[j])){
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}

console.log("isUnique([123, [1, 2, 3], [1, \"2\", 3], [1, 2, 3], \"meili\",{a:1,b:1},{b:1,a:1}]):", isUnique([123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili",{a:1,b:1},{b:1,a:1}]));
isUnique([123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili",{a:1,b:1},{b:1,a:1}]);