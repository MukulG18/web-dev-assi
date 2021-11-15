function calculate(){
    let op1=document.getElementById('op1').value;
    let oprtr=document.getElementById('optr').value;
    let op2=document.getElementById('op2').value;
    if(op1=="" || op2=="" || oprtr=="") {
        alert("Please enter valid inputs");
    }
    let str = op1 + oprtr + op2 + "=";
    op1 = parseInt(op1);
    op2 = parseInt(op2);
    if(oprtr == '+'){
        str = str + (op1 + op2);
        alert(str);
    } else if(oprtr == '-'){
      str = str + (op1 - op2);
      alert(str);
    }
    else if(oprtr == '*'){
      str = str + (op1 * op2);
      alert(str);
    }
    else if(oprtr == '/'){
      str = str + (op1 / op2);
      alert(str);
    } else {
        alert("Please enter valid inputs");
    }
}

const btn = document.getElementById('btn');
btn.addEventListener('click', calculate);
