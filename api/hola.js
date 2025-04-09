// /api/hola.js
export default function handler(req, res) {
  const { user = "Usuario", touser } = req.query;

  // Verificamos si 'touser' está vacío, indefinido o nulo
  if (!touser || touser.trim() === "" || user.toLowerCase() === touser.toLowerCase()) {
    const saludos = [
    `👋 ¡Hola ${user}! Bienvenuto seas al Stream! Cómo te encuentras? 😄`,
    `🌞 ¡Buenas buenas ${user}! Cómo andamos? 👋`,
    `🙋‍♂️ ¡Saludos ${user}! Cömo te trata la buena vida? 🎉`
  ];

  // Seleccionamos un saludo aleatorio
  const randomSaludo = Math.floor(Math.random() * saludos.length);

  // Respondemos con el saludo
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(saludos[randomSaludo]);    
  }else{
     // Si 'touser' tiene valor, continuamos con el saludo
  const saludos = [
    `¡Hola ${touser}! ${user} te saluda con mucho cariño! 😄`,
    `¡Buenas buenas ${touser}! ¡${user} te manda un gran saludo! 👋`,
    `¡Saludos ${touser}! ${user} está muy feliz de verte. 🙋‍♂️`
  ];

  // Seleccionamos un saludo aleatorio
  const randomSaludo = Math.floor(Math.random() * saludos.length);

  // Respondemos con el saludo
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(saludos[randomSaludo]);
  }

 
}
