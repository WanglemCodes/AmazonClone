import {products} from "../data/data.js";


const itemPage = `
<div class="item"></div>
`;

document.querySelector('.itemPage').innerHTML = itemPage;

const items = {
   id: '1',
   name: 'Samsung Galaxy Buds2 True Wireless In Ear Earbuds Noise Cancelling Ambient Sound Bluetooth Lightweight Comfort Fit Touch Control, International Version (Graphite)',
   image: './src/images/laptop.jpg',
   price: '7,999',
   rating:{
      stars: '4.5',
      counts: '6,229',
   },
   'delivery-time':'Friday, 3 May.',
}

let item = `
<div class="product" key="${items.id}">
   <div class="product-img">
      <img src="${items.image}"/>
   </div>
   <div class="product-details">
      <div class="product-description">
         <span class="product-name">
            ${items.name}
         </span>
         <span class="store-link">Visit the Samsung Store</span>
         <div class="rating">
            <span class="stars">
            <span>${items.rating.stars}</span>
            <span class="star-img"> </span>
            </span>
            <span class="counts">
               <span>${items.rating.counts}</span>
               <i>ratings</i>
            </span>
         </div>
         <span class="deal"></span>
      </div>
      <div class="order-description">
         <span class="price">$${items.price}</span>
         <div class="delivery-option">
            <span class="delivery-cost">FREE delivery</span>
            <span class="date">Friday, 3 May.</span>
         </div>
         <div class="address">
            <span class="icon"></span>
            <span class="location">Deliver to user - Dimapur 797112</span>
         </div>
         <span class="stock">Only 1 left in stock</span>
         <span class="quantity">Quantity:<select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
         </select></span>
         <button class="cart-btn">Add to Cart</button>
         <button class="re-cart-btn">remove from Cart</button>
         <button class="buy-btn">Buy Now</button>
      </div>
   </div>
</div>
`;

document.querySelector('.item').innerHTML = item;
console.log(products);
const btn = document.querySelector('.cart-btn');
console.log(btn);
btn.addEventListener('click', () => {
   console.log('hi');
   products.push(items)
   console.log(products);
})
const rebtn = document.querySelector('.re-cart-btn');
console.log(rebtn);
rebtn.addEventListener('click', () => {
   console.log('hi');
   products.filter((item) => {
      items != item;
   })
   console.log(products);
})

/*console.log(products.pop((items) => {

}));
console.log(products);*/
