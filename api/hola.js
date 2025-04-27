// /api/hola.js
export default function handler(req, res) {
  const { sender = "Usuario", touser = "", query = "" } = req.query;

  // Función para encontrar el primer @usuario en el query y asegurarse que tenga el formato correcto
  const encontrarUsuarioMencionado = (texto) => {
    if (!texto) return null;  // Si no hay texto, retornamos null
    // Aseguramos que el texto comience con @, sino lo añadimos
    if (texto.startsWith('@')) {
      return texto;
    } else {
      return `@${texto}`; // Añadimos el @ si no está presente
    }
  };

  // Si `query` está vacío, no asignamos un valor para `objetivo`
  const objetivo = query ? encontrarUsuarioMencionado(query) : null;
  const objetivo = touser ? encontrarUsuarioMencionado(touser) : null;

  res.setHeader("Content-Type", "text/plain");

  // Verificamos si el objetivo no está presente o si es el mismo usuario
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
