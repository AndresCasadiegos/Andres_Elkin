const {model , Schema} = require("mongoose")


const correoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mensaje:{
        type: String,
        required: true
    }, 
    subject:{
        type: String
    }
})

module.exports = model("Correo", correoSchema, "Correos")


