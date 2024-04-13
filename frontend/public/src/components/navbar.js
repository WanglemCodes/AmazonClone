//Navbar

let navbar = `
<div class="topBar">
   <div class="left">
      <div class="logo"></div>
      <div class="location">
         <div class="img"></div>
         <div class="address">
            <span class="customer">Deliver to kumar</span>
            <br>
            <span class="pincode">Pin code</span>
         </div>
      </div>
   </div>
   <div class="mid">  
      <div class="all">
         <span>All</span>
         <a></a>
      </div>
      <input type="text" placeholder="Search Amazon">
      <div class="searchIcon">
         <a href=""></a>
      </div> 
   </div>
   <div class="right">
      <div class="language">
         <span class="flag"></span>
         <span class="lang">EN</span>
         <span class="drop"></span>
      </div>
      <div class="acc">
         <span class="span1">Hello,Awang</span>
         <span class="span2">Account & Lists
            <span class="drop"></span>
         </span>
      </div>
      <div class="history">
         <span class="span1">Returns</span>
         <span class="span2">& Orders</span>
      </div>
      <div class="cart">
         <span class="count">0</span>
         <a href="./cart.html" class="cartIcon">
         </a>
         <span class="cartText">Cart</span>
      </div>
   </div>
</div>
<div class="bottomBar">
   <div>
      <a href=""></a>
      <span>All</span>
   </div>
   <div>
      <span>Today's Deals</span>
   </div>
   <div>
      <span>Customer Service</span>
   </div>
   <div>
      <span>Registry</span>
   </div>
   <div>
      <span>Gift Cards</span>
   </div>
   <div>
      <span>Sell</span>
   </div>
</div>
`;
document.querySelector('.navbar').innerHTML = navbar;

let cart = document.querySelector('.cart');

