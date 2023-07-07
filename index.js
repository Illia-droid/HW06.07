// task 1
let value1;
let value2;
let result;
if (value1 > 0 && value2 > 0 || value1 < 0 && value2 < 0) {
    console.log(result = value1 * value2);
} else if (value1 > 0 && value2 < 0 || value1 < 0 && value2 > 0) {
    console.log(result = value1 / value2);
} else if (value1 == 0 && value2 !== 0 ) {
    console.log(result = value2);
} else if (value1 !== 0 && value2 == 0) {
    console.log(result = value1);
} else {
    console.log(result = 'NaN');
}

// task 2
    let minValue;
    let number;
    let divider1; 
    let divider2;
    let res;

    if (number < minValue || number % 2 !==0 || number % divider1 !== 0 || number % divider2 !== 0) {
        res = 'lose';
    } else {
        res = 'win';
}
console.log(res);