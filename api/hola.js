export default function handler(req, res) {
  const { sender = "Usuario", touser = "", query = "" } = req.query;

  // Función para encontrar el primer @usuario en el query y asegurarse que tenga el formato correcto
  const encontrarUsuarioMencionado = (touserTexto, queryTexto) => {
    if (touserTexto && touserTexto.startsWith('@')) {
      return touserTexto;
    }
    if (queryTexto) {
      const palabras = queryTexto.trim().split(/\s+/);
      const mencion = palabras.find(palabra => palabra.startsWith('@'));
      if (mencion) {
        return mencion;
      }
    }
    return queryTexto;
  };

  // Si 'touser' no tiene valor, usamos 'query' para detectar mención de usuario
  const objetivo = encontrarUsuarioMencionado(touser, query);

  res.setHeader("Content-Type", "text/plain");

  // Si no hay mención (objetivo es null) o es el mismo usuario
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
    // Hay un @usuario detectado (objetivo no es null y no es el mismo usuario)
    const saludos = [
      `👋 ¡Hola ${objetivo}! ${sender} te saluda con mucho cariño. 😄`,
      `🌟 ¡Buenas buenas ${objetivo}! ${sender} te manda un gran saludo. 👋`,
      `🙋‍♂️ ¡Saludos ${objetivo}! ${sender} está muy feliz de verte. 🎉`
    ];
    const randomSaludo = Math.floor(Math.random() * saludos.length);
    res.status(200).send(saludos[randomSaludo]);
  }
}
