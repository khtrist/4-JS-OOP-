const colorInput = document.getElementById('color-input');
const changeColorBtn = document.getElementById('change-color-btn');

changeColorBtn.addEventListener('click', function() {
  const colorValue = colorInput.value;
  document.body.style.backgroundColor = colorValue;
});



const counter = document.getElementById('counter');
const plusBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minus-btn');
let count = 0;

plusBtn.addEventListener('click', function() {
  count++;
  counter.textContent = count;
});

minusBtn.addEventListener('click', function() {
  if (count > 0) {
    count--;
    counter.textContent = count;
  }
});

 



function calculateProduct() {
    let product = 1;
  
    for (let i = 10; i <= 15; i++) {
      product *= i;
    }
  
    return product;
  }

  alert(calculateProduct()); 


