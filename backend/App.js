const express = require("express");
const bcypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mySql = require("mysql2");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json())

const user = mySql.createConnection({
   host : "localhost",
   user : "root",
   port : "3800",
   password : "Ashangsko1234",
   database : "amazon_user",
   authPlugins: {
      caching_sha2_password: true
    }
})
user.connect((err) => {
   if (err) {
       console.error('Error connecting: ' + err.stack);
       return;
   }
   console.log('Connected as id ' + user.threadId);
});

const products = mySql.createConnection({
   host : "localhost",
   user : "root",
   port : "3800",
   password : "Ashangsko1234",
   database : "amazon_product",
   authPlugins: {
      caching_sha2_password: true
    }
})
products.connect((err) => {
   if (err) {
       console.error('Error connecting: ' + err.stack);
       return;
   }
   console.log('Connected as id ' + user.threadId);
});
const bcrypt = require('bcryptjs');

// Generate salt with 10 rounds (default)
const salt = bcrypt.genSaltSync(10);

// Hash the password with the generated salt
const hashedPassword = bcrypt.hashSync('your_password', salt);

console.log(hashedPassword);

const isValid = bcrypt.compareSync('your_password', hashedPassword);

if (isValid) {
  console.log('Password is valid');
} else {
  console.log('Invalid password');
}

//user.end();
app.post('/authuser', (req, res) => {
   const value = req.body.credential;
   console.log(value);
   console.log('from server')
   const q = "SELECT * FROM user_info WHERE phone = ?";

   user.query(q, [value], (err, data) => {
      if(err){
         console.log(err);
         return res.json(err)
      }
      const usr = data;
      console.log(usr);
      if(data.length === 0){
         console.log('user not found')
      }else{
         console.log('user found')
      }
      return res.json(data);
   })
})

app.post("/username", (req, res) => {
   const pw = req.body.credential;
   console.log(pw)
   const q = "SELECT * from user_info WHERE phone = ?"
})



app.get("/wanglem", (req, res) => {
   console.log("From backend")
   res.send('Hello from the backend!');
})
//ALl user
app.get("/users", (req, res) => {
   const q = "SELECT * FROM user_info";

   user.query(q, (err, data) => {
      if (err) {
         return res.json(err)
      }
      console.log(data)
      return res.json(data)
   })
})
//One user
app.get("/user/:id", (req, res) => {
   const userId = req.params.id;
   console.log(userId);
   const q = "SELECT * FROM user_info WHERE id = ?";

   user.query(q,[userId], (err, data) => {
      if (err) {
         return res.json(err)
      }
      console.log(data)
      return res.json(data)
   })
})
//All
app.get("/product", (req, res) => {
   const q = "SELECT * FROM products";
   products.query(q, (err, data) => {
      if (err) {
         return res.json(err)
      }
      return res.json(data)
   })
})
//4 only
app.get("/product/only4", (req, res) => {
   const q = "SELECT * FROM products LIMIT 4";
   products.query(q, (err, data) => {
      if (err) {
         return res.json(err)
      }
      return res.json(data)
   })
})
//4 from motor category
app.get("/product/category/wise", (req, res) => {
   const q = "SELECT * FROM products WHERE category = 'laptop' LIMIT 4";
   products.query(q, (err, data) => {
      if (err) {
         return res.json(err)
      }
      return res.json(data)
   })
})

app.listen(8000, () => {
   console.log("Connected")
})