const colorInput = document.getElementById('color-input');
const changeColorBtn = document.getElementById('change-color-btn');

changeColorBtn.onclick=function(){
  document.body.style.backgroundColor=colorInput.value;
};



const counter = document.getElementById('counter');
const plusBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minus-btn');
let count = 0;

plusBtn.onclick=function() {
  count++;
  counter.textContent = count;
};

minusBtn.onclick=function() {
  if (count > 0) {
    count--;
    counter.textContent = count;
  }
};

 



// function calculateProduct() {
//     let product = 1;
  
//     for (let i = 10; i <= 15; i++) {
//       product *= i;
//     }
  
//     return product;
//   }

//   alert(calculateProduct()); 



  function calculateProduct() {
    const x = parseInt(document.getElementById('x').value);
    const y = parseInt(document.getElementById('y').value);
    let product = 1;
    for (let i = x; i <= y; i++) {
      product *= i;
    }
    
    document.getElementById('result').innerHTML = ` ${x} ve ${y} cavab  ${product}.`;

  }
  
