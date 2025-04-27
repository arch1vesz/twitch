// /api/hola.js
export default function handler(req, res) {
  try {
    const { sender = "Usuario", touser = "", query = "" } = req.query;

 const encontrarUsuarioMencionado = (touserTexto, queryTexto) => {
  // Si touser tiene un valor válido y empieza con '@', lo usamos directamente.
  if (touserTexto && touserTexto.startsWith('@')) {
    return touserTexto;
  }

  // Si no, buscamos la primera palabra que empiece con '@' en el query.
  if (queryTexto) {
    const palabras = queryTexto.trim().split(/\s+/); // Dividimos la cadena en palabras
    const mencion = palabras.find(palabra => palabra.startsWith('@')); // Buscamos la primera que empiece con '@'
    return mencion || null; // Si encontramos una mención, la retornamos, sino retornamos null
  }

  // Si no se encontró ninguna mención, devolvemos null
  return null;
};

    const objetivo = encontrarUsuarioMencionado(touser, query);

    res.setHeader("Content-Type", "text/plain");

    if (!objetivo) {
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
  } catch (error) {
    console.error("Error interno:", error);
    res.status(500).send("Error interno del servidor.");
  }
}
