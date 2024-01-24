const {manejadorEstudiante, cursos} = require('./estudiantes');

//loguear estudiantes del curso de CTD mayores a 30 años 

//estudiantes 
let estudiantesCTD = manejadorEstudiante.importar(cursos.ctd);
let estudiantesCTDMasDe30 = manejadorEstudiante.filtrarMayoresDe(30, estudiantesCTD);

console.log(estudiantesCTD);

console.log(estudiantesCTDMasDe30);