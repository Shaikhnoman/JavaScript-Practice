const hour = +prompt("enter time"); 
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

document.write(`${greeting}`)