let usuarios = [];

$.get("/api/usuarios/correos", function (data, status) {

    if (data.ok) {
        usuarios = data.correos

        usuarios.forEach(correo => {
            $("tbody").append(`
            <tr><td>${correo}</td>
            <td><button type="button" class="btn btn-default">Deshabilitar</button></td>
            </tr>
            `); 
        });


    }
});
