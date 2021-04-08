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

app.get("/consultarTicket/:ticket", cors(), (req, res) => {
  var options = {
    method: "GET",
    proxy: process.env.QUOTAGUARDSTATIC_URL,
    url: "https://crm.ipdialbox.com/server/API/cases/query.php",
    headers: {
      "Content-Type": "application/json",
      Cookie: "PHPSESSID=ole3087c9tfleg61o0m8p02pim",
    },
    body: JSON.stringify({
      nit: "uees",
      modulo: "cases",
      campo: "idPrefijo",
      valor: req.params.ticket,
    }),
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.send(response.body);
  });
});

app.post("/crearTicket", cors(), (req, res) => {
  var devolver;

  var enviado = {
    method: "POST",
    proxy: process.env.QUOTAGUARDSTATIC_URL,
    url: "https://crm.ipdialbox.com/server/API/cases/insert.php",
    headers: {
      Cookie: "PHPSESSID=cqmbn9iajl6gcnjic33dpc7dkp",
    },
    formData: {
      nit: "uees",
      token: "UJkcTGEuM9GXXjKWrD3geQ8sn75JnDk5",
      type: "Request",
      responsible: "agent_12520@uees",
      owner: "agent_12520@uees",
      contact: req.body.correoEstudiantil,
      description: req.body.comentario,
      status: "Abierto",
      priority: "baja",
      solution: "",
      aditionalFields: `{"Tipo de Requerimiento":"${req.body.tema}","Tema":"${req.body.subtema}","HELP TOPIC":"${req.body.helpTopic}","NIVEL":"${req.body.nivel}","MODALIDAD": "${req.body.modalidad}","Correo estudiante": "${req.body.correoEstudiantil}","adjunto": "${req.body.urlPruebas}"}`,
    },
  };
  request(enviado, function (error, response1) {
    if (error) throw new Error(error);
    console.log(response1.body);
    devolver = response1.body;
  });

  var actualizado = {
    method: "PUT",
    proxy: process.env.QUOTAGUARDSTATIC_URL,
    url: "https://crm.ipdialbox.com/server/API/update.php",
    headers: {
      Cookie: "PHPSESSID=cr56h8n1cphnq7h7nbmqd1taj4",
    },
    formData: {
      nit: "uees",
      token: "UJkcTGEuM9GXXjKWrD3geQ8sn75JnDk5",
      modulo: "contacts",
      wolkvox_id: "606b11ba552ad80cba3a9642",
      datos: {
        emailcontact: req.body.correoEstudiantil,
      },
    },
  };
  request(actualizado, function (error, response2) {
    if (error) throw new Error(error);
    console.log(response2.body);
  });

  res.send(devolver);
});

//Puerto del servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}...`);
});
