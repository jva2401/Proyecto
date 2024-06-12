//Usuarios methods api controllers
const EliminaRegistro = (event) => {
    let codigo = event.target.parentElement.parentElement.children[0].innerHTML;

    const url = `https://proyecto-hs90.onrender.com/api/users/${codigo}`;

    axios.delete(url)
    .then(response => {
        alert(response.data.message);
        // Opcional: eliminar la fila de la tabla
        document.getElementById(`user-${codigo}`).remove();
    })
    .catch(error => {
        alert(error.response.data.message);
    });
};

const showEditForm = (id) => {
    const row = document.getElementById(`user-${id}`);
    const nombre = row.children[1].innerHTML;
    const email = row.children[2].innerHTML;

    document.getElementById('editUserId').value = id;
    document.getElementById('editUserName').value = nombre;
    document.getElementById('editUserEmail').value = email;

    document.getElementById('editForm').style.display = 'block';
};

const closeEditForm = () => {
    document.getElementById('editForm').style.display = 'none';
};

const GuardarCambios = (event) => {
    event.preventDefault();

    const id = document.getElementById('editUserId').value;
    const nombre = document.getElementById('editUserName').value;
    const email = document.getElementById('editUserEmail').value;

    const url = `https://proyecto-hs90.onrender.com/api/users/${id}`;

    let token = "";
    const cookieToken = document.cookie;

    if (cookieToken) {
        const cookies = cookieToken.split(';');
        cookies.forEach(cookie => {
            const [nombre, valor] = cookie.split('=');
            if (nombre.trim() === 'token') {
                token = valor;
            }
        });
    } else {
        alert("Debe loguearse nuevamente");
        return;
    }

    if (token == "") {
        alert("Debe loguearse nuevamente");
        return;
    }

    const headers = {
        'x-access-token': token,
        'Content-type': 'application/json'
    };

    axios.put(url, { nombre, email }, { headers })
    .then(response => {
        alert('Registro actualizado: ' + response.data.message);
        document.getElementById(`user-${id}`).children[1].innerHTML = nombre;
        document.getElementById(`user-${id}`).children[2].innerHTML = email;
        closeEditForm();
    })
    .catch(error => {
        alert("Error al actualizar registro: " + error.response.data.message);
    });
};
const salirUsuario =  ()=>{
    document.cookie = "token="
}
const GuardarUsuario = () => {
    const nombre = document.getElementById('nombres').value;
    const email = document.getElementById('correo').value;
    const password = document.getElementById('password').value;
    const rol = document.getElementById('rol').value;

    const url = "https://proyecto-hs90.onrender.com/api/users";

    let token = "";
    const cookieToken = document.cookie;

    if (cookieToken) {
        const cookies = cookieToken.split(';');
        cookies.forEach(cookie => {
            const [nombre, valor] = cookie.split('=');
            if (nombre.trim() === 'token') {
                token = valor;
            }
        });
    } else {
        alert("Debe loguearse nuevamente");
        return;
    }

    if (token == "") {
        alert("Debe loguearse nuevamente");
        return;
    }

    const headers = {
        'x-access-token': token,
        'Content-type': 'application/json'
    };

    axios.post(url, {
        nombre,
        email,
        password,
        rol
    }, { headers })
    .then(response => {
        alert('Registro guardado: ' + response.data.message);
        // Opcional: actualizar la lista de usuarios o limpiar el formulario
    })
    .catch(error => {
        alert("Error al guardar registro: " + error.response.data.message);
    });
};
// Clientes crud api controllers
// Clientes methods api controllers
const EliminaClientRegistro = (event) => {
    let codigo = event.target.parentElement.parentElement.children[0].innerHTML;

    const url = `https://proyecto-hs90.onrender.com/api/clients/${codigo}`;

    axios.delete(url)
    .then(response => {
        alert(response.data.message);
        // Opcional: eliminar la fila de la tabla
        document.getElementById(`client-${codigo}`).remove();
    })
    .catch(error => {
        alert(error.response.data.message);
    });
};

const showEditClientForm   = (id) => {
    const row = document.getElementById(`client-${id}`);
    const nombre = row.children[1].innerHTML;
    const direccion = row.children[2].innerHTML;
    const telefono = row.children[3].innerHTML;
    const email = row.children[4].innerHTML;

    document.getElementById('editClientId').value = id;
    document.getElementById('editClientName').value = nombre;
    document.getElementById('editDirrecion').value = direccion;
    document.getElementById('editTelefono').value = telefono;
    document.getElementById('editUserEmail').value = email;

    document.getElementById('editClientForm').style.display = 'block';
};

const closeEditClientForm  = () => {
    document.getElementById('editClientForm').style.display = 'none';
};

const GuardarCambiosClient = (event) => {
    event.preventDefault();

    const id = document.getElementById('editClientId').value;
    const nombre = document.getElementById('editClientName').value;
    const direccion = document.getElementById('editDirrecion').value;
    const telefono = document.getElementById('editTelefono').value;
    const email = document.getElementById('editUserEmail').value;

    const url = `https://proyecto-hs90.onrender.com/api/clients/${id}`;

    let token = "";
    const cookieToken = document.cookie;

    if (cookieToken) {
        const cookies = cookieToken.split(';');
        cookies.forEach(cookie => {
            const [nombre, valor] = cookie.split('=');
            if (nombre.trim() === 'token') {
                token = valor;
            }
        });
    } else {
        alert("Debe loguearse nuevamente");
        return;
    }

    if (token == "") {
        alert("Debe loguearse nuevamente");
        return;
    }

    const headers = {
        'x-access-token': token,
        'Content-type': 'application/json'
    };

    axios.put(url, { nombre, direccion, telefono, email }, { headers })
    .then(response => {
        alert('Registro actualizado: ' + response.data.message);
        document.getElementById(`client-${id}`).children[1].innerHTML = nombre;
        document.getElementById(`client-${id}`).children[2].innerHTML = direccion;
        document.getElementById(`client-${id}`).children[3].innerHTML = telefono;
        document.getElementById(`client-${id}`).children[4].innerHTML = email;
        closeEditForm();
    })
    .catch(error => {
        alert("Error al actualizar registro: " + error.response.data.message);
    });
};

const GuardarCliente = () => {
    const nombre = document.getElementById('nombresClient').value;
    const direccion = document.getElementById('direccionClient').value;
    const telefono = document.getElementById('telefonoClient').value;
    const email = document.getElementById('correoClient').value;

    const url = "https://proyecto-hs90.onrender.com/api/clients";

    let token = "";
    const cookieToken = document.cookie;

    if (cookieToken) {
        const cookies = cookieToken.split(';');
        cookies.forEach(cookie => {
            const [nombre, valor] = cookie.split('=');
            if (nombre.trim() === 'token') {
                token = valor;
            }
        });
    } else {
        alert("Debe loguearse nuevamente");
        return;
    }

    if (token == "") {
        alert("Debe loguearse nuevamente");
        return;
    }

    const headers = {
        'x-access-token': token,
        'Content-type': 'application/json'
    };

    axios.post(url, {
        nombre,
        email,
        direccion,
        telefono
    }, { headers })
    .then(response => {
        alert('Registro guardado: ' + response.data.message);
        // Opcional: actualizar la lista de usuarios o limpiar el formulario
    })
    .catch(error => {
        alert("Error al guardar registro: " + error.response.data.message);
    });
};
