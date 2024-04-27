
const itemPage = `
<div class="item"></div>
`;

document.querySelector('.itemPage').innerHTML = itemPage;

let item = `
<div class="product">
   <div class="product-img">
      <img src="./src/images/laptop.jpg"/>
   </div>
   <div class="product-details">
      <div class="product-description">
         <span class="product-name">
            Samsung Galaxy Buds2 True Wireless In Ear Earbuds Noise Cancelling Ambient Sound Bluetooth Lightweight Comfort Fit Touch Control,International Version (Graphinte)
         </span>
         <span class="store-link">Visit the Samsung Store</span>
         <span class="rating">4.5
            <span class="stars">*****</span>
            <span class="counts">6,229</span>
         </span>
         <span >ratings</span>
         <span class="deal">Limited time deal</span>
      </div>
      <div class="order-description">
         <span class="price">7,999</span>
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