AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out',
});

// Typing Effect
const title = "Husam Aldin Adyan";
let i = 0;

function type() {
  if (i < title.length) {
    document.getElementById("typeLine").innerHTML = title.substring(0, i + 1);
    i++;
    setTimeout(type, 120);
  }
}

window.onload = type;

// Aesthetic Neon Cursor
const cursor = document.createElement('div');
cursor.classList.add('neon-cursor', 'pulse');
document.body.appendChild(cursor);

// Smooth follow
document.addEventListener('mousemove', (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});
