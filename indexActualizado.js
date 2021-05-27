//Import necesarios para que la aplicación funcione
const express = require("express");
const https = require("https");
const cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
const CFonts = require("cfonts");

//Imports de clases para la app
const UsuarioMesaDeAyuda = require("./classes/class_usuario_mesa_de_ayuda");
const MesaDeAyuda = require("./classes/class_mesa_de_ayuda");
const CampañaRedes = require("./classes/class_campañas_redes");

//Constantes de clases
const mesaDeAyuda = new MesaDeAyuda();

//Funciones para que la app use json
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Variables que son asignadas a una ip estatica
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const port = process.env.PORT || 3000;
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

//TESTS

//Funcion de la api test
app.get("/", (req, res) => {
  return res.send("Hola esta es la aaaaaaaaaaapi");
});

//Funcionalidad para las campañas que vienen de redes sociales
app.post("/campana2", (req, res) => {
  let nuevaCampaña = new CampañaRedes();
  nuevaCampaña.crearCampaña(req, res);
  // nuevaCampaña.crearCampaña(req, res);
});

//Analisis de usuarios
app.get("/checkuser/:email", cors(), (req, res) => {
  mesaDeAyuda.checkEmail(req, res);
});

//Revisar el estado de un ticket
app.get("/consultarTicket/:ticket", cors(), (req, res) => {
  mesaDeAyuda.consultarTicket(req, res);
});

//Crea un ticket pepa
app.post("/crearTicket", cors(), (req, res) => {
  let parsedData = {
    body: {
      nombre: req.body.nombre,
      codigoEstudiantil: req.body.codigoEstudiantil,
      correoEstudiantil: req.body.correoEstudiantil,
      nivel: req.body.nivel,
      helpTopic: req.body.helpTopic,
      comentario: req.body.comentario,
      modalidad: req.body.modalidad,
      subtema: req.body.subtema,
      tema: req.body.tema,
      urlPruebas: req.body.urlPruebas,
      wolkvox_id: req.body.wolkvox_id,
      carrera: req.body.carrera,
    },
  };
  let usuarioCreado = new UsuarioMesaDeAyuda(
    parsedData.body.nivel,
    parsedData.body.modalidad,
    parsedData.body.carrera,
    parsedData.body.tema,
    parsedData.body.subtema,
    parsedData.body.helpTopic
  );
  usuarioCreado.crearTicket(parsedData, res);
});

app.post("/actualizarEmailTicket", cors(), (req, res) => {
  let usuarioSinData = new UsuarioMesaDeAyuda();
  let parsedData = {
    body: {
      correoEstudiantil: req.body.correoEstudiantil,
    },
  };
  usuarioSinData.actualizarEmailTicket(parsedData, res);
});

//Puerto del servidor
app.listen(port, () => {
  CFonts.say(`Servidor Iniciado en el puerto| ${port}!`, {
    font: "chrome", // define the font face
    align: "left", // define text alignment
    colors: ["candy"], // define all colors
    background: "transparent", // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 1, // define letter spacing
    lineHeight: 1, // define the line height
    space: true, // define if the output text should have empty lines on top and on the bottom
    maxLength: "0", // define how many character can be on one line
    gradient: false, // define your two gradient colors
    independentGradient: false, // define if you want to recalculate the gradient for each new line
    transitionGradient: false, // define if this is a transition between colors directly
    env: "node", // define the environment CFonts is being executed in
  });
});
