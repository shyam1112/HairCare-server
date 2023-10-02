require('./db/config');

const express = require('express');
const User=require('./user');
const ShopData=require('./shopdata');
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(cors());

app.post('/shopreg',async(req,res)=>{
    let user=new User(req.body);
    let result=await user.save();
    res.send(result);
});

app.post("/shoplogin",async (req,res)=>{
    if(req.body.email && req.body.pass){
        let user=await User.findOne(req.body).select("-pass");
        if(user){
            res.send(user)
        }else{
            res.send({result:"No user found."});
        }
    }else{
        res.send({result:"No user found."});
    }
});

app.post('/addshopdata',async(req,res)=>{
    let shopdata=new ShopData(req.body);
    let result=await shopdata.save();
    res.send(result);
});

app.get('/getshopdata',async(req,res)=>{
    let result = await ShopData.find();
    res.send(result);
})

app.get('/profile/:id' , async (req,res)=>{
    let result= await ShopData.find({
        "$or":[
            {userId:{$regex:req.params.id}}
        ]
    });
    res.send(result);
})

app.get("/search/:key", async (req,res)=>{
    let result=await ShopData.find({
         "$or":[
            {shopname:{$regex:req.params.key}},
            {address:{$regex:req.params.key}}
         ]
    })
    res.send(result);
});

app.listen(4000, () => {
    console.log("listening on http://localhost:4000");
})