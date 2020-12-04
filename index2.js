const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const fetch = require("node-fetch");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const port = process.env.PORT || 3000;
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const APIWOLKBOX =
  "https://34.86.151.171/ipdialbox/api_campaing.php?token=7b69645f6469737472697d2d3230323031313234313531363039";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// At instance level
// const instance = axios.create({
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type": "application/json",
//   },
//   cors: "no-cors",
//   httpsAgent: new https.Agent({
//     rejectUnauthorized: false,
//   }),
// });

app.get("/main", (req, res) => {
  return res.send("Hola esta es la api");
});

app.post("/campana", (req, res) => {
  //url api wolkbox
  let urlInsert = encodeURI(
    APIWOLKBOX +
      `&action=insert&type_campaing=preview&campaing=${req.body.campana}&name=${
        req.body.nombre
      }&type_id=cc&id=${
        req.body.id === undefined
          ? Math.floor(Math.random() * 90000) + 10000
          : req.body.id
      }&opt1=${req.body.origen}&opt2=${req.body.interesado}&opt3=${
        req.body.correo
      }&agent=ACD&tel01=${req.body.celular}&opt4=${req.body.comentario}`
  );
  console.log(urlInsert);

  //   instance
  //     .post(urlInsert)
  //     .then((data) => {
  //       return res.send(data);
  //     })
  //     .catch((error) => {
  //       return res.send(error);
  //     });

  fetch("https://jsonplaceholder.typicode.com/todos/1", {
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
