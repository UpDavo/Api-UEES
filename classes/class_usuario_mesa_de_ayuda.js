const mesaDeAyuda = require("../data/data_mesa_de_ayuda");
const request = require("request");
const boxen = require("boxen");

class UsuarioMesaDeAyuda {
  constructor(nivel, modalidad, carrera, tema, subtema) {
    this.nivel = nivel;
    this.modalidad = modalidad;
    this.carrera = carrera;
    this.tema = tema;
    this.subtema = subtema;
  }

  getObject() {
    return {
      nivel: this.nivel,
      modalida: this.modalidad,
      carrera: this.carrera,
      tema: this.tema,
      subtema: this.subtema,
    };
  }

  asignarGrupo() {
    let user;
    let dataReturn;

    if (mesaDeAyuda.data.carrerasMedicina.indexOf(this.carrera) != -1) {
      for (const propiedad in mesaDeAyuda.data.medicina) {
        if (
          this.carrera ==
            mesaDeAyuda.data.medicina[propiedad].carrera[
              mesaDeAyuda.data.medicina[propiedad].carrera.indexOf(this.carrera)
            ] &&
          this.nivel == mesaDeAyuda.data.medicina[propiedad].nivel &&
          this.modalidad == mesaDeAyuda.data.medicina[propiedad].modalidad &&
          this.tema == mesaDeAyuda.data.medicina[propiedad].tema &&
          this.subtema ==
            mesaDeAyuda.data.medicina[propiedad].subtema[
              mesaDeAyuda.data.medicina[propiedad].subtema.indexOf(this.subtema)
            ]
        ) {
          user = mesaDeAyuda.data.medicina[propiedad];
        }
      }
    } else {
      if (this.tema == "Tecnológico") {
        for (const propiedad in mesaDeAyuda.data.tecnologia) {
          mesaDeAyuda.data.tecnologia[propiedad].subtema.forEach(
            (subtemasObjeto) => {
              if (this.subtema == subtemasObjeto) {
                user = mesaDeAyuda.data.tecnologia[propiedad];
              }
            }
          );
        }
      } else {
        if (this.tema == "Financiero") {
          for (const propiedad in mesaDeAyuda.data.grupos) {
            if (
              this.tema == mesaDeAyuda.data.grupos[propiedad].tema &&
              this.nivel == mesaDeAyuda.data.grupos[propiedad].nivel &&
              this.modalidad == mesaDeAyuda.data.grupos[propiedad].modalidad
            ) {
              user = mesaDeAyuda.data.grupos[propiedad];
            }
          }
        } else {
          for (const propiedad in mesaDeAyuda.data.grupos) {
            if (
              this.carrera ==
                mesaDeAyuda.data.grupos[propiedad].carrera[
                  mesaDeAyuda.data.grupos[propiedad].carrera.indexOf(
                    this.carrera
                  )
                ] &&
              this.nivel == mesaDeAyuda.data.grupos[propiedad].nivel &&
              this.modalidad == mesaDeAyuda.data.grupos[propiedad].modalidad &&
              this.tema == mesaDeAyuda.data.grupos[propiedad].tema
            ) {
              user = mesaDeAyuda.data.grupos[propiedad];
            }
          }
        }
      }
    }

    let usuarioRandom =
      user.usuario[Math.floor(Math.random() * user.usuario.length)];

    for (const usuario in mesaDeAyuda.data.correosUsuarios) {
      if (
        mesaDeAyuda.data.correosUsuarios[usuario].usuarioWolkvox ==
        usuarioRandom
      ) {
        dataReturn = mesaDeAyuda.data.correosUsuarios[usuario];
      }
    }

    return dataReturn;
  }

  crearTicket(req, res) {
    //asignarGrupo(nivel, modalidad, carrera, tema, subtema)
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
          "Correo estudiante": "${req.body.correoEstudiantil}",
          "Nombre del Estudiante": "${req.body.nombre}",
          "adjunto": "${req.body.urlPruebas}",
          "Estudiante": {
            "value":"${req.body.correoEstudiantil}",
            "value_id":"${req.body.wolkvox_id}"
          }
        }`,
      },
    };

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

      //Imprime los parametros y el url
      console.log(
        boxen(
          `NUEVO INGRESO DE TICKET EN MESA DE AYUDA - ${
            req.body.nombre
          }\n\nGrupo Asignado:\n\n${JSON.stringify(
            grupoAsignado
          )}\n\nResultado:\n\n${JSON.stringify(dataFinal)}`,
          { padding: 1 }
        )
      );
      res.send(dataFinal);
    });
  }

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
        wolkvox_id: "606b11ba552ad80cba3a9642",
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
