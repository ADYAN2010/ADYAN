AOS.init();

// Optional Typing Effect
const title = "Husam Aldin Adyan";
let i = 0;

function type() {
  if (i < title.length) {
    document.getElementById("typeLine").innerHTML = title.substring(0, i + 1);
    i++;
    setTimeout(type, 100);
  }
}
type();
