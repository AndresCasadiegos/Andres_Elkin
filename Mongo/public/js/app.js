const contactForm = document.querySelector('.contact-form');


let inputnombre   =document.querySelector("#name")
let inputcorreos =document.querySelector("#email")
let inputsubjec =document.querySelector("#subject")
let inputmensajes =document.querySelector("#message")



contactForm.addEventListener('submit',async (e)=>{
    e.preventDefault();
    console.log(inputnombre.value,
        inputcorreos.value,
        inputsubjec.value,
        inputmensajes.value);
    let objeto = {
        nombre: inputnombre.value,
        email: inputcorreos.value,
        subject: inputsubjec.value,
        mensaje: inputmensajes.value
    }
    console.log(objeto);
    const request = await fetch("http://localhost:1234/api/guardarCorreo",{
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify(objeto)
    })
    const data = await request.json()
    console.log(data);
    

    let xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'sucess'){
            alert('Email sent');
            inputnombre.value = '';
            inputcorreos.value = '';
            inputsubjec.value = '';
            inputmensajes.value = '';
        }else{
            alert('somenthing went wrong')
        }
    }


    


})


