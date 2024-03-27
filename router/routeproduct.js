const express=require("express");
const {dosaveproduct,doremove,doupdate,dofetch}=require("../controllers/controllerproduct");
const app=express.Router();
app.post("/add-product",dosaveproduct);
app.post("/delete-product",doremove);
app.post("/update-product",doupdate);
app.post("/fetch-product",dofetch);
module.exports=app;