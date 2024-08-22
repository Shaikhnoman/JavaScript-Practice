let text;
let day=0
switch (day) {
    default:
      text = "Looking forward to the Weekend";
      break;
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
  }
  document.getElementById("demo").innerHTML = text;