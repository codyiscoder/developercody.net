const element = document.getElementById("name");
const texts = ["frogwater", "cody"];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function coolnamethingy() {
    const currentText = texts[textIndex];

    charIndex += deleting ? -1 : 1;

    const text = currentText.substring(0, charIndex);

    element.textContent = `Hi, I'm ${text}`;
    document.title = text || "_";

    let delay = deleting ? 75 : 120;

    if (!deleting && charIndex === currentText.length) {
        deleting = true;
        delay = 1500;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % texts.length;
        delay = 500;
    }

    setTimeout(coolnamethingy, delay);
}

coolnamethingy();
