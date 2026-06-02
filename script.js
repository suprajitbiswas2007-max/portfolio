const menuOpenButton=document.querySelector('#menu-open-button');
const menuCloseButton=document.querySelector('#menu-close-button');
menuOpenButton.addEventListener('click',()=>{
    document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener('click',()=>{
    document.body.classList.remove("show-mobile-menu");
});

const words = ["student", "programmer", "developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingTextSpan = document.querySelector(".typing-text");

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {

        typingTextSpan.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingTextSpan.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }


    let typingSpeed = isDeleting ? 50 : 100;
    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 1500; 
        isDeleting = true;
    } 
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; 
        typingSpeed = 300; 
    }

    setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    if (typingTextSpan) {
        typeEffect();
    }
});