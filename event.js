function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// handle blue buttton
const blueButton = document.getElementById("blue-button");
// just set the name don't call
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// anonymus function

const greenButton = document.getElementById("make-green-button");
greenButton.onclick = function makegreen() {
    document.body.style.backgroundColor = 'orange'
}