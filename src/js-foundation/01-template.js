const emailTemplate = `
<div>
  <h1>Welcome to our Newsletter</h1>
  <p>Thank you for subscribing to our newsletter. We are excited to have you on board!</p>
  <p>Stay tuned for the latest updates, news, and exclusive offers.</p>
  <p>Best regards,<br>The Team</p>
 
</div>
`;

//console.log(emailTemplate);
module.exports = { emailTemplate };// Aquí estamos exportando un objeto que contiene la propiedad emailTemplate, que a su vez es una cadena de texto que representa una plantilla de correo electrónico en formato HTML. Al usar module.exports, estamos haciendo que esta plantilla esté disponible para ser importada y utilizada en otros archivos de nuestro proyecto.