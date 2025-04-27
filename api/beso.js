// /api/beso.js
export default function handler(req, res) {
  const { sender = "Usuario", touser = ""} = req.query;

 // Verificamos si 'touser' está vacío o no
  if (!touser || touser.trim() === "" || sender.toLowerCase() === touser.toLowerCase()) {
    // Si 'touser' está vacío, asignamos un valor por defecto
    const msn = `Ey ${sender}, no tires besos al aire, dedícaselo a alguien especial mencionándolo así "!beso @alguien" 😉`;
    res.setHeader("Content-Type", "text/plain");
  res.status(200).send(msn);
  }else{
    const besos = [
    `Un beso de parte de ${sender} para ${touser}! 😘`,
    `💖 ${sender} le manda un besote a ${touser}! 😘`,
    `💌 ${sender} te ha dado un beso virtual, ${touser}`
  ];

  const randomBeso = Math.floor(Math.random() * besos.length);
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(besos[randomBeso]);
  }
  
  
}
