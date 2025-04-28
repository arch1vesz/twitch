// /api/shoutout.js
export default async function handler(req, res) {
    const { sender = "Usuario", touser = "" } = req.query;
    let game = "";

    // Si no se escribe nada en query
    if (!touser || touser.trim() === "" || touser === sender) {
        res.setHeader("Content-Type", "text/plain");
        return res.status(200).send(`¡${sender}, debes mencionar a alguien más para hacer un shoutout! 😉 Usa: !shoutout @usuario`);
    } else {
        try {
            // Haciendo una solicitud GET a una API
            const response = await fetch(`https://decapi.me/twitch/game/${touser}`);
            const data = await response.json();
            game = data;  // Asignamos el juego
        } catch (error) {
            console.error("Error al obtener el juego:", error);
            game = "un juego increíble";  // Valor por defecto en caso de error
        }
    }

    // Armar el mensaje final
    const so = [
        `Vayan a seguir a ${touser} 💖 en https://twitch.tv/${touser}, que trae contenido buenísimo con: ${game}.`,
        `Vayan a seguir a ${touser} para que nos siga trayendo más contenido de ${game} en: https://twitch.tv/${touser} 💖`,
        `Vayan y dejen su follow a ${touser} 💖 en https://twitch.tv/${touser}, que estaba transmitiendo: ${game}.`
    ];

    const randomSo = Math.floor(Math.random() * so.length);
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(so[randomSo]);  // Usamos 'so[randomSo]' en lugar de 'besos[randomSo]'
}
