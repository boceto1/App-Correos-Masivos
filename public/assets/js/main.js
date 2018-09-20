
function limpiarCampos (){
    document.getElementById('txtNombre').value="";
    document.getElementById('txtEmail').value="";

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
            limpiarCampos();
        }else{
            alert("Error al registrar el usuario");  
        } 
    }).catch(error=>{
        let err = error.responseJSON.err.message
        alert(`Error: ${err}`)
    });
}
