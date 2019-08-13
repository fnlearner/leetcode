/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

var myPow = function(x, n) {
  const powerWtidhExponent = (base, exponent) => {
    if (exponent < 0) {
      exponent = -exponent;
    }
    if (exponent === 0) {
      return 1;
    }
    if (exponent === 1) {
      return base;
    }
    let result = powerWtidhExponent(base, exponent >> 1);
    result *= result;
    if (exponent & (1 == 1)) {
      result *= base;
    }
    return result;
  };
  let isValid = false;
  if (x == 0 && n <= 0) {
    return 0;
  }
  if (x == 1) {
    return 1;
  }
  if (n < 0) {
    isValid = true;
    n = -n;
  }
  let result = powerWtidhExponent(x, n);
  if (isValid) {
    result = 1 / result;
  }
  console.log("result:", result);
  return result;
  //100+ms
};
// console.log("myPow(2.00000, 10):", myPow(2.00000, 10));
// myPow(2.0, -2147483648);


var myPow_2= function(x, n) {
    if(n===1)
        return x;
    if(n===0)
        return 1;
    if(n<0)
        return 1/myPow_2(x,-n);
    let mid = myPow_2(x,n/2);
    if(n&1==1)
        return mid*mid*x;
    return mid*mid;
};
//两个function效果都差不多。。
myPow_2(2.0,4);