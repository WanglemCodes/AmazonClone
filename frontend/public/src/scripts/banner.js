let banner = document.querySelector('.banner');

let data = [
   {
      image: './src/images/banner.jpg',
      name: 'banner',
      link: './src/images/banner.jpg'
   },
   {
      image: './src/images/banner2.jpg',
      name: 'banner2',
      link: './src/images/banner2.jpg'
   },
   {
      image: './src/images/banner3.jpg',
      name: 'banner3',
      link: './src/images/banner3.jpg'
   },
   {
      image: './src/images/banner3.jpg',
      name: 'banner3',
      link: './src/images/banner3.jpg'
   }
]

let content = document.createElement('img');
content.classList.add('img');

let leftBtn = document.createElement('button');
leftBtn.classList.add('left');

let rightBtn = document.createElement('button');
rightBtn.classList.add('right')

const img = data[0];
/*
console.log(img);
let obj = img.image;
console.log(obj);
*/
content.src = img.image;

banner.appendChild(leftBtn)
banner.appendChild(content)
banner.appendChild(rightBtn)
let count = 0;

const prev = () => {
   leftBtn.addEventListener('click', () => {
      console.log('clicked')
      //e.preventDefault();
      if(count >= 0){
         //count = data.length-1;
         const img = data[count];
         console.log(img)
         content.src = img.image;
         banner.appendChild(content)
         
      }else{
         console.log('clicked')
         count--;
         const img = data[count];
         banner.appendChild(content)
         content.src = img.image;
      }
   })
}

const next = () => {
   rightBtn.addEventListener('click', (e) => {
      console.log('clicked')
      //e.preventDefault();
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
}


