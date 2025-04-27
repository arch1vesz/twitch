// /api/hola.js
export default function handler(req, res) {
  const { sender = "Usuario", touser = "", query = "" } = req.query;

  // Función para encontrar el primer @usuario
  const encontrarUsuarioMencionado = (touserTexto, queryTexto) => {
    if (touserTexto.startsWith('@')) {
      return touserTexto;
    }else{
      if (queryTexto) {
      const palabras = queryTexto.trim().split(/\s+/);
      const mencion = palabras.find(palabra => palabra.startsWith('@'));
      return mencion;
    }    
  };

  const objetivo = encontrarUsuarioMencionado(touser, query);

  res.setHeader("Content-Type", "text/plain");

  if (!objetivo || objetivo.toLowerCase() === `@${sender.toLowerCase()}`) {
    const saludos = [
      `👋 ¡Hola ${sender}! ¡Bienvenido/a al stream! ¿Cómo te encuentras? 😄`,
      `🌞 ¡Buenas buenas ${sender}! ¿Cómo andamos? 👋`,
      `🙋‍♂️ ¡Saludos ${sender}! ¿Cómo te trata la buena vida? 🎉`
    ];
    const randomSaludo = Math.floor(Math.random() * saludos.length);
    res.status(200).send(saludos[randomSaludo]);
  } else {
    const saludos = [
      `👋 ¡Hola ${objetivo}! ${sender} te saluda con mucho cariño. 😄`,
      `🌟 ¡Buenas buenas ${objetivo}! ${sender} te manda un gran saludo. 👋`,
      `🙋‍♂️ ¡Saludos ${objetivo}! ${sender} está muy feliz de verte. 🎉`
    ];
    const randomSaludo = Math.floor(Math.random() * saludos.length);
    res.status(200).send(saludos[randomSaludo]);
  }
}
