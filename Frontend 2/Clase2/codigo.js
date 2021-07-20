let edad = parseFloat(prompt("Ingrese su edad"));

if (isNaN(edad) || edad <0) {
    console.log("Datos erroneos, reintente");
} else if (edad < 18){
    console.log("Es menor de edad");
} else {
    console.log("Es mayor de edad");
}

/* PRACTICA DE BUCLES */
const persona = {
    nombre: "Juan",
    edad: 28,
    cursadaRegular: true,
    direccion: {
        calle: "Libertador 2000",
        ciudad: "CABA"
    },
    materias: [ "Frontend 2", "Testing", "Infraestructura"]
};
console.log("FOR IN");
for (propiedades in persona) {
    console.log(propiedades)
};

console.log("FOR IN");
for (propiedades in persona) {
    console.log(persona[propiedades])
};

console.log("FOR OF");
for(materia of persona.materias){
    console.log(materia);   
};

const texto = "Frontend 2"
for (letra of texto){
    console.log(letra);
};