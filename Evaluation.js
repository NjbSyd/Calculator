//<---      For allowing or blocking keyboard input in certain cases        --->
var keyboardInput = true;

//<---      On page successful load --->
$(document).ready(function() {
    toggleOperators(false);
    togglefunction(false);
    togglePwr(true);
})

//<--- On digit clicked --->
function digitClick() {
    togglePwr(false);
    toggleOperators(false);
    togglefunction(true);
}

//<--- On Arithmetic operator  clicked --->
function oprClick() {
    togglePwr(true);
    toggleOperators(true);
    togglefunction(false);
}

//<--- On fucntion  clicked --->
function funClick() {
    togglePwr(true);
    toggleOperators(true);
    togglefunction(true);
    var btn = document.getElementById('closeb');
    btn.style.display = 'flex';
    btn.hidden = false;
}

//<--- On AC/DEL  clicked --->
function acClick() {
    toggleOperators(false);
    togglefunction(false);
    togglePwr(true);
    closeBracket();
}

//<---      For inbuild buttons Input      --->
function clicked(clickedbtn) {
    textField = document.getElementById("output");
    dataInTextField = textField.value;
    if (clickedbtn == '1') {
        textField.value = dataInTextField + '1';
        digitClick();
    } else if (clickedbtn == '2') {
        textField.value = dataInTextField + '2';
        digitClick();
    } else if (clickedbtn == '3') {
        textField.value = dataInTextField + '3';
        digitClick();
    } else if (clickedbtn == '4') {
        textField.value = dataInTextField + '4';
        digitClick();
    } else if (clickedbtn == '5') {
        textField.value = dataInTextField + '5';
        digitClick();
    } else if (clickedbtn == '6') {
        textField.value = dataInTextField + '6';
        digitClick();
    } else if (clickedbtn == '7') {
        textField.value = dataInTextField + '7';
        digitClick();
    } else if (clickedbtn == '8') {
        textField.value = dataInTextField + '8';
        digitClick();
    } else if (clickedbtn == '9') {
        textField.value = dataInTextField + '9';
        digitClick();
    } else if (clickedbtn == '0') {
        textField.value = dataInTextField + '0';
        digitClick();
    } else if (clickedbtn == '+') {
        if (keyboardInput) {
            textField.value = dataInTextField + '+';
            oprClick();
        }
    } else if (clickedbtn == '-') {
        if (keyboardInput) {
            textField.value = dataInTextField + '-';
            oprClick();
        }
    } else if (clickedbtn == '*') {
        if (keyboardInput) {
            textField.value = dataInTextField + '*';
            oprClick();
        }
    } else if (clickedbtn == '/') {
        if (keyboardInput) {
            textField.value = dataInTextField + '/';
            oprClick();
        }
    } else if (clickedbtn == '.') {
        if (checkPointValid(dataInTextField)) {
            textField.value = dataInTextField + '.';
            togglefunction(true);
            togglePwr(true);
        }
    } else if (clickedbtn == 'equal') { //Enter key pressed
        textField.focus();
        try {
            result = eval(dataInTextField);
            textField.value = result;
            if (textField.value == 'NaN') {
                alert("Math Error!!");
                document.getElementById('ac').click();
            } else {
                toggleOperators(false);
                togglefunction(false);
                togglePwr(false);
            }
        } catch (error) {
            alert("Syntax error!!\n " + error.message);
            document.getElementById('ac').click();
        }

    } else if (clickedbtn == 'del') { //Backspace key pressed
        if (dataInTextField != "") {
            textField.value = backspacePressed(dataInTextField);
        }
    } else if (clickedbtn == 'ac') { //Delete key pressed
        textField.value = "";
        acClick();
    } else if (clickedbtn == 'closeb') {
        if (dataInTextField != "") {
            textField.value = dataInTextField + ')';
        }
        togglePwr(false);
        togglefunction(true);
        toggleOperators(false);
        closeBracket();
    } else if (clickedbtn == 'cb') {
        if (dataInTextField != "") {
            if (!(Array.from(dataInTextField)[-1] == '+' || Array.from(dataInTextField)[-1] == '-' ||
                    Array.from(dataInTextField)[-1] == '*' || Array.from(dataInTextField)[-1] == '/' ||
                    Array.from(dataInTextField)[-1] == '.' || Array.from(dataInTextField)[-1] == '('))
                textField.value = dataInTextField + '**3';
        }
    } else if (clickedbtn == 'sqr') {
        if (dataInTextField != "") {
            if (!(Array.from(dataInTextField)[-1] == '+' || Array.from(dataInTextField)[-1] == '-' ||
                    Array.from(dataInTextField)[-1] == '*' || Array.from(dataInTextField)[-1] == '/' ||
                    Array.from(dataInTextField)[-1] == '.' || Array.from(dataInTextField)[-1] == '('))
                textField.value = dataInTextField + '**2';
        }
    } else if (clickedbtn == 'cos' || clickedbtn == 'sin' || clickedbtn == 'sec' ||
        clickedbtn == 'csc' || clickedbtn == 'tan' || clickedbtn == 'cot' ||
        clickedbtn == 'log' || clickedbtn == 'ln' || clickedbtn == 'sqrt' ||
        clickedbtn == 'cbrt') {
        textField.value = dataInTextField + clickedbtn + '(';
        funClick();
    }
}



//<---      For keyboard Input      --->


$(document).keydown(function(event) {
    textField = document.getElementById("output");
    dataInTextField = textField.value;
    var key = parseInt(event.which);
    if (key == 97 || key == 49) {
        textField.value = dataInTextField + '1';
        digitClick();
    } else if (key == 98 || key == 50) {
        textField.value = dataInTextField + '2';
        digitClick();
    } else if (key == 99 || key == 51) {
        textField.value = dataInTextField + '3';
        digitClick();
    } else if (key == 100 || key == 52) {
        textField.value = dataInTextField + '4';
        digitClick();
    } else if (key == 101 || key == 53) {
        textField.value = dataInTextField + '5';
        digitClick();
    } else if (key == 102 || key == 54) {
        textField.value = dataInTextField + '6';
        digitClick();
    } else if (key == 103 || key == 55) {
        textField.value = dataInTextField + '7';
        digitClick();
    } else if (key == 104 || key == 56) {
        textField.value = dataInTextField + '8';
        digitClick();
    } else if (key == 105 || key == 57) {
        textField.value = dataInTextField + '9';
        digitClick();
    } else if (key == 96 || key == 48) {
        textField.value = dataInTextField + '0';
        digitClick();
    } else if (key == 107) {
        if (keyboardInput) {
            textField.value = dataInTextField + '+';
            oprClick();
        }
    } else if (key == 109) {
        if (keyboardInput) {
            textField.value = dataInTextField + '-';
            oprClick();
        }
    } else if (key == 106) {
        if (keyboardInput) {
            textField.value = dataInTextField + '*';
            oprClick();
        }
    } else if (key == 111) {
        if (keyboardInput) {
            textField.value = dataInTextField + '/';
            oprClick();
        }
    } else if (key == 110 || key == 190) {
        if (checkPointValid(dataInTextField)) {
            textField.value = dataInTextField + '.';
            togglePwr(true);
            togglefunction(true);
        }
    } else if (key == 13) { //Enter key pressed
        textField.focus();
        try {
            if (dataInTextField != "") {
                result = eval(dataInTextField);
                textField.value = result;
                if (textField.value == 'NaN') {
                    alert("Math Error!!");
                    document.getElementById('ac').click();
                } else {
                    toggleOperators(false);
                    togglefunction(false);
                    togglePwr(false);
                }
            }
        } catch (error) {
            alert("Syntax error!!\n " + error.message);
            document.getElementById('ac').click();
        }

    } else if (key == 8) { //Backspace key pressed
        if (dataInTextField != "") {
            textField.value = backspacePressed(dataInTextField);
        }
    } else if (key == 46) { //Delete key pressed
        textField.value = "";
        acClick();
    }
})

//<---      For checking point validity at certain input position      --->
function checkPointValid(str) {
    var valid = true;
    var operator = false;
    var arr = Array.from(str);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '+' || arr[i] == '-' || arr[i] == '/' || arr[i] == '*') {
            operator = true;
            valid = true;
        } else if (arr[i] == '.') {
            operator = false;
            valid = false
        }
    }
    if (operator) {
        valid = true;
    }
    return valid;
}

//<---      disable closing bracket button after one valid click      --->
function closeBracket() {
    var btn = document.getElementById('closeb');
    btn.style.display = 'none';
    btn.hidden = true;
}
//<---       To enable/disable buttons ''occasion specific''        --->    
function toggleOperators(_bool) {
    var buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id == 'one' || buttons[i].id == 'two' || buttons[i].id == 'three' ||
            buttons[i].id == 'four' || buttons[i].id == 'five' || buttons[i].id == 'six' || buttons[i].id == 'seven' ||
            buttons[i].id == 'eight' || buttons[i].id == 'nine' || buttons[i].id == 'zero' || buttons[i].id == 'point' ||
            buttons[i].id == 'del' || buttons[i].id == 'ac' || buttons[i].id == 'closeb') { continue; }
        buttons[i].disabled = _bool;
        keyboardInput = (!_bool);
    }
}

//<---      Backspace pressed ocassion      --->
function backspacePressed(text) {
    console.log('Backspace pressed function called');
    var arr = Array.from(text);
    if (arr.length == 1) {
        closeBracket();
        toggleOperators(false);
        togglefunction(false);
        togglePwr(true);
        text = "";
    } else if (arr[arr.length - 1] == ')') {} else {
        text = text.slice(0, -1);
    }
    return text;
}

//<---      toggle  function buttons       --->
function togglefunction(_bool) {
    var buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id == 'sqrt' || buttons[i].id == 'cos' || buttons[i].id == 'csc' ||
            buttons[i].id == 'cbrt' || buttons[i].id == 'sin' || buttons[i].id == 'sec' || buttons[i].id == 'log' ||
            buttons[i].id == 'cot' || buttons[i].id == 'tan' || buttons[i].id == 'ln') {
            buttons[i].disabled = _bool;
        }
    }
}

//<---      toggle  power function buttons       --->
function togglePwr(_bool) {
    document.getElementById('sqr').disabled = _bool;
    document.getElementById('cb').disabled = _bool;

}


//<---      Mathematical Formulas       --->
function sin(num) {
    return Math.sin(num);
}

function cos(num) {
    return Math.cos(num);
}

function tan(num) {
    return Math.tan(num);
}

function csc(num) {
    return (1 / Math.sin(num));
}

function sec(num) {
    return (1 / Math.cos(num));
}

function cot(num) {
    return (1 / Math.tan(num));
}

function log(num) {
    return Math.log10(num);
}

function ln(num) {
    return Math.log(num);
}

function cbrt(num) {
    return Math.cbrt(num);
}

function sqrt(num) {
    return Math.sqrt(num);
}