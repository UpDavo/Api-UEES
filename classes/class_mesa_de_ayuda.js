const request = require("request");
const boxen = require("boxen");

class MesaDeAyuda {
  holaMundo() {
    return "holaMundo";
  }

  checkEmail(req, res) {
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

      console.log(
        `\nNUEVO PETICION DE CONSULTA DE CORREO - ${req.params.email}`
      );
      console.log("\nResultado:");
      console.log(response.body);

      //Fin de los prints

      res.send(response.body);
    });
  }

  consultarTicket(req, res) {
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

      console.log(
        `\nNUEVO PETICION DE CONSULTA DE TICKET - ${req.params.ticket}`
      );
      console.log("\nResultado:");
      console.log(response.body);

      //Fin de los prints

      res.send(response.body);
    });
  }
}

module.exports = MesaDeAyuda;
