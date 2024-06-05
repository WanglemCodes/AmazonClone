import { cart as cartItem } from '../data/data.js';


const cart = `
   <div class="cart">
      <div class="heading">
         <h1>Shopping Cart</h1>
      </div>
      <div class="item-info">
         <span class="selected">Selected</span>
         <span class="price">Price</span>
      </div>
      <div class="items"></div>
   </div>
   <div class="total-container">
      <div class="total">
         <h1 class="subtotal">Subtotal</h1>
         <button>Proceed to Buy</button>
      </div>
   </div>
`;
document.querySelector('.cartPage').innerHTML = cart;

cartItem.forEach((items) => {
   
   const item = `
   <div class="item">
      <input type="checkbox" class="checkmark" data-price="${items.price}" />
      <div class="image">
         <img src="${items.image}" />
      </div>
      <div class="details">
         <div class="product-details">
            <a>${items.name}</a>
            <span class="category"></span>
            <span class="stock">In stock</span>
            <span class="shipping">Eligible for FREE Shipping</span>
            <span class="fulfilled"></span>
            <span class="colour">Colour:<span>Black</span></span>
         </div>
         <div class="price-info">
            <span class="off">53% off</span>
            <span class="deal">Limited time deal</span>
            <span class="price">$279.00</span>
            <span class="discount">M.R.P.: <span class="cut-off"></span>$599</span>
         </div>
         <div class="option" >
            <div class="qty" tabIndex="0">
               <span>Qty:</span>
               <select class="opt">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
               </select>  
            </div>
            <div>Delete</div>
            <div>Save for later</div>
            <div>Share</div>
         </div>
      </div>
   </div>
   `;
   document.querySelector('.items').innerHTML += item;
});

const checkBoxes = document.querySelectorAll('.checkmark');
console.log(checkBoxes);
const select = document.querySelectorAll('.opt');

let totalValue = 0;
let checked = 0;

const updateTotal = () => {
   totalValue = 0;
   checked = 0;
   checkBoxes.forEach((checkbox) => {
      
      if (checkbox.checked) {
         //totalValue += parseFloat(checkbox.getAttribute('data-price'));
         const price = parseFloat(checkbox.getAttribute('data-price'));
         const quantity = parseInt(checkbox.closest('.item').querySelector('.opt').value);
         totalValue += price * quantity;
         checked += 1;
      }
   });
   document.querySelector('.subtotal').innerHTML = `Subtotal (${checked} items):$${totalValue.toFixed(2)}`;
   //subtotalElement.textContent = `$${totalValue.toFixed(2)}`;
   console.log(checked);
}

checkBoxes.forEach((checkbox) => {
   checkbox.addEventListener('change', updateTotal)
});
select.forEach((select) => {
   select.addEventListener('change', updateTotal)
})


