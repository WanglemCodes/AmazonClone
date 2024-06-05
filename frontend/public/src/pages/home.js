import {bannerData as data} from "../data/data.js";
import {products} from '../data/data.js';
import { featureProducts } from "../data/data.js";
import { slides } from "../data/data.js";
//import { method } from "../data/data.js";
import { convertCurrency } from "../data/data.js";

const homePage = `
<div class="banner"></div>
<div class="products"></div>
<div class="feature"></div>
<div class="slides">
   <span class="leftBtn"></span>
   <span class="rightBtn"></span>
</div>
`;
convertCurrency()
/*
console.log("Hi");
console.log(method.dollar)
method.dollar()
method.dollar("Hi")
*/
document.querySelector('.home').innerHTML = homePage;

let banner = document.querySelector('.banner');
let content = document.createElement('img');
content.classList.add('img');

let leftBtn = document.createElement('button');
leftBtn.classList.add('left');

let rightBtn = document.createElement('button');
rightBtn.classList.add('right')

const img = data[0];

content.src = img.image;

banner.appendChild(leftBtn)
banner.appendChild(content)
banner.appendChild(rightBtn)
let count = 0;

banner.addEventListener('click', () => {
   const ref = data[count];
   //fetch()
})

//Left Slider
leftBtn.addEventListener('click', () => {
   //e.preventDefault();
   if(count > 0){
      count--;
      const img = data[count];
      console.log(img)
      content.src = img.image;
      banner.appendChild(content)
      
   }else{
      console.log('clicked')
      const img = data[count];
      banner.appendChild(content)
      content.src = img.image;
   }
})

//Right Slider
rightBtn.addEventListener('click', () => {
   if( count < data.length - 1){
      count++;
      const img = data[count];
      banner.appendChild(content)
      content.src = img.image;
   }else{
      count = 0;
      const img = data[count];
      banner.appendChild(content)
      content.src = img.image;
   }
})

let productLayout = '';

products.forEach((product) => {
   productLayout += `
   <a href="./item.html">
      <div key="${product.id}" class="product">
         <h1>${product.name}</h1>
         <img src="${product.image}" />
         <p><span>$</span>${product.price}</p>
      </div>
   </a>
   `;
})
document.querySelector('.products').innerHTML = productLayout;


const featureNames = ['Mobiles', 'Watch', 'Laptop', 'Cloth'];
let feature = '';
//console.log(featureProducts)

featureProducts.forEach((products, index) => {
   let item = '';
//console.log(products)
   products.forEach((product) => {
      item += `
            <a class="items" href="./product.html">
               <div class="item">
                  <img src="${product.image}" />
               </div>
               <h2 class="name">${product.name}</h2>
            </a>
      `;
   })
   feature += `<div><h2>${featureNames[index]}</h2><div class="container">${item}</div></div>`;
})

document.querySelector('.feature').innerHTML = feature;

let slideBar = '';
slides.forEach((slide) => {
   slideBar += `
   <div class="slide-container" >
      <a>
         <div class="image">
            <img src="${slide.image}" />
         </div>
         <div class="names"><span class="name">${slide.name}</span></div>
         <div class="rating">
            <span class="star">${slide.rating.stars}</span>
            <span class="counts">${slide.rating.counts}</span>
         </div>
         <span class="price">${slide.price}</span>
      </a>
   </div>
   `;
});

document.querySelector('.slides').innerHTML = `
<span class="leftBtn"></span>
   <div class="slides-container">${slideBar}</div>
<span class="rightBtn"></span>
`;

let left = document.querySelector('.slides .leftBtn');
let right = document.querySelector('.slides .rightBtn');
let slider = document.querySelector('.slides-container');

let num = 0;

right.addEventListener('click', () => {
   //console.log('clicked')
   if(num < 60){
      num += 30;
      slider.style.transform = `translateX(-${num}%)`;
   }else if(num >= 60){
      num = 60;
      slider.style.transform = `translateX(-${num}%)`;
   }else {
      num = 0;
      slider.style.transform = `translateX(-${num}%)`;
   }

})
left.addEventListener('click', () => {
   //console.log('clicked')
   if(num > 0){
      num -= 30;
      slider.style.transform = `translateX(-${num}%)`;
   }else{
      num = 0;
      slider.style.transform = `translateX(${num}%)`;
   }
})

let cart = [];

/*const addToCart = () => {
   const item = 
}*/