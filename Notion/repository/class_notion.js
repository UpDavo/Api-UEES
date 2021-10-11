// this will allow us to import our variable
require("dotenv").config();
const { Client } = require("@notionhq/client");

class Notion {
  constructor() {
    this.notion = new Client({ auth: process.env.NOTION_API_KEY });
  }

  getDatabase = async (databaseId) => {
    const response = await this.notion.databases.query({
      database_id: databaseId,
    });

    const responseResults = response.results.map((page) => {
      return {
        id: page.id,
        name: page.properties.Name.title[0].plain_text,
        role: page.properties.Role.rich_text[0].plain_text,
      };
    });

    return responseResults;
  };

  setItemDatabase = (inputData) => {
    const assigned = this.selectPersonal(inputData);

    assigned[2].forEach(async (db) => {
      await this.notion.pages.create({
        parent: {
          database_id: db,
        },
        properties: {
          Nombre: {
            title: [
              {
                text: {
                  content: inputData.nombre,
                },
              },
            ],
          },
          Area: {
            rich_text: [
              {
                text: {
                  content: inputData.area,
                },
              },
            ],
          },
          "Tipo de peticiones": {
            multi_select: assigned[1],
          },
          Encargados: {
            people: assigned[0],
          },
          Celular: {
            phone_number: inputData.celular,
          },
          Correo: {
            email: inputData.correo,
          },
          Descripcion: {
            rich_text: [
              {
                text: {
                  content: inputData.descripcion,
                },
              },
            ],
          },
          Archivos: {
            files: [
              {
                type: "external",
                name: "Archivo Informativo",
                external: {
                  url: inputData.archivos,
                },
              },
            ],
          },
          "Redireccionado a": {
            rich_text: [
              {
                text: {
                  content: inputData.tipoPedido,
                },
              },
            ],
          },
          Status: {
            select: {
              name: "Not started",
            },
          },
        },
      });
    });

    return "a";
  };

  selectPersonal(inputData) {
    const userList = [
      { name: "Christopher", id: "3147ba51-d447-4264-9a9f-e09a91d07047" },
      { name: "Belen", id: "c260d919-1b7b-4ffc-a1bf-12f6f9c0da91" },
      { name: "Clau", id: "c260d919-1b7b-4ffc-a1bf-12f6f9c0da91" }, //Pendiente
      { name: "Anthony", id: "e0c1eaab-16b2-4505-ad4d-c00cdcda4c2d" },
      { name: "Andres", id: "fc1bc3a0-dd65-4e75-9ba6-0a444d00a1bb" },
      { name: "Celina", id: "bdfb01ed-668e-4a81-ba06-391b541da84f" },
      { name: "Ana Luisa", id: "a44ff132-02ba-449b-9f2f-d36e0f9f8ec3" },
    ];

    const areasChris = [
      "ESAI",
      "POSTGRADO",
      "DOCTORADO",
      "ECOMUNDO",
      "DELFOS",
      "CREAR",
      "THOMAS MORE",
      "ECOMUNDO BABAHOYO",
    ];
    const areasClau = [
      "CIENCIAS DE LA SALUD",
      "DERECHO, POLÍTICA Y DESARROLLO",
      "HUMANIDADES",
      "EMPRENDIMIENTO, NEGOCIOS Y ECONOMÍA",
      "TURISMO Y HOTELERÍA",
      "ESTUDIOS INTERNACIONALES",
      "CIENCIAS DE LA COMUNICACIÓN",
      "ARQUITECTURA Y DISEÑO",
      "INGENIERÍA",
      "BTL",
      "KLINIC",
      "MI KALETA",
      "LANDMARK",
      "MANGLEROS VILLAGE",
      "CONSULADO",
      "CARAMEL COFFEE",
    ];
    const areasBelen = [
      "ONLINE",
      "EDUCACIÓN CONTINUA",
      "UEES CLINIC",
      "CENTROS DE INVESTIGACION",
      "CAM",
      "CONSULTORIO JURIDICO",
      "RECURSOS HUMANOS",
      "RECTORADO",
      "ADMINISTRACION",
    ];

    let send = [];
    let tags = [];
    let dbs = [];

    var separado = inputData.diferenciador.split("; ");

    dbs.push("0f4a8e9747134bea9054c3bdaa023446");

    separado.forEach((individual) => {
      tags.push({
        name: individual,
      });

      switch (individual) {
        case "Artes":
          dbs.push("5c3c53079bc148e69c53f5aa2845aafb");
          if (areasBelen.includes(inputData.area)) {
            send.push({ object: "user", id: userList[1].id });
          } else {
            if (areasChris.includes(inputData.area)) {
              send.push({ object: "user", id: userList[0].id });
            } else {
              if (areasClau.includes(inputData.area)) {
                send.push({ object: "user", id: userList[2].id });
              } else {
                send.push({
                  object: "user",
                  id: userList[this.getRandomInt(0, 2)].id,
                });
              }
            }
          }
          break;
        case "Web":
          dbs.push("802d672127834a61b748635d91c86d34");

          send.push({ object: "user", id: userList[4].id });
          break;
        case "Videos" || "Señaletica" || "Promocionales":
          if (!send.includes({ object: "user", id: userList[5].id })) {
            dbs.push("b23c5a87587c4f00995fe10e9f33be9a");
            send.push({ object: "user", id: userList[5].id });
          }
          break;
        case "Mailing":
          dbs.push("2e57f16ddf4446e29d012bd24b1445c7");

          send.push({ object: "user", id: userList[3].id });
          break;
        default:
          console.log("No hay match");
          break;
      }
    });

    return [send, tags, dbs];
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

module.exports = Notion;
