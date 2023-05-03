const arr = [5, 5, 10, 'ok', null, -15, 105];
function calcMiddleNum (array) {  
    let newArr = array.filter((item) => typeof item == 'number');
    let sum = 0;
    newArr.forEach ((item) => {
        sum +=item;
    })
    return console.log(sum/newArr.length);
}
calcMiddleNum(arr);


function doMath(x, znak, y) {
    let result = 1;
    switch (znak) {
        case '-':
            result = x-y;
            break;
        case '+':
            result = x+y;
            break;
        case '/':
            result = x/y;
            break;
        case '*':
            result = x*y;
            break;
        case '%':
            result = (x*y)/100;
            break;
        case '^':
            for(let i=1; i <= y; i++) {
                result *= x;
            }
            break;
        default:
            result = 'znak is not mathematical sign';
    }
    return console.log(result);
}
doMath(2, 'ррр', 10);

let lengthExtArr = +prompt('enter the length of external array');
let lengthIntArr = +prompt('enter the length of internal array');
let userArray = prompt('enter the array items');
function madeNewArray(arr, lengthExt, lengthInt) {
    let newArr = arr.split(',');
    let result = [];
    for (let i=1; i<=lengthExt; i++) {
        result[i-1] = newArr.splice(0, lengthInt);
        }    
    return console.log(result);
}
madeNewArray(userArray, lengthExtArr, lengthIntArr);


function deleteLetter(text, del) {
    let arr = text.split('');
    let newArr = [];
    for(i=0; i<arr.length; i++) {        
        if(del.some((item) => item == arr[i])) {
            continue;
        } else {
            newArr.push(arr[i]);
        }        
    }
    return console.log(newArr.join(''));
}
deleteLetter("hello world", ['l', 'd'])
