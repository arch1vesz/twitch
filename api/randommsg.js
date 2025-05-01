// /api/randommsg.js
export default function handler(req, res) {
  const mensajes = [
    `Veo en mi bola de cristal... que alguien dará follow pronto 👀`,
    `Anda jugando tan pro que hasta los NPC le mandan solicitud de amistad 🙃`,
    `Sin bugs no hay emoción, es parte del show`,
    `Interpretando el papel de 'streamer que sabe lo que hace' desde 2025`,
    `Chat, traigan un aperitivo... esto se va a descontrolar 🍿`,
    `No es que juegue mal, es que le gusta darle esperanza al enemigo 🤭`,
    `Explota cosas, pierde partidas y hace chistes malos, todo en un solo canal 👀`,
    `Si escuchan gritos, no se espanten... es solo el pro que lleva dentro intentando salir`,
    `Bienvenutis al caos controlado ! PonganseN cómodos y no toquen nada raro… todavía`,
    `Es tan pro que el tutorial le pidió consejos`,
    `Si fallar fuera un deporte, ya tendría patrocinadores`,
    `Wow, qué buena esa eh, casi me emociono`
  ];

  const randomMsg = Math.floor(Math.random() * mensajes.length);
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(mensajes[randomMsg]);
}
