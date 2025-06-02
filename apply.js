function Multiply(a,b){
    return a*b;
}
function multipleNumber(num1,num2){

    return Multiply.apply(num1,[num1,num2]);

}
console.log(multipleNumber(5,6));