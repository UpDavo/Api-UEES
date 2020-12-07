const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const fetch = require("node-fetch");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const port = process.env.PORT || 3000;
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const APIWOLKBOX = "https://34.86.151.171/ipdialbox/api_campaing.php";
const TOKEN = "7b69645f6469737472697d2d3230323031313234313531363039";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/main", (req, res) => {
  return res.send("Hola esta es la api");
});

app.post("/campana", (req, res) => {
  let url = new URL(APIWOLKBOX);
  const params = {
    token: TOKEN,
    nombre: req.body.nombre,
    correo: req.body.correo,
    celular: req.body.celular,
    comentario: req.body.comentario,
    interesado: req.body.interesado,
    id: req.body.id,
    origen: req.body.origen,
    campana: req.body.campana,
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  console.log("/n");
  console.log(url.href);

  fetch(url, {
    agent: httpsAgent,
  })
    .then((response) => {
      return res.send(response);
    })
    .catch((error) => {
      return res.send(error);
    });
});

//Puerto del servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}...`);
});
