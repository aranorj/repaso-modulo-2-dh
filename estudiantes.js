const fs = require('fs');

let manejadorEstudiante = {
    importar: function(curso) {
       let jsonEstudiantes = fs.readFileSync( __dirname + `/estudiantes${curso}.json`, 'utf-8' );
       let arrayEstudiantes = JSON.parse(jsonEstudiantes);
       /*agrego funcionalidad x a la importacion*/
       return arrayEstudiantes;
    },
    filtrarMayoresDe: function (edad, estudiantes) {
        return estudiantes.filter((estudiante)=>estudiante.edad>=edad)
    } 
}

let cursos = { 
    cii: "CCII",
    ctd: "CTD"
}

function Estudiante(edad, nombre, apellido, curso){
    this.edad = edad;
    this.nombre = nombre;
    this.apellido = apellido;
    this.curso = curso;
}

let arrayEst = [ new Estudiante(24, "Gonzalo", "Perez", "Curso Intesivo FS"), new Estudiante(32, "Juan", "Perez", "Curso CTD")]


module.exports = {manejadorEstudiante, cursos, Estudiante}

