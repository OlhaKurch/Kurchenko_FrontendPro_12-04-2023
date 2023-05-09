const doMath = () => {
    let result =0;
    doSum = (value) => {
        result +=value;
        console.log(result)
    }    
    return doSum;
}
const userNumber = doMath();



let i = 0;
for(; i < 5;) {
    console.log(++i);
}