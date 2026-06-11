//console.log('Hello, World!');// Este es un comentario de una sola línea
//require('./js-foundation/01-template');// requerimos el módulo, pero no guardamos su exportación en una variable, por lo que no podemos acceder a ella directamente. Sin embargo, si el módulo tiene efectos secundarios (como imprimir algo en la consola), esos efectos se ejecutarán al requerirlo.

//const templateModule = require('./js-foundation/01-template');
//console.log(templateEXPORTS);

//sintaxis tradicional de importación de módulos en Node.js, donde se asigna el resultado de require a una variable (templateModule) y luego se accede a la propiedad emailTemplate a través de esa variable. Esto es útil cuando el módulo exporta múltiples propiedades o funciones, ya que permite acceder a todas ellas a través de la variable asignada.
const {emailTemplate} = require('./js-foundation/01-template');// Aquí estamos utilizando la desestructuración para extraer la propiedad emailTemplate del objeto exportado por el módulo './js-foundation/01-template'. Esto nos permite acceder directamente a emailTemplate sin necesidad de referirnos al objeto completo.
console.log(emailTemplate);

require('./js-foundation/02-destructuring');
