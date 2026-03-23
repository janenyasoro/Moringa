function calculations(a,b){
    function add(){
        return a + b;
    }
    function subtract(){
        return a - b;
    }
    function multiply(){
        return a * b;
    }
    return add() + " "+ subtract() + ""+ multiply();
}
console.log(calculations(5,10));