export default function handler(req, res) {
  const { user = "user", sender = "sender", touser = "touser", query = "query" };

    const respuesta =  ` user: ${user} - sender: ${sender} - touser: ${touser} - query: ${query} `;

    res.status(200).send(respuesta);
  }
}
