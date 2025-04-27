// /api/hola.js
export default function handler(req, res) {
  const { sender = "Usuario", touser = "", query = "" } = req.query;

  // Función para encontrar el primer @usuario en el query
  const encontrarUsuarioMencionado = (texto) => {
    if (texto && texto.startsWith('@')) {
      return texto;
    }
    if (query) {
      // Buscar la primera palabra que empiece con @
      const palabras = query.trim().split(/\s+/);
      const mencion = palabras.find(palabra => palabra.startsWith('@'));
      return mencion || null;
    }
    return null;
  };

  const objetivo = encontrarUsuarioMencionado(touser);

  res.setHeader("Content-Type", "text/plain");

  if (!objetivo || objetivo.toLowerCase() === `@${sender.toLowerCase()}`) {
    // No hay mención o es uno mismo
    const saludos = [
      `👋 ¡Hola ${sender}! ¡Bienvenido/a al stream! ¿Cómo te encuentras? 😄`,
      `🌞 ¡Buenas buenas ${sender}! ¿Cómo andamos? 👋`,
      `🙋‍♂️ ¡Saludos ${sender}! ¿Cómo te trata la buena vida? 🎉`
    ];
    const randomSaludo = Math.floor(Math.random() * saludos.length);
    res.status(200).send(saludos[randomSaludo]);
  } else {
    // Hay un @usuario detectado
    const saludos = [
      `👋 ¡Hola ${objetivo}! ${sender} te saluda con mucho cariño. 😄`,
      `🌟 ¡Buenas buenas ${objetivo}! ${sender} te manda un gran saludo. 👋`,
      `🙋‍♂️ ¡Saludos ${objetivo}! ${sender} está muy feliz de verte. 🎉`
    ];
    const randomSaludo = Math.floor(Math.random() * saludos.length);
    res.status(200).send(saludos[randomSaludo]);
  }
}
