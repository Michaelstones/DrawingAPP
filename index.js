const canvas = document.getElementById("canvas");
const tools = document.getElementById("brush");
// const increseBtn = document.getElementById("increase");
// const decreaseBtn = document.getElementById("decrease");
const colorEl = document.getElementById("color");
const spanEl = document.getElementById("span");
const ctx = canvas.getContext("2d");
const circlEl = document.querySelector(".circle");
const lineEl = document.querySelector(".line");
let size = 1.5;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;
let click = false;
spanEl.innerHTML = size;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});
canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    let x2 = e.offsetX;
    let y2 = e.offsetY;
    if (click) {
      drawCircle(x2, y2);
      drawLine(x, y, x2, y2);
      x = x2;
      y = y2;
      //   console.log("hi");
    } else {
      drawLine(x, y, x2, y2);
      x = x2;
      y = y2;
      //   console.log("ht");
    }
    // drawCircle(x, y);
    // drawLine(x, y, x2, y2);
    // x = x2;
    // y = y2;
  }
});
// brush size function
tools.addEventListener("click", (e) => {
  //   console.log(e.target);
  if (e.target.classList.contains("plus")) {
    size += 0.5;
    if (size > 50) {
      return size;
    }
  } else if (e.target.classList.contains("minus")) {
    size -= 0.5;
    if (size <= 1.5) {
      return size;
    }
  } else if (e.target.classList.contains("line")) {
    click = false;
    console.log(click);
  } else if (e.target.classList.contains("circle")) {
    click = true;
    // console.log(click);
  } else if (e.target.classList.contains("clear")) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    return;
  }
  spanEl.innerHTML = size;
});
// function to switch between line/circle

colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

// draw Line function

function drawLine(x, y, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = size * 2;
  ctx.strokeStyle = color;
  ctx.stroke();
}

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawCircle(x, y);
//   requestAnimationFrame(draw);
// }

// draw();
