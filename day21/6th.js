function multiply(...numbers) {
    let product = 1;
    for (let num of numbers) {
        product *= num;
    }
    return product;
}

console.log(multiply(5,7,6,4)); 