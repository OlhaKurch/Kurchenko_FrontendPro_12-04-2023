const MAX_ARRAY = 25;
const NICE_ACCOUNT = 90;
const MIN_PRESENT = 0.9;

export class Student{
    constructor(name, surname, year, account) {
        this.name = name;
        this.surname = surname;
        this.year = year;
        this.account = account;
    }
    presentCalendar = [];

    getAge(){
        console.log(`Age of ${this.name} ${this.surname} is ${new Date().getFullYear()-this.year}`)
    }
    getGPA(){
        let sum = 0;
        for(let item in this.account){            
            sum += this.account[item];            
        }
        let GPA = sum/this.account.length;
        return GPA;
    }
    present(){
        if(this.presentCalendar.length >=MAX_ARRAY) {
            console.log(`Stop! Your calendar is full`)
        } else {
            this.presentCalendar.push(true);
        }
    }
    absent(){
        if(this.presentCalendar.length >=MAX_ARRAY) {
            console.log(`Stop! Your calendar is full`)
        } else {
            this.presentCalendar.push(false);
        }
    }
    averagePresent() {
        let sum = 0;
        for(let item in this.presentCalendar){            
           if (this.presentCalendar[item]==true) {
            sum++;
           }           
        }
       let result = sum/this.presentCalendar.length;
       return result;
    }
    summary() {
        if(this.averagePresent() >= MIN_PRESENT && this.getGPA() >= NICE_ACCOUNT) {
            return console.log('Well done');
        } else if(this.averagePresent() >= MIN_PRESENT || this.getGPA() >= NICE_ACCOUNT) {
            return console.log('Good');
        } else {
            return console.log('It is terrible');
        }
    }
    
}

