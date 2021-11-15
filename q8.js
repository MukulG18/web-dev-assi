const btn = document.getElementById('btn');
btn.addEventListener('click', convert);

function isValidNumber(num) {
    for(let i = 0; i < num.length; i++) {
        if(num[i] < '0' || num[i] > '9') {
            return false;
        }
    }
    return true;
}

function isInRange(num) {
    if(parseInt(num) < 0 || parseInt(num) > 999) {
        return false;
    }
    return true;
}

function convert() {
    let num = document.getElementById('number').value;
    const result = document.getElementById('result');
    if(num == '') {
        result.innerText = 'Please enter a number';
        return;
    }
    if(!isValidNumber(num)) {
        result.innerText = 'Not a number';
        return;
    }
    if(!isInRange(num)) {
        result.innerText = 'Out of range';
        return;
    }
    const ones_place = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens_place = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const special_names = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let res = '';
    let i = 0;
    num = String(parseInt(num));
    if(num.length === 1) {
        if(parseInt(num) === 0) {
            res = 'zero';
        } else {
            res = ones_place[parseInt(num)];
        }
    } else if(num.length === 2) {
        if(parseInt(num[0]) === 1) {
            res = special_names[parseInt(num[1])];
        } else {
            res = tens_place[parseInt(num[0])] + ' ' + ones_place[parseInt(num[1])];
        }
    } else {
        res = ones_place[parseInt(num[0])] + ' hundred ';
        if(parseInt(num[1]) === 1) {
            res += special_names[parseInt(num[2])];
        } else {
            if(parseInt(num[1]) === 0) {
                res += ones_place[parseInt(num[2])];
            } else {
                res += tens_place[parseInt(num[1])] + ' ' + ones_place[parseInt(num[2])];
            }
        }
    }
    result.innerText = res;
}
