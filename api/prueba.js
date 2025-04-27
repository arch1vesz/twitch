export default function handler(req, res) {
  try {
    const { user = "user", sender = "sender", touser = "touser", query = "query" } = req.query;

    // Si falta algún parámetro importante, devolver un error
    if (!user || !sender || !touser || !query) {
      return res.status(400).send("Faltan parámetros en la solicitud.");
    }

    const respuesta =  `user: ${user} - sender: ${sender} - touser: ${touser} - query: ${query}`;

    // Respondemos con el mensaje
    res.status(200).send(respuesta);
  } catch (error) {
    console.error("Error en la función:", error);
    res.status(500).send("Hubo un error al procesar la solicitud.");
  }
}
