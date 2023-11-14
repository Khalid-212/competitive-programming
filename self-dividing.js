/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    result=[]
    function isDoubleDigit(n){
        var numlen=String(n).length
        var val=String(n)
        var pass=true
            for(let i=numlen-1;i>=0;i--){
                if(n% parseInt(val[i])!==0){
                    pass=false
                    break
                }
            }
            return pass
    }
    for(let i=left;i<=right;i++){
        if(String(i).length>1){
            if(isDoubleDigit(i)){
                result.push(i)
            }
        }else if(String(i).length==1){
            result.push(i)
        }
    }
    return result
};