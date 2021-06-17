//Imports necesarios
const mesaDeAyuda = require("../data/data_mesa_de_ayuda");
const request = require("request");
const admin = require("firebase-admin");
const db = admin.firestore();

//Grupos de la mesa de ayuda segmentados de la base de datos JSON
const academico = mesaDeAyuda.data.grupos.academico;
const administrativo = mesaDeAyuda.data.grupos.administrativo;
const financiero = mesaDeAyuda.data.grupos.financiero;
const tecologico = mesaDeAyuda.data.grupos.tecnologico;
const carrerasMedicina = mesaDeAyuda.data.carrerasMedicina;
const medicina = mesaDeAyuda.data.medicina;
const correosUsuarios = mesaDeAyuda.data.correosUsuarios;

class UsuarioMesaDeAyuda {
  constructor(nivel, modalidad, carrera, tema, subtema, helpTopic) {
    this.nivel = nivel;
    this.modalidad = modalidad;
    this.carrera = carrera;
    this.tema = tema;
    this.subtema = subtema;
    this.helpTopic = helpTopic;
  }

  //Obtiene el objeto creado para la mesa de ayuda
  getObject() {
    let data = {
      nivel: this.nivel,
      modalida: this.modalidad,
      carrera: this.carrera,
      tema: this.tema,
      subtema: this.subtema,
      helpTopic: this.helpTopic,
    };
    console.log(data);
  }

  //Asigna un grupo al objeto ingresado
  asignarGrupo() {
    let user;
    let dataReturn;

    //Esto realiza la validación si la petición es de medicina o no
    if (carrerasMedicina.indexOf(this.carrera) != -1) {
      //Esto asigna un grupo dependiendo de los datos de medicina
      for (const i in medicina) {
        if (
          this.carrera ==
            medicina[i].carrera[medicina[i].carrera.indexOf(this.carrera)] &&
          this.nivel == medicina[i].nivel &&
          this.modalidad == medicina[i].modalidad &&
          this.tema == medicina[i].tema &&
          this.helpTopic ==
            medicina[i].helpTopic[medicina[i].helpTopic.indexOf(this.helpTopic)]
        ) {
          user = medicina[i];
        }
      }
    } else {
      //Valida que tipo de petición es
      switch (this.tema) {
        case "Académico":
          for (const i in academico) {
            if (
              this.carrera ==
                academico[i].carrera[
                  academico[i].carrera.indexOf(this.carrera)
                ] &&
              this.nivel == academico[i].nivel &&
              this.modalidad == academico[i].modalidad
            ) {
              user = academico[i];
            }
          }
          break;
        case "Administrativo":
          for (const i in administrativo) {
            if (
              this.carrera ==
                administrativo[i].carrera[
                  administrativo[i].carrera.indexOf(this.carrera)
                ] &&
              this.nivel == administrativo[i].nivel &&
              this.modalidad == administrativo[i].modalidad
            ) {
              user = administrativo[i];
            }
          }
          break;
        case "Financiero":
          for (const i in financiero) {
            if (
              this.nivel == financiero[i].nivel &&
              this.modalidad == financiero[i].modalidad &&
              this.helpTopic ==
                financiero[i].helpTopic[
                  financiero[i].helpTopic.indexOf(this.helpTopic)
                ]
            ) {
              user = financiero[i];
            }
          }
          break;
        case "Tecnológico":
          for (const i in tecologico) {
            if (
              this.subtema ==
              tecologico[i].subtema[tecologico[i].subtema.indexOf(this.subtema)]
            ) {
              user = tecologico[i];
            }
          }
          break;
        default:
          console.log("Error no entro en el switch");
          break;
      }
    }

    console.log(user);
    let usuarioRandom =
      user.usuario[Math.floor(Math.random() * user.usuario.length)];

    for (const usuario in correosUsuarios) {
      if (correosUsuarios[usuario].usuarioWolkvox == usuarioRandom) {
        dataReturn = correosUsuarios[usuario];
      }
    }

    return dataReturn;
  }

  //Crea un nuevo ticket
  crearTicket(req, res) {
    //Imprime el objeto del ticket
    //this.getObject();
    //asignarGrupo(nivel, modalidad, carrera, tema, subtema, helpTopic)
    const grupoAsignado = this.asignarGrupo();

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
        responsible: grupoAsignado.usuarioWolkvox,
        owner: grupoAsignado.usuarioWolkvox,
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
          "CARRERA": "${req.body.carrera}",
          "Correo estudiante": "${req.body.correoEstudiantil}",
          "Nombre del Estudiante": "${req.body.nombre}",
          "adjunto": "${
            req.body.urlPruebas === undefined
              ? "No ha Ingresado Ninguna Prueba"
              : req.body.urlPruebas
          }",
          "Estudiante": {
            "value":"${req.body.correoEstudiantil}",
            "value_id":"${req.body.wolkvox_id}"
          }
        }`,
      },
    };

    console.log(enviado);

    request(enviado, function (error, response) {
      let dataFinal;
      let dataParseada;
      if (error) throw new Error(error);
      dataParseada = JSON.parse(response.body);
      dataFinal = {
        body: JSON.stringify({
          result: dataParseada.result,
          wolkvox_id: dataParseada.wolkvox_id,
          idPrefijo: dataParseada.idPrefijo,
          correoAsesor: grupoAsignado.correoWolkvox,
          usuarioAsesor: grupoAsignado.usuarioWolkvox,
        }),
      };

      //Agrega la información a firebase

      db.collection("tickets")
        .doc()
        .set({
          numeroTicket: dataParseada.idPrefijo,
          fechaDeCreacion: new Date(),
        })
        .then(() => {
          console.log("Se ha creado un nuevo registro en firebase");
        })
        .catch((e) => {
          console.log(e);
        });

      //Imprime los parametros y el url
      console.log(
        `\nNUEVO INGRESO DE TICKET EN MESA DE AYUDA - ${req.body.nombre}`
      );
      console.log(`\nGrupo Asignado:`);
      console.log(grupoAsignado);
      console.log(`\nResultado:`);
      console.log(dataFinal);

      //Fin de los prints
      res.send(dataFinal);
    });
  }

  //Actualiza el email en wolkvox
  actualizarEmailTicket(req, res) {
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
        wolkvox_id: "60b1235bf1c7df7a072ff933",
        datos: {
          emailcontact: req.body.correoEstudiantil,
        },
      }),
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      res.send(response);
    });
  }
}

module.exports = UsuarioMesaDeAyuda;
