const element = document.getElementById("name");

const texts = [
    "DeveloperCody",
    "CodyIsCoder"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeWriter() {
    const currentText = texts[textIndex];

    if (!deleting) {
        charIndex++;
        element.textContent = "Hi, I'm " + currentText.substring(0, charIndex);
        document.title = currentText.substring(0, charIndex);

        if (charIndex === currentText.length) {
            deleting = true;
            setTimeout(typeWriter, 1500);
            return;
        }
    } else {
        charIndex--;
        element.textContent = "Hi, I'm " + currentText.substring(0, charIndex);
        document.title = currentText.substring(0, charIndex);

        if (charIndex === 0) {
            document.title = "_";
            deleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeWriter, 500);
            return;
        }
    }

    setTimeout(typeWriter, deleting ? 75 : 120);
}

typeWriter();
