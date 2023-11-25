import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import axios from 'axios';
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());

 mongoose.connect("mongodb+srv://aman:hehe@cluster0.v6ixzty.mongodb.net/ghostuser", {useNewUrlParser:true} );

 const userSchema = {
  email: String ,
  password : String
 }

 const User = new mongoose.model("User", userSchema) ;
 const saltRounds = 10;
 var mainuser = "";
var data ="";
var userrr="";
var pass="" ;
var ide ;
var gamer ;



app.get('/api/filter', async (req, res) => {
  try {
    const response = await axios.get( 'https://www.freetogame.com/api/games' )
    res.json(response.data);
  } catch (error) {
    console.error('Axios Error:', error.message);
    console.error('Axios Response Data:', error.response ? error.response.data : 'N/A');
    console.error('Axios Response Status:', error.response ? error.response.status : 'N/A');
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/datas', async (req, res) => {
  ide = req.body.id;

  console.log("id: " + ide);

  gamer = `https://www.freetogame.com/api/game?id=${ide}`;
 

  res.json({ message: 'Gamer variable updated' });
});


app.get('/api', async (req, res) => {
  try {
    // console.log(gamer);
    const response = await axios.get(gamer, {
      params: req.query,
    });
    res.json(response.data);
  } catch (error) {
    console.error('Axios Error:', error.message);
    console.error('Axios Response Data:', error.response ? error.response.data : 'N/A');
    console.error('Axios Response Status:', error.response ? error.response.status : 'N/A');
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.get('/p',(req,res) => {

  res.send(mainuser);
})






app.post('/datasppp', (req, res) => {
  userrr =req.body.email;
  pass =req.body.password;

 console.log("login user : " + userrr.userrr);



 User.findOne({email: userrr.userrr })
  .then((found) => {
   if(found){

    bcrypt.compare( pass.pass ,found.password, function(err, result) {
    mainuser = found.email ;
    console.log(found.email);
   res.json({ message: 'found user' });
   console.log('user found and authenticated :' + found);
  });

   }else{
     res.json({ message: 'not found user' });  
     console.log("no user");
   }
     })
  .catch((err) => {
       console.log(err);
     });
});
app.post('/data', (req, res) => {
  const {name } = req.body; 
  



 data=name ;
 console.log("received name :", data); 
 

 
 User.findOne({email: data})
 .then((found) => {
  if(found){
  
  res.json({ message: 'Alreadyuser' });
  }else{
      
  if(data !== "" && req.body.password !== undefined ){
  
    bcrypt.hash(req.body.password , saltRounds, function(err, hash) {
      var user1 = new User ({
        email: data,
        password : hash
        
       })
       console.log(user1);
       user1.save();   

    });
  }

    mainuser = data ;
    console.log(data);
    res.json({ message: 'data saved successfully' });  
  }
    })
 .catch((err) => {
      console.log(err);
    });


});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
