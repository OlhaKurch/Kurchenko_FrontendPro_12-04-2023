let numbers = [];
for (let i=0; i<=10; i++) {
    numbers[i] = i+10;
}
console.log(numbers.join());

let quadro = [];
for (let i=0; i<=10; i++) {
    quadro[i] = numbers[i]*numbers[i];
}
console.log(quadro.join());

let multi = [];
const number = 7;
for (let i=0; i<10; i++) {
    multi[i] = number*(i+1);
    console.log(`${number}*${i+1}=${multi[i]}`);
}

let sum15 = 0;
for (let i=1; i<=15; i++) {
    sum15 += i;
}
console.log(sum15);

let mult = 1;
for (let i=15; i<=35; i++) {
    mult *= i;
}
console.log(mult);

let sum500 = 0;
for (let i=1; i<=500; i++) {
    sum500 += i;
}
let result = sum500/500;
console.log(result);

let evenSum = 0;
for (let i=30; i<=81; i+=2) {
    evenSum += i;
}
console.log(evenSum);

let onlyThree = [];
for (let i=100; i<=200; i++) {
    if(i%3==0) {
        onlyThree.push(i);
    } else {
        continue;
    }
}
console.log(onlyThree.join());