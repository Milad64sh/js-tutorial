function greetingPeople(firstName,lastName,title,company){
return{
    firstName,
    lastName,
    job:{
        company,
        title,
    },
    greeting(){
        console.log(`hello there, my name is ${this.firstName} ${this.lastName} I work as a ${this.job.title} in ${this.job.company}`);
    }
}
}

function Gr(firstName,lastName,title,company){
    this.firstName=firstName,
    this.lastName=lastName,
    this.job = {
        title,
        company
    }
    this.greeting=function(){
        console.log(`hello there, my name is ${this.firstName} ${this.lastName} I work as a ${this.job.title} in ${this.job.company}`);
    }
}


const john = new Gr('john','samuel','web dev', 'DDD');
john.greeting();