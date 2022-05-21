
function greetingPeople(firstName,lastName,title,company){
    return{
        firstName,
        lastName,
        job: {
        company,
        title,
        },

        greeting: function(){
        console.log(`my name is ${this.firstName} and I work as ${this.job.title} in ${this.job.company}`);
    }
}
}

// const person ={
//     name: 'john',
//     surname: 'jordan',
//     job:{
//         company: 'DMA',
//         title: 'Developer'
//     },
//     }

// const people ={
//     name: 'james',
//     surname: 'jordan',
//     job:{
//         company: 'DDD',
//         title: 'Developer'
//     },
// }
const john = greetingPeople('john', 'sanders','developer','DMA');
john.greeting();
// people.greeting();