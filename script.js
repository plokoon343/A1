function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const colorContainers = document.querySelectorAll(".color-container");

colorContainers.forEach((container) => {
  container.style.backgroundColor = getRandomColor();
});
