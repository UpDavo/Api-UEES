const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const axios = require("axios");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const port = process.env.PORT || 3000;
const APIWOLKBOX =
  "https://34.86.151.171/ipdialbox/api_campaing.php?token=7b69645f6469737472697d2d3230323031313234313531363039";

const app = express();
// At instance level
const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

const jsonParser = bodyParser.json();
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", function (req, res) {
  res.send("Hola esta es la api");
});

app.post("/api/campana", jsonParser, function (req, res) {
  //url api wolkbox
  let urlInsert =
    APIWOLKBOX +
    `&action=insert&type_campaing=preview&campaing=${req.body.campana}&name=${
      req.body.nombre
    }&type_id=cc&id=${
      req.body.id == undefined
        ? Math.floor(Math.random() * 90000) + 10000
        : req.body.id
    }&opt1=${req.body.origen}&opt2=${req.body.interesado}&opt3=${
      req.body.correo
    }&agent=ACD&tel01=${req.body.celular}&opt4=${req.body.comentario}`;
  console.log(urlInsert);

  instance
    .post(urlInsert)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

//Puerto del servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}...`);
});
