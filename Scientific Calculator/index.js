let display = document.getElementById("display");


function addChar(character) {
    if (display.innerText == null || display.innerText == "0") {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
}

function clearDisplay() {
    display.innerText = "";
}

function backSpace() {
    if (display.innerText) {
        display.innerText = display.innerText.substring(0, display.innerText.length - 1)
    }
}

function convertInRadian(num) {
    let rad = num * (Math.PI / 180);
    return rad;
}

function cos() {

    if (isNumber()) {
        display.innerText = Math.cos(convertInRadian(display.innerText));
    }

}

function tan() {

    if (isNumber()) {
        display.innerText = Math.tan(convertInRadian(display.innerText));
    }
}

function sin() {

    if (isNumber()) {
        display.innerText = Math.sin(convertInRadian(display.innerText));
    }
}

function squareRoot() {

    if (isNumber()) {
        display.innerText = Math.sqrt(display.innerText);
    }

}

function square() {
    if (isNumber()) {
        display.innerText = eval(display.innerText) * eval(display.innerText);
    } else {
        alert("invalid number")
    }

}

function exp() {

    if (isNumber()) {
        display.innerText = Math.exp(display.innerText);
    }

}

function log() {

    if (isNumber()) {
        display.innerText = Math.log(display.innerText);
    }
}

function isNumber() {
    let val = display.innerText;

    for (let i = 0; i < val.length; i++) {
        let ch = val.charAt(i);
        if (ch < "0" || ch > "9") {

            if (ch != "/"
                || ch != "+"
                || ch != "-"
                || ch != "*"
                || ch != "."
                || ch != "("
                || ch != ")"
            ) {
                alert("Invalid Number")
                return false;
            }
        }

    }

    return true;
}

function equalsTo() {
    if (display.innerText == "") {
        alert("No values entered")
    } else {
        display.innerText = eval(display.innerText)
    }
}

function changeSign(){

    if(display.innerText.charAt(0)=="-"){
        display.innerText= display.innerText.substring(1);

    }
    else{
        display.innerText= "-"+ display.innerText;

    }
}
