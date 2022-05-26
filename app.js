const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
const promise = new Promise((resolve,reject)=>{
  let value = true;
  if(value){
    resolve('hey the value is true');
  }else{
    reject('hey the value is false');
  }
});
promise.then((data)=>{
  console.log(data);
}).catch((err)=>{
  console.log(err);
})
});
