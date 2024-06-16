const express = require("express");
const mySql = require("mysql");
const cors = require("cors");


const app = express();
app.use(cors());

const user = mySql.createConnection({
   host : "localHost",
   user : "Wang",
   port : "3100",
   password : "Wang1234",
   database : "amazon_user"
})
user.connect((err) => {
   if (err) {
       console.error('Error connecting: ' + err.stack);
       return;
   }
   console.log('Connected as id ' + user.threadId);
});

const products = mySql.createConnection({
   host : "localHost",
   user : "Wang",
   port : "3100",
   password : "Wang1234",
   database : "amazon_product"
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
app.get("/wang", (req, res) => {
   const q = "SELECT * FROM user";
   user.query(q, (err, data) => {
      if (err) {
         return res.json(err)
      }
      return res.json(data)
   })
})

app.get("/products", (req, res) => {
   const q = "SELECT * FROM products";
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