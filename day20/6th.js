function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}



let a = sum(2,34,44,56,76,54);
console.log(a)