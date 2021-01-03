const express =require("express")
const dotenv = require('dotenv')
// const cookieParser=require("cookie-parser")
// const logger=require("morgan")
const cors=require("cors")
// const path = require('path')

const app=express();
app.use(cors());

dotenv.config();

const server = require('http').createServer(app);


const whatsapp = require('./routes/whatsappRoute')


app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Credentials","true");
  res.header("Access-Control-Allow-Methods",'GET','POST','DELETE','PUT','OPTION');
  res.header(
      'Access-Control-Allow-Headers',
      'Origin,X-Requested-With,Content-Type,Accept,Authorization'
  );
  next();
})


app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({extended:true,limit:'50mb'}))
// app.use(cookieParser());    
//app.use(logger('dev'))


// Routes
app.use("/node/api/whatsapp", whatsapp)
app.get('/', (req, res) => { res.send('Hello from Express!')})


server.listen(process.env.PORT || 5000,()=>{
    console.log("Running 5000!!")
})
