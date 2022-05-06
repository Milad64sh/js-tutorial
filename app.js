const num1 = 30;
const num2 = 50;

function add(){
  console.log(`the result is : ${num1 + num2} `);
}
add();


(function(){
const num3 = 30;
const num4 = 60;
console.log(`the result is : ${num3 + num4}`)
})();

(function(num3,num4){
console.log(`the result is : ${num3 + num4}`)
})(500,1000);


const result = (function(num3,num4){
console.log(`the result is : ${num3 + num4}`)
return num3 + num4;
})(500,1000);