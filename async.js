function register(cb){
    setTimeout(()=>{
        console.log("register here");
    },1000)
}
function login(){
    setTimeout(()=>{
        console.log("login here");
    },1000)
}
function getData(){
    setTimeout(()=>{
        console.log("fetch data");
    },1000)
}
function displayData(){
    setTimeout(()=>{
        console.log("display data");
    },1000)
}
register();
login();
getData();
displayData();
console.log("another app");