function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        console.log("register here");
    },1000)
    })
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject();
        console.log("login here");
    },1000)
    })
}
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("fetch data");
    },1000)
    })
}
function displayData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("display data");
    },1000)
    })
}




// register();
// login();
// getData();
// displayData();

async function test(){
    try{
        await register();
        await login();
        await getData();
        await displayData();
    }
    catch(err){
        console.log("error: ",err);
    }
}

test();
console.log("call another function");