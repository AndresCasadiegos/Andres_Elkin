const CorreoSchema = require("../modelos/correos")


async function guardarCorrero(req,res){


    const { email, nombre, mensaje, subject} = req.body
    console.log(email, nombre, mensaje, subject);

    if(!email || !nombre || !mensaje || !subject){
        return res.status(400).json({
            status: "error",
            message: "faltan datos por enviar"
        })
        
    }

    const guardarCorreo = await new CorreoSchema(req.body)

    const correoSaved = await guardarCorreo.save()
    if(!correoSaved){
        return res.status(400).json({
            status: "error"
        })
    }
    return res.status(200).json({
        status: "success",
        correoSaved
    })
}



module.exports ={
    guardarCorrero
}