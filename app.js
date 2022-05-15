// make soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min


boilWater();
console.log('chop carrot');

function boilWater(){
   console.log('boiling ...');
   setTimeout(()=>{
      console.log('done.');
      console.log('add carrot.');
      setTimeout(()=>{
         console.log('carrot done.');         
         console.log('add onion.');         
         
         setTimeout(() => {
            console.log('onion done');
         },5000);
      },5000);
      console.log('chop onion');
   },10000);
}