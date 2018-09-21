let usuarios = [];

$.get("/api/usuarios/correos", function (data, status) {

    if (data.ok) {
        usuarios = data.correos

        usuarios.forEach(correo => {
            $("#listaCorreos").append(`<tr><td>${correo}</td><td>aqui va ir un boton</td></tr>`); 
        });


    }
    console.log(usuarios);
});
