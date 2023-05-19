import { Human } from "./human.js";
import { Car } from "./car.js";

let human1 = new Human('Olha', 33);
let human2 = new Human('Misha', 10);
let human3 = new Human('Ihor', 59);


let car1 = new Car('KIA', 'Picanto', 'red', 'AA4167AO');
car1.buyCar(human1);
car1.aboutCar();

let car2 = new Car('BMW', 'x5', 'black', 'AA2277AO');
car2.buyCar(human2);

car2.buyCar(human3);
car2.aboutCar();