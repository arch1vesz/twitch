export default function handler(req, res) {
  const { user, query } = req.query;

  const author = user || "Alguien";
  const target = query || "alguien especial";

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(`${author} siente un gran cariño por ${target} 💖`);
}
