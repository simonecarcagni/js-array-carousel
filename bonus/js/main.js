let imageArray = [
    "./img/1.webp",
    "./img/2.webp",
    "./img/3.webp",
    "./img/4.webp",
    "./img/5.webp"
]

const containerRightDom = document.querySelector('.images-right')

const imagesDom = document.querySelector('.images');

let imageContent = "";
let imageRightContent = "";

for (let i = 0; i < imageArray.length; i++){

    let autoImages = `<div class="img-container">
                          <img src="${imageArray[i]}" >
                      </div>`;

    let autoRightImages = `<div class="img-container-right opacity">
                          <img src="${imageArray[i]}" >
                      </div>`;

    imageContent += autoImages;
    imageRightContent += autoRightImages;
}

imagesDom.innerHTML = imageContent;
containerRightDom.innerHTML = imageRightContent;

console.log(imageContent);

const buttonNextDom = document.querySelector('.btn-next');
const buttonBackDom = document.querySelector('.btn-back');

const imgContainerDom = document.getElementsByClassName('img-container');
const imgContainerRightDom = document.getElementsByClassName('img-container-right');

let showedImage = 0;

imgContainerDom[showedImage].classList.add('showed');
imgContainerRightDom[showedImage].classList.add('border-white');

console.log(imgContainerDom);

buttonNextDom.addEventListener('click', function(){
    if (showedImage < imageArray.length - 1){

        imgContainerRightDom[showedImage].classList.remove('border-white');
        imgContainerDom[showedImage].classList.remove('showed');
        showedImage++
        imgContainerDom[showedImage].classList.add('showed')
        imgContainerRightDom[showedImage].classList.add('border-white');

        buttonBackDom.classList.remove('hidden');

        if (showedImage == imageArray.length - 1){
            buttonNextDom.classList.add('hidden');
        }
    }
  }
);


buttonBackDom.addEventListener('click', function () {
    if (showedImage > 0) {

        imgContainerRightDom[showedImage].classList.remove('border-white');
        imgContainerDom[showedImage].classList.remove('showed');
        showedImage--
        imgContainerDom[showedImage].classList.add('showed')
        imgContainerRightDom[showedImage].classList.add('border-white');

        buttonNextDom.classList.remove('hidden');

        if (showedImage == 0) {
            buttonBackDom.classList.add('hidden');
        }
    }
}
);
