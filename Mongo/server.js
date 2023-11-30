const cors = require ("cors")
const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 1234;
const controllerCorreos = require("./controllers/registro")
const nodemailer = require("nodemailer");

const conectionDB= require("./conexion/conexion.js")
conectionDB()
//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json({limit:"50mb"}))
app.use(cors())






app.get('/', (req, res)=>{
    res.sendFile(process.cwd() + '/public/contactform.html')
})

app.post('/', (req, res)=>{
    console.log(req.body);

    const trasporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'andrescasadiegos89@gmail.com',
            pass: 'akjl eyvz alpv gspr'
        }
    })

    const mailoptions = {
        from: req.body.email,
        to: 'andrescasadiegos89@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.mensaje
    } 

    trasporter.sendMail(mailoptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent: ' + info.response);
            res.send('sucess')
        }
    })
})

app.post("/api/guardarCorreo", controllerCorreos.guardarCorrero)


app.listen(PORT, ()=>{

    console.log(`Server running on port ${PORT}`)
})