let numOrStr = prompt('input number or string');
console.log(numOrStr);
let a = numOrStr.trim();

switch (numOrStr) {
    case null:
        console.log('ви скасували');
        break;
    case a === '':
        console.log('Empty String');
        break;
    case !(+numOrStr): // ідею знайшла в інтернеті, тому що сама не знала як можна порівнювати NaN, якщо він не рівний собі
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}




// if(numOrStr === null) {
// console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
// console.log(' number is Ba_NaN')
// } else {
// console.log('OK!')
// }