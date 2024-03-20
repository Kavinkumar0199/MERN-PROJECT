/*const promise1 = new Promise((resolve,reject)=>{
    if(8%2===0){
        resolve("even")
    }
    else{
        reject("odd")
    }
})
promise1.then((data)=>console.log(data)).catch((error)=>console.log(error))*/

/*function foo(num){
    return new Promise((resolve, reject) => {
        if(num=>18){
            resolve("eligible")
        }
        else{
            reject("not elible")
        }
    })
}
foo(18).then((data)=>console.log(data)).catch((error)=>console.log(error))*/

/*function add(num){
    return new Promise((resolve, reject) => {
        setTimeout(()=>resolve(num + 2), 2000);
    });
}
    add(0)
    .then((data)=>{
        console.log(data);
        return add(data);
    })
    .then((data1)=>{
        console.log(data1);
        return add(data1);
    })
    .then((data2)=>{
        console.log(data2);
        return add(data2);
    })
    .then((data3)=>{
        console.log(data3);
        return add(data3);
    })
    .then((data4)=>{
        console.log(data4);
        return add(data4);
    })
    .then((data5)=>console.log(data5)).catch((error)=>console.log(error));*/
         
    
