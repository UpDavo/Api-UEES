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

const grupos = {
  grupo1: {
    tema: "Financiero",
    usuario: "agent_12451@uees",
    nivel: "GRADO",
    modalidad: "PRESENCIAL",
    carrera: [],
  },
  grupo2: {
    tema: "Financiero",
    usuario: "agent_12434@uees",
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: [],
  },
  grupo3: {
    tema: "Financiero",
    usuario: "agent_12433@uees",
    nivel: "POSTGRADO",
    modalidad: "DISTANCIA",
    carrera: [],
  },
  grupo4: {
    tema: "Administrativo",
    usuario: "agent_12432@uees",
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: [
      "MAESTRIA EN GESTION DEL TALENTO HUMANO",
      "MAESTRIA EN GESTION DE PROYECTOS",
    ],
  },
  grupo5: {
    tema: "Administrativo",
    usuario: "agent_12430@uees",
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: ["MAESTRIA EN GESTION EDUCATIVA", "MAESTRIA EN EDUCACION"],
  },
  grupo6: {
    tema: "Administrativo",
    usuario: "agent_12429@uees",
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: [
      "MAESTRIA EN AUDITORIA DE TECNOLOGIAS DE LA INFORMACION",
      "MAESTRIA EN SEGURIDAD Y SALUD OCUPACIONAL",
    ],
  },
  grupo7: {
    tema: "Administrativo",
    usuario: "agent_12428@uees",
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: [
      "MAESTRIA EN CONTABILIDAD Y FINANZAS",
      "MAESTRIA EN ADMINISTRACION PUBLICA",
    ],
  },
  grupo8: {
    tema: "Administrativo",
    usuario: "agent_12427@uees",
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: [
      "MAESTRIA EN ADMINISTRACION DE EMPRESAS",
      "MAESTRIA EN MARKETING",
      "MAESTRIA EN MANAGEMENT ESTRATEGICO",
      "MAESTRIA EN INTELIGENCIA DE NEGOCIOS Y CIENCIA DE DATOS",
      "MAESTRIA EN GESTION DE LA INNOVACION",
      "MAESTRIA EN NEGOCIOS DIGITALES Y TECNOLOGIAS DISRUPTIVAS",
      "MAESTRIA EN BANCA Y GESTION DE MERCADOS FINANCIEROS",
      "MAESTRIA EN GESTION FINANCIERA Y RIESGO",
      "MAESTRIA EN AUDITORIA INTEGRAL Y GESTION EMPRESARIAL",
      "MAESTRIA EN SEGUROS Y GESTION DE SINIESTROS",
      "MAESTRIA EN COMERCIO ELECTRONICO Y LOGISTICO",
      "MAESTRIA EN GESTION DE LA CALIDAD",
      "MAESTRIA EN SOSTENIBILIDAD EMPRESARIAL",
      "MAESTRIA EN GESTION Y OPERACIÓN DE LA CADENA DE SUMINISTROS",
      "MAESTRIA EN GESTION ESTRATEGICA DE LA COMUNICACIÓN ORGANIZACIONAL",
      "MAESTRIA EN GESTION COMERCIAL Y RELACIONES CON LOS CLIENTES",
      "MAESTRIA EN MARKETING DIGITAL",
    ],
  },
  grupo9: {
    tema: "Administrativo",
    usuario: "agent_12426@uees",
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: [
      "MAESTRIA EN DERECHO CONSTITUCIONAL",
      "MAESTRIA EN DERECHO CON MENCION EN DERECHO DE EMPRESA",
      "MAESTRIA EN DERECHO PROCESAL",
    ],
  },
  grupo10: {
    tema: "Administrativo",
    usuario: "agent_12425@uees",
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: [
      "MAESTRIA EN CRIMINALISTICA Y CIENCIAS FORENSE",
      "MAESTRIA EN DERECHO PENAL",
    ],
  },
  grupo11: {
    tema: "Administrativo",
    usuario: "agent_12424@uees",
    nivel: "POSTGRADO",
    modalidad: "DISTANCIA",
    carrera: [
      "MAESTRIA EN ADMINISTRACION DE EMPRESAS",
      "MAESTRIA EN MARKETING",
      "MAESTRIA EN CONTABILIDAD Y FINANZAS",
      "MAESTRIA EN GESTION DEL TALENTO HUMANO",
      "MAESTRIA EN GESTION DE PROYECTOS",
      "MAESTRIA EN ADMINISTRACION PUBLICA",
      "MAESTRIA EN MANAGEMENT ESTRATEGICO",
      "MAESTRIA EN INTELIGENCIA DE NEGOCIOS Y CIENCIA DE DATOS",
      "MAESTRIA EN GESTION DE LA INNOVACION",
      "MAESTRIA EN NEGOCIOS DIGITALES Y TECNOLOGIAS DISRUPTIVAS",
      "MAESTRIA EN BANCA Y GESTION DE MERCADOS FINANCIEROS",
      "MAESTRIA EN GESTION FINANCIERA Y RIESGO",
      "MAESTRIA EN AUDITORIA INTEGRAL Y GESTION EMPRESARIAL",
      "MAESTRIA EN SEGUROS Y GESTION DE SINIESTROS",
      "MAESTRIA EN COMERCIO ELECTRONICO Y LOGISTICO",
      "MAESTRIA EN GESTION DE LA CALIDAD",
      "MAESTRIA EN SOSTENIBILIDAD EMPRESARIAL",
      "MAESTRIA EN GESTION Y OPERACIÓN DE LA CADENA DE SUMINISTROS",
      "MAESTRIA EN GESTION ESTRATEGICA DE LA COMUNICACIÓN ORGANIZACIONAL",
      "MAESTRIA EN GESTION COMERCIAL Y RELACIONES CON LOS CLIENTES",
      "MAESTRIA EN MARKETING DIGITAL",
      "MAESTRIA EN AUDITORIA DE TECNOLOGIAS DE LA INFORMACION",
      "MAESTRIA EN SEGURIDAD Y SALUD OCUPACIONAL",
    ],
  },
  grupo12: {
    tema: "Administrativo",
    usuario: "agent_12708@uees",
    nivel: "POSTGRADO",
    modalidad: "DISTANCIA",
    carrera: ["MAESTRIA EN GESTION EDUCATIVA", "MAESTRIA EN EDUCACION"],
  },
  grupo13: {
    tema: "Administrativo",
    usuario: "agent_12450@uees",
    nivel: "GRADO",
    modalidad: "PRESENCIAL",
    carrera: [
      "MEDICO",
      "ENFERMERIA",
      "LICENCIATURA EN NUTRICION Y DIETETICA",
      "CARRERA NUTRICION",
      "ODONTOLOGIA",
    ],
  },
  grupo14: {
    tema: "Administrativo",
    usuario: "agent_12410@uees",
    nivel: "GRADO",
    modalidad: "PRESENCIAL",
    carrera: [
      "ARQUITECTURA",
      "LICENCIATURA EN ARTES PLASTICAS",
      "LICENCIATURA EN SONIDO Y PRODUCCION MUSICAL DIGITAL",
      "LICENCIATURA EN ARTES MUSICALES",
      "VALIDACION LICENCIATURA EN DANZA",
      "LICENCIATURA EN DANZA",
      "EDUCACION INICIAL",
      "LICENCIATURA EN EDUCACION ESPECIAL",
      "LICENCIATURA EN PSICOLOGIA",
      "PSICOLOGIA ORGANIZACIONAL",
      "PSICOLOGIA CLINICA",
      "CEI",
      "LICENCIATURA EN DISEÑO GRAFICO",
      "LICENCIATURA EN MARKETING",
      "LICENCIATURA EN PRODUCCION PARA MEDIOS DE COMUNICACION",
      "LICENCIATURA EN MARKETING Y PUBLICIDAD",
      "LICENCIATURA EN PERIODISMO",
      "LICENCIATURA EN COMUNICACION",
      "LICENCIATURA EN COMUNICACION CORPORATIVA",
      "LICENCIATURA EN DISENO GRAFICO",
      "INGENIERIA EN MARKETING Y PUBLICIDAD",
      "LICENCIATURA EN PERIODISMO INTERNACIONAL",
      "LICENCIATURA EN MERCADOTECNIA",
      "ABOGADO DE LOS TRIBUNALES Y JUZGADOS DE LA REPUBLICA",
      "LICENCIATURA EN ADMINISTRACION DE EMPRESAS",
      "LICENCIATURA EN CONTABILIDAD Y AUDITORIA",
      "ECONOMISTA",
      "LICENCIATURA EN COMERCIO EXTERIOR",
      "INGENIERIA EN CIENCIAS EMPRESARIALES",
      "LICENCIATURA EN NEGOCIOS DIGITALES",
      "LICENCIATURA EN FINANZAS",
      "NEGOCIOS INTERNACIONALES",
      "INGENIERIA AMBIENTAL",
      "BIODIVERSIDAD Y RECURSOS GENETICOS",
      "INGENIERIA EN GESTION AMBIENTAL",
      "INGENIERIA INDUSTRIAL",
      "SEGURIDAD INDUSTRIAL",
      "INGENIERIA EN CIENCIAS DE LA COMPUTACION",
      "INGENIERIA EN TELECOMUNICACIONES",
      "INGENIERIA EN SISTEMAS COMPUTACIONALES",
      "INGENIERIA EN SISTEMAS DE INFORMACION GERENCIAL",
      "INGENIERIA EN SISTEMAS",
      "INGENIERIA CIVIL",
      "LICENCIATURA EN TURISMO",
      "INGENIERIA EN GESTION TURISTICA Y HOTELERA",
      "LICENCIATURA EN GESTION TURISTICA Y HOTELERA",
      "INGENIERIA EN CIENCIAS GASTRONOMICAS",
    ],
  },
  grupo15: {
    tema: "Académico",
    usuario: "agent_12423@uees",
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: [
      "MAESTRIA EN DERECHO CONSTITUCIONAL",
      "MAESTRIA EN DERECHO CON MENCION EN DERECHO DE EMPRESA",
      "MAESTRIA EN CRIMINALISTICA Y CIENCIAS FORENSE",
      "MAESTRIA EN DERECHO PENAL",
      "MAESTRIA EN DERECHO PROCESAL",
    ],
  },
  grupo16: {
    tema: "Académico",
    usuario: "agent_12422@uees",
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: ["MAESTRIA EN GESTION DE PROYECTOS"],
  },
  grupo17: {
    tema: "Académico",
    usuario: "agent_12421@uees",
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: ["MAESTRIA EN AUDITORIA DE TECNOLOGIAS DE LA INFORMACION"],
  },
  grupo18: {
    tema: "Académico",
    usuario: "agent_12421@uees",
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: [
      "MAESTRIA EN ADMINISTRACION DE EMPRESAS",
      "MAESTRIA EN MARKETING",
      "MAESTRIA EN MANAGEMENT ESTRATEGICO",
      "MAESTRIA EN INTELIGENCIA DE NEGOCIOS Y CIENCIA DE DATOS",
      "MAESTRIA EN GESTION DE LA INNOVACION",
      "MAESTRIA EN NEGOCIOS DIGITALES Y TECNOLOGIAS DISRUPTIVAS",
      "MAESTRIA EN BANCA Y GESTION DE MERCADOS FINANCIEROS",
      "MAESTRIA EN GESTION FINANCIERA Y RIESGO",
      "MAESTRIA EN AUDITORIA INTEGRAL Y GESTION EMPRESARIAL",
      "MAESTRIA EN SEGUROS Y GESTION DE SINIESTROS",
      "MAESTRIA EN COMERCIO ELECTRONICO Y LOGISTICO",
      "MAESTRIA EN GESTION DE LA CALIDAD",
      "MAESTRIA EN SOSTENIBILIDAD EMPRESARIAL",
      "MAESTRIA EN GESTION Y OPERACIÓN DE LA CADENA DE SUMINISTROS",
      "MAESTRIA EN GESTION ESTRATEGICA DE LA COMUNICACIÓN ORGANIZACIONAL",
      "MAESTRIA EN GESTION COMERCIAL Y RELACIONES CON LOS CLIENTES",
      "MAESTRIA EN MARKETING DIGITAL",
    ],
  },
  grupo19: {
    tema: "Académico",
    usuario: "agent_12420@uees",
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: ["MAESTRIA EN GESTION EDUCATIVA", "MAESTRIA EN EDUCACION"],
  },
  grupo20: {
    tema: "Académico",
    usuario: "agent_12420@uees",
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: [
      "MAESTRIA EN CONTABILIDAD Y FINANZAS",
      "MAESTRIA EN GESTION DEL TALENTO HUMANO",
      "MAESTRIA EN ADMINISTRACION PUBLICA",
      "MAESTRIA EN SEGURIDAD Y SALUD OCUPACIONAL",
    ],
  },
  grupo21: {
    tema: "Académico",
    usuario: "agent_12420@uees",
    nivel: "POSTGRADO",
    modalidad: "DISTANCIA",
    carrera: [
      "MAESTRIA EN ADMINISTRACION DE EMPRESAS",
      "MAESTRIA EN MARKETING",
      "MAESTRIA EN CONTABILIDAD Y FINANZAS",
      "MAESTRIA EN GESTION DEL TALENTO HUMANO",
      "MAESTRIA EN GESTION DE PROYECTOS",
      "MAESTRIA EN ADMINISTRACION PUBLICA",
      "MAESTRIA EN MANAGEMENT ESTRATEGICO",
      "MAESTRIA EN INTELIGENCIA DE NEGOCIOS Y CIENCIA DE DATOS",
      "MAESTRIA EN GESTION DE LA INNOVACION",
      "MAESTRIA EN NEGOCIOS DIGITALES Y TECNOLOGIAS DISRUPTIVAS",
      "MAESTRIA EN BANCA Y GESTION DE MERCADOS FINANCIEROS",
      "MAESTRIA EN GESTION FINANCIERA Y RIESGO",
      "MAESTRIA EN AUDITORIA INTEGRAL Y GESTION EMPRESARIAL",
      "MAESTRIA EN SEGUROS Y GESTION DE SINIESTROS",
      "MAESTRIA EN COMERCIO ELECTRONICO Y LOGISTICO",
      "MAESTRIA EN GESTION DE LA CALIDAD",
      "MAESTRIA EN SOSTENIBILIDAD EMPRESARIAL",
      "MAESTRIA EN GESTION Y OPERACIÓN DE LA CADENA DE SUMINISTROS",
      "MAESTRIA EN GESTION ESTRATEGICA DE LA COMUNICACIÓN ORGANIZACIONAL",
      "MAESTRIA EN GESTION COMERCIAL Y RELACIONES CON LOS CLIENTES",
      "MAESTRIA EN MARKETING DIGITAL",
      "MAESTRIA EN AUDITORIA DE TECNOLOGIAS DE LA INFORMACION",
      "MAESTRIA EN SEGURIDAD Y SALUD OCUPACIONAL",
    ],
  },
  grupo22: {
    tema: "Académico",
    usuario: "agent_12708@uees",
    nivel: "POSTGRADO",
    modalidad: "DISTANCIA",
    carrera: ["MAESTRIA EN GESTION EDUCATIVA", "MAESTRIA EN EDUCACION"],
  },
  grupo23: {
    tema: "Académico",
    usuario: "agent_12450@uees",
    nivel: "GRADO",
    modalidad: "PRESENCIAL",
    carrera: [
      "MEDICO",
      "ENFERMERIA",
      "LICENCIATURA EN NUTRICION Y DIETETICA",
      "CARRERA NUTRICION",
      "ODONTOLOGIA",
    ],
  },
  grupo24: {
    tema: "Académico",
    usuario: "agent_12410@uees",
    nivel: "GRADO",
    modalidad: "PRESENCIAL",
    carrera: [
      "ARQUITECTURA",
      "LICENCIATURA EN ARTES PLASTICAS",
      "LICENCIATURA EN SONIDO Y PRODUCCION MUSICAL DIGITAL",
      "LICENCIATURA EN ARTES MUSICALES",
      "VALIDACION LICENCIATURA EN DANZA",
      "LICENCIATURA EN DANZA",
      "EDUCACION INICIAL",
      "LICENCIATURA EN EDUCACION ESPECIAL",
      "LICENCIATURA EN PSICOLOGIA",
      "PSICOLOGIA ORGANIZACIONAL",
      "PSICOLOGIA CLINICA",
      "CEI",
      "LICENCIATURA EN DISEÑO GRAFICO",
      "LICENCIATURA EN MARKETING",
      "LICENCIATURA EN PRODUCCION PARA MEDIOS DE COMUNICACION",
      "LICENCIATURA EN MARKETING Y PUBLICIDAD",
      "LICENCIATURA EN PERIODISMO",
      "LICENCIATURA EN COMUNICACION",
      "LICENCIATURA EN COMUNICACION CORPORATIVA",
      "LICENCIATURA EN DISENO GRAFICO",
      "INGENIERIA EN MARKETING Y PUBLICIDAD",
      "LICENCIATURA EN PERIODISMO INTERNACIONAL",
      "LICENCIATURA EN MERCADOTECNIA",
      "ABOGADO DE LOS TRIBUNALES Y JUZGADOS DE LA REPUBLICA",
      "LICENCIATURA EN ADMINISTRACION DE EMPRESAS",
      "LICENCIATURA EN CONTABILIDAD Y AUDITORIA",
      "ECONOMISTA",
      "LICENCIATURA EN COMERCIO EXTERIOR",
      "INGENIERIA EN CIENCIAS EMPRESARIALES",
      "LICENCIATURA EN NEGOCIOS DIGITALES",
      "LICENCIATURA EN FINANZAS",
      "NEGOCIOS INTERNACIONALES",
      "INGENIERIA AMBIENTAL",
      "BIODIVERSIDAD Y RECURSOS GENETICOS",
      "INGENIERIA EN GESTION AMBIENTAL",
      "INGENIERIA INDUSTRIAL",
      "SEGURIDAD INDUSTRIAL",
      "INGENIERIA EN CIENCIAS DE LA COMPUTACION",
      "INGENIERIA EN TELECOMUNICACIONES",
      "INGENIERIA EN SISTEMAS COMPUTACIONALES",
      "INGENIERIA EN SISTEMAS DE INFORMACION GERENCIAL",
      "INGENIERIA EN SISTEMAS",
      "INGENIERIA CIVIL",
      "LICENCIATURA EN TURISMO",
      "INGENIERIA EN GESTION TURISTICA Y HOTELERA",
      "LICENCIATURA EN GESTION TURISTICA Y HOTELERA",
      "INGENIERIA EN CIENCIAS GASTRONOMICAS",
    ],
  },
};

const tecnologia = {
  grupo25: {
    tema: "Tecnológico",
    usuario: "agent_12417@uees",
    subtema: ["Blackboard Learn Ultra", "Collaborate Ultra", "Sumadi"],
  },
  grupo26: {
    tema: "Tecnológico",
    usuario: "Pendiente",
    subtema: ["Correo Institucional", "Portal de Servicios"],
  },
};

function asignarGrupo(nivel, modalidad, carrera, tema, subtema) {
  let dataReturn;
  if (tema == "Tecnológico") {
    for (const propiedad in tecnologia) {
      tecnologia[propiedad].subtema.forEach((subtemasObjeto) => {
        if (subtema == subtemasObjeto) {
          dataReturn = tecnologia[propiedad];
        }
      });
    }
  } else {
    for (const propiedad in grupos) {
      grupos[propiedad].carrera.forEach((carrerasObjeto) => {
        if (
          carrera == carrerasObjeto &&
          nivel == grupos[propiedad].nivel &&
          modalidad == grupos[propiedad].modalidad &&
          tema == grupos[propiedad].tema
        ) {
          dataReturn = grupos[propiedad];
        }
      });
    }
  }
  return dataReturn;
}

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
  let grupoAsignado = asignarGrupo(
    req.body.nivel,
    req.body.modalidad,
    req.body.carrera,
    req.body.tema,
    req.body.subtema
  );

  console.log(grupoAsignado);

  //asignarGrupo(nivel, modalidad, carrera, tema, subtema)
  var enviado = {
    method: "POST",
    url: "https://crm.ipdialbox.com/server/API/cases/insert.php",
    headers: {
      Cookie: "PHPSESSID=cqmbn9iajl6gcnjic33dpc7dkp",
    },
    formData: {
      nit: "uees",
      token: "UJkcTGEuM9GXXjKWrD3geQ8sn75JnDk5",
      type: "Request",
      responsible:
        grupoAsignado == "undefined"
          ? "agent_12520@uees"
          : grupoAsignado.usuario,
      owner:
        grupoAsignado == "undefined"
          ? "agent_12520@uees"
          : grupoAsignado.usuario,
      contact: req.body.correoEstudiantil,
      description: req.body.comentario,
      status: "Abierto",
      priority: "baja",
      solution: "",
      aditionalFields: `{
        "Tipo de Requerimiento":"${req.body.tema}",
        "Tema":"${req.body.subtema}",
        "HELP TOPIC":"${req.body.helpTopic}",
        "NIVEL":"${req.body.nivel}",
        "MODALIDAD": "${req.body.modalidad}",
        "Correo estudiante": "${req.body.correoEstudiantil}",
        "adjunto": "${req.body.urlPruebas}",
        "Estudiante": {
          "value":"${req.body.correoEstudiantil}",
          "value_id":"${req.body.wolkvox_id}"
        }
      }`,
    },
  };

  request(enviado, function (error, response1) {
    if (error) throw new Error(error);
    console.log(response1.body);
    res.send(response1);
  });
});

app.post("/actualizarEmailTicket", cors(), (req, res) => {
  var options = {
    method: "PUT",
    url: "https://crm.ipdialbox.com/server/API/update.php",
    headers: {
      "Content-Type": "application/json",
      Cookie: "PHPSESSID=bv9hspr6l14n6hk1rl5p0fka20",
    },
    body: JSON.stringify({
      nit: "uees",
      token: "UJkcTGEuM9GXXjKWrD3geQ8sn75JnDk5",
      modulo: "contacts",
      wolkvox_id: "606b11ba552ad80cba3a9642",
      datos: {
        emailcontact: req.body.correoEstudiantil,
      },
    }),
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.send(response);
  });
});

//Puerto del servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}...`);
});
