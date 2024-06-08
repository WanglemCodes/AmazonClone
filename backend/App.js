const express = require("express");
const mySql = require("mysql");
const cors = require("cors");


const app = express();
app.use(cors());

const db = mySql.createConnection({
   host : "localHost",
   user : "Wang",
   port : "3100",
   password : "Wang1234",
   database : "amazon_user"
})
db.connect((err) => {
   if (err) {
       console.error('Error connecting: ' + err.stack);
       return;
   }
   console.log('Connected as id ' + db.threadId);
});

//db.end();

app.get("/wanglem", (req, res) => {
   console.log("From backend")
   res.send('Hello from the backend!');
})
app.get("/wang", (req, res) => {
   const q = "SELECT * FROM user";
   db.query(q, (err, data) => {
      if (err) {
         return res.json(err)
      }
      return res.json(data)
   })
})

app.listen(8000, () => {
   console.log("Connected")
})