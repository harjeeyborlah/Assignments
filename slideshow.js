
var currentIndex= 1;
displaySlides(currentIndex);

function setSlides(num){
    displaySlides(currentIndex +=num);
}

function displaySlides(num){
    var x
    var slides = document.getElementsByClassName("carousel-image")
    if (num > slides.length) {currentIndex = 1}
    if (num < 1) { currentIndex = slides.length}
    for (x = 0; x < slides.length; x++){
        slides[x].style.display ="none";
    }
    slides[currentIndex - 1].style.display = "block";
}




































// const next =document.querySelector(".carousel_button--right")
// const prev =document.querySelector(".carousel_button--left")

// let counter=1;
// const size = slides[0].clientWidth;
// carouselContainer.style.transform='translateX(' + (-size * counter) + 'px';

// next.addEventListener('click',()=>{
//     if (counter>=slides.length)return;
//     carouselContainer.style.transition = 'transform 0.4s ease-in-out';
//     counter++;
//     carouselContainer.style.transform = 'translateX(' + (-size * counter) +'px';
// });

// prev.addEventListener('click',()=>{
//     if (counter<=0)return;
//     carouselContainer.style.transition = 'transform 0.4s ease-in-out';
//     counter--;
//     carouselContainer.style.transform = 'translateX(' + (-size * counter) +'px';
// });

// carouselContainer.addEventListener('transitionend',()=>{
//     console.log(slides[counter]);
//     if(slides[counter].id==='lastslide'){
//         carouselContainer.style.transition='none';
//         counter= slides.length - 2;
//         carouselContainer.style.transform = 'translateX(' + (-size * counter) +'px';
//     }
// })

// carouselContainer.addEventListener('transitionend',()=>{
//     console.log(slides[counter]);
//     if(slides[counter].id==='firstslide'){
//         carouselContainer.style.transition='none';
//         counter= slides.length - counter;
//         carouselContainer.style.transform = 'translateX(' + (-size * counter) +'px';
//     }
// })