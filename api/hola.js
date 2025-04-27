// /api/hola.js
export default function handler(req, res) {
  const { user = "Usuario", query = "" } = req.query;

  // Función para encontrar el primer @usuario en el query
  const encontrarUsuarioMencionado = (texto) => {
    if (!texto) return null;
    // Buscar la primera ocurrencia de @ seguido de texto
    const match = texto.match(/@(\w+)/);
    return match ? `@${match[1]}` : null;
  };

  const objetivo = encontrarUsuarioMencionado(query);

  res.setHeader("Content-Type", "text/plain");

  if (!objetivo || objetivo.toLowerCase() === `@${user.toLowerCase()}`) {
    // No hay mención o es uno mismo
    const saludos = [
      `👋 ¡Hola ${user}! ¡Bienvenido/a al stream! ¿Cómo te encuentras? 😄`,
      `🌞 ¡Buenas buenas ${user}! ¿Cómo andamos? 👋`,
      `🙋‍♂️ ¡Saludos ${user}! ¿Cómo te trata la buena vida? 🎉`
    ];
    const randomSaludo = Math.floor(Math.random() * saludos.length);
    res.status(200).send(saludos[randomSaludo]);
  } else {
    // Hay un @usuario detectado
    const saludos = [
      `👋 ¡Hola ${objetivo}! ${user} te saluda con mucho cariño. 😄`,
      `🌟 ¡Buenas buenas ${objetivo}! ${user} te manda un gran saludo. 👋`,
      `🙋‍♂️ ¡Saludos ${objetivo}! ${user} está muy feliz de verte. 🎉`
    ];
    const randomSaludo = Math.floor(Math.random() * saludos.length);
    res.status(200).send(saludos[randomSaludo]);
  }
}
