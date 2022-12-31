const container = document.querySelector(".container");
const body = document.querySelector(".body");
const button = document.querySelector("button");

function grid(boxCountFromUser) {
  for (let i = 1; i <= boxCountFromUser * boxCountFromUser; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    container.style.cssText = `grid-template-columns: repeat(${boxCountFromUser}, 1fr);grid-template-rows: repeat(${boxCountFromUser}, 1fr);`;
    container.appendChild(div);
  }
  const divs = document.querySelectorAll(".box");
  let boxes = Array.from(divs);

  boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      box.style.cssText = `background-color: rgb(${red}, ${green}, ${blue});`;
    });
  });
}

grid(16);

button.addEventListener("click", () => {
  removeElementsByClass("box");
  let answer = prompt();
  if (answer <= 100) {
    grid(answer);
  } else {
    prompt("enter a number less then 100");
  }
});

function randomColor() {}
function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}
