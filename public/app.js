const aEl = document.getElementById('a');
const bEl = document.getElementById('b');
const resultEl = document.getElementById('result');


function compute(op){
const a = parseFloat(aEl.value);
const b = parseFloat(bEl.value);


if (Number.isNaN(a) || Number.isNaN(b)){
resultEl.textContent = 'Result: enter both numbers';
return;
}


let r;
switch(op){
case 'add': r = a + b; break;
case 'sub': r = a - b; break;
case 'mul': r = a * b; break;
case 'div': r = b === 0 ? 'Error (div by 0)' : a / b; break;
}


resultEl.textContent = `Result: ${r}`;
}


document.querySelectorAll('.controls button').forEach(btn => {
btn.addEventListener('click', () => compute(btn.dataset.op));
});