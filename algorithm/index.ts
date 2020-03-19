export ={};

var reverseBits = function(n:number) {
    let len=n.toString(2).length;
    let result:string;
    for(let i=len-1;i>-1;i--){
        result+=n[i];
    }
    return parseInt(result);
};
// console.log(reverseBits(43261596));
/*二叉树 */
function Tree(left,label,right){
    this.left=left;
    this.label=label;
    this.right=right;
}
function* inorder(t){
    if(t){
        yield* inorder(t.left);
        yield t.label;
        yield* inorder(t.right);
    }
}

function make(array){
    if(array.length==1) return new Tree(null,array[0],null);
   
    return new Tree(make(array[0]),array[1],make(array[2]));
} 
function output(){
    let tree=make([[['a'],'b',['c']],'d',[['e'],'f',['g']]]);
    var result=[];
    for(let node of inorder(tree)){
        result.push(node);
    }
    console.log(result);
    return result;
}
/**寻找最长不重复子串 */
var lengthOfLongestSubstring = function(s:string):number {
    console.time('timer');
    var res = 0; 
    var str = ""; 
    var len = s.length;
    for(var i = 0; i < len; i++) {
      var char = s.charAt(i);
      var index = str.indexOf(char);
      if(index === -1) {
        str += char;
        res = res < str.length ? str.length : res;
      } else {
        str = str.substr(index + 1) + char;
      }
      
    }
    console.timeEnd('timer');
    console.log(res);
    return res; 
};
// lengthOfLongestSubstring('acv');


var checkInclusion = function(s1:string, s2?:string) {
    function* q(s1){
        if(s1.length==1) return s1;
        let result=[];
        for(let i =0;i<s1.length;i++){
                let start=s1[i];
                let left=s1.slice(0,i)+s1.slice(i+1);
                for(let j of yield* q(left)){
                    result.push(start+j);
                }
        }
        yield result;
    }

    
};
// console.log(checkInclusion('acb','eidbaooo'));
/**三数字之和
 */
var threeSum = function(nums:number[]) {
    console.time('timer');
    nums=nums.sort((a,b)=>{return a-b});
    let len=nums.length;
    let result=[];
    for(let i =0;i<len-1;i++){
        if (i && nums[i] === nums[i - 1]) continue ;
        let target = -nums[i];
        let [start, end] = [i + 1, len - 1];
        while(start<end){
            let sum=nums[start]+nums[end];
            if(sum>target){
                end--;
            }else if(sum<target){
                start++;
            }else{
                result.push([nums[i],nums[start],nums[end]]);
                while(nums[start]===nums[start+1]){
                    start++;
                }
                start++;    
                while(nums[end]===nums[end-1]){
                    end--;
                }
                end--;
            }
        }
    }

    console.timeEnd('timer');
    return result;
 
};
// console.log(threeSum([-13,5,13,12,-2,-11,-1,12,-3,0,-3,-7,-7,-5,-3,-15,-2,14,14,13,6,-11,-11,5,-15,-14,5,-5,-2,0,3,-8,-10,-7,11,-5,-10,-5,-7,-6,2,5,3,2,7,7,3,-10,-2,2,-12,-11,-1,14,10,-9,-15,-8,-7,-9,7,3,-2,5,11,-13,-15,8,-3,-7,-12,7,5,-2,-6,-3,-10,4,2,-5,14,-3,-1,-10,-3,-14,-4,-3,-7,-4,3,8,14,9,-2,10,11,-10,-4,-15,-9,-1,-1,3,4,1,8,1]));
// console.log(threeSum([-1,0,1,2,-1,-4]));

var myPow = function(x:number, n:number) {
    const powerWtidhExponent=(base,exponent)=>{
        if(exponent===0){
            return  1;
        }
        if(exponent===1){
            return base;
        }
        let result = powerWtidhExponent(base,exponent>>1);
        result*=result;
        if(exponent&&0x1==1){
            result*=base;
        }
        return result;
    }
    let isValid =false;
    if(x<=0){
        isValid =true;
        return 0;
    }

    let result = powerWtidhExponent(x,n);
    if(n<0){
        result=1/result;
    }else if(n==0){
        result =1;
    }
    return result;
    //100+ms
};


var searchRange = function(nums, target) {
    let start=0,last=nums.length-1;
    let startBool=true,lastBool=true,startIndex=-1,lastIndex=-1;
    let result=[];
    while(start<=nums.length&&last>=0){
        if(startBool&&nums[start]==target){
            startIndex=start;
            startBool=false;
        }
        if(lastBool&&nums[last]==target){
            lastIndex=last;
            lastBool=false;
        }
        start++;
        last--;
        if(!startBool&&!lastBool){
            start=nums.length;
            last=-1;
        }
    }
    //72ms
   return [startIndex,lastIndex];
};
// console.log(searchRange([5,7,7,8,8,10],8));

var multiply = function(num1:string, num2?:string) {
    let firstNumber:number=0,lastNumber:number=0;
    let sum;
    for(let i=0;i<num1.length;i++){
        firstNumber+=10**(num1.length-1-i)*Number(num1.charAt(i));
    }
    for(let i=0;i<num2.length;i++){
        lastNumber+=10**(num2.length-1-i)*Number(num2.charAt(i));
    }
    console.log(firstNumber,lastNumber);
    sum=firstNumber*lastNumber;
    return sum.toString();
};
// console.log(multiply('123','456'));

let reverse=function(nums){
    let maxNum=2**31-1,minNum=-(2**31);
    let reverseNumber:number;
    let isPlus=true;
    if(nums<0){
        isPlus=false;
        nums=-nums;
    }
    reverseNumber= Number(nums.toString().split("").reverse().join(""));
    reverseNumber=isPlus?reverseNumber:-reverseNumber;
    if(reverseNumber>maxNum||reverseNumber<minNum)
        return 0;
    return reverseNumber;
}
// console.log(reverse('-123'));

function listNode(val){
   let next =null;
    let result:string='';
 
    val=typeof val=='number'?val:Number(val); 
    while(val!=0) {  
        next=val%10;
        val=Math.floor(val/10);
        if(val==0){
            result+=next;
            break;
        }
           
        result+=next+'->';
    } 
        return result;
   
}
var addTwoNumbers = function(l1, l2) {
    function listNode(val){
       this.val=val;
        this.next=null;
    }
    let c1=l1,c2=l2,c3,l3,carry=0;
     while(c1||c2||carry){
          let v1=0,v2=0;
           
            if(c1){
                v1=c1.val;
                c1=c1.next;
            }
            if(c2){
                v2=c2.val;
                c2=c2.next;
            }
            let sum = v1+v2+carry;
            carry=Math.floor(sum/10);//得到进位
            if(!c3){
                l3= new listNode(sum%10);
                c3=l3;
            }else{
                c3.next = new listNode(sum%10);
                c3=c3.next;
            }
     }
     return l3;
};
// console.log(addTwoNumbers([2,4,3],[5,6,4]));
var lengthOfLastWord = function(s:string) {
    let str='';
    let end=s.length-1;
    let isBool=true;
    if(s.length==0)return 0;
    for(let i of s){
          if(i!=' '){
              isBool=false;
          }
    }
    if(isBool) return 0;
    for(;;){
        while(s[end]==' '){ 
               end--;
        }
        str+=s[end];
        end=end-1
        if(s[end]==' '||!s[end]){
            break;
        }
        
    }
   return str.length;
};
// console.log(lengthOfLastWord("Hello World"));
/** 质数*/
let Judge=function(num:number){
    let flag=true;
    for(let i =2;i<=Math.floor(Math.sqrt(num));i++){
            if(num%i==0){
                flag=false;
            }
    }
    return flag;
}
// console.log(Judge(13));

/*找中位数 */
var findMedianSortedArrays = function(nums1:number[], nums2:number[]) {
    let nums=[...nums1,...nums2];
    const median=arr=>{
        const mid=Math.floor(arr.length/2);
        let  nums=[...arr].sort((a,b)=>a-b);
        return arr.length%2!==0?nums[mid]:(nums[mid-1]+nums[mid])/2;
    }
    return median(nums);
}
// console.log(findMedianSortedArrays([3],[-2,-1]));

var myAtoi = function(str:string) {
    let sum = parseInt(str)
    if (isNaN(sum)) {
        return 0;
    }
    if (sum < Math.pow(-2, 31)) {
        return Math.pow(-2, 31);
    }
    if(sum > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    }
    return sum
};

// console.log(myAtoi("-91283472332"));


var isMatch = function(s:string, p:RegExp) {
    if(s.length==0) return false;
    if(!p) return true;
    if(!p.test(s)) return false;
    if(s.match(p)[0].length==s.length)
        return true;
    return false;
};
// console.log(isMatch('ab',/.*c/));

function drop(arr, func) {
    // Drop them elements

    var arrCopy = arr.slice();
    for (var i = 0; i < arr.length; i++) {
        if(!func(arr[i])) {
            arrCopy.shift();
        } else {
            return arrCopy;
        }
    }
    return [];
  }
  
//   drop([1, 2, 3], function(n) {return n < 3; });

function sumPrimes(num) {
    /*质数求和 */
    let judge=function(n){
      let flag=true;
      for(let i =2;i<=Math.floor(Math.sqrt(n));i++){
            if(n%i==0){
              flag=false;
            }
      }
      return flag;
    }
    let sum=0;
    for(let i=2;i<=num;i++){
        if(judge(i)){
          sum+=i;
        }
    }
    return sum;
  }
  
//   console.log(sumPrimes(10));
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    str=str.toLowerCase();
    let newStr=str.replace(/\s|_/g,'-');
    console.log(newStr);
    return str;
  }
  
//   spinalCase('This Is Spinal Tap');

function fibonacci(n) {
    if (n < 2){
        return 1;
    }else{
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}
// console.log(fibonacci(10));


var moveZeroes = function(nums) {
    let j=0;
    for(let item of nums){
        if(item!=0){
            nums[j++]=item;
        }
    }
    for(let i=j;i<nums.length;i++){
        nums[i]=0;
    }
    return nums;
};
// console.log(moveZeroes([0,1,0,3,12]));
/**
 *
 * deepClone
 * 深度克隆
 */
const deepClone=obj=>{
    let clone=Object.assign({},obj);
    Object.keys(clone).forEach(
        key => clone[key]=typeof obj[key]=='object'?deepClone(obj[key]) :obj[key]   
    );
    return Array.isArray(obj)?(clone.length=obj.length)&&Array.from(clone):clone;
}
const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj

/**最大公约数 
 * Calculates the greatest common divisor between two or more numbers/arrays.
*/
const gcd=(...arr)=>{
    const _gcd=(x,y)=>(!y?x:gcd(y,x%y));
    return [...arr].reduce((a,b)=>
        _gcd(a,b)); 
}
// console.log(gcd(8, 36)); // 4

const median=arr=>{
    const mid=Math.floor(arr.length/2);
    let  nums=[...arr].sort((a,b)=>a-b);
    return arr.length%2!==0?nums[mid]:(nums[mid-1]+nums[mid])/2;
}
// console.log(median([5, 6, 50, 1, -5])); // 5

/**
 * 动态规划爬楼梯
 */
let climbStairs=function(n:number){
    let db=[];
    db[0]=1;
    db[1]=2;
    if(n>=3){
        for(let i =0;i<n;i++){
            db[i]=db[i-1]+db[i-2];
        }
    }
    return db[n];
}
/**
 * 使用最小花费爬楼梯 
 */

var minCostClimbingStairs = function (cost) {
    var length = cost.length;
    var dp = [];
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (var i = 2; i < length; i++) {
      dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i];
    }
    return Math.min(dp[i-1], dp[i-2])
  };
//   minCostClimbingStairs( [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
 /**分饼干1 */
 var findContentChildren = function(g:Array<number>, s:Array<number>) {
    let child=0;
    let cookie=0;
    g=g.sort((a,b)=>{return a-b});
    s=s.sort((a,b)=>{return a-b});
    console.log(g,s)
    while(child<g.length&&cookie<s.length){
       if(s[cookie]>=g[child]){
           child++;   
       }
       cookie++;
    }
    return child;
};
/**重构字符串 */
var reorganizeString = function(S:String) {
    if(S.length==0)
    return "";
    if(S.length===1){
        return S;
    }
    let obj=Array.from(S);
    let sum=Math.ceil(S.length/2);
    let str="";
    let objEdit= obj.reduce(function(obj,value){
        obj[value]=++obj[value]||1;
        return obj;
    },{});
    /** 根据个数来降序排序*/
    let dic=Object.keys(objEdit).sort(function(a,b){return objEdit[b]-objEdit[a]});
    let maxNum:number=0,maxIndex="";
    for(let i in objEdit){
        if(objEdit[i]>maxNum){
            maxNum=objEdit[i];
            maxIndex=i;
        }
        if(objEdit[i]>sum){
            return "";
        }
    }
    let dicMap=dic.map(function(value){
        return [value,objEdit[value]];
    });
    let result = "", previous = ""
    for(let i = 0; i < S.length; i++){
        let j = 0, find = false
        while(j < dicMap.length){
            if(dicMap[j][0] !== previous && dicMap[j][1] > 0){
                find = true
                break
            }
            j += 1
        }
        if(!find) {
            return ""
        }
        result += dicMap[j][0]
        dicMap[j][1] -= 1
        previous = dicMap[j][0]
        if(j < dicMap.length - 1 && dicMap[j][1] < dicMap[j+1][1]){
            [dicMap[j], dicMap[j+1]] = [dicMap[j+1], dicMap[j]]
        }
    }
    return result;
};
// console.log('reorganizeString("adfdfbc"): ', reorganizeString("blflxll"));
/**搜索二维矩阵 II */
var searchMatrix = function(matrix, target:number) {
    if(matrix.length==0) return false;
    return matrix.some(item => {
        return  item.some(ele=>{
            return ele==target;
        })
    });
};
// console.log('searchMatrix([ [1,   4,  7, 11, 15],[2,   5,  8, 12, 19],[3,   6,  9, 16, 22], [10, 13, 14, 17, 24],[18, 21, 23, 26, 30]],5): ', searchMatrix([ [1,   4,  7, 11, 15],[2,   5,  8, 12, 19],[3,   6,  9, 16, 22], [10, 13, 14, 17, 24],[18, 21, 23, 26, 30]],5));
/**合并两个有序数组 */
var merge = function(nums1, m, nums2, n) {
    nums1.length=m;
    nums2.length=n;
    nums1=[...nums1,...nums2];
    nums1.sort((a,b)=>{return a-b});
    console.log(nums1);
};
// merge([1,2,3,0,0,0],3, [2,5,6],3);

var productExceptSelf = function(nums:Array<number>) {
//    let output=[];
//    let mul=1;
//    nums.forEach(ele=>{    
//        output.push(mul); 
//        mul*=ele;
//    })
//    console.log(output,mul);
//    mul=1;
//    for(let i =nums.length-1;i>-1;i--){
//         output[i]=output[i]*mul;
//         mul*=nums[i];
//    }   
//    return output;
/**实际上，我们可以用结果数组自身来存储left和right数组的信息。首先还是同样的算出每个点左边所有数的乘积，存入数组中。然而在反向算右边所有数的乘积时，我们不再把它单独存入一个数组，而是直接乘到之前的数组中，这样乘完后结果就已经出来了。另外，因为我们不再单独开辟一个数组来存储右边所有数，不能直接根据数组上一个来得知右边所有数乘积，所以我们需要
 * 额外一个变量来记录右边所有数的乘积。这里为了清晰对称，遍历左边的时候也加入了一个额外变量来记录。 */
    let res = [1];
    for (let i = 1; i < nums.length; ++i) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    console.log(res);
    for (let i = res.length - 1, right = 1; i >= 0; --i) {
        res[i] *= right;
        right *= nums[i];
    }
    return res;
};
// productExceptSelf([1,2,3,4]);


var maxArea = function(height:Array<number>) {
    let area:number=0,
    len=height.length,
    left=0,right=len-1;
    if(len<=1) return -1;
    while(left<right){
        let h=Math.min(height[left],height[right]);
        area=Math.max(area,h*(right-left));
        if(height[left]<height[right]) left++;
        else right--;
    }
    return area;
};
// maxArea([1,8,6,2,5,4,8,3,7])
// console.log('maxArea([1,8,6,2,5,4,8,3,7]): ', maxArea([1,8,6,2,5,4,8,3,7]));

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * Z字形变换
 */
var convert = function(s:string, numRows:number) {
    if(numRows==1) return s;
};


/**
 * @param {number[]} nums
 * @return {number}
 * 寻找重复
 */
var findDuplicate = function(nums:Array<number>) {
    const obj=nums.reduce((obj1,val)=>{
        obj1[val]=++obj1[val]||1;
        return obj1;
    },{});
    let arr=[];
    Object.keys(obj).forEach(function(val,){
       if(obj[val]>1){
           arr.push(val);
       }
    })
    return arr;
};
// findDuplicate( [1,3,4,2,2]);

/**
 * @param {number[]} nums
 * @return {number}
 * 找到峰值
 */
var findPeakElement = function(nums:Array<number>) {
    if(nums.length<=2) return nums.indexOf(Math.max(...nums));
    for(let i =0;i<nums.length;i++){
        if(nums[i]>(nums[i-1]||0)&&nums[i]>(nums[i+1]||0)){
            return i;
        }
    }
};
// findPeakElement([1]);
// console.log('findPeakElement([1]): ', findPeakElement([1,2,3,4]));

/**
 * @param {number[]} nums
 * @return {number}
 * 只出现一次的数字
 */
var singleNumber = function(nums) {
    const obj=nums.reduce((object,val)=>{
        object[val]=++object[val]||1;
        return object;
    },{});
    let result="";
     Object.keys(obj).forEach(function(val){
        if(obj[val]==1) {
            result=val;
            return ;   
        }
    })
    return result;
};
// console.log('singleNumber([4,1,2,1,2]): ', singleNumber([4,1,2,1,2]));
/**
 * @param {string} s
 * @return {boolean}
 * p判断是否是回文串
 */
var isPalindrome = function(s:string) {
    /**方法一 */
    const reg=/\W+/g;
    const str=s.replace(reg,'').toLowerCase();
    let left=0,right=str.length-1;
    let flag=true;
    while(left<right){
        if(str[left]!=str[right]){
            flag=false;
            left=str.length;
            right=0;
        }
        left++;
        right--;
    }
    return flag;
    /**方法二 */
    // const reg=/\W+/g;
    // const str=s.replace(reg,'').toLowerCase();
    // let oldStr=str.toLowerCase();
    // let newStr=str.toLowerCase().split("").reverse().join("");
    // return oldStr===newStr;
};  
// console.log('isPalindrome("A man, a plan, a canal: Panama"): ', isPalindrome("A man, a plan, a canal: Panama"));
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 *  旋转数组
 */
var rotate = function(nums:Array<Number>, k:number) {
    // let i=0;
    let len=nums.length;

    // while(i<k){
    //      nums=nums.slice(len-1).concat(nums.slice(0,len-1));
    //     i++;
    // }
    nums=nums.slice(len-k).concat(nums.slice(0,len-k));
    console.log(nums);
    return nums;
};
// console.log('rotate([1,2,3,4,5,6,7],3): ', rotate([1,2,3,4,5,6,7],3));

/**
 * @param {string} s
 * @return {number}
 * 第一个唯一字符
 */
var firstUniqChar = function(s:string) {
    if(s.length==0) return -1;
    for(let i =0;i<s.length;i++){
      if(s.indexOf(s[i])==s.lastIndexOf(s[i])){
          return i;
      }
    }
    return -1;
};
// firstUniqChar("leetcode");
// console.log('firstUniqChar("leetcode"): ', firstUniqChar("CC"));

/**
 * @param {string[]} strs
 * @return {string}
 * 最长公共前缀
 */
var longestCommonPrefix = function(strs:Array<string>) {
    if(!strs.length) return '';
    let len=strs.reduce((minxLen,val)=>{
            return Math.min(minxLen,val.length);
    },Number.MAX_VALUE);
    let result='';
    for(let i=0;i<len;i++){
        let a=strs[0][i];
        let f=strs.every(item=>{
            return item[i]==a;
        });
        if(!f)break;
        result+=a;
    }
    return result;
    
};
// longestCommonPrefix( ["flower","flow","flight"]);
// console.log('longestCommonPrefix( ["flower","flow","flight"]): ', longestCommonPrefix( ["flower","flow","flight"]));

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start=1,end=n;
        while(start<=end){  
            let mid=Math.floor((start+end)/2);  
            if(isBadVersion(mid)==true){
                end=mid-1;
            }else{
                start=mid-1;
            }
        }
        return start;
    };
};


/**
 * @param {number} n
 * @return {boolean}
 * 3的幂次方
 */
var isPowerOfThree = function(n:number) {
    
};


/**
 * @param {number[][]} grid
 * @return {number}
 * 给定一个包含了一些 0 和 1的非空二维数组 grid , 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。
 * 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)
 * 
 */
var maxAreaOfIsland = function(grid) {
    const  areaOfIsland=function(grid,i ,j){
        if(i>=0&&j>=0&&i<grid.length&&j<grid[0].length&&grid[i][j]==1){
            grid[i][j]=0;
            return 1+areaOfIsland(grid, i+1, j) + areaOfIsland(grid, i-1, j)+areaOfIsland(grid, i, j+1)+areaOfIsland(grid, i, j-1);
        }
        return 0;
    }
    let maxArea=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]!=0){
                maxArea=Math.max(maxArea,areaOfIsland(grid,i,j));
            }
        }
    }
    console.log(maxArea);
    return maxArea;
};

// maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],
//     [0,0,0,0,0,0,0,1,1,1,0,0,0],
//     [0,1,1,0,1,0,0,0,0,0,0,0,0],
//     [0,1,0,0,1,1,0,0,1,0,1,0,0],
//     [0,1,0,0,1,1,0,0,1,1,1,0,0],
//     [0,0,0,0,0,0,0,0,0,0,1,0,0],
//     [0,0,0,0,0,0,0,1,1,1,0,0,0],
//     [0,0,0,0,0,0,0,1,1,0,0,0,0]]);

/**
 * @param {number[]} nums
 * @return {number}
 * 最长递增子序列
 */
var findLengthOfLCIS = function(nums:number[]) {
    let maxLen:number=0,count:number=1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<nums[i+1]){
            count++;
        }else{
            maxLen=Math.max(count,maxLen);
            count=1;
        }
    }
    maxLen=Math.max(count,maxLen);
    return maxLen;
};
// findLengthOfLCIS([1,3,5,4,7])
// console.log('findLengthOfLCIS([1,3,5,4,7]): ', findLengthOfLCIS([1,3,5,4,7]));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 找到最大的第K个元素
 */
var findKthLargest = function(nums:number[], k:number):number {
    nums=nums.sort((a,b)=>{return a-b});/**从小到大排序 */
    return nums[nums.length-k];
};
// console.log('findKthLargest([3,2,1,5,6,4],2): ', findKthLargest([3,2,1,5,6,4],2));

/**
 * @param {number[]} nums
 * @return {number}
 * 最长连续序列
 */
var longestConsecutive = function(nums:number[]) {
    nums=Array.from(new Set(nums));
    nums=nums.sort((a,b)=>{return a-b});/**从小到大排序 */
    let count:number=1,max:number=0;
    for(let i =0;i<nums.length;i++){
         if(nums[i]<nums[i+1]&&nums[i]+1==nums[i+1]){
            count++;
        }else{
            max=Math.max(max,count);
            count=1;
        }
    }
    max=Math.max(max,count);
    return max;
    
};
// longestConsecutive([100, 4, 200, 1, 3, 2])
// console.log('longestConsecutive([100, 4, 200, 1, 3, 2]): ', longestConsecutive([100, 4, 200, 1, 3, 2,2]));
    
    /**
 * @param {number} n
 * @param {number} k
 * @return {string}
 * 给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。

    按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

    "123"
    "132"
    "213"
    "231"
    "312"
    "321"
    给定 n 和 k，返回第 k 个排列。
 */
var getPermutation = function(n:number, k:number) {
        const fib = new Array(n).fill(0);
        for (let i = 0; i < n; i++) {
          if (i === 0) fib[i] = 1;
          else fib[i] = fib[i - 1] * i;
        }
        const nums:number[] = new Array<number>(n).fill(1).map((_, i) => i + 1);
        // console.log(fib);
        // console.log(nums);
        let [tmp, tmpk, tmpn] = ["", k, n];
        while (nums.length > 0) {
          const next = Math.ceil(tmpk / fib[tmpn - 1]);
          const idx = Math.max(next - 1, 0);
          tmp += nums[idx];
          nums.splice(idx, 1);
          tmpk = fib[tmpn - 1] - (next * fib[tmpn - 1] - tmpk);
          tmpn--;
        }
        console.log(tmp);
        return tmp;    
};
// getPermutation(3,2);
function FirstNotRepeatingChar(str)
{
    // write code here
    let obj={};
    for(let i=0;i<str.length;i++){
        obj[str[i]]=++obj[str[i]]||1;
    }
    for(let i in obj){
        if(obj[i]==1){
            return str.indexOf(i);
        }
    }
    return -1;
}
// FirstNotRepeatingChar("asdfghasd");
// console.log('FirstNotRepeatingChar("asdfghasd"): ', FirstNotRepeatingChar("asdfghasd"));



/**全排列 */
let permute=function(str){ 
    let result=[];
    if(str.length<=1) return str;
    for(let i=0;i<str.length;i++){
        let start=str[i];
        let left=str.slice(0,i)+str.slice(i+1);
        for(let item of permute(left)){
            result.push(start+item);
        }     
    }  
    return result;
}

function getUrlParam(sUrl, sKey) {
    let reg=new RegExp('(?<='+sKey+'\\=)\\d+','g');
    console.log(sUrl.match(reg));
    return sUrl.match(reg);
}
// getUrlParam("http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe","key");


function count(str) {
    let obj={};
    let reg=/\s+/;
    str=str.replace(reg,'');
    for(let i of str){
        obj[i]=++obj[i]||1;
    }
    return obj;
}
// count('hello world');
// console.log('count(\'hello world\'): ', count('hello world'));

function cssStyle2DomStyle(sName) {
    let reg=/-\w/g;
    return sName.replace(reg,function(match){
        return match.slice(1).toUpperCase();
    });
}
// cssStyle2DomStyle("font-size")
// console.log('cssStyle2DomStyle("font-size"): ', cssStyle2DomStyle("font-size"));

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 * 
 * 假设Andy和Doris想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。

    你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设总是存在一个答案。
 */
var findRestaurant = function(list1:string[], list2:string[]) {
   let result=[],minIndex=Number.MAX_VALUE;
   let [firstIndex,secondIndex]=[0,0];
   list1.forEach(function(val,index){
       let listIndex=list2.indexOf(val);
        if(listIndex!==-1){ 
            minIndex=Math.min(minIndex,index+listIndex);
            if(minIndex==index+listIndex){
                firstIndex=index;
                secondIndex=listIndex;
                result.push(firstIndex);
            }
        }
   })
   return result.map(val=>{
       return list1[val];
   });
};
// findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"],["KFC", "Shogun", "Burger King"]);
// console.log('findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"],["KFC", "Shogun", "Burger King"]): ', findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"],["KFC", "Shogun", "Burger King"]));

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 寻找数组交集
 */
var intersect = function(nums1:number[], nums2:number[]) {
    nums1=nums1.sort((a,b)=>{return a-b});
    nums2=nums2.sort((a,b)=>{return a-b});
    let [left,right]=[0,0];
    let result=[];
    while(left<nums1.length&&right<nums2.length){
        if(nums1[left]>nums2[right]){
            right++;
        }else if(nums1[left]<nums2[right]){
            left++;
        }else if(nums1[left]===nums2[right]){      
            result.push(nums1[left]); 
            left++;
            right++;
        }
    }
    return result;
};
intersect([1,2,2,1],[2,2])
// console.log('intersect([1,2,2,1],[2,2]): ', intersect([1,2,2,1],[2,2]));

function f(num){
    let left=1024-num;
    let count=0;
    let price=64;
    while(price>=1){
        count+=Math.floor(left/price);
        left=left%price;
        price/=4;
    }
    console.log(count);
}
// f(200);

function s(arr:Array<string>){
    let result=[];
   for(let item of arr){
        for(let i=0;i<item.length-3;i++){
            if(item[i]==item[i+1]&&item[i+1]==item[i+2]){
                i--;
                item=item.slice(0,i+2)+item.slice(i+3);
            }
            if(item[i]==item[i+1]&&item[i+2]==item[i+3]){
                item=item.slice(0,i+3);
            }
        }
        result.push(item)
   }
   console.log(result);
}
// s(['hellloo','wooooowwww']);

function t(arr1,arr2){
    let N=arr1[0];
    let M=arr1[1];
    let num=0;
    if(M>N){
        let max=Math.max(...arr2);
        let mid=max/2;
        let min=Math.min(...arr2);
        if(mid>min){
            num=min;
        }else{
            num=mid;
        }
    }else{
        num=Math.min(...arr2);
    }
    console.log(num.toFixed(2));
}
// t([5,4],[3,5,4,4,4]);

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，
 * 使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 */

var threeSumClosest = function(nums:number[], target:number):number {
    if(nums.length<=3){
        let totalSum=nums.reduce((total,val)=>{
            return total+val;
        })
        return totalSum;
    }
    nums.sort((a,b)=>{return a-b});
    let min=Number.MAX_VALUE;
    let result=0;
    for(let i =0;i<nums.length-2;i++){
        let left=i+1;
        let right=nums.length-1;
        while(left<right){
            let twoNum=nums[left]+nums[right];
            let totalSum=twoNum+nums[i];
            let diff=Math.abs(totalSum-target);
            if(totalSum>target){
                right--;
            }else if(totalSum<target){
                left++;
            }else if(totalSum==target){
                return totalSum;
            }
            min=Math.min(diff,min);
            if(min==diff){
                result=totalSum;
            }
            
        }
    }
    console.log(result);
    return result;
};
// threeSumClosest([1,2,4,8,16,32,64,128],82);


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let [left,right]=[0,numbers.length-1];
    let num=[];
    while(left<right){
        let total=numbers[left]+numbers[right];
        if(total>target){
            right--;
        }else if(total<target){
            left++;
        }else {
            num.push(++left);
            num.push(++right);
            return num;
        }
    }
};
// twoSum([2, 7, 11, 15],9)
// console.log('twoSum([2, 7, 11, 15],9): ', twoSum([2, 7, 11, 15],9));


/**
 * @param {string} s
 * @return {string}
 * 翻转单词
 * 法1
 */
var reverseWords = function(s) {
    // let reg=new RegExp('(?<=\\s*)\\w+','g');
    // let result=s.match(reg);
    // console.log(result.reverse().join(" "));
    // return result.reverse().join(" ");
     
    let result=s.split(" ").filter(val=>val).reverse().join(" ");
    console.log(result);
    for(let i =0;i<result.length;i++){
        if(result[i]==' '){
            continue;
        }else{
            result=result.slice(i);
            break;
        }
    }
    for(let i=result.length-1;i>=0;i--){
        if(result[i]==' '){
            continue;
        }else{
            result=result.slice(0,i+1);
            break;
        }
    }
    console.log(result);
    return result;
};
// reverseWords("a good   example");
/**法2 */
var reverseWords = function(str) {
    let words = str.split(/\s+/);

    words = words.filter(item => {
        return !!item;
    });
    
    return words.reverse().join(" ");
};

/** */
/**
 * @param {string} s
 * @return {string}
 * 反转字符串中的单词
 */
var reverseWords = function(s) {
    let result=s.split(/\s+/);
    
    result=result.map(item=>{
        item=item.split("").reverse().join("")
        return item;
    })
    console.log(result.join(" "));
    return result.join(" ");
};
// reverseWords("Let's take LeetCode contest");



/**
 * @param {string} S
 * @param {number} N
 * @return {boolean}
 */
var queryString = function(S:string, N:number) {
    for(let i =1;i<=N;i++){
        let value=parseInt(i+'').toString(2);
        let reg=new RegExp(value,'g');
        if(!reg.test(S)){
            return false;
            
        }
    }
    return true;
};
// console.log('queryString("0110",4): ', queryString("0110",3));
/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A:Array<number>) {
  
    let i, n = A.length;
    let cur = A[0] + 0, ans = Number.MIN_VALUE;
    for (i = 1; i < n; i++) {
        ans =Math.max (ans, A[i] - i + cur);
        cur = Math.max (cur, A[i] + i);
    }
    return ans;
};
// maxScoreSightseeingPair([1,3,5]);

/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A:number[]) {
    let sum=A.reduce((sum,val)=>{
        return sum+val;
    });
    let mid=sum/3;
    console.log(mid);
    let total=0;
    let i =0;
    let index=0;
    while(i<A.length){ 
        if(total!=mid){
            total+=A[i];   
             i++;
             if(total==mid){
                index++;
                A=A.slice(i);
                i=0;     
                total=0;
             } 
        }else{
            index++;
            A=A.slice(i);
            i=0;     
            total=0;
        }
    }
    return index===3;
};
canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1]);