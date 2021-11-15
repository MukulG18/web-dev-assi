function calculate() {
    const num = document.getElementById('num');
    const squares = document.getElementById('squares');
    const cubes = document.getElementById('cubes');
    num.innerHTML = "";
    squares.innerHTML = "";
    cubes.innerHTML = "";
    for(let i=0;i<=10;i++){
        const numberItem = i;
        const squareItem = i*i;
        const cubeItem = Math.pow(i,3);
        num.innerHTML += `<th>${numberItem}</th>`;
        squares.innerHTML += `<td>${squareItem}</td>`;
        cubes.innerHTML += `<td>${cubeItem}</td>`;
    }
    const btnDiv = document.getElementById('btnContainer');
    btnDiv.classList.add('hide');
}
const calculateBtn = document.getElementById('btn');
calculateBtn.addEventListener('click', calculate);