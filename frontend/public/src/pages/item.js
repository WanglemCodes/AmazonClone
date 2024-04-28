import {cart} from "../data/data.js";


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
            <span class="stars">${items.rating.stars}*****</span>
            <span class="counts">${items.rating.counts}ratings</span>
         </div>
         <span class="deal">Limited time deal</span>
      </div>
      <div class="order-description">
         <span class="price">${items.price}</span>
         <span class="delivery">FREE delivery
            <span class="date">Friday, 3 May.</span>
         </span>
         <span class="adress">
            <span class="icon"></span>
            <span>Deliver to user - Dimapur 797112</span>
         </span>
         <span class="stock">Only 1 left in stock</span>
         <button class="cart-btn">Add to Cart</button>
         <button class="buy-btn">Buy Now</button>
      </div>
   </div>
</div>
`;

document.querySelector('.item').innerHTML = item;

