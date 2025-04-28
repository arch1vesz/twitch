// /api/shoutout.js
export default async function handler(req, res) {
    const { sender = "Usuario", touser = "" } = req.query;
  
    // Si no se escribe nada en query o si el 'touser' es igual al 'sender'
    if (!touser || touser.trim() === "" || touser === sender) {
      res.setHeader("Content-Type", "text/plain");
      return res.status(200).send(`¡${sender}, debes mencionar a alguien más para hacer un shoutout! 😉 Usa: !shoutout @usuario`);
    } else {
      try {
        // Haciendo una solicitud GET a la API de Twitch
        const response = await fetch(`https://decapi.me/twitch/game/${touser}`);
  
        // Verificamos si la respuesta fue exitosa
        if (!response.ok) {
          throw new Error('Error al obtener la información de la API');
        }
  
        // Parseamos la respuesta como JSON
        const game = await response.text();  // Usamos `.text()` en lugar de `.json()` porque la respuesta es texto, no JSON
  
        // Verificamos si se obtuvo un resultado válido
        if (!game || game === "undefined") {
          throw new Error('No se encontró el juego para este usuario');
        }
  
        // Armar el mensaje final
        const so = [
          `Vayan a seguir a ${touser} 💖 en https://twitch.tv/${touser}, que trae contenido buenísimo con: ${game}.`,
          `Vayan a seguir a ${touser} para que nos siga trayendo más contenido de ${game} en: https://twitch.tv/${touser} 💖`,
          `Vayan y dejen su follow a ${touser} 💖 en https://twitch.tv/${touser}, que estaba transmitiendo: ${game}.`
        ];
  
        const randomSo = Math.floor(Math.random() * so.length);
        res.setHeader("Content-Type", "text/plain");
        return res.status(200).send(so[randomSo]);
  
      } catch (error) {
        console.error("Error al hacer la solicitud:", error);
        res.status(500).send("Hubo un error al obtener la información del usuario.");
      }
    }
  }
  
