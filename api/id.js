// /api/id.js
export default async function handler(req, res) {

    const { sender = "Usuario", touser = "", channel = "" } = req.query;
    let user = "";
    let mensaje = "";

    if (!touser || touser.trim() === "") {
        user = sender;
    } else {
        user = touser;
    }

    try {
        // Haciendo una solicitud GET a la API de Twitch
        const response = await fetch(`https://decapi.me/twitch/game/${channel}`);

        // Verificamos si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error('Error al obtener la información de la API');
        }

        // Parseamos la respuesta como JSON
        const game = await response.text();  // Usamos `.text()` en lugar de `.json()` porque la respuesta es texto, no JSON

        switch (game) {
            case 'Rocket League':
                mensaje = `Ey ${user} ! Agregale a Epic para que puedan jugar Rocket League como | KevinJ x | y cuidado con los postes 👀`;
                break;
            case 'Fortnite':
                mensaje = `Oye ${user}, puedes agregale a Epic para que puedan jugar Fortnite como | KevinJ x | y a divertirse n.n`;
                break;
            case 'Valorant':
                mensaje = `Uuuyy ${user} agregale en Valorant como | tS KevinJ x#3041 | para pegar unas buenas taps juntos 😉`;
                break;
            case 'Call of Duty: Warzone':
                mensaje = `Opa ${user}, agregale para poder jugar Warzone como | tSKevinJx#1945 | y dale carry porfa, que lo ocupa n.n `;
                break;
            case 'Fall Guys':
                mensaje = `${user}, agregalo como | KevinJ x | en Epic para que puedan jugar Fall Guys, y a por esas coronitas, o privaditas C:`;
                break;
            default:
                mensaje = `Puedes agregarlo desde Epic: KevinJ x | Xbox: tS KevinJ x | o si está en otro juego o desde otro perfil, el te lo hará saber 😉`;
        }
        res.setHeader("Content-Type", "text/plain");
        return res.status(200).send(mensaje);

    } catch (error) {
        console.error("Error al hacer la solicitud:", error);
        res.status(500).send("Hubo un error al obtener la información.");
    }
}
