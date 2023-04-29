const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let code = [];
const generateKey = (key, arr) => {
    for(let i=0; i<key; i++) {
        let pin = parseInt(Math.random(arr)*arr.length);
        code[i] = arr[pin];
    }
    return code.join('');
}
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i