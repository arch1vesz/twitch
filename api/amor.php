// /api/amor.js
export default function handler(req, res) {
  const { user = "Usuario", touser = "Alguien" } = req.query;
  const numero = Math.floor(Math.random() * 101);
  const random = Math.floor(Math.random() * 3);

  const r25 = [
    "Nomas? Mejor nadota eh.",
    `Oye ${user}, pero si le quieres o no?`,
    `Y mi celular tiene el ${numero + 1}% de batería.`
  ];

  const r = [
    "Se tienen en sus corazones… ocupando espacio como una app que no uso pero no quiero borrar.",
    "Con eso se aprende que el amor no es perfecto… pero se puede sobrevivir con un poco de sarcasmo y mucha paciencia.",
    "Eso si es amor! Con intermitencias, lag y señal inestable."
  ];

  const r80 = [
    "A poco si mucho amor? Nhaaaa.",
    "Encontraron todo lo que buscaban... menos el control remoto, ese sigue perdido.",
    "Oww, no se cambiarían por nada... o, tal vez por una Sub?"
  ];

  let mensaje = `Hay un ${numero - 1}% de amor entre ${user} y ${touser}... `;

  if (numero === 0) {
    mensaje += "Emmss... sin comentarios.";
  } else if (numero <= 25) {
    mensaje += r25[random];
  } else if (numero < 80) {
    mensaje += r[random];
  } else if (numero < 100) {
    mensaje += r80[random];
  } else {
    mensaje += "Ay si, ay si.";
  }

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(mensaje);
}
