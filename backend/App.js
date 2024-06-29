const express = require("express");
const mySql = require("mysql2");
const cors = require("cors");


const app = express();
app.use(cors());
//app.use(json())

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

//user.end();

app.get("/wanglem", (req, res) => {
   console.log("From backend")
   res.send('Hello from the backend!');
})
//ALl user
app.get("/user", (req, res) => {
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