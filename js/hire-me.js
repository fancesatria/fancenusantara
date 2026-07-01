const words = [
    "Internships.",
    "Software Engineering Roles.",
    "AI Projects.",
    "Machine Learning Projects.",
    "Freelance Work.",
    "Collaborations."
];

const typingText = document.getElementById("typing-text");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type(){

    const current = words[wordIndex];

    if(!deleting){
        typingText.textContent = current.substring(0,charIndex++);
    }else{
        typingText.textContent = current.substring(0,charIndex--);
    }

    let speed = deleting ? 40 : 80;

    if(!deleting && charIndex > current.length){
        deleting = true;
        speed = 1800;
    }

    if(deleting && charIndex < 0){
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
    }

    setTimeout(type,speed);
}

type();