function morning(name){

 return `good morning ${name.toUpperCase()}`;
}


function greet(name, cb){
 const myName = 'john';
 console.log(`${cb(name)}, my name is ${myName}`);

}


greet('bobo',morning);
greet('peter',morning);