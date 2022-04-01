const gas = [20, 30, 40, 50];
const food = [34, 54, 63, 120];
function calculateTotal(arr){
 total = 0;
 for (i = 0; i < arr.length; i ++){
 total += arr[i]
 }
  return total;
}
const totalGas = calculateTotal(gas);
const totalFood = calculateTotal(food);
console.log({
 gas: totalGas,
 food: totalFood
});