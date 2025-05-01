// /api/shoutout.js
export default async function handler(req, res) {
    const { sender = "Usuario", touser = "" } = req.query;

    // Si no se escribe nada en query o si el 'touser' es igual al 'sender'
    if (!touser || touser.trim() === "" || touser === sender) {
        res.setHeader("Content-Type", "text/plain");
        return res.status(200).send(`¡${sender}, debes mencionar a alguien más para hacer un shoutout! 😉 Usa: !shoutout @usuario`);
    } else {
        try {
            const cleanTouser = touser.replace('@', '');
            // Haciendo una solicitud GET a la API de Twitch
            const response = await fetch(`https://decapi.me/twitch/game/${touser}`);

            // Verificamos si la respuesta fue exitosa
            if (!response.ok) {
                throw new Error('Error al obtener la información de la API');
            }

            // Parseamos la respuesta como JSON
            const game = await response.text();  // Usamos `.text()` en lugar de `.json()` porque la respuesta es texto, no JSON

            // Verificamos si se obtuvo un resultado válido
            if (game === `User not found: ${cleanTouser}`) {
                res.setHeader("Content-Type", "text/plain");
                return res.status(200).send(`¡${sender}, menciona al usuario correctamente! 😉 Intentalo de nuevo.`);
            } else {
                // Armar el mensaje final
                const so = [
                    `🚨 ¡ALERTA! Hemos sido invadidos por ${touser} y su tropa de leyendas 💖 vayan a seguirle  en https://twitch.tv/${cleanTouser}, que trae contenido buenísimo en: ${game}.`,
                    `🔥 El canal sube de temperatura gracias a ${touser} ¡Gracias por traer tu party de campeones! Vayan a seguirle para que nos siga trayendo más contenido de ${game} en: https://twitch.tv/${cleanTouser} 💖`,
                    `⚔️ ¡Un ejército ha llegado! Gracias por el raid, ${touser}, ahora esto se va a poner bueno (o raro, depende) 🤔 Pero vayan y dejenle su follow en https://twitch.tv/${cleanTouser} 💖 que estaba transmitiendo: ${game}.`,
                    `¡OJO! Nos cae una banda de leyendas, acomódensen, pongan su mejor cara 👀 y no olviden seguirlo en https://twitch.tv/${cleanTouser} 💖 para que nos siga trayendo más contenido de: ${game}.`,
                    `¿Una raid? ¡Esto se puso serio! Activen el modo pro, saquen las papas 🍟 y vayan a dejarle un buen follow a https://twitch.tv/${cleanTouser} 💖 para que nos siga sorprendiendo en: ${game}.`,
                    `¡Miren nada más quiénes llegaron! Bienvenidos al lugar donde hasta los fails brillan 💫, ${touser}, gracias por la Raid 💖 ¿Cómo les fue en ${game}? No olviden ir a dejarle su follow a https://twitch.tv/${cleanTouser}`
                ];

                const randomSo = Math.floor(Math.random() * so.length);
                res.setHeader("Content-Type", "text/plain");
                return res.status(200).send(so[randomSo]);
            }



        } catch (error) {
            console.error("Error al hacer la solicitud:", error);
            res.status(500).send("Hubo un error al obtener la información del usuario.");
        }
    }
}
