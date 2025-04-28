// /api/shoutout.js
export default function handler(req, res) {
    const { sender = "Usuario", touser = "" } = req.query;
    let game = "";



    // Si no se escribe nada en query
    if (!touser || touser.trim() === "" || touser === sender) {
        res.setHeader("Content-Type", "text/plain");
        return res.status(200).send(`¡${sender}, debes mencionar a alguien más para hacer un shoutout! 😉 Usa: !shoutout @usuario`);
    } else {
        // Haciendo una solicitud GET a una API
        fetch(`https://decapi.me/twitch/game/${touser}`)
            .then(response => response.json()) // Parseamos la respuesta como JSON
            .then(data => {
                game = data;
            })
            .catch(error => { });
    }

    // Armar el mensaje final
    const so = [
        `Vayan a seguir a ${touser} 💖 en https://twitch.tv/${touser}, que trae contenido buenísimo con: ${game}.`,
        `Vayan a seguir a ${touser} para que nos siga trayendo más contenido de ${game} en: https://twitch.tv/${touser} 💖`,
        `Vayan y dejen su follow a ${touser} 💖 en https://twitch.tv/${touser}, que estaba transmitiendo: ${game}.`
    ];

    const randomSo = Math.floor(Math.random() * so.length);
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(so[randomSo]);
}
