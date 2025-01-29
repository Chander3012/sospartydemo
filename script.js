let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow img');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.opacity = 0; // Hide all images
    });

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } // Reset to first image if at end

    slides[slideIndex - 1].style.opacity = 1; // Show the current image
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Start the slideshow once the page loads
window.onload = showSlides;


const paragraphs = [
    "We are dedicated to providing top-notch services to our customers.",
    "Our team works hard to ensure the best experience for you.",
    "Innovation and creativity drive our mission forward."
];

const typingText = document.getElementById("typing-text");
let index = 0;

function typeParagraph(text, callback) {
    typingText.innerHTML = ""; // Clear text
    let charIndex = 0;

    function typeChar() {
        if (charIndex < text.length) {
            typingText.innerHTML += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, 50); // Typing speed
        } else {
            setTimeout(() => {
                eraseParagraph(callback);
            }, 1500); // Wait before erasing
        }
    }
    typeChar();
}

function eraseParagraph(callback) {
    let text = typingText.innerHTML;
    let charIndex = text.length;

    function eraseChar() {
        if (charIndex > 0) {
            typingText.innerHTML = text.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseChar, 30); // Erasing speed
        } else {
            callback();
        }
    }
    eraseChar();
}

function startTypingSequence() {
    typeParagraph(paragraphs[index], () => {
        index = (index + 1) % paragraphs.length; // Loop back to the first paragraph
        startTypingSequence();
    });
}

// Start typing animation in a loop
window.onload = startTypingSequence;
