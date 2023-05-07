const pow = (num, degree) => {
    let result;
    if(degree<1) {
        return 1;
    } else {
        return result = num*pow(num, degree-1);
    }
}
console.log(pow(8, 2));
