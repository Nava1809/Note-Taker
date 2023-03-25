const express = require("express");
require('dotenv').config();
const cors=require('cors');
const dbconnect=require('./connection/conn');
const bodyParser=require('body-parser');
const checkToken = require('./helper/verifytoken');


dbconnect();




const app = express();


const notesRoute=require('./routes/notesRoute')
const registerAndLogin = require('./routes/RegisterAndLogin');
const notesDetails=require('./routes/notesDetailsRoute')

app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())


app.use(registerAndLogin);



app.use('/notes',checkToken,notesRoute);



app.use('/notes',checkToken,notesDetails);




app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});
