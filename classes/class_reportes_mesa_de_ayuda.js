const request = require("request");
const admin = require("firebase-admin");
const db = admin.firestore();
/*
Types Report = agents_detail
Date ini = 20210101000000
Date end = 20210523235959
*/

class ReportesMesaDeAyuda {
  constructor(date_ini, date_end) {
    this.date_ini = new Date(
      date_ini[0] + date_ini[1] + date_ini[2] + date_ini[3],
      parseInt(date_ini[4] + date_ini[5]) - 1,
      date_ini[6] + date_ini[7]
    );
    this.date_end = new Date(
      date_end[0] + date_end[1] + date_end[2] + date_end[3],
      parseInt(date_end[4] + date_end[5]) - 1,
      date_end[6] + date_end[7]
    );
  }

  async pedirInformacion(res) {
    let arregloConPeticiones = [];

    console.log(this.date_end);
    console.log(this.date_ini);

    const snapshot = await db
      .collection("tickets")
      .where("fechaDeCreacion", ">=", this.date_ini)
      .get();
    snapshot.docs.map((doc) => {
      arregloConPeticiones.push(doc.data());
    });
    
    console.log(arregloConPeticiones);
    res.send(arregloConPeticiones);

    /*

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
    });*/
  }
}

module.exports = ReportesMesaDeAyuda;
