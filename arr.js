let lengthArr = +prompt("What is length of array?");
if(lengthArr > 4 || Number(+length) ) {
    console.log('ok');
} else {
    alert('We need a number > 4. Please enter again');
    lengthArr=+prompt("What is length of array?");
}
let item = prompt(`What are the items of array? Enter ${lengthArr} number. Use ',' between items`);
const resultArr = item.split(',');
if(resultArr.length !== lengthArr) {
    item = prompt(`Wrong! You push ${resultArr.length} number. Please, enter ${lengthArr} number. Use ',' between items`);
}
console.log(resultArr);
const resultSort = resultArr.sort((a, b) => {
    return a - b;
});
console.log(resultSort);
const resultSplice = resultSort.splice(1, 3);
console.log(resultSplice);
console.log(resultSort);
