// CREANDO UN USUARIO EN NUESTRA API DE TO-DO
const urlNewUser = 'https://ctd-todo-api.herokuapp.com/v1/users';

// objeto con datos para enviar en el body
const payload = {
    firstName: "Mateo",
    lastName: "Cernaz",
    email: "mateo@mail.com",
    password: "123456"
};

// objeto con las configuraciones de la peticion: METODO, HEADERS, BODY
const options = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
        'Content-Type': 'application/json'
    }
};

// ejecutamos la creacion a traves de POST
fetch(urlNewUser, options)
    .then((response) => response.json())
    .then((json) => console.log(json));
