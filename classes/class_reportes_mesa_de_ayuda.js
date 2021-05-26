const request = require("request");

/*
Types Report = agents_detail
Date ini = 20210101000000
Date end = 20210523235959
*/

class ReportesMesaDeAyuda {
  constructor(report, date_ini, date_end) {
    this.fullDate = new Date();

    this.ip = "34.86.151.171";
    this.token = "7b69645f6469737472697d2d3230323130353230303934353437";
    this.report = report;
    this.date_ini = `${this.fullDate.getFullYear()}${
      this.fullDate.getMonth() <= 9
        ? `0${this.fullDate.getMonth()}`
        : this.fullDate.getMonth()
    }${
      this.fullDate.getDay() <= 9
        ? `0${this.fullDate.getDay()}`
        : this.fullDate.getDay()
    }`;
    this.date_end = date_end;
  }

  pedirInformacion() {
    var options = {
      method: "GET",
      mode: "no-cors",
      url: `https://${this.ip}/ipdialbox/api_reports.php?token=${this.token}&report=${this.report}&date_ini=${this.date_ini}&date_end=${this.date_end}`,
      headers: {},
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      return response.body;
    });
  }
}

module.exports = ReportesMesaDeAyuda;
