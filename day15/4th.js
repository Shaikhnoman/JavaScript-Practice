let add = (a, b, fg) => {
    let result = a+b;
    fg(result);
}

let display = (out) => {
    console.log(out);
}
add(18, 45, (out) => {
    console.log(out);
})