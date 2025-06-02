
function outerFunction(){
    let message="hi imran";
    
    function innerFunction(){
        console.log(message);
    }
    
    return innerFunction;
}

const storedFunction=outerFunction()
storedFunction();