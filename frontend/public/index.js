let movieDivs = document.querySelectorAll('.container .content .movie .slide .movies');
console.log(movieDivs);

/*let movie = document.querySelectorAll('.container .content .movie .slide div');
console.log(movie)


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
