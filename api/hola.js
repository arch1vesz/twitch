// /api/hola.js
export default function handler(req, res) {
  const { user = "Usuario", query = "" } = req.query;

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

  res.setHeader("Content-Type", "text/plain");

  // Verificamos si el objetivo no está presente o si es el mismo usuario
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
