import {bannerData as data} from "../data/data.js";
import { featureProducts } from "../data/data.js";
import {products} from '../data/data.js';


const homePage = `
<div class="banner"></div>
<div class="products"></div>
<div class="feature"></div>
<div class="slider"></div>
<div class="movie"></div>
`;

document.querySelector('.home').innerHTML = homePage;

let banner = document.querySelector('.banner');
console.log(banner)
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
   console.log('clicked banner')
   console.log(ref.link)
   //fetch()
})

//Left Slider
leftBtn.addEventListener('click', () => {
   console.log('clicked')
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
   console.log('clicked')
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
const featureNames = ['Mobiles', 'Watch', 'Laptop', 'Cloth'];
let feature = '';
//console.log(featureProducts)

featureProducts.forEach((products, index) => {
   let item = '';
//console.log(products)
   products.forEach((product) => {
      item += `
            <a>
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
let productLayout = '';

products.forEach((product) => {
   productLayout += `
   <a href="">
      <div key="${product.id}" class="product">
         <h1>${product.name}</h1>
         <img src="${product.image}" />
         <p><span>$</span>${product.price}</p>
      </div>
   </a>
   `;
})
document.querySelector('.products').innerHTML = productLayout;
