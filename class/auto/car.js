export class Car {
    owner = '';
    constructor(brend, model, color, number) {
        this.brend = brend;
        this.model = model;
        this.color = color;
        this.number = number;
    }
    buyCar(person){
        if(person.age >= 18) {
            this.owner = person;
        } else {
            console.log(`Sorry, you can buy a car after ${18 - person.age} years`)
        }
    }
    aboutCar() {
        console.log(`New car ${this.brend} ${this.model} ${this.color} color with number ${this.number} `);
        if(this.owner != '') {
            this.owner.aboutHuman();
        } else {
            console.log('This car has not owner')
        }
    }
}
