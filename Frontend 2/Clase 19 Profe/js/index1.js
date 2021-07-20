// CREANDO UN USUARIO EN NUESTRA API DE TO-DO
const urlNewUser = 'https://ctd-todo-api.herokuapp.com/v1/users';

// objeto con datos para enviar en el body
const payload = {
    firstName: "Julian",
    lastName: "Alvarado",
    email: "julian@mail.com",
    password: "654321"
};   

// objeto con las configuraciones de la peticion: METODO, HEADERS, BODY
const options = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
        'Content-Type': 'application/json'
    }
};

// Token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1bGlhbkBtYWlsLmNvbSIsImlkIjozNywiaWF0IjoxNjI2MTA1MjE4fQ.a88PFddnrGoxANEgiCLKLckoiXmywk6EmrL5yMDaYHg"
// ejecutamos la creacion a traves de POST
fetch(urlNewUser, options)
    .then((response) => response.json())
    .then((json) => console.log(json));