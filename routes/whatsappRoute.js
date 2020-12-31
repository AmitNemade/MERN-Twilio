const express=require("express");
const router=express.Router();
 
const WhatsAppCtrl=require("../controllers/whatsappController");

router.post("/sendMessage/",WhatsAppCtrl.SendMessage);

module.exports=router;
