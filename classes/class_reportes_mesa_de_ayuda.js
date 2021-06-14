// const request = require("request");
const fetch = require("node-fetch");
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
    let arregloTotal = [];

    console.log(this.date_ini);
    console.log(this.date_end);

    const snapshot = await db
      .collection("tickets")
      .where("fechaDeCreacion", ">=", this.date_ini)
      .where("fechaDeCreacion", "<=", this.date_end)
      .orderBy("fechaDeCreacion", "asc")
      .get();

    snapshot.docs.map((doc) => {
      arregloConPeticiones.push(doc.data());
    });

    arregloConPeticiones.forEach(async (peticion) => {
      let datos = await this.pedirDatos(peticion);
      await arregloTotal.push(datos[0]);
    });

    console.log(arregloTotal);
    setTimeout(() => {
      console.log(arregloTotal), res.send(arregloTotal);
    }, 1300);
  }

  async pedirDatos(peticion) {
    var options = {
      method: "POST",
      proxy: process.env.QUOTAGUARDSTATIC_URL,
      headers: {
        "Content-Type": "application/json",
        Cookie: "PHPSESSID=ole3087c9tfleg61o0m8p02pim",
      },
      body: JSON.stringify({
        nit: "uees",
        modulo: "cases",
        campo: "idPrefijo",
        valor: peticion.numeroTicket,
      }),
    };

    let res = await fetch(
      "https://crm.ipdialbox.com/server/API/cases/query.php",
      options
    );
    let data = await res.json();
    return data;
  }
}

module.exports = ReportesMesaDeAyuda;
