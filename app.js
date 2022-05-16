

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');

btn.addEventListener('click',async()=>{

try {
   const first = await addColor(1000,heading1,'red');
await addColor(1000,heading2,'green');
await addColor(1000,heading3,'blue');
} catch (error) {
   console.log(error);
}
});


function addColor (time,element,color){
   return new Promise((resolve,reject)=>{
      if(element){
       setTimeout(()=>{
      element.style.color = color;
      resolve();
      },time)
      }
      else{
         reject(new Error(`there is no such element ${element}`)); 
      }
   })
}