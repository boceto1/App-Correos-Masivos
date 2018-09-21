
function limpiarCampos (elementos){

    elementos.forEach(elemento => {
        document.getElementById(elemento).value="";
    });

}

function registrarUsuario(){

    let nombre = document.getElementById('txtNombre').value;
    let email = document.getElementById('txtEmail').value;

    $.post("/api/usuarios",
    {
        nombre,
        email
    },
    function(data, status){
        if(data.ok){
            alert("Correo registrado con éxito");
            limpiarCampos(['txtNombre','txtEmail']);
        }else{
            alert("Error al registrar el usuario");  
        } 
    }).catch(error=>{
        let err = error.responseJSON.err.message
        alert(`Error: ${err}`)
    });
}


function enviarCorreo (){

    let asunto = document.getElementById('txtAsunto').value;
    let texto = document.getElementById('txtTextoCorreo').value;
    
    let destinatarios = usuarios.join(',')

    $.post("/api/enviarCorreo",
    {
        destinatarios ,
        asunto,
        texto
    },
    function(data, status){
        if(data.ok){
            alert("Correo enviado con éxito");
            limpiarCampos(['txtAsunto','txtTextoCorreo']);
        }else{
            alert("Error al enviar correos");  
        } 
    }).catch(error=>{
        let err = error.responseJSON.err.message
        alert(`Error: ${err}`)
    });


}