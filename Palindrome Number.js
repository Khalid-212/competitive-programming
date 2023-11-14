/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var lngth=String(x).length;
    var y=String(x)
    var inverted=[]
    var flag=true
    for(let i=0;i<lngth;i++){
        inverted.unshift(y[i])
    }
    for(let k=0;k<=inverted.length;k++){
        if(inverted[k]!==y[k]){
            flag=false
            break
        }
    }
    return flag
  };