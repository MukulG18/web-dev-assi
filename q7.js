function leftMostVowel() {
    const str = document.getElementById('text').value;
    const stringAns = document.getElementById('stringAns');
    const vowelArr = ['a', 'e', 'i', 'o', 'u'];
    let res = Infinity;
    for(let i = 0; i < vowelArr.length; i++) {
        if(str.indexOf(vowelArr[i]) != -1 && str.indexOf(vowelArr[i]) < res) {
            res = str.indexOf(vowelArr[i]);
        }
    }
    if(res === Infinity) {
        stringAns.innerHTML = 'No Vowel Found';
    } else {
        stringAns.innerHTML = `The left most vowel is ${str[res]} at index ${res}`;
    }
}

function reverseNum() {
    let num = document.getElementById('num').value;
    const numAns = document.getElementById('numAns');
    let res = "";
    for(let i = 0; i<num.length; i++) {
        res = num[i] + res;
    }
    numAns.innerText = `Reversed number is ${res}`;
}

const stringBtn = document.getElementById('stringBtn');
const numBtn = document.getElementById('numBtn');
stringBtn.addEventListener('click', leftMostVowel);
numBtn.addEventListener('click', reverseNum);