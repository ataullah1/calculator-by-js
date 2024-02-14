console.log('Hello world');

function numToDis(idCal) {
  document.getElementById(idCal).addEventListener('click', function (e) {
    const value = e.target.innerText;
    const display = document.getElementById('display');
    display.textContent += value;
  });
}
document.getElementById('inpC').addEventListener('click', function () {
  const display = document.getElementById('display');
  display.innerHTML = '';
});
document.getElementById('inpD').addEventListener('click', function () {
  const display = document.getElementById('display');
  display.innerHTML;
});
numToDis('inp1');
numToDis('inp2');
numToDis('inp3');
numToDis('inp4');
numToDis('inp5');
numToDis('inp6');
numToDis('inp7');
numToDis('inp8');
numToDis('inp9');
numToDis('inp0');
numToDis('inpSum');
numToDis('inpNeg');
numToDis('inpMul');
numToDis('inpDiv');
numToDis('inpPer');
numToDis('inpPoint');
numToDis('inpEqual');
