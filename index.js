// ================== all requierd packages ====================
const cors = require("cors");
const bodyParser = require('body-parser');
const formData = require('express-form-data');
const dotenv = require('dotenv')

//========================= INITIALIZE EXPRESS APP ================
const express = require('express');
let app = express();
// ====================  GLOBAL MIDDLEWARE ====================
app.use(express.json());

app.use(express.urlencoded({ extended: true })); 
app.use(cors()); 
dotenv.config(); 


  
//============================ Connect DB ==================================
const DbConnection = require('./DbConnection/db')
DbConnection() ;
//==================== Requierd Routers ====================================


app.listen(process.env.PORT || 8000 , ()=>{console.log(`The server is connected in port ${process.env.PORT}`)})
