// /api/beso.js
export default function handler(req, res) {
  const { user = "Usuario", touser} = req.query;

 // Verificamos si 'touser' está vacío o no
  if (!touser || touser.trim() === "" || user.toLowerCase() === touser.toLowerCase()) {
    // Si 'touser' está vacío, asignamos un valor por defecto
    const msn = 'Ey ${user}, no tires besos al aire, dedícaselo a alguien especial mencionándolo así "!beso @alguien"';
    res.setHeader("Content-Type", "text/plain");
  res.status(200).send(msn);
  }else{
    const besos = [
    `Un beso de parte de ${user} para ${touser}! 😘`,
    `💖 ${user} le manda un besote a ${touser}! 😘`,
    `💌 ${user} te ha dado un beso virtual, ${touser}`
  ];

  const randomBeso = Math.floor(Math.random() * besos.length);
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(besos[randomBeso]);
  }
  
  
}
