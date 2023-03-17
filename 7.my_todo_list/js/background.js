const images = ["0.png", "1.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// createElement -> html 요소 생성
const bgImage = document.createElement("img");
const imgPath = `img/${chosenImage}`;
bgImage.src = imgPath;

const bodyStyle = document.body.style;
bodyStyle.background = `url(${imgPath}) center no-repeat`;
bodyStyle.backgroundSize = "cover";
