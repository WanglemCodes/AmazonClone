let movie = document.querySelector('.container .content .movie .slider .slide');
let container = document.querySelector('.container .content .movie .slider');

console.log(movie);
console.log(container);

const count = 100;
let index = 0;

const next = () => {
   if (index < 40){
      index += 40;
      console.log(index);
      movie.style.transform = `translateX(-${index}%)`
      
   }else if (index >= 40){
      index = 60;
      console.log(index)
      movie.style.transform = `translateX(-${index}%)`
      console.log('tap');
   }
}
const prev = () => {
   if (index <= 0){
      index += 150
      console.log(index);
      movie.style.transform = `translateX(-${index}%)`
      
   }else if (index >= 0){
      index = 0
      console.log(index)
      movie.style.transform = `translateX(-${index}%)`
      console.log('tap');
   }
}
/*
  const next = () => {
    if (count < movieWidth) {
      count++;
      movieWidth.style[overflow-x]= `(-${count * movieWidth}px)`;
    }
  }

/*
let movie = document.querySelectorAll('.container .content .movie .slider .slide');
console.log(movie)

let count = 0;


movie.forEach(
   (slide,index) => {
      slide.style.left = `${index * 10}%`
   }
)
const next = () => {
   if (count >= movie.length - 1){
      count = 0;
      slider()
   }else{
      count++
      slider()
   }
}
const prev = () => {
   if (count == 0){
      count = movie.length-1
      slider()
   }else{
      count--
   slider()
   }
}

const slider = () => {
   movie.forEach(
      (slide) => {
         slide.style.transform = `translateX(-${count*30}%)`
      }
   )
}
/*
//let img = document.querySelectorAll('.img');
//let one = document.getElementById('one');
//let btn = document.querySelectorAll('button');

let count = 0;

img.forEach(
   (slide, index) => {
      slide.style.left = `${index * 100}%`
   }
)

const next = () => {
   if (count >= img.length - 1){
      count = 0;
      slider()
   }else{
      count++
      slider()
   }
}
const prev = () => {
   if (count == 0){
      count = img.length-1
      slider()
   }else{
      count--
   slider()
   }
}

const slider = () => {
   img.forEach(
      (slide) => {
         slide.style.transform = `translateX(-${count*100}%)`
      }
   )
}*/
