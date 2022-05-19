
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const URL = "https://api.chucknorris.io/jokes/random";

btn.addEventListener('click', async ()=>{
 try {
  const data = await fetch(URL);
  const response = await data.json();
  displayData(response);
 } catch (error) {
  console.log(error);
 }
});


function getData(url){
 return new Promise((resolve,reject)=>{

  const xhr = new XMLHttpRequest();
  xhr.open('GET',url);
  xhr.send();
  xhr.onreadystatechange = function(){
   if(xhr.readyState !==4)return;
   if(xhr.status === 200){
   resolve(xhr.responseText);
   }
   else{
    reject({
     status:xhr.status,
     text:xhr.statusText,
    });
   }
  };
 })
}
function displayData ({value:joke}){
    content.textContent = joke; 
}