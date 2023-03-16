const images = ["0.png", "1.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// createElement -> html 요소 생성
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// appendChild -> html에 삽입
document.body.appendChild(bgImage);
