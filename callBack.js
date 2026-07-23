function register(cb){
    setTimeout(()=>{
        console.log("register here");
        cb();
    },1000)
}
function login(cb){
    setTimeout(()=>{
        console.log("login here");
        cb();
    },1000)
}
function getData(cb){
    setTimeout(()=>{
        console.log("fetch data");
         cb();
    },1000)
}
function displayData(){
    setTimeout(()=>{
        console.log("display data");
    },1000)
}

// callback hell
register(()=>{
    login(()=>{
        getData(()=>{
            displayData();
        })
    })
});