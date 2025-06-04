const intervalId=setInterval(()=>{

console.log("Loading...");

},);

setTimeout(()=>{

    clearInterval(intervalId);
    console.log("Loaded succses");

},4000);