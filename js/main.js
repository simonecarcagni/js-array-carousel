let imageArray = [
    "./img/1.webp",
    "./img/2.webp",
    "./img/3.webp",
    "./img/4.webp",
    "./img/5.webp"
]

const imagesDom = document.querySelector('.images');

for (let i = 0; i < imageArray.length; i++){

    let autoImages = `<div class="img">
                          <img src="${imageArray[i]}" >
                      </div>`;

    imagesDom.innerHTML += autoImages;
}

