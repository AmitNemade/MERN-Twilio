const express=require("express");
const router=express.Router();
 
const WhatsAppCtrl=require("../controllers/whatsappController");

router.post("/sendMessage/",WhatsAppCtrl.SendMessage);
router.post("/webhook/",WhatsAppCtrl.Webhook);

module.exports=router;
