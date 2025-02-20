// let currentIndex = 0;

// function moveSlide(step) {
//     const slides = document.querySelectorAll('.slide');
//     const totalSlides = slides.length;

//     currentIndex += step;

//     if (currentIndex < 0) {
//         currentIndex = totalSlides - 1; 
//     } else if (currentIndex >= totalSlides) {
//         currentIndex = 0; 
//     }

//     const slider = document.querySelector('.slider');
//     slider.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

let currentIndex = 0;
const images = document.querySelectorAll('.slider img');

function changeImage(direction) {
    currentIndex += direction;
    
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

