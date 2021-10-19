let num = 0;
let acc = 0;
let sign = "";

function getDigit(d) {
    num = num * 10 + parseInt(d);
    showNum();
}

function getSign(s) {
    if (getNum()) {
        if (sign === "") {
            acc = parseInt(num);
            num = 0;
        }
        sign = s;
    }
}

function getNum() {
    num = document.getElementById("accField").value;
    if (! /^-?\d+$/.test(num)) {
        num = 0;
        alert("Недопустимое значение");
        return false;
    } else {
        num = parseInt(num);
        return true;
    }
}

function clearField() {
    num = 0;
    acc = 0;
    sign = "";
    showNum();
}

function deleteDigit() {
    num = parseInt(num / 10);
    showNum();
}

function showNum() {
    document.getElementById("accField").value = num;
}

function result() {
    if (getNum()) {
        switch (sign) {
            case "+":
                num = acc + num;
                break;
            case "-":
                num = acc - num;
                break;
            case "*":
                num = acc * num;
                break;
            case "/":
                num = Math.round(acc / num);
                break;
        }
        acc = 0;
        sign = "";
        showNum();
    }
}

