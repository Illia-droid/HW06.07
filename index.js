// task 1.1
const value1 = 11;
const value2 = -0;
let result;
if (value1 > 0 && value2 > 0 || value1 < 0 && value2 < 0) {
    result = value1 * value2;
} else if (value1 > 0 && value2 < 0 || value1 < 0 && value2 > 0) {
    result = value1 / value2;
} else if (value1 === 0 && value2 !== 0 ) {
    result = value2;
} else if (value1 !== 0 && value2 === 0) {
    result = value1;
} else {
    result = NaN;
}
console.log(result);


// task 1.2
if (value1 > 0 && value2 > 0 || value1 < 0 && value2 < 0) {
    result = value1 * value2;
} else if (value1 > 0 && value2 < 0 || value1 < 0 && value2 > 0) {
    result = value1 / value2;
} else if (value1 === 0 && value2 === 0) {
    result = NaN;
} else {
    if (value2 !== 0) {
        result = value2; 
    } else {
        result = value1;
    }
}
console.log(result);

// task 1.3
if (value1 === 0 && value2 === 0) {
    result = NaN;
} else if(value2 === 0){
    result = value1;
} else if (value1 === 0 ) {
    result = value2;
} else if (value1 / value2 > 0) {
    result = value1 * value2;  
} else {
    result = value1 / value2;
}
console.log(result);


// task 2
    const minNumber = 0;
    const number = 28;
    const divider1 = 4; 
    const divider2 = 7;
    let res;

    if (number < minNumber || number % 2 !==0 || number % divider1 !== 0 || number % divider2 !== 0) {
        res = 'lose';
    } else {
        res = 'win';
}
console.log(res);




