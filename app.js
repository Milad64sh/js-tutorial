const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{

});

const promise = new Promise((resolve,reject)=>{
   let value = false;
   if(value){
      resolve('hey value is true');
   }else{
      reject(`there was an error, the value is false`)
   }
});
promise.then((taco)=>{
   console.log(taco);
}).catch((err) =>{
   console.log(err);
})
