const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const fetch = require("node-fetch");
const request = require("request");
var cors = require("cors");

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

app.post("/campana2", (req, res) => {
  let url = new URL(APIWOLKBOX);
  const params = {
    token: TOKEN,
    action: "insert",
    type_campaing: "preview",
    campaing: req.body.campana,
    name: req.body.nombre,
    opt3: req.body.correo,
    tel01: req.body.celular,
    opt4: req.body.comentario,
    opt2: req.body.interesado,
    type_id: "cc",
    id: req.body.id,
    opt1: req.body.origen,
    agent: "FREE",
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  console.log("/n");
  console.log(url.href);
  console.log(process.env.QUOTAGUARDSTATIC_URL);
  console.log("/n");

  var options = {
    proxy: process.env.QUOTAGUARDSTATIC_URL,
    url: url.href,
    headers: {
      "User-Agent": "node.js",
    },
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      res.send(body);
    }
  }

  request(options, callback);
});

app.post("/test", (req, res) => {
  const data = {
    nombre: req.body["contact[first_name]"],
    apellido: req.body["contact[last_name]"],
    telefono: req.body["contact[phone]"],
    email: req.body["contact[email]"],
  };
  console.log(req.body);
  return res.send("Los datos fueron enviados");
});

//Analisis de usuarios
app.get("/checkuser/:email", cors(), (req, res) => {
  var request = require("request");
  var options = {
    method: "GET",
    proxy: process.env.QUOTAGUARDSTATIC_URL,
    url: "https://crm.ipdialbox.com/server/API/query.php",
    headers: {
      "Content-Type": "application/json",
      Cookie: "PHPSESSID=cqmbn9iajl6gcnjic33dpc7dkp",
    },
    body: JSON.stringify({
      nit: "uees",
      modulo: "Estudiantes",
      campo: "EMAIL",
      valor: req.params.email,
    }),
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.send(response.body);
  });
});

//Puerto del servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}...`);
});

data = {
  "contact[id]": "1358",
  "contact[email]": "ab.cesarcuadradollandan@outlook.com",
  "contact[first_name]": "Cesar",
  "contact[last_name]": "Cuadrado",
  "contact[phone]": "593986523796",
  "contact[orgname]": "",
  "contact[customer_acct_name]": "",
  "contact[tags]": "Externos",
  "contact[ip4]": "127.0.0.1",
  seriesid: "9",
};
