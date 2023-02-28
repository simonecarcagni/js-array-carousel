let imageArray = [
    "./img/1.webp",
    "./img/2.webp",
    "./img/3.webp",
    "./img/4.webp",
    "./img/5.webp"
]

const imagesDom = document.querySelector('.images');

let imageContent = "";

for (let i = 0; i < imageArray.length; i++){

    let autoImages = `<div class="img-container">
                          <img src="${imageArray[i]}" >
                      </div>`;

    imageContent += autoImages;
}

imagesDom.innerHTML = imageContent;

console.log(imageContent);

const buttonNextDom = document.querySelector('.btn-next');
const buttonBackDom = document.querySelector('.btn-back');

const imgContainerDom = document.getElementsByClassName('img-container');

let showedImage = 0;

imgContainerDom[showedImage].classList.add('showed');

console.log(imgContainerDom);

buttonNextDom.addEventListener('click', function(){
    if (showedImage < imageArray.length - 1){

        imgContainerDom[showedImage].classList.remove('showed');
        showedImage++
        imgContainerDom[showedImage].classList.add('showed')

        buttonBackDom.classList.remove('hidden');

        if (showedImage == imageArray.length - 1){
            buttonNextDom.classList.add('hidden');
        }
    }
  }
);


buttonBackDom.addEventListener('click', function () {
    if (showedImage > 0) {

        imgContainerDom[showedImage].classList.remove('showed');
        showedImage--
        imgContainerDom[showedImage].classList.add('showed')

        buttonNextDom.classList.remove('hidden');

        if (showedImage == 0) {
            buttonBackDom.classList.add('hidden');
        }
    }
}
);
