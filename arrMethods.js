let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let newArr = [];
let sum = 0;
arr.forEach((item) => {
    if (item >=0) {
        sum += item;
        newArr.push(item);
    } else {
        sum += 0;
    }
});
console.log(`${sum} сума позитивних елементів ${newArr.length} кількість позитивних елементів`);

let minNumber = arr[0];
let minNumberIndex = 0;
for (let i=1; i<arr.length; i++) {
    if (minNumber > arr[i]) {
        minNumber = arr[i];
        minNumberIndex = i;
    } else {
        continue;
    }
}
console.log(`${minNumber} мінімальний елемент ${minNumberIndex} його порядковий номер`);

let maxNumber = arr[0];
let maxNumberIndex = 0;
for (let i=1; i<arr.length; i++) {
    if (maxNumber < arr[i]) {
        maxNumber = arr[i];
        maxNumberIndex = i;
    } else {
        continue;
    }
}
console.log(`${maxNumber} максимальний елемент ${maxNumberIndex} його порядковий номер`);

let minusItem = [];
arr.forEach((item) =>{
    if(item < 0) {
        minusItem.push(item);
    }
})
console.log(`${minusItem.length} кількість негативних елементів`);


let positivMulty = 1;
for (item in newArr) {
    positivMulty *= newArr[item];
}
console.log(`${positivMulty} добуток позитивних елементів`);