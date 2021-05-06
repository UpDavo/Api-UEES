const carrerasMedicina = [
  "ENFERMERIA",
  "ODONTOLOGIA",
  "LICENCIATURA EN NUTRICION Y DIETETICA",
  "MEDICO",
];

const correosUsuarios = [
  { usuarioWolkvox: "agent_12423@uees", correoWolkvox: "aquimiz@uees.edu.ec" },
  {
    usuarioWolkvox: "agent_12865@uees",
    correoWolkvox: "apsalazar@uees.edu.ec",
  },
  { usuarioWolkvox: "agent_12776@uees", correoWolkvox: "aterana@uees.edu.ec" },
  { usuarioWolkvox: "agent_12879@uees", correoWolkvox: "cariasu@uees.edu.ec" },
  { usuarioWolkvox: "agent_12428@uees", correoWolkvox: "cbyepez@uees.edu.ec" },
  { usuarioWolkvox: "agent_12708@uees", correoWolkvox: "dcruzm@uees.edu.ec" },
  { usuarioWolkvox: "agent_12931@uees", correoWolkvox: "esaona@uees.edu.ec" },
  {
    usuarioWolkvox: "agent_12451@uees",
    correoWolkvox: "ejandrade@uees.edu.ec",
  },
  {
    usuarioWolkvox: "agent_12421@uees",
    correoWolkvox: "fcobolanos@uees.edu.ec",
  },
  { usuarioWolkvox: "agent_12417@uees", correoWolkvox: "hquishpi@uees.edu.ec" },
  { usuarioWolkvox: "agent_12979@uees", correoWolkvox: "isfierro@uees.edu.ec" },
  { usuarioWolkvox: "agent_12410@uees", correoWolkvox: "jtorresm@uees.edu.ec" },
  { usuarioWolkvox: "agent_12434@uees", correoWolkvox: "jmunoza@uees.edu.ec" },
  { usuarioWolkvox: "agent_12425@uees", correoWolkvox: "jpmaruri@uees.edu.ec" },
  { usuarioWolkvox: "agent_12924@uees", correoWolkvox: "jpvargas@uees.edu.ec" },
  {
    usuarioWolkvox: "agent_12427@uees",
    correoWolkvox: "jcabrerar@uees.edu.ec",
  },
  {
    usuarioWolkvox: "agent_12773@uees",
    correoWolkvox: "jgallardob@uees.edu.ec",
  },
  {
    usuarioWolkvox: "agent_12433@uees",
    correoWolkvox: "kcolumbus@uees.edu.ec",
  },
  {
    usuarioWolkvox: "agent_12431@uees",
    correoWolkvox: "lespinozah@uees.edu.ec",
  },
  {
    usuarioWolkvox: "agent_12858@uees",
    correoWolkvox: "lsalazara@uees.edu.ec",
  },
  {
    usuarioWolkvox: "agent_12420@uees",
    correoWolkvox: "ldperezm49@uees.edu.ec",
  },
  {
    usuarioWolkvox: "agent_12422@uees",
    correoWolkvox: "marteagag@uees.edu.ec",
  },
  { usuarioWolkvox: "agent_12430@uees", correoWolkvox: "mjerraez@uees.edu.ec" },
  {
    usuarioWolkvox: "agent_12429@uees",
    correoWolkvox: "mquintana@uees.edu.ec",
  },
  {
    usuarioWolkvox: "agent_12819@uees",
    correoWolkvox: "mireyarodas@uees.edu.ec",
  },
  { usuarioWolkvox: "agent_12970@uees", correoWolkvox: "ncercado@uees.edu.ec" },
  { usuarioWolkvox: "agent_12985@uees", correoWolkvox: "omaluk@uees.edu.ec" },
  { usuarioWolkvox: "agent_12774@uees", correoWolkvox: "diazmora@uees.edu.ec" },
  {
    usuarioWolkvox: "agent_12418@uees",
    correoWolkvox: "rgavilanezf@uees.edu.ec",
  },
  {
    usuarioWolkvox: "agent_12424@uees",
    correoWolkvox: "rmontenegro@uees.edu.ec",
  },
  {
    usuarioWolkvox: "agent_12772@uees",
    correoWolkvox: "rvalverde@uees.edu.ec",
  },
  {
    usuarioWolkvox: "agent_12450@uees",
    correoWolkvox: "rmoralesh@uees.edu.ec",
  },
  { usuarioWolkvox: "agent_12986@uees", correoWolkvox: "szuritam@uees.edu.ec" },
  { usuarioWolkvox: "agent_12980@uees", correoWolkvox: "sfraijo@uees.edu.ec" },
  { usuarioWolkvox: "agent_12426@uees", correoWolkvox: "vbravov@uees.edu.ec" },
  { usuarioWolkvox: "agent_12432@uees", correoWolkvox: "yseijas@uees.edu.ec" },
];

const grupos = {
  grupo1: {
    tema: "Financiero",
    usuario: ["agent_12451@uees"],
    nivel: "GRADO",
    modalidad: "PRESENCIAL",
    carrera: [],
  },
  grupo2: {
    tema: "Financiero",
    usuario: ["agent_12434@uees"],
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: [],
  },
  grupo3: {
    tema: "Financiero",
    usuario: ["agent_12433@uees"],
    nivel: "POSTGRADO",
    modalidad: "DISTANCIA",
    carrera: [],
  },
  grupo4: {
    tema: "Administrativo",
    usuario: ["agent_12432@uees"],
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: [
      "MAESTRIA EN GESTION DEL TALENTO HUMANO",
      "MAESTRIA EN GESTION DE PROYECTOS",
      "MAESTRIA EN MANAGEMENT ESTRATEGICO",
      "MAESTRIA EN GESTION FINANCIERA Y RIESGO",
      "MAESTRIA EN MARKETING DIGITAL",
    ],
  },
  grupo5: {
    tema: "Administrativo",
    usuario: ["agent_12430@uees"],
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: ["MAESTRIA EN GESTION EDUCATIVA", "MAESTRIA EN EDUCACION"],
  },
  grupo6: {
    tema: "Administrativo",
    usuario: ["agent_12431@uees"],
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: ["MAESTRIA EN SEGURIDAD Y SALUD OCUPACIONAL"],
  },
  grupo7: {
    tema: "Administrativo",
    usuario: ["agent_12428@uees"],
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: [
      "MAESTRIA EN CONTABILIDAD Y FINANZAS",
      "MAESTRIA EN ADMINISTRACION PUBLICA",
      "MAESTRIA EN AUDITORIA DE TECNOLOGIAS DE LA INFORMACION",
    ],
  },
  grupo8: {
    tema: "Administrativo",
    usuario: ["agent_12427@uees", "agent_12432@uees"],
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
    usuario: ["agent_12426@uees"],
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
    usuario: ["agent_12425@uees"],
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: [
      "MAESTRIA EN CRIMINALISTICA Y CIENCIAS FORENSE",
      "MAESTRIA EN DERECHO PENAL",
    ],
  },
  grupo11: {
    tema: "Administrativo",
    usuario: ["agent_12424@uees"],
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
    usuario: ["agent_12708@uees"],
    nivel: "POSTGRADO",
    modalidad: "DISTANCIA",
    carrera: ["MAESTRIA EN GESTION EDUCATIVA", "MAESTRIA EN EDUCACION"],
  },
  grupo13: {
    tema: "Administrativo",
    usuario: ["agent_12450@uees"],
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
    usuario: ["agent_12410@uees"],
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
    usuario: ["agent_12423@uees"],
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
    usuario: ["agent_12422@uees"],
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: ["MAESTRIA EN GESTION DE PROYECTOS"],
  },
  grupo17: {
    tema: "Académico",
    usuario: ["agent_12421@uees"],
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: ["MAESTRIA EN AUDITORIA DE TECNOLOGIAS DE LA INFORMACION"],
  },
  grupo18: {
    tema: "Académico",
    usuario: ["agent_12421@uees"],
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
      "MAESTRIA EN CONTABILIDAD Y FINANZAS",
    ],
  },
  grupo19: {
    tema: "Académico",
    usuario: ["agent_12420@uees"],
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: ["MAESTRIA EN GESTION EDUCATIVA", "MAESTRIA EN EDUCACION"],
  },
  grupo20: {
    tema: "Académico",
    usuario: ["agent_12420@uees"],
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: [
      "MAESTRIA EN CONTABILIDAD Y FINANZAS",
      "MAESTRIA EN GESTION DEL TALENTO HUMANO",
      "MAESTRIA EN ADMINISTRACION PUBLICA",
    ],
  },
  grupo21: {
    tema: "Académico",
    usuario: ["agent_12420@uees"],
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
    usuario: ["agent_12708@uees"],
    nivel: "POSTGRADO",
    modalidad: "DISTANCIA",
    carrera: ["MAESTRIA EN GESTION EDUCATIVA", "MAESTRIA EN EDUCACION"],
  },
  grupo23: {
    tema: "Académico",
    usuario: ["agent_12450@uees"],
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
    usuario: ["agent_12410@uees"],
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
  grupo27: {
    tema: "Académico",
    usuario: ["agent_12924@uees"],
    nivel: "GRADO",
    modalidad: "DISTANCIA",
    carrera: [
      "ABOGADO DE LOS TRIBUNALES Y JUZGADOS DE LA REPUBLICA",
      "CONTADOR PUBLICO AUTORIZADO",
      "INGENIERIA EN CIENCIAS DE LA COMPUTACION",
      "INGENIERIA EN CIENCIAS EMPRESARIALES",
      "INGENIERIA EN MARKETING Y PUBLICIDAD",
      "INGENIERIA EN SISTEMAS DE INFORMACION GERENCIAL",
      "LICENCIATURA EN ADMINISTRACION DE EMPRESAS",
      "LICENCIATURA EN COMERCIO EXTERIOR",
      "LICENCIATURA EN COMUNICACION",
      "LICENCIATURA EN COMUNICACION CORPORATIVA",
      "LICENCIATURA EN CONTADURIA PUBLICA AUTORIZADA",
      "LICENCIATURA EN MARKETING",
      "LICENCIATURA EN NUTRICION Y DIETETICA",
      "LICENCIATURA EN PSICOLOGIA",
      "LICENCIATURA EN PSICOLOGIA ITINERARIO ORGANIZACIONAL",
    ],
  },
  grupo28: {
    tema: "Académico",
    usuario: ["agent_12865@uees"],
    nivel: "GRADO",
    modalidad: "DISTANCIA",
    carrera: ["LICENCIATURA EN CIENCIAS DE LA EDUCACION"],
  },
  grupo29: {
    tema: "Administrativo",
    usuario: ["agent_12924@uees"],
    nivel: "GRADO",
    modalidad: "DISTANCIA",
    carrera: [
      "ABOGADO DE LOS TRIBUNALES Y JUZGADOS DE LA REPUBLICA",
      "CONTADOR PUBLICO AUTORIZADO",
      "INGENIERIA EN CIENCIAS DE LA COMPUTACION",
      "INGENIERIA EN CIENCIAS EMPRESARIALES",
      "INGENIERIA EN MARKETING Y PUBLICIDAD",
      "INGENIERIA EN SISTEMAS DE INFORMACION GERENCIAL",
      "LICENCIATURA EN ADMINISTRACION DE EMPRESAS",
      "LICENCIATURA EN COMERCIO EXTERIOR",
      "LICENCIATURA EN COMUNICACION",
      "LICENCIATURA EN COMUNICACION CORPORATIVA",
      "LICENCIATURA EN CONTADURIA PUBLICA AUTORIZADA",
      "LICENCIATURA EN MARKETING",
      "LICENCIATURA EN NUTRICION Y DIETETICA",
      "LICENCIATURA EN PSICOLOGIA",
      "LICENCIATURA EN PSICOLOGIA ITINERARIO ORGANIZACIONAL",
    ],
  },
  grupo30: {
    tema: "Administrativo",
    usuario: ["agent_12865@uees"],
    nivel: "GRADO",
    modalidad: "DISTANCIA",
    carrera: ["LICENCIATURA EN CIENCIAS DE LA EDUCACION"],
  },
  grupo31: {
    tema: "Académico",
    usuario: ["agent_12879@uees"],
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: ["MAESTRIA EN SEGURIDAD Y SALUD OCUPACIONAL"],
  },
  grupo32: {
    tema: "Administrativo",
    usuario: ["agent_12970@uees", "agent_12986@uees", "agent_12858@uees"],
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: [
      "ESPECIALIZACION EN CIRUGIA GENERAL",
      "ESPECIALIZACION EN MEDICINA CRITICA",
      "ESPECIALIDAD EN MEDICINA INTERNA",
      "ESPECIALISTA EN CARDIOLOGIA",
      "ESPECIALIDAD EN MEDICINA INTERNA",
      "ESPECIALIDAD EN ANESTESIOLOGIA",
    ],
  },
  grupo33: {
    tema: "Académico",
    usuario: ["agent_12819@uees"],
    nivel: "POSTGRADO",
    modalidad: "PRESENCIAL",
    carrera: [
      "ESPECIALIZACION EN CIRUGIA GENERAL",
      "ESPECIALIZACION EN MEDICINA CRITICA",
      "ESPECIALIDAD EN MEDICINA INTERNA",
      "ESPECIALISTA EN CARDIOLOGIA",
      "ESPECIALIDAD EN MEDICINA INTERNA",
      "ESPECIALIDAD EN ANESTESIOLOGIA",
    ],
  },
};

const tecnologia = {
  grupo25: {
    tema: "Tecnológico",
    usuario: ["agent_12417@uees", "agent_12985@uees"],
    subtema: ["Blackboard Learn Ultra", "Collaborate Ultra", "Sumadi"],
  },
  grupo26: {
    tema: "Tecnológico",
    usuario: ["Pendiente"],
    subtema: ["Correo Institucional", "Portal de Servicios"],
  },
};

const medicina = {
  grupo34: {
    tema: "Administrativo",
    usuario: ["agent_12776@uees"],
    nivel: "GRADO",
    modalidad: "PRESENCIAL",
    subtema: [
      "Necesito tomar nuevamente una materia reprobada",
      "Cambio de programa",
      "Cambio de modalidad",
      "Suspensión total o temporal de estudios",
      "Solicitudes a consejo directivo",
      "Otros",
    ],
    carrera: ["LICENCIATURA EN NUTRICION Y DIETETICA"],
  },
  grupo35: {
    tema: "Administrativo",
    usuario: ["agent_12979@uees"],
    nivel: "GRADO",
    modalidad: "PRESENCIAL",
    subtema: ["Requiero nota de examen de ubicación de inglés"],
    carrera: [
      "MEDICO",
      "LICENCIATURA EN NUTRICION Y DIETETICA",
      "ODONTOLOGIA",
      "ENFERMERIA",
    ],
  },
  grupo36: {
    tema: "Administrativo",
    usuario: ["agent_12773@uees"],
    nivel: "GRADO",
    modalidad: "PRESENCIAL",
    subtema: [
      "Necesito tomar nuevamente una materia reprobada",
      "Cambio de programa",
      "Cambio de modalidad",
      "Suspensión total o temporal de estudios",
      "Solicitudes a consejo directivo",
      "Otros",
    ],
    carrera: ["ODONTOLOGIA"],
  },
  grupo37: {
    tema: "Administrativo",
    usuario: ["agent_12772@uees"],
    nivel: "GRADO",
    modalidad: "PRESENCIAL",
    subtema: [
      "Necesito tomar nuevamente una materia reprobada",
      "Cambio de programa",
      "Cambio de modalidad",
      "Suspensión total o temporal de estudios",
      "Solicitudes a consejo directivo",
      "Otros",
    ],
    carrera: ["ENFERMERIA"],
  },
  grupo38: {
    tema: "Administrativo",
    usuario: ["agent_12450@uees"],
    nivel: "GRADO",
    modalidad: "PRESENCIAL",
    subtema: [
      "No tengo acceso a la materia",
      "Mi nota no está registrado en el portal de servicios",
    ],
    carrera: [
      "ENFERMERIA",
      "ODONTOLOGIA",
      "LICENCIATURA EN NUTRICION Y DIETETICA",
      "MEDICO",
    ],
  },
  grupo39: {
    tema: "Administrativo",
    usuario: ["agent_12980@uees"],
    nivel: "GRADO",
    modalidad: "PRESENCIAL",
    subtema: ["Requiero un certificado de estudios"],
    carrera: [
      "ENFERMERIA",
      "ODONTOLOGIA",
      "LICENCIATURA EN NUTRICION Y DIETETICA",
      "MEDICO",
    ],
  },
  grupo40: {
    tema: "Administrativo",
    usuario: ["agent_12774@uees"],
    nivel: "GRADO",
    modalidad: "PRESENCIAL",
    subtema: [
      "Necesito tomar nuevamente una materia reprobada",
      "Cambio de programa",
      "Cambio de modalidad",
      "Suspensión total o temporal de estudios",
      "Solicitudes a consejo directivo",
      "Otros",
    ],
    carrera: ["MEDICO"],
  },
  grupo41: {
    tema: "Académico",
    usuario: ["agent_12774@uees"],
    nivel: "GRADO",
    modalidad: "PRESENCIAL",
    subtema: [
      "Mi docente no responde a mis mensajes",
      "Tengo actividades entregadas sin calificar",
      "Re-calificación de examen",
      "Solicitud de asignación de tutor",
      "Mi tutor no responde a mis mensajes",
      "Tengo observaciones sobre mi tutor",
      "Iniciar proceso de titulación",
      "Cambiar tema de titulación",
      "Cambiar forma de titulación",
      "Asignación de revisores",
      "Solicitud de sustentación anticipada",
      "Otros",
    ],
    carrera: ["MEDICO"],
  },
  grupo42: {
    tema: "Académico",
    usuario: ["agent_12776@uees"],
    nivel: "GRADO",
    modalidad: "PRESENCIAL",
    subtema: [
      "Mi docente no responde a mis mensajes",
      "Tengo actividades entregadas sin calificar",
      "Re-calificación de examen",
      "Solicitud de asignación de tutor",
      "Mi tutor no responde a mis mensajes",
      "Tengo observaciones sobre mi tutor",
      "Iniciar proceso de titulación",
      "Cambiar tema de titulación",
      "Cambiar forma de titulación",
      "Asignación de revisores",
      "Solicitud de sustentación anticipada",
      "Otros",
    ],
    carrera: ["LICENCIATURA EN NUTRICION Y DIETETICA"],
  },
  grupo43: {
    tema: "Académico",
    usuario: ["agent_12979@uees"],
    nivel: "GRADO",
    modalidad: "PRESENCIAL",
    subtema: [
      "Mi docente no responde a mis mensajes",
      "Tengo actividades entregadas sin calificar",
      "Re-calificación de examen",
      "Solicitud de asignación de tutor",
      "Mi tutor no responde a mis mensajes",
      "Tengo observaciones sobre mi tutor",
      "Iniciar proceso de titulación",
      "Cambiar tema de titulación",
      "Cambiar forma de titulación",
      "Asignación de revisores",
      "Solicitud de sustentación anticipada",
      "Otros",
    ],
    carrera: ["ODONTOLOGIA"],
  },
  grupo44: {
    tema: "Académico",
    usuario: ["agent_12979@uees"],
    nivel: "GRADO",
    modalidad: "PRESENCIAL",
    subtema: [
      "Mi docente no responde a mis mensajes",
      "Tengo actividades entregadas sin calificar",
      "Re-calificación de examen",
      "Solicitud de asignación de tutor",
      "Mi tutor no responde a mis mensajes",
      "Tengo observaciones sobre mi tutor",
      "Iniciar proceso de titulación",
      "Cambiar tema de titulación",
      "Cambiar forma de titulación",
      "Asignación de revisores",
      "Solicitud de sustentación anticipada",
      "Otros",
    ],
    carrera: ["ENFERMERIA"],
  },
  grupo45: {
    tema: "Académico",
    usuario: ["agent_12450@uees"],
    nivel: "GRADO",
    modalidad: "PRESENCIAL",
    subtema: [
      "No se ha publicado el contenido de mi asignatura",
      "Actividades no disponible en mi asignatura",
      "Exámenes no disponible en mi asignatura",
      "No está cargado el Syllabus de mi asignatura",
    ],
    carrera: [
      "MEDICO",
      "LICENCIATURA EN NUTRICION Y DIETETICA",
      "ODONTOLOGIA",
      "ENFERMERIA",
    ],
  },
};

function asignarGrupo(nivel, modalidad, carrera, tema, subtema) {
  let user;
  let dataReturn;

  if (carrerasMedicina.indexOf(carrera) != -1) {
    for (const propiedad in medicina) {
      if (
        carrera ==
          medicina[propiedad].carrera[
            medicina[propiedad].carrera.indexOf(carrera)
          ] &&
        nivel == medicina[propiedad].nivel &&
        modalidad == medicina[propiedad].modalidad &&
        tema == medicina[propiedad].tema &&
        subtema ==
          medicina[propiedad].subtema[
            medicina[propiedad].subtema.indexOf(subtema)
          ]
      ) {
        user = medicina[propiedad];
      }
    }
  } else {
    if (tema == "Tecnológico") {
      for (const propiedad in tecnologia) {
        tecnologia[propiedad].subtema.forEach((subtemasObjeto) => {
          if (subtema == subtemasObjeto) {
            user = tecnologia[propiedad];
          }
        });
      }
    } else {
      if (tema == "Financiero") {
        for (const propiedad in grupos) {
          if (
            tema == grupos[propiedad].tema &&
            nivel == grupos[propiedad].nivel &&
            modalidad == grupos[propiedad].modalidad
          ) {
            user = grupos[propiedad];
          }
        }
      } else {
        for (const propiedad in grupos) {
          if (
            carrera ==
              grupos[propiedad].carrera[
                grupos[propiedad].carrera.indexOf(carrera)
              ] &&
            nivel == grupos[propiedad].nivel &&
            modalidad == grupos[propiedad].modalidad &&
            tema == grupos[propiedad].tema
          ) {
            user = grupos[propiedad];
          }
        }
      }
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

let grupoAsignado = asignarGrupo(
  "POSTGRADO",
  "PRESENCIAL",
  "MAESTRIA EN ADMINISTRACION DE EMPRESAS",
  "Administrativo",
  "Cambiar tema de titulación"
);

console.log(grupoAsignado.usuarioWolkvox + " " + grupoAsignado.correoWolkvox);
//asignarGrupo(nivel, modalidad, carrera, tema, subtema)
