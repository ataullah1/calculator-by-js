function keyFunc(e) {
  const display = document.getElementById('display');
  display.innerText += e;
}

function keyFuncClear() {
  const display = document.getElementById('display');
  display.innerText = '';
}

function keyFuncDelete() {
  const display = document.getElementById('display');
  const del = display.innerText.slice(0, -1);
  display.innerText = del;
}

function keyFuncCalculet() {
  const display = document.getElementById('display');
  const expression = display.innerText;

  try {
    const result = eval(expression); // Evaluate the expression
    if (isNaN(result) || !isFinite(result)) {
      display.innerText = 'Error';
    } else {
      display.innerText = result; // Display the result
    }
  } catch (error) {
    display.innerText = 'Error';
  }
}
