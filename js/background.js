const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg"
]

const BG = "background"

const chosenImage = images[Math.floor(Math.random()* images.length)];

const bgImage = document.createElement("img");

bgImage.className = BG;

bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage);