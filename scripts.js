const open = document.getElementById("open");

open.addEventListener("click", start);

const imageUrl = "https://hargrimm-wikihow-v1.p.rapidapi.com/images?count=1";
const imageOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5e69e8834cmsh3aecd449e6da98fp172031jsncff609672e17",
    "X-RapidAPI-Host": "hargrimm-wikihow-v1.p.rapidapi.com",
  },
};

const stepsUrl = "https://hargrimm-wikihow-v1.p.rapidapi.com/steps?count=1";
const stepsOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5e69e8834cmsh3aecd449e6da98fp172031jsncff609672e17",
    "X-RapidAPI-Host": "hargrimm-wikihow-v1.p.rapidapi.com",
  },
};

function start() {
  fetch(imageUrl, imageOptions)
    .then((response) => response.json())
    .then((imageData) => {
      //   console.log(imageData[1]);
      const img = document.querySelector("img");
      img.src = imageData[1] || "default-image-url.jpg";
      return fetch(stepsUrl, stepsOptions);
    })
    .then((response) => response.json())
    .then((stepsData) => {
      const title = document.getElementById("title");
      title.textContent = stepsData[1];
    })
    .catch((error) => {
      console.error(error);
    });
}

start();
