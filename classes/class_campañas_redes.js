//Requires de librerias externas
const request = require("request");

//Imports de variables globales y bases de datos locales
const global = require("../global/global_variables");

const roundround = require("roundround");
//Require de base de datos
const asesoresComerciales = require("../data/data_wolkvox");

//Inicialización de datos
var next = roundround(asesoresComerciales.data);

class CampañaRedes {
  constructor() {
    this.TOKEN = global.globalVariables.TOKEN;
    this.APIWOLKBOX = global.globalVariables.APIWOLKBOX;
  }

  probarRound(req, res) {
    const params = {
      token: this.TOKEN,
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
      agent: `${next()}`,
    };
    console.log(params);
    res.send(params);
  }

  crearCampaña(req, res) {
    //Inicializa el URL
    let url = new URL(this.APIWOLKBOX);

    //Almacena los parametros del body
    const params = {
      token: this.TOKEN,
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
      agent: `${next()}`,
    };

    //Asigna los parametros a clave valor en el url
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    var options = {
      proxy: process.env.QUOTAGUARDSTATIC_URL,
      url: url.href,
      headers: {
        "User-Agent": "node.js",
      },
    };

    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        //Imprime los parametros y el url

        console.log(
          `NUEVO INGRESO DE CAMPAÑA EN REDES - ${req.body.interesado}`
        );
        console.log("\nParametros:");
        console.log(params);
        console.log("\nUrl integrado:");
        console.log(url.href);
        console.log("\nResultado:");
        console.log(body);

        //Fin de los prints

        res.send(body);
      }
    }

    request(options, callback);
  }

  crearCampañaOption(req, res) {
    console.log(req.body);

    //Inicializa el URL
    let url = new URL(this.APIWOLKBOX);

    //Almacena los parametros del body
    const params = {
      token: this.TOKEN,
      action: "insert",
      type_campaing: "preview",
      campaing: req.body.campana,
      name: req.body.nombre,
      lastname: req.body.apellido,
      opt3: req.body.correo,
      tel01: req.body.celular,
      opt4: req.body.comentario,
      opt2: req.body.interesado,
      type_id: req.body.tipoId,
      id: req.body.id,
      opt1: req.body.origen,
      agent: `${next()}`,
    };

    //Asigna los parametros a clave valor en el url
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    var options = {
      proxy: process.env.QUOTAGUARDSTATIC_URL,
      url: url.href,
      headers: {
        "User-Agent": "node.js",
      },
    };

    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        //Imprime los parametros y el url

        console.log(
          `NUEVO INGRESO DE CAMPAÑA EN REDES POR WEB - ${req.body.interesado}`
        );
        console.log("\nParametros:");
        console.log(params);
        console.log("\nUrl integrado:");
        console.log(url.href);
        console.log("\nResultado:");
        console.log(body);

        //Fin de los prints

        res.send(body);
      }
    }

    request(options, callback);
  }

  crearCampañaSingle(req, res) {
    console.log(req.body);

    //Inicializa el URL
    let url = new URL(this.APIWOLKBOX);

    //Almacena los parametros del body
    const params = {
      token: this.TOKEN,
      action: "insert",
      type_campaing: "preview",
      campaing: req.body.campana,
      name: req.body.nombre,
      lastname: req.body.apellido,
      opt3: req.body.correo,
      tel01: req.body.celular,
      opt4: req.body.comentario,
      opt2: req.body.interesado,
      type_id: req.body.tipoId,
      id: req.body.id,
      opt1: req.body.origen,
      agent: req.body.agent,
    };

    //Asigna los parametros a clave valor en el url
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    var options = {
      proxy: process.env.QUOTAGUARDSTATIC_URL,
      url: url.href,
      headers: {
        "User-Agent": "node.js",
      },
    };

    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        //Imprime los parametros y el url

        console.log(
          `NUEVO INGRESO DE CAMPAÑA EN REDES POR REDES SINGLE - ${req.body.interesado}`
        );
        console.log("\nParametros:");
        console.log(params);
        console.log("\nUrl integrado:");
        console.log(url.href);
        console.log("\nResultado:");
        console.log(body);

        //Fin de los prints

        res.send(body);
      }
    }

    request(options, callback);
  }
}

module.exports = CampañaRedes;
