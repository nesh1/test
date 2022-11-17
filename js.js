// function arraymodify(arr,callback){
//     arr.push(100)
//     callback()
// }

// var arr1 = [1,2,3]

// arraymodify(arr1,function(){
//     console.log('done')
// })
// var obj1 = {
//     fname:'abc',
//     lname :'def',
//     fullname: function(){
//         return this.fname + this.lname
//     }
// }

// var a = obj1.fullname()
// console.log(a) 

// for(let i =0;i<25;i++){
// console.log(Math.floor(Math.random()*(20-10+1))+10);
// }

var a = [
    {
        name:'a'
},
{
    name:"asd"
},
{
    name:"adsad"
}]


var ab = [1,2,3,4]
console.log(a);
var c = a.sort(()=>{
    return 0.5-Math.random()
})

console.log(c);