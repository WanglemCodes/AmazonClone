//Navbar

let navbar = `
<div class="topBar">
   <div class="left">
      <a class="logo"></a>
      <a class="location">
         <div class="img"></div>
         <div class="address">
            <span class="customer">Deliver to kumar</span>
            <br>
            <span class="pincode">Pin code</span>
         </div>
      </a>
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
      <a class="language">
         <span class="flag"></span>
         <span class="lang">EN</span>
         <span class="drop"></span>
      </a>
      <a class="acc">
         <span class="span1">Hello,Awang</span>
         <span class="span2">Account & Lists
            <span class="drop"></span>
         </span>
      </a>
      <a class="history">
         <span class="span1">Returns</span>
         <span class="span2">& Orders</span>
      </a>
      <a href="./item.html" class="cart">
         <span class="count">0</span>
         <span class="cartIcon">
         </span>
         <span class="cartText">Cart</span>
      </a>
   </div>
</div>
<div class="bottomBar">
   <a>
      <span class="hamburger"></span>
      <span>All</span>
   </a>
   <a>
      <span>Today's Deals</span>
   </a>
   <a>
      <span>Customer Service</span>
   </a>
   <a>
      <span>Registry</span>
   </a>
   <a>
      <span>Gift Cards</span>
   </a>
   <a>
      <span>Sell</span>
   </a>
</div>
`;
document.querySelector('.navbar').innerHTML = navbar;

//let cart = document.querySelector('.cart');
