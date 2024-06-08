const apiKey = "6BxUsHM1A4jCuqhwIJBL2g5wXNRZW2IF82xIZEwZsFhm8bCqgsyOlzCN";

/*
export const currency = () => {
   let dollar = 1;
   let rupee = 70;
}
export const method = {
   dollar: (lol) => {
      lol = lol;
      console.log("Dollar")
      console.log(lol)
   }
}
*/
/*
fetch("http://localhost:8000/wang", {
   method: 'Get',
   headers: {
      'Content-Type': 'application/json',
      'Authorization': ''
   }
})
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.log("error:", error));
console.log(fetch());*/


export const user = {
   id: "1",
   name: "Wang",
   phone: "1234567890",
   country: "IND",
   address: {
      city: "Dimapur",
      pin: "798621",
      house: "566",
      landmark: "Kevijau, lane 7"
   }
};


export const convertCurrency = () => {
   let dollar = 1;
   let rupee = 70;
   let result = "";
   let price = "$ 105";
   result = price.split(" ")[0];
   console.log(result)
   let final = 300 / 70;
   //console.log(final)
   //console.log(result * rupee)
}

export const bannerData = [
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
]

export const products = [
   {
      id: '1',
      name: 'Laptop',
      image: './src/images/laptop.jpg',
      price: '25',
      category: '',
      rating:{
         stars: '4.5',
         counts: '6,229',
      },
      'delivery-time':'Friday, 3 May.',
   },
   {  
      id: '2',
      name: 'Watch',
      image: './src/images/watch.jpg',
      price: '34',
      category: '',
      rating:{
         stars: '4.5',
         counts: '6,229',
      },
      'delivery-time':'Friday, 3 May.',
   },
   {
      id: '3',
      name: 'Laptop',
      image: './src/images/laptop.jpg',
      price: '2.9',
      category: '',
      rating:{
         stars: '4.5',
         counts: '6,229',
      },
      'delivery-time':'Friday, 3 May.',
   },
   {  
      id: '4',
      name: 'Watch',
      image: './src/images/watch.jpg',
      price: '10.09',
      category: '',
      rating:{
         stars: '4.5',
         counts: '6,229',
      },
      'delivery-time':'Friday, 3 May.',
   },
];

export const featureProducts = [
   [
      {
         name: 'M123456789hrervnjkjsbkjdjvbhvjncjksnj',
         image: './src/images/watch.jpg',
         price: '',
      },
      {
         name: 'M2',
         image: './src/images/watch.jpg',
         price: '',
      },
      {
         name: 'M3',
         image: './src/images/watch.jpg',
         price: '',
      },
      {
         name: 'M4',
         image: './src/images/watch.jpg',
         price: '',
      }
   ],
   [
      {
         name: 'L1',
         image: 'https://source.unsplash.com/random/200x300?laptop',
         price: '',
      },
      {
         name: 'L2',
         image: 'https://source.unsplash.com/200x300/?laptop',
         price: '',
      },
      {
         name: 'L3',
         image: 'https://www.pexels.com/search/laptop/',
         price: '',
      },
      {
         name: 'L4',
         image: 'https://picsum.photos/id/237/200/300',
         price: '',
      }
   ],
   [
      {
         name: 'W1',
         image: 'https://picsum.photos/id/237/200/300',
         price: '',
      },
      {
         name: 'W2',
         image: 'https://picsum.photos/id/237/200/300',
         price: '',
      },
      {
         name: 'W3',
         image: 'https://picsum.photos/id/237/200/300',
         price: '',
      },
      {
         name: 'W4',
         image: 'https://picsum.photos/id/237/200/300',
         price: '',
      }
   ],
   [
      {
         name: 'C1',
         image: 'https://picsum.photos/id/237/200/300',
         price: '',
      },
      {
         name: 'C2',
         image: 'https://picsum.photos/id/237/200/300',
         price: '',
      },
      {
         name: 'C3',
         image: 'https://picsum.photos/id/237/200/300',
         price: '',
      },
      {
         name: 'C4',
         image: 'https://picsum.photos/id/237/200/300',
         price: '',
      }
   ]
];

export const slides = [
   {
      id: '1',
      name: 'Ailun Glass Screen Protector for iPhone 14 / iPhone 13/ Pro [6.1 Inch] Display 3 Pack Tempered Glass Ailun Glass Screen Protector for iPhone 14 / iPhone 13/ Pro [6.1 Inch] Display 3 Pack Tempered Glass Ailun Glass Screen Protector for iPhone 14 / iPhone 13/ Pro [6.1 Inch] Display 3 Pack Tempered Glass',
      image: './src/images/feat8.jpg',
      price: '7.09',
      rating: {
         stars: '',
         counts: '124.344'
      }
   },
   {
      id: '2',
      name: 'Ailun Glass Screen Protector for iPhone 14 / iPhone 13/ Pro [6.1 Inch] Display 3 Pack Tempered Glass',
      image: './src/images/feat8.jpg',
      price: '7.09',
      rating: {
         stars: '',
         counts: '124.344'
      }
   },
   {
      id: '3',
      name: 'Ailun Glass Screen Protector for iPhone 14 / iPhone 13/ Pro [6.1 Inch] Display 3 Pack Tempered Glass',
      image: './src/images/feat8.jpg',
      price: '7.09',
      rating: {
         stars: '',
         counts: '124.344'
      }
   },
   {
      id: '6',
      name: 'Ailun Glass Screen Protector for iPhone 14 / iPhone 13/ Pro [6.1 Inch] Display 3 Pack Tempered Glass',
      image: './src/images/feat8.jpg',
      price: '7.09',
      rating: {
         stars: '',
         counts: '124.344'
      }
   },
   {
      id: '5',
      name: 'Ailun Glass Screen Protector for iPhone 14 / iPhone 13/ Pro [6.1 Inch] Display 3 Pack Tempered Glass',
      image: './src/images/feat8.jpg',
      price: '7.09',
      rating: {
         stars: '',
         counts: '124.344'
      }
   },
   {
      id: '6',
      name: 'Ailun Glass Screen Protector for iPhone 14 / iPhone 13/ Pro [6.1 Inch] Display 3 Pack Tempered Glass',
      image: './src/images/feat8.jpg',
      price: '7.09',
      rating: {
         stars: '',
         counts: '124.344'
      }
   },
   {
      id: '7',
      name: 'Ailun Glass Screen Protector for iPhone 14 / iPhone 13/ Pro [6.1 Inch] Display 3 Pack Tempered Glass',
      image: './src/images/feat8.jpg',
      price: '7.09',
      rating: {
         stars: '',
         counts: '124.344'
      }
   },
   {
      id: '8',
      name: 'Ailun Glass Screen Protector for iPhone 14 / iPhone 13/ Pro [6.1 Inch] Display 3 Pack Tempered Glass',
      image: './src/images/feat8.jpg',
      price: '7.09',
      rating: {
         stars: '',
         counts: '124.344'
      }
   },
   {
      id: '9',
      name: 'Ailun Glass Screen Protector for iPhone 14 / iPhone 13/ Pro [6.1 Inch] Display 3 Pack Tempered Glass',
      image: './src/images/feat8.jpg',
      price: '7.09',
      rating: {
         stars: '',
         counts: '124.344'
      }
   },
   {
      id: '10',
      name: 'Ailun Glass Screen Protector for iPhone 14 / iPhone 13/ Pro [6.1 Inch] Display 3 Pack Tempered Glass',
      image: './src/images/feat8.jpg',
      price: '7.09',
      rating: {
         stars: '',
         counts: '124.344'
      }
   },
   {
      id: '11',
      name: 'Ailun Glass Screen Protector for iPhone 14 / iPhone 13/ Pro [6.1 Inch] Display 3 Pack Tempered Glass',
      image: './src/images/feat8.jpg',
      price: '7.09',
      rating: {
         stars: '',
         counts: '124.344'
      }
   },
   {
      id: '12',
      name: 'Ailun Glass Screen Protector for iPhone 14 / iPhone 13/ Pro [6.1 Inch] Display 3 Pack Tempered Glass',
      image: './src/images/feat8.jpg',
      price: '7.09',
      rating: {
         stars: '',
         counts: '124.344'
      }
   },
]

export const movies = [
   {
      id: '1',
      image: './src/images/movie1.jpg',
      title: '',
      price: '',
   },
   {
      id: '2',
      image: './src/images/movie2.jpg',
      title: '',
      price: '',
   },
   {
      id: '3',
      image: './src/images/movie3.jpg',
      title: '',
      price: '',
   },
   {
      id: '4',
      image: './src/images/movie9.jpg',
      title: '',
      price: '',
   },
   {
      id: '5',
      image: './src/images/movie5.jpg',
      title: '',
      price: '',
   },
   {
      id: '6',
      image: './src/images/movie6.jpg',
      title: '',
      price: '',
   },
   {
      id: '7',
      image: './src/images/movie7.jpg',
      title: '',
      price: '',
   },
   {
      id: '8',
      image: './src/images/movie8.jpg',
      title: '',
      price: '',
   },
   {
      id: '9',
      image: './src/images/movie9.jpg',
      title: '',
      price: '',
   },
   {
      id: '10',
      image: './src/images/movie1.jpg',
      title: '',
      price: '',
   },
   {
      id: '11',
      image: './src/images/movie3.jpg',
      title: '',
      price: '',
   },
   {
      id: '12',
      image: './src/images/movie7.jpg',
      title: '',
      price: '',
   },
]

export const cart = [
   {
      id: '1',
      name: 'No 1 Ailun Glass Screen Protector for iPhone 14 / iPhone 13/ Pro [6.1 Inch] Display 3 Pack Tempered Glass Ailun Glass Screen Protector for iPhone 14 / iPhone 13/ Pro [6.1 Inch] Display 3 Pack Tempered Glass Ailun Glass Screen Protector for iPhone 14 / iPhone 13/ Pro [6.1 Inch] Display 3 Pack Tempered Glass',
      image: './src/images/feat7.jpg',
      price: 7.09,
      seller: '...',
      shipping: false,
      rating: {
         stars: '',
         counts: '124.344'
      }
   },
   {
      id: '2',
      name: 'no 2 Ailun Glass Screen Protector for iPhone 14 / iPhone 13/ Pro [6.1 Inch] Display 3 Pack Tempered Glass',
      image: './src/images/feat8.jpg',
      price: 7.09,
      seller: 'Manu Sharma',
      shipping: true,
      rating: {
         stars: '',
         counts: '124.344'
      }
   },
];