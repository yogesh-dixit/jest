const mathOperations={
    sum:function(x,y){
        return x+y;
    },
    divide:function(x,y){
        return x/y
    },
    multiply:function(x,y){
        return x*y
    },
    minus:function(x,y){
        return x-y
    }
}
function throwException(){
    throw new Error("exception!")
}
module.exports={mathOperations,throwException}