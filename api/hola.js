// /api/hola.js
export default function handler(req, res) {
  const { user = "Usuario", touser = "", query = "" } = req.query;

  // Función para detectar si un texto parece ser un usuario real
  const esUsuario = (texto) => {
    if (!texto) return false;
    const palabrasClave = ['hola', 'ola']; // Puedes agregar más
    return texto.startsWith('@') || !palabrasClave.includes(texto.toLowerCase());
  };

  let objetivo = '';

  // Determinar el objetivo correcto
  if (touser && esUsuario(touser)) {
    objetivo = touser;
  } else if (query && esUsuario(query)) {
    objetivo = query;
  }

  // Asegurarse que tenga un @ si no lo tiene
  if (objetivo && !objetivo.startsWith('@')) {
    objetivo = `@${objetivo}`;
  }

  res.setHeader("Content-Type", "text/plain");

  if (!objetivo || objetivo.toLowerCase() === user.toLowerCase()) {
    // Caso: saludo general al user
    const saludos = [
      `👋 ¡Hola ${user}! ¡Bienvenido/a al stream! ¿Cómo te encuentras? 😄`,
      `🌞 ¡Buenas buenas ${user}! ¿Cómo andamos? 👋`,
      `🙋‍♂️ ¡Saludos ${user}! ¿Cómo te trata la buena vida? 🎉`
    ];

    const randomSaludo = Math.floor(Math.random() * saludos.length);
    res.status(200).send(saludos[randomSaludo]);
  } else {
    // Caso: saludo dirigido a otra persona
    const saludos = [
      `👋 ¡Hola ${objetivo}! ${user} te saluda con mucho cariño. 😄`,
      `🌟 ¡Buenas buenas ${objetivo}! ${user} te manda un gran saludo. 👋`,
      `🙋‍♂️ ¡Saludos ${objetivo}! ${user} está muy feliz de verte. 🎉`
    ];

    const randomSaludo = Math.floor(Math.random() * saludos.length);
    res.status(200).send(saludos[randomSaludo]);
  }
}

