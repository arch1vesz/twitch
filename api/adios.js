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
    return null;
  };

  // Si 'touser' no tiene valor, usamos 'query' para detectar mención de usuario
  const objetivo = encontrarUsuarioMencionado(touser, query);

  res.setHeader("Content-Type", "text/plain");

  // Si no hay mención (objetivo es null) o es el mismo usuario
  if (!objetivo || objetivo.toLowerCase() === `@${sender.toLowerCase()}`) {
    // No hay mención o es uno mismo
    const despedidas = [
      `👋 ¡Nos vemos ${sender}! Espero te haya gustado el Stream 😊`,
      `🌞 ¡Gracias por pasarte ${sender}! Nos vemos en la siguiente, cuidate 👋`,
      `🙋‍♂️ ¡Adeus adeus ${sender}! Nos veremos pronto 🎉`
    ];
    const randomDespedidas = Math.floor(Math.random() * despedidas.length);
    res.status(200).send(despedidas[randomDespedidas]);
  } else {
    // Hay un @usuario detectado (objetivo no es null y no es el mismo usuario)
    const despedidas = [
      `¿Por qué te vas? ¿Ya te aburristeS? 🥺`,
      `🌟 ¡Aiooos! te vamos a extrañar mucho, pero a algunos no les creas tanto 😅`,
      `¡No te vaaaayaas! Ya casi nos vamos todos 🥺`
    ];
    const randomDespedidas = Math.floor(Math.random() * despedidas.length);
    res.status(200).send(despedidas[randomDespedidas]);
  }
}
