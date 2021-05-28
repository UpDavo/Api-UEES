req = {
  body: {
    tema: "Financiero",
    subtema: "Pagos de Colegiatura",
    helpTopic: "Ingreso de pago de colegiatura, matricula e inscripción",
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    correoEstudiantil: "jvernazag@uees.edu.ec",
    nombre: "VERNAZA GARCIA JULIO CESAR",
    urlPruebas:
      "https://www.jotform.com/uploads/uees/211014238559654/4979498422228698864/IMG_20210527_125642.jpg",
    correoEstudiantil: "jvernazag@uees.edu.ec",
    wolkvox_id: "60994235cf828f7611762161",
  },
};

var json = {
  "Tipo de Requerimiento": req.body.tema,
  Tema: req.body.subtema,
  "HELP TOPIC": req.body.helpTopic,
  NIVEL: req.body.nivel,
  MODALIDAD: req.body.modalidad,
  "Correo estudiante": req.body.correoEstudiantil,
  "Nombre del Estudiante": req.body.nombre,
  adjunto: req.body.urlPruebas,
  Estudiante: {
    value: req.body.correoEstudiantil,
    value_id: req.body.wolkvox_id,
  },
};
console.log(json);
var newjson = JSON.stringify(json);
console.log(newjson);

`{"Tipo de Requerimiento":"Financiero","Tema":"Pagos de Colegiatura","HELP TOPIC":"Ingreso de pago de colegiatura, matricula e inscripción","NIVEL":"POSTGRADO","MODALIDAD":"PRESENCIAL","Correo estudiante":"jvernazag@uees.edu.ec","Nombre del Estudiante":"VERNAZA GARCIA JULIO CESAR","adjunto":"https://www.jotform.com/uploads/uees/211014238559654/4979498422228698864/IMG_20210527_125642.jpg","Estudiante":{"value":"jvernazag@uees.edu.ec","value_id":"60994235cf828f7611762161"}}`;
