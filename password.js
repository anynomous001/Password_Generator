
let isGenerated = false;
let isReset = false;

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let password_1 = "";

let password_2 = "";

let passEl_1 = document.querySelector("#display_1");
let passEl_2 = document.querySelector("#display_2");

function genPass() {

    for (let i = 0; i < 15; i++) {
        password_1 += characters[Math.floor(Math.random() * characters.length)];
        password_2 += characters[Math.floor(Math.random() * characters.length)];
    }

    passEl_1.textContent = password_1;
    passEl_2.textContent = password_2

    console.log(isGenerated)

}

function generate() {

    if (isGenerated === false) {
        password_1 = "";
        password_2 = "";
        genPass();
    }
    isGenerated = true;
}

function reset() {
    passEl_1.textContent = "";
    passEl_2.textContent = "";
    console.log(password_1);
    isGenerated = false;
}

