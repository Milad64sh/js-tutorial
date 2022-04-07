const names = ['john', 'jimmy', 'george', 'jennifer', 'johnson'];
const lastName = 'shakeandbake';
const newArray = [];
for(let i = 0; i < names.length; i ++){
 newArray.push(`${names[i]} ${lastName}`);
}
 console.log(newArray);