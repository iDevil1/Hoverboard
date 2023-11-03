let container = document.getElementById("container");

for (let i = 0; i < 500; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
}
let squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseenter", () => {
    var randomColors = [];
    var rgbString = "rgb(";
    for (var i = 0; i <= 2; i++) {
      randomColors[i] = Math.floor(Math.random() * (255 + 1));
      if (i < 2) {
        rgbString += randomColors[i].toString() + ",";
      } else {
        rgbString += randomColors[i].toString() + ")";
      }
    }
    console.log(rgbString);
    square.style.backgroundColor = rgbString;
    square.style.transition = "0s ease";
    square.style.boxShadow = rgbString + "0 0 10px";
  });
  square.addEventListener("mouseleave", () => {
    square.style.backgroundColor = "#1c1c1c";
    square.style.boxShadow = "0px 0px 10px transparent";
    square.style.transition = "5s ease";
  });
});
