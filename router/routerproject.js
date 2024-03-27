const express=require("express");
const {dosaveprofile,doupdate,dofetch}=require("../controllers/controllerprofile");
const {dosaveemail,dofetchsignup}=require("../controllers/controllersign");
const { dosavegrower, doupdategrower ,dofetchgrower,doavailproduct,dofetchitems} = require("../controllers/controllergrower");
const { dofindgrower } = require("../controllers/controllerconsumer");
const { dosaveconsumer, doupdateconsumer, dofetchconsumer } = require("../controllers/controllerconsumer");
const validatetoken=require("../auth/validatetoken");
// const {dofetchsignup}=require("../controllers/controllerlogin");
const app=express.Router();
app.post("/add-profile",dosaveprofile);
// app.post("/delete-product",doremove);
app.post("/update-profile",doupdate);
app.get("/fetch-profile",dofetch);
app.post("/new-signup",dosaveemail);
app.post("/add-grower-profile",dosavegrower);
app.post("/update-grower-profile",doupdategrower);
app.get("/fetch-grower-profile",dofetchgrower);
app.post("/avail-product",doavailproduct);
app.get("/fetch-items",dofetchitems);
app.post("/fetch-signup",dofetchsignup);
app.get("/find-grower",dofindgrower);
app.post("/add-consumer-profile",dosaveconsumer);
app.post("/update-consumer-profile",doupdateconsumer);
app.get("/fetch-consumer-profile",dofetchconsumer);
app.get("/token-validation",validatetoken);
module.exports=app;