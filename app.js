

const one= ()=>{
    return 'first function'
}

const two=async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('in 2nd')
        },5)
    })
   
}

const three=()=>{
   return 'in three'
}

async function allfun(){
    var o = one()
    console.log(o)
    var t =  await two()
    console.log(t);
    var th = three()
    console.log(th)
}
allfun()
