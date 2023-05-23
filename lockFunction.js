const doMath = () => {
    let result =0;
    doSum = (value) => {
        result +=value;
        console.log(result)
    }    
    return doSum;
}
const userNumber = doMath();

