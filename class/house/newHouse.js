import { Human } from "./human.js";
import { Flat } from "./flat.js";
import { House } from "./house.js";


let human1 = new Human('Olha', 'w');
let human2 = new Human('Misha', 'm');
let human3 = new Human('Ihor', 'm');


let flat377 = new Flat;
flat377.addResident(human1);
flat377.addResident(human2);

let flat408 = new Flat;
flat408.addResident(human3);

let house = new House(2);
house.findNewFlat(flat377);
house.findNewFlat(flat408);
house.findNewFlat(flat408);
console.log(house)
