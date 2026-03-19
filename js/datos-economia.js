// js/datos-economia.js
// PREGUNTAS DE ECONOMÍA Y ADMINISTRACIÓN - TEMARIO ENCUENTRO ACUDE 2026

if (typeof DATOS_ACUDE !== 'undefined') {
    
    DATOS_ACUDE.preguntas.economia = [
        // ============================================
        // 1. INTRODUCCIÓN A LA ADMINISTRACIÓN Y ANTECEDENTES HISTÓRICOS (Preguntas 1-10)
        // ============================================
        {
            id: 1,
            contexto: "La administración tiene orígenes antiguos en la historia de la humanidad.",
            pregunta: "¿En qué civilización antigua se encuentran los primeros registros de prácticas administrativas?",
            opciones: [
                "A) Roma antigua",
                "B) Sumeria y Egipto",
                "C) Grecia clásica",
                "D) China medieval",
                "E) India antigua"
            ],
            correcta: 1,
            explicacion: "Los sumerios desarrollaron sistemas de registro y control, y los egipcios construyeron las pirámides con avanzada organización administrativa.",
            dificultad: 2,
            tema: "Origen de la administración"
        },
        {
            id: 2,
            contexto: "La administración científica surgió a finales del siglo XIX.",
            pregunta: "¿Quién es considerado el padre de la administración científica?",
            opciones: [
                "A) Henry Fayol",
                "B) Frederick W. Taylor",
                "C) Max Weber",
                "D) Elton Mayo",
                "E) Abraham Maslow"
            ],
            correcta: 1,
            explicacion: "Taylor desarrolló principios de administración científica enfocados en eficiencia y productividad mediante estudio de tiempos y movimientos.",
            dificultad: 1,
            tema: "Origen de la administración"
        },
        {
            id: 3,
            contexto: "La definición de administración ha evolucionado con el tiempo.",
            pregunta: "¿Qué significa etimológicamente la palabra 'administración'?",
            opciones: [
                "A) Dirigir y controlar",
                "B) Servir o gestionar algo para otro (ad-minister)",
                "C) Organizar recursos",
                "D) Planificar actividades",
                "E) Liderar personas"
            ],
            correcta: 1,
            explicacion: "Administración proviene del latín 'ad' (hacia, dirección) y 'minister' (subordinación, servicio).",
            dificultad: 2,
            tema: "Definición de administración"
        },
        {
            id: 4,
            contexto: "La administración puede definirse de diversas formas.",
            pregunta: "¿Cuál de las siguientes es una definición completa de administración?",
            opciones: [
                "A) Hacer cosas a través de otros",
                "B) Proceso de planear, organizar, dirigir y controlar recursos para lograr objetivos",
                "C) Tomar decisiones importantes",
                "D) Contratar y despedir personal",
                "E) Llevar la contabilidad"
            ],
            correcta: 1,
            explicacion: "La administración es el proceso de planear, organizar, dirigir y controlar recursos para alcanzar metas organizacionales.",
            dificultad: 1,
            tema: "Definición de administración"
        },
        {
            id: 5,
            contexto: "La administración tiene características universales.",
            pregunta: "¿Qué característica de la administración significa que puede aplicarse en cualquier tipo de organización?",
            opciones: [
                "A) Especificidad",
                "B) Universalidad",
                "C) Temporalidad",
                "D) Jerarquía",
                "E) Flexibilidad"
            ],
            correcta: 1,
            explicacion: "La universalidad significa que la administración se aplica en empresas, gobierno, instituciones educativas, etc.",
            dificultad: 1,
            tema: "Características de la administración"
        },
        {
            id: 6,
            contexto: "La administración tiene un carácter interdisciplinario.",
            pregunta: "¿Con qué ciencias se relaciona principalmente la administración?",
            opciones: [
                "A) Física y química",
                "B) Matemáticas, psicología, sociología, economía y derecho",
                "C) Biología y medicina",
                "D) Geología y astronomía",
                "E) Arte y música"
            ],
            correcta: 1,
            explicacion: "La administración se apoya en matemáticas (estadística), psicología (comportamiento), sociología (grupos), economía y derecho.",
            dificultad: 2,
            tema: "Ciencia, teoría y práctica"
        },
        {
            id: 7,
            contexto: "La administración tiene aspectos científicos y técnicos.",
            pregunta: "¿Por qué se considera la administración como una ciencia?",
            opciones: [
                "A) Porque usa intuición",
                "B) Porque tiene un objeto de estudio y método científico",
                "C) Porque es exacta",
                "D) Porque no cambia",
                "E) Porque es teórica"
            ],
            correcta: 1,
            explicacion: "La administración es ciencia porque tiene objeto de estudio (organizaciones) y utiliza el método científico para generar conocimiento.",
            dificultad: 2,
            tema: "Ciencia, teoría y práctica"
        },
        {
            id: 8,
            contexto: "La administración también es una técnica.",
            pregunta: "¿Qué aspecto técnico tiene la administración?",
            opciones: [
                "A) Formular leyes universales",
                "B) Aplicar conocimientos para resolver problemas prácticos",
                "C) Investigar fenómenos",
                "D) Desarrollar teorías",
                "E) Publicar artículos"
            ],
            correcta: 1,
            explicacion: "Como técnica, la administración aplica conocimientos científicos para solucionar problemas organizacionales concretos.",
            dificultad: 1,
            tema: "Ciencia, teoría y práctica"
        },
        {
            id: 9,
            contexto: "El perfil profesional del administrador incluye diversas habilidades.",
            pregunta: "¿Qué habilidades debe tener un administrador según Robert Katz?",
            opciones: [
                "A) Físicas, mentales y sociales",
                "B) Técnicas, humanas y conceptuales",
                "C) Básicas, intermedias y avanzadas",
                "D) Operativas, tácticas y estratégicas",
                "E) Individuales, grupales y organizacionales"
            ],
            correcta: 1,
            explicacion: "Katz identificó tres habilidades: técnicas (conocimiento especializado), humanas (relaciones interpersonales) y conceptuales (visión global).",
            dificultad: 2,
            tema: "Perfil profesional"
        },
        {
            id: 10,
            contexto: "La legislación normativa regula la actividad administrativa.",
            pregunta: "¿Qué ley regula las sociedades mercantiles en México?",
            opciones: [
                "A) Código Civil",
                "B) Ley General de Sociedades Mercantiles",
                "C) Ley Federal del Trabajo",
                "D) Código de Comercio",
                "E) Ley de Amparo"
            ],
            correcta: 1,
            explicacion: "La LGSM regula la constitución y funcionamiento de las sociedades mercantiles en México.",
            dificultad: 1,
            tema: "Legislación normativa"
        },

        // ============================================
        // 2. ENFOQUES DE LA ADMINISTRACIÓN (Preguntas 11-15)
        // ============================================
        {
            id: 11,
            contexto: "La administración tiene diferentes enfoques teóricos.",
            pregunta: "¿Qué aspecto enfatiza el enfoque clásico de la administración?",
            opciones: [
                "A) Las relaciones humanas",
                "B) La estructura formal y eficiencia",
                "C) El ambiente externo",
                "D) La tecnología",
                "E) La cultura organizacional"
            ],
            correcta: 1,
            explicacion: "El enfoque clásico (Fayol, Taylor) enfatiza la estructura formal y la eficiencia en las operaciones.",
            dificultad: 1,
            tema: "Enfoques de la administración"
        },
        {
            id: 12,
            contexto: "El enfoque humanista surgió como reacción al clásico.",
            pregunta: "¿Qué experimento dio origen al enfoque humanista?",
            opciones: [
                "A) Experimentos de Taylor",
                "B) Experimento de Hawthorne",
                "C) Estudios de tiempos",
                "D) Investigación de Fayol",
                "E) Teoría de Weber"
            ],
            correcta: 1,
            explicacion: "El experimento de Hawthorne, dirigido por Elton Mayo, demostró la importancia de los factores sociales y psicológicos en el trabajo.",
            dificultad: 2,
            tema: "Enfoques de la administración"
        },
        {
            id: 13,
            contexto: "El enfoque de sistemas ve la organización como un sistema.",
            pregunta: "¿Qué elementos componen un sistema según este enfoque?",
            opciones: [
                "A) Inicio, desarrollo y fin",
                "B) Insumos, proceso, productos, retroalimentación y ambiente",
                "C) Personas, recursos y objetivos",
                "D) Estrategia, estructura y cultura",
                "E) Planeación, organización y control"
            ],
            correcta: 1,
            explicacion: "El enfoque de sistemas considera que la organización recibe insumos, los transforma, genera productos y recibe retroalimentación del ambiente.",
            dificultad: 2,
            tema: "Enfoques de la administración"
        },
        {
            id: 14,
            contexto: "El enfoque de contingencias considera el ambiente.",
            pregunta: "¿Qué plantea la teoría de contingencias?",
            opciones: [
                "A) Existe una mejor manera de administrar",
                "B) Todo depende de factores situacionales",
                "C) Las organizaciones son cerradas",
                "D) La estructura es fija",
                "E) Los principios son universales"
            ],
            correcta: 1,
            explicacion: "La teoría de contingencias sostiene que no hay una única forma de administrar; todo depende de las circunstancias.",
            dificultad: 2,
            tema: "Enfoques de la administración"
        },
        {
            id: 15,
            contexto: "Los enfoques actuales incluyen nuevas perspectivas.",
            pregunta: "¿Qué corriente actual enfatiza la capacidad de adaptación al cambio?",
            opciones: [
                "A) Burocracia",
                "B) Administración del conocimiento",
                "C) Teoría Z",
                "D) Calidad total",
                "E) Reingeniería"
            ],
            correcta: 1,
            explicacion: "La administración del conocimiento enfatiza la creación, intercambio y aplicación del conocimiento para adaptarse al entorno.",
            dificultad: 2,
            tema: "Corrientes actuales"
        },

        // ============================================
        // 3. DESARROLLO DE LA TEORÍA ADMINISTRATIVA - ESCUELAS (Preguntas 16-30)
        // ============================================
        {
            id: 16,
            contexto: "La escuela empírica se basa en la experiencia.",
            pregunta: "¿Qué caracteriza a la escuela empírica de administración?",
            opciones: [
                "A) Desarrollar principios universales",
                "B) Basarse en la experiencia y observación de casos prácticos",
                "C) Enfatizar las matemáticas",
                "D) Centrarse en la estructura",
                "E) Priorizar las relaciones humanas"
            ],
            correcta: 1,
            explicacion: "La escuela empírica estudia la administración a través de la experiencia y casos concretos, buscando generalizaciones prácticas.",
            dificultad: 2,
            tema: "Escuela empírica"
        },
        {
            id: 17,
            contexto: "La administración científica buscaba eficiencia.",
            pregunta: "¿Cuál era el principal objetivo de la administración científica de Taylor?",
            opciones: [
                "A) La satisfacción del trabajador",
                "B) La eficiencia y productividad mediante métodos científicos",
                "C) La responsabilidad social",
                "D) La estructura organizacional",
                "E) La motivación humana"
            ],
            correcta: 1,
            explicacion: "Taylor buscaba aumentar la eficiencia mediante estudio de tiempos, estandarización y división del trabajo.",
            dificultad: 1,
            tema: "Escuela de administración científica"
        },
        {
            id: 18,
            contexto: "Taylor desarrolló principios fundamentales.",
            pregunta: "¿Qué principio propuso Taylor para la administración científica?",
            opciones: [
                "A) Unidad de mando",
                "B) Estudio de tiempos y movimientos",
                "C) División de poderes",
                "D) Centralización",
                "E) Equidad"
            ],
            correcta: 1,
            explicacion: "Taylor propuso el estudio científico de tiempos y movimientos para determinar el método óptimo de trabajo.",
            dificultad: 1,
            tema: "Escuela de administración científica"
        },
        {
            id: 19,
            contexto: "Henry Fayol desarrolló la teoría clásica.",
            pregunta: "¿Cuántos principios de administración propuso Henry Fayol?",
            opciones: [
                "A) 5 principios",
                "B) 10 principios",
                "C) 14 principios",
                "D) 20 principios",
                "E) 7 principios"
            ],
            correcta: 2,
            explicacion: "Fayol propuso 14 principios administrativos, incluyendo división del trabajo, autoridad, unidad de mando, etc.",
            dificultad: 2,
            tema: "Escuela clásica"
        },
        {
            id: 20,
            contexto: "Fayol identificó funciones básicas en la empresa.",
            pregunta: "¿Cuáles son las funciones básicas de la empresa según Fayol?",
            opciones: [
                "A) Producción, ventas y finanzas",
                "B) Técnicas, comerciales, financieras, seguridad, contables y administrativas",
                "C) Planeación, organización y control",
                "D) Mercadotecnia, recursos humanos y operaciones",
                "E) Estratégicas, tácticas y operativas"
            ],
            correcta: 1,
            explicacion: "Fayol identificó seis áreas funcionales: técnica, comercial, financiera, seguridad, contable y administrativa.",
            dificultad: 2,
            tema: "Escuela clásica"
        },
        {
            id: 21,
            contexto: "El principio de unidad de mando es fundamental.",
            pregunta: "¿Qué significa el principio de unidad de mando?",
            opciones: [
                "A) Un solo jefe por trabajador",
                "B) Unidad de objetivos",
                "C) Unidad de dirección",
                "D) Centralización",
                "E) Jerarquía clara"
            ],
            correcta: 0,
            explicacion: "Unidad de mando significa que cada empleado debe recibir órdenes de un solo superior para evitar conflictos.",
            dificultad: 1,
            tema: "Escuela clásica"
        },
        {
            id: 22,
            contexto: "La escuela de relaciones humanas surgió en los años 30.",
            pregunta: "¿Qué descubrió Elton Mayo en el experimento de Hawthorne?",
            opciones: [
                "A) La importancia del salario",
                "B) La influencia de factores sociales y psicológicos en la productividad",
                "C) La necesidad de especialización",
                "D) La jerarquía como motivación",
                "E) El control como elemento clave"
            ],
            correcta: 1,
            explicacion: "Mayo descubrió que factores como atención a los trabajadores, relaciones grupales y reconocimiento afectaban la productividad.",
            dificultad: 2,
            tema: "Escuela de relaciones humanas"
        },
        {
            id: 23,
            contexto: "La teoría de las relaciones humanas enfatiza aspectos sociales.",
            pregunta: "¿Qué concepto introdujo la escuela de relaciones humanas?",
            opciones: [
                "A) Organización formal",
                "B) Organización informal",
                "C) Burocracia",
                "D) Departamentalización",
                "E) Estandarización"
            ],
            correcta: 1,
            explicacion: "La escuela de relaciones humanas introdujo el concepto de organización informal: grupos, amistades y relaciones espontáneas.",
            dificultad: 2,
            tema: "Escuela de relaciones humanas"
        },
        {
            id: 24,
            contexto: "Max Weber desarrolló la teoría de la burocracia.",
            pregunta: "¿Qué características tiene la burocracia según Weber?",
            opciones: [
                "A) Informalidad y flexibilidad",
                "B) Jerarquía, reglas escritas, división del trabajo e impersonalidad",
                "C) Creatividad e innovación",
                "D) Relaciones personales",
                "E) Liderazgo carismático"
            ],
            correcta: 1,
            explicacion: "La burocracia weberiana se caracteriza por jerarquía definida, reglas escritas, especialización, impersonalidad y meritocracia.",
            dificultad: 2,
            tema: "Escuela de las burocracias"
        },
        {
            id: 25,
            contexto: "La escuela cuantitativa aplica métodos matemáticos.",
            pregunta: "¿Qué técnica desarrolló la escuela cuantitativa?",
            opciones: [
                "A) Estudios de tiempos",
                "B) Investigación de operaciones",
                "C) Entrevistas de personal",
                "D) Observación participante",
                "E) Estudios de casos"
            ],
            correcta: 1,
            explicacion: "La investigación de operaciones usa modelos matemáticos, estadística y algoritmos para apoyar la toma de decisiones.",
            dificultad: 1,
            tema: "Escuela cuantitativa"
        },
        {
            id: 26,
            contexto: "La teoría de sistemas aplica conceptos cibernéticos.",
            pregunta: "¿Qué concepto de sistemas se aplica a las organizaciones?",
            opciones: [
                "A) Homeostasis y entropía",
                "B) Plusvalía",
                "C) Plusvalor",
                "D) Alienación",
                "E) Lucha de clases"
            ],
            correcta: 0,
            explicacion: "La homeostasis (equilibrio dinámico) y la entropía (tendencia al desorden) son conceptos aplicados a las organizaciones.",
            dificultad: 3,
            tema: "Escuela de sistemas"
        },
        {
            id: 27,
            contexto: "La teoría de sistemas distingue sistemas abiertos y cerrados.",
            pregunta: "¿Qué caracteriza a un sistema abierto?",
            opciones: [
                "A) No interactúa con el ambiente",
                "B) Intercambia materia, energía e información con el entorno",
                "C) Es autosuficiente",
                "D) No tiene entradas ni salidas",
                "E) Es estático"
            ],
            correcta: 1,
            explicacion: "Los sistemas abiertos interactúan con el ambiente mediante entradas, transformación, salidas y retroalimentación.",
            dificultad: 1,
            tema: "Escuela de sistemas"
        },
        {
            id: 28,
            contexto: "Las corrientes actuales incluyen calidad total.",
            pregunta: "¿Qué filosofía promueve la mejora continua en todos los procesos?",
            opciones: [
                "A) Reingeniería",
                "B) Calidad total",
                "C) Outsourcing",
                "D) Benchmarking",
                "E) Downsizing"
            ],
            correcta: 1,
            explicacion: "La calidad total busca la mejora continua en todas las áreas para satisfacer al cliente.",
            dificultad: 1,
            tema: "Corrientes actuales"
        },
        {
            id: 29,
            contexto: "La reingeniería rediseña procesos radicalmente.",
            pregunta: "¿Qué busca la reingeniería de procesos?",
            opciones: [
                "A) Mejoras graduales",
                "B) Cambios radicales para mejorar drásticamente resultados",
                "C) Mantener lo existente",
                "D) Reducir personal",
                "E) Aumentar control"
            ],
            correcta: 1,
            explicacion: "La reingeniería busca rediseñar procesos desde cero para lograr mejoras drásticas en costo, calidad y servicio.",
            dificultad: 2,
            tema: "Corrientes actuales"
        },
        {
            id: 30,
            contexto: "El papel del administrador ha evolucionado.",
            pregunta: "¿Qué papel tiene el administrador en organizaciones modernas?",
            opciones: [
                "A) Solo controlar",
                "B) Coordinar recursos y liderar equipos hacia objetivos",
                "C) Hacer todo el trabajo",
                "D) Tomar decisiones unilaterales",
                "E) Supervisar estrictamente"
            ],
            correcta: 1,
            explicacion: "El administrador moderno coordina recursos, lidera equipos, facilita procesos y toma decisiones estratégicas.",
            dificultad: 1,
            tema: "El papel del administrador"
        },

        // ============================================
        // 4. FUNCIONES BÁSICAS DE LA EMPRESA (Preguntas 31-70)
        // 4.4. MERCADOTECNIA
        // ============================================
        {
            id: 31,
            contexto: "La mercadotecnia identifica y satisface necesidades.",
            pregunta: "¿Cuál es el concepto central de la mercadotecnia?",
            opciones: [
                "A) Vender productos",
                "B) Satisfacer necesidades del cliente mediante intercambios",
                "C) Publicidad",
                "D) Reducir precios",
                "E) Distribuir productos"
            ],
            correcta: 1,
            explicacion: "La mercadotecnia busca satisfacer necesidades y deseos del mercado mediante intercambios que beneficien a ambas partes.",
            dificultad: 1,
            tema: "Mercadotecnia"
        },
        {
            id: 32,
            contexto: "Las necesidades y características del producto definen su diseño.",
            pregunta: "¿Qué son las necesidades en mercadotecnia?",
            opciones: [
                "A) Deseos de lujo",
                "B) Estados de carencia percibida",
                "C) Caprichos",
                "D) Demandas del mercado",
                "E) Preferencias"
            ],
            correcta: 1,
            explicacion: "Las necesidades son carencias básicas humanas (alimento, abrigo, seguridad) que el marketing busca satisfacer.",
            dificultad: 1,
            tema: "Necesidades del producto"
        },
        {
            id: 33,
            contexto: "Los productos tienen características tangibles e intangibles.",
            pregunta: "¿Qué incluye la descripción de un producto?",
            opciones: [
                "A) Solo precio",
                "B) Atributos físicos, beneficios, marca, empaque y servicio",
                "C) Únicamente el nombre",
                "D) Solo el color",
                "E) La publicidad"
            ],
            correcta: 1,
            explicacion: "La descripción del producto incluye características tangibles e intangibles, beneficios, marca, empaque y servicios asociados.",
            dificultad: 1,
            tema: "Descripción del producto"
        },
        {
            id: 34,
            contexto: "El precio se determina por diversos factores.",
            pregunta: "¿Qué factores influyen en la fijación de precios?",
            opciones: [
                "A) Solo costos",
                "B) Costos, demanda, competencia y objetivos de la empresa",
                "C) Únicamente la competencia",
                "D) Solo la demanda",
                "E) La publicidad"
            ],
            correcta: 1,
            explicacion: "El precio se fija considerando costos, demanda, precios de competidores y objetivos estratégicos de la empresa.",
            dificultad: 1,
            tema: "Mecanismos de regulación del precio"
        },
        {
            id: 35,
            contexto: "Los canales de comercialización distribuyen productos.",
            pregunta: "¿Qué son los canales de comercialización?",
            opciones: [
                "A) La publicidad",
                "B) Las rutas que siguen los productos del productor al consumidor",
                "C) Los precios",
                "D) Los productos mismos",
                "E) Las promociones"
            ],
            correcta: 1,
            explicacion: "Los canales de comercialización son las vías que utilizan los productos para llegar del productor al consumidor final.",
            dificultad: 1,
            tema: "Canales de comercialización"
        },
        {
            id: 36,
            contexto: "Los canales pueden ser directos o indirectos.",
            pregunta: "¿Qué es un canal directo de comercialización?",
            opciones: [
                "A) Productor - mayorista - minorista - consumidor",
                "B) Productor - consumidor",
                "C) Productor - agente - consumidor",
                "D) Productor - minorista - consumidor",
                "E) Importador - exportador"
            ],
            correcta: 1,
            explicacion: "El canal directo va del productor al consumidor sin intermediarios, como ventas por internet o tiendas propias.",
            dificultad: 1,
            tema: "Canales de comercialización"
        },
        {
            id: 37,
            contexto: "La promoción y publicidad comunican al mercado.",
            pregunta: "¿Qué objetivo tiene la promoción de ventas?",
            opciones: [
                "A) Crear imagen a largo plazo",
                "B) Estimular compras inmediatas mediante incentivos",
                "C) Informar sobre la empresa",
                "D) Educar al consumidor",
                "E) Mejorar el producto"
            ],
            correcta: 1,
            explicacion: "La promoción busca incentivar compras a corto plazo con ofertas, cupones, muestras, concursos, etc.",
            dificultad: 1,
            tema: "Promoción y publicidad"
        },
        {
            id: 38,
            contexto: "La publicidad crea imagen de marca.",
            pregunta: "¿Qué diferencia a la publicidad de la promoción?",
            opciones: [
                "A) La publicidad no paga",
                "B) La publicidad busca crear imagen a largo plazo; la promoción busca ventas inmediatas",
                "C) Son lo mismo",
                "D) La publicidad es más barata",
                "E) La promoción es masiva"
            ],
            correcta: 1,
            explicacion: "La publicidad busca construir marca e imagen a largo plazo; la promoción busca resultados inmediatos.",
            dificultad: 1,
            tema: "Promoción y publicidad"
        },
        {
            id: 39,
            contexto: "El comercio electrónico ha crecido enormemente.",
            pregunta: "¿Qué caracteriza al comercio electrónico?",
            opciones: [
                "A) Ventas presenciales",
                "B) Transacciones comerciales mediante internet",
                "C) Catálogos impresos",
                "D) Telemarketing",
                "E) Ventas por correo"
            ],
            correcta: 1,
            explicacion: "El e-commerce son transacciones comerciales realizadas a través de internet, incluyendo tiendas virtuales y marketplaces.",
            dificultad: 1,
            tema: "Comercio electrónico"
        },
        {
            id: 40,
            contexto: "Las finanzas administran los recursos monetarios.",
            pregunta: "¿Qué estudian las finanzas?",
            opciones: [
                "A) La producción",
                "B) La obtención y administración de recursos financieros",
                "C) El personal",
                "D) La mercadotecnia",
                "E) Las ventas"
            ],
            correcta: 1,
            explicacion: "Las finanzas estudian cómo obtener y administrar eficientemente los recursos financieros de una organización.",
            dificultad: 1,
            tema: "Finanzas"
        },
        {
            id: 41,
            contexto: "El análisis financiero evalúa la situación económica.",
            pregunta: "¿Qué herramienta se usa en el análisis financiero?",
            opciones: [
                "A) Encuestas",
                "B) Razones financieras",
                "C) Grupos de enfoque",
                "D) Observación",
                "E) Experimentos"
            ],
            correcta: 1,
            explicacion: "Las razones financieras (liquidez, endeudamiento, rentabilidad) evalúan el desempeño financiero de la empresa.",
            dificultad: 2,
            tema: "Análisis financiero"
        },
        {
            id: 42,
            contexto: "La liquidez mide capacidad de pago.",
            pregunta: "¿Qué mide la razón de liquidez?",
            opciones: [
                "A) Rentabilidad",
                "B) Capacidad de pagar deudas a corto plazo",
                "C) Endeudamiento",
                "D) Eficiencia",
                "E) Crecimiento"
            ],
            correcta: 1,
            explicacion: "La liquidez mide la capacidad de la empresa para cumplir sus obligaciones de corto plazo.",
            dificultad: 1,
            tema: "Análisis financiero"
        },
        {
            id: 43,
            contexto: "La rentabilidad mide generación de utilidades.",
            pregunta: "¿Qué indica el ROA (Return on Assets)?",
            opciones: [
                "A) Liquidez",
                "B) Rentabilidad sobre activos",
                "C) Endeudamiento",
                "D) Rotación de inventarios",
                "E) Plazo de cobro"
            ],
            correcta: 1,
            explicacion: "El ROA mide la eficiencia con que la empresa genera utilidades con sus activos.",
            dificultad: 2,
            tema: "Análisis financiero"
        },
        {
            id: 44,
            contexto: "La planeación financiera proyecta el futuro.",
            pregunta: "¿Qué documento principal se elabora en la planeación financiera?",
            opciones: [
                "A) Organigrama",
                "B) Presupuesto",
                "C) Manual de procedimientos",
                "D) Contrato",
                "E) Reglamento"
            ],
            correcta: 1,
            explicacion: "El presupuesto es el principal instrumento de planeación financiera, proyectando ingresos, gastos y flujos de efectivo.",
            dificultad: 1,
            tema: "Planeación financiera"
        },
        {
            id: 45,
            contexto: "Las finanzas internacionales consideran múltiples monedas.",
            pregunta: "¿Qué riesgo enfrentan las finanzas internacionales?",
            opciones: [
                "A) Riesgo de incendio",
                "B) Riesgo cambiario",
                "C) Riesgo de robo",
                "D) Riesgo laboral",
                "E) Riesgo tecnológico"
            ],
            correcta: 1,
            explicacion: "El riesgo cambiario es la posible pérdida por fluctuaciones en el tipo de cambio entre monedas.",
            dificultad: 1,
            tema: "Finanzas internacionales"
        },
        {
            id: 46,
            contexto: "La producción transforma insumos en productos.",
            pregunta: "¿Qué función tiene el área de producción?",
            opciones: [
                "A) Vender productos",
                "B) Transformar materias primas en bienes o servicios",
                "C) Contratar personal",
                "D) Llevar contabilidad",
                "E) Financiar operaciones"
            ],
            correcta: 1,
            explicacion: "Producción es el proceso de transformar insumos (materiales, mano de obra, energía) en productos terminados.",
            dificultad: 1,
            tema: "Producción"
        },
        {
            id: 47,
            contexto: "La planeación de producción organiza la fabricación.",
            pregunta: "¿Qué determina la planeación de la producción?",
            opciones: [
                "A) Precios de venta",
                "B) Qué, cuánto, cuándo y cómo producir",
                "C) Publicidad",
                "D) Selección de personal",
                "E) Financiamiento"
            ],
            correcta: 1,
            explicacion: "La planeación de producción define productos, cantidades, tiempos y métodos de fabricación.",
            dificultad: 1,
            tema: "Planeación de la producción"
        },
        {
            id: 48,
            contexto: "Las herramientas de producción mejoran eficiencia.",
            pregunta: "¿Qué herramienta de producción elimina desperdicios?",
            opciones: [
                "A) Publicidad",
                "B) Justo a tiempo (JIT)",
                "C) Marketing",
                "D) Finanzas",
                "E) Recursos humanos"
            ],
            correcta: 1,
            explicacion: "El sistema Justo a Tiempo (JIT) busca eliminar inventarios y desperdicios produciendo solo lo necesario.",
            dificultad: 2,
            tema: "Herramientas y técnicas de producción"
        },
        {
            id: 49,
            contexto: "Los sistemas de producción pueden ser continuos o intermitentes.",
            pregunta: "¿Qué caracteriza a un sistema de producción continua?",
            opciones: [
                "A) Producción por lotes",
                "B) Flujo ininterrumpido de producción 24/7",
                "C) Producción bajo pedido",
                "D) Talleres de trabajo",
                "E) Proyectos únicos"
            ],
            correcta: 1,
            explicacion: "La producción continua opera sin interrupciones, típica en industrias de proceso como refinerías o cementeras.",
            dificultad: 2,
            tema: "Sistemas de producción"
        },
        {
            id: 50,
            contexto: "El control de calidad asegura estándares.",
            pregunta: "¿Qué significa calidad en producción?",
            opciones: [
                "A) Productos caros",
                "B) Cumplir con especificaciones y satisfacer necesidades del cliente",
                "C) Productos importados",
                "D) Alta tecnología",
                "E) Marcas conocidas"
            ],
            correcta: 1,
            explicacion: "Calidad es el grado en que un producto cumple especificaciones y satisface las expectativas del cliente.",
            dificultad: 1,
            tema: "Control de calidad"
        },
        {
            id: 51,
            contexto: "Los recursos humanos gestionan el talento.",
            pregunta: "¿Qué función principal tiene recursos humanos?",
            opciones: [
                "A) Vender productos",
                "B) Gestionar el personal de la organización",
                "C) Producir bienes",
                "D) Llevar contabilidad",
                "E) Financiar operaciones"
            ],
            correcta: 1,
            explicacion: "Recursos humanos se encarga de atraer, desarrollar, retener y motivar al personal de la organización.",
            dificultad: 1,
            tema: "Recursos humanos"
        },
        {
            id: 52,
            contexto: "La planeación de fuerza laboral anticipa necesidades.",
            pregunta: "¿Qué es la planeación de recursos humanos?",
            opciones: [
                "A) Contratar sin plan",
                "B) Anticipar necesidades futuras de personal y cómo satisfacerlas",
                "C) Despedir empleados",
                "D) Pagar nóminas",
                "E) Capacitar"
            ],
            correcta: 1,
            explicacion: "La planeación de RH anticipa necesidades de personal y define estrategias de reclutamiento, selección y desarrollo.",
            dificultad: 1,
            tema: "Planeación de fuerza laboral"
        },
        {
            id: 53,
            contexto: "El reclutamiento busca candidatos.",
            pregunta: "¿Qué diferencia hay entre reclutamiento y selección?",
            opciones: [
                "A) Son lo mismo",
                "B) Reclutamiento atrae candidatos; selección elige al mejor",
                "C) Reclutamiento elige; selección atrae",
                "D) Reclutamiento es externo; selección interno",
                "E) No hay diferencia"
            ],
            correcta: 1,
            explicacion: "El reclutamiento busca atraer candidatos; la selección evalúa y elige al más adecuado.",
            dificultad: 1,
            tema: "Procesos de selección, reclutamiento y capacitación"
        },
        {
            id: 54,
            contexto: "La capacitación desarrolla habilidades.",
            pregunta: "¿Qué objetivo tiene la capacitación?",
            opciones: [
                "A) Despedir personal",
                "B) Desarrollar habilidades y conocimientos para el puesto",
                "C) Aumentar salarios",
                "D) Reducir personal",
                "E) Evaluar desempeño"
            ],
            correcta: 1,
            explicacion: "La capacitación busca mejorar competencias laborales para un mejor desempeño en el puesto.",
            dificultad: 1,
            tema: "Capacitación del personal"
        },
        {
            id: 55,
            contexto: "Los sueldos y salarios compensan el trabajo.",
            pregunta: "¿Qué diferencia hay entre sueldo y salario?",
            opciones: [
                "A) Son lo mismo",
                "B) Sueldo es por mes; salario por día o semana",
                "C) Sueldo es mayor",
                "D) Salario es solo para obreros",
                "E) Sueldo incluye prestaciones"
            ],
            correcta: 1,
            explicacion: "El sueldo se paga por mes (trabajadores de confianza); el salario por unidad de tiempo (jornaleros).",
            dificultad: 1,
            tema: "Sueldos, salarios y prestaciones"
        },
        {
            id: 56,
            contexto: "Las prestaciones complementan el salario.",
            pregunta: "¿Qué son las prestaciones laborales?",
            opciones: [
                "A) Solo el aguinaldo",
                "B) Beneficios adicionales al salario (vacaciones, prima, aguinaldo, IMSS)",
                "C) Multas",
                "D) Descuentos",
                "E) Impuestos"
            ],
            correcta: 1,
            explicacion: "Las prestaciones son beneficios adicionales al salario que recibe el trabajador por ley o por contrato.",
            dificultad: 1,
            tema: "Sueldos, salarios y prestaciones"
        },
        {
            id: 57,
            contexto: "Las relaciones laborales se rigen por la ley.",
            pregunta: "¿Qué ley regula las relaciones laborales en México?",
            opciones: [
                "A) Código Civil",
                "B) Ley Federal del Trabajo",
                "C) Código de Comercio",
                "D) Ley de Amparo",
                "E) Ley General de Sociedades"
            ],
            correcta: 1,
            explicacion: "La Ley Federal del Trabajo regula las relaciones entre trabajadores y patrones en México.",
            dificultad: 1,
            tema: "Relaciones laborales"
        },
        {
            id: 58,
            contexto: "El contrato individual de trabajo es fundamental.",
            pregunta: "¿Qué elementos debe tener un contrato individual de trabajo?",
            opciones: [
                "A) Solo salario",
                "B) Servicio personal, subordinación y salario",
                "C) Duración y lugar",
                "D) Firma del sindicato",
                "E) Horario"
            ],
            correcta: 1,
            explicacion: "Los elementos esenciales son: prestación de un servicio personal, subordinación jurídica y pago de salario.",
            dificultad: 1,
            tema: "Relaciones laborales"
        },
        {
            id: 59,
            contexto: "El desarrollo del personal impulsa el crecimiento.",
            pregunta: "¿Qué diferencia hay entre capacitación y desarrollo?",
            opciones: [
                "A) Son iguales",
                "B) Capacitación es para el puesto actual; desarrollo para crecimiento futuro",
                "C) Desarrollo es técnico",
                "D) Capacitación es solo para gerentes",
                "E) Desarrollo es obligatorio"
            ],
            correcta: 1,
            explicacion: "La capacitación se enfoca en habilidades para el puesto actual; el desarrollo prepara para responsabilidades futuras.",
            dificultad: 2,
            tema: "Desarrollo del personal"
        },
        {
            id: 60,
            contexto: "La evaluación del desempeño mide resultados.",
            pregunta: "¿Para qué sirve la evaluación del desempeño?",
            opciones: [
                "A) Para despedir",
                "B) Para medir rendimiento, dar retroalimentación y tomar decisiones",
                "C) Solo para aumentar sueldo",
                "D) Para cumplir la ley",
                "E) Para contratar"
            ],
            correcta: 1,
            explicacion: "La evaluación del desempeño mide resultados, da retroalimentación y fundamenta decisiones de promoción, capacitación o compensación.",
            dificultad: 1,
            tema: "Desarrollo del personal"
        },

        // ============================================
        // 5. TEORÍA DEL VALOR NEOCLÁSICO (Preguntas 61-70)
        // ============================================
        {
            id: 61,
            contexto: "Carl Menger fundó la escuela austriaca.",
            pregunta: "¿Qué teoría desarrolló Carl Menger?",
            opciones: [
                "A) Teoría del valor trabajo",
                "B) Teoría subjetiva del valor",
                "C) Teoría cuantitativa del dinero",
                "D) Teoría de juegos",
                "E) Teoría keynesiana"
            ],
            correcta: 1,
            explicacion: "Menger desarrolló la teoría subjetiva del valor, donde el valor depende de la utilidad marginal subjetiva.",
            dificultad: 2,
            tema: "Carl Menger"
        },
        {
            id: 62,
            contexto: "Stanley Jevons desarrolló teoría marginalista.",
            pregunta: "¿Qué concepto introdujo Stanley Jevons?",
            opciones: [
                "A) Plusvalía",
                "B) Utilidad marginal",
                "C) Demanda agregada",
                "D) Multiplicador",
                "E) Liquidez"
            ],
            correcta: 1,
            explicacion: "Jevons introdujo el concepto de utilidad marginal decreciente en su teoría del valor.",
            dificultad: 2,
            tema: "Stanley Jevons"
        },
        {
            id: 63,
            contexto: "León Walras desarrolló el equilibrio general.",
            pregunta: "¿Qué modelo desarrolló León Walras?",
            opciones: [
                "A) Equilibrio parcial",
                "B) Equilibrio general",
                "C) Competencia monopolística",
                "D) Oligopolio",
                "E) Monopolio bilateral"
            ],
            correcta: 1,
            explicacion: "Walras desarrolló la teoría del equilibrio general, donde todos los mercados se equilibran simultáneamente.",
            dificultad: 2,
            tema: "León Walras"
        },
        {
            id: 64,
            contexto: "Alfred Marshall sintetizó teorías clásicas y marginalistas.",
            pregunta: "¿Qué concepto desarrolló Alfred Marshall?",
            opciones: [
                "A) Oferta y demanda",
                "B) Elasticidad",
                "C) Costos fijos",
                "D) Utilidad total",
                "E) Excedente del productor"
            ],
            correcta: 1,
            explicacion: "Marshall desarrolló el concepto de elasticidad para medir la sensibilidad de la demanda a cambios en precio.",
            dificultad: 2,
            tema: "Alfred Marshall"
        },
        {
            id: 65,
            contexto: "Wilfredo Pareto desarrolló teoría del bienestar.",
            pregunta: "¿Qué es el óptimo de Pareto?",
            opciones: [
                "A) Situación donde todos ganan",
                "B) Situación donde no se puede mejorar a alguien sin perjudicar a otro",
                "C) Máxima producción",
                "D) Mínimo costo",
                "E) Equilibrio de mercado"
            ],
            correcta: 1,
            explicacion: "El óptimo de Pareto es una asignación en la que no es posible mejorar el bienestar de alguien sin empeorar el de otro.",
            dificultad: 2,
            tema: "Wilfredo Pareto"
        },

        // ============================================
        // 6. PROCESO ADMINISTRATIVO (Preguntas 71-85)
        // ============================================
        {
            id: 71,
            contexto: "El proceso administrativo tiene fases interrelacionadas.",
            pregunta: "¿Cuáles son las fases del proceso administrativo?",
            opciones: [
                "A) Análisis, diagnóstico y control",
                "B) Planeación, organización, dirección y control",
                "C) Investigación, desarrollo y evaluación",
                "D) Producción, ventas y finanzas",
                "E) Reclutamiento, selección y contratación"
            ],
            correcta: 1,
            explicacion: "El proceso administrativo clásico comprende planeación, organización, dirección y control.",
            dificultad: 1,
            tema: "Fases del proceso administrativo"
        },
        {
            id: 72,
            contexto: "La planeación define objetivos y cursos de acción.",
            pregunta: "¿Qué pregunta responde la planeación?",
            opciones: [
                "A) ¿Cómo lo hicimos?",
                "B) ¿Qué queremos lograr y cómo hacerlo?",
                "C) ¿Quién lo hará?",
                "D) ¿Cuándo se hizo?",
                "E) ¿Dónde ocurrió?"
            ],
            correcta: 1,
            explicacion: "La planeación define objetivos futuros y establece los cursos de acción para alcanzarlos.",
            dificultad: 1,
            tema: "Planeación"
        },
        {
            id: 73,
            contexto: "La organización estructura recursos y actividades.",
            pregunta: "¿Qué producto genera la organización?",
            opciones: [
                "A) Presupuestos",
                "B) Organigramas, manuales y descripción de puestos",
                "C) Estados financieros",
                "D) Contratos",
                "E) Publicidad"
            ],
            correcta: 1,
            explicacion: "La organización produce estructuras formales como organigramas, manuales y descripciones de puestos.",
            dificultad: 1,
            tema: "Organización"
        },
        {
            id: 74,
            contexto: "La dirección ejecuta lo planeado.",
            pregunta: "¿Qué función cumple la dirección?",
            opciones: [
                "A) Diseñar estructura",
                "B) Guiar, motivar y supervisar al personal",
                "C) Medir resultados",
                "D) Definir objetivos",
                "E) Asignar recursos"
            ],
            correcta: 1,
            explicacion: "La dirección consiste en ejecutar los planes mediante la guía, motivación y supervisión del personal.",
            dificultad: 1,
            tema: "Dirección"
        },
        {
            id: 75,
            contexto: "El control verifica resultados.",
            pregunta: "¿Qué pasos incluye el control?",
            opciones: [
                "A) Planear y organizar",
                "B) Establecer estándares, medir, comparar y corregir",
                "C) Contratar y capacitar",
                "D) Producir y vender",
                "E) Financiar e invertir"
            ],
            correcta: 1,
            explicacion: "El control establece estándares, mide resultados, compara con lo planeado y toma acciones correctivas.",
            dificultad: 1,
            tema: "Control"
        },
        {
            id: 76,
            contexto: "La planeación puede ser estratégica, táctica u operativa.",
            pregunta: "¿Qué caracteriza a la planeación estratégica?",
            opciones: [
                "A) Corto plazo y específica",
                "B) Largo plazo, global y define rumbo de la organización",
                "C) Diaria",
                "D) Departamental",
                "E) Operativa"
            ],
            correcta: 1,
            explicacion: "La planeación estratégica es de largo plazo, define la misión, visión y objetivos generales de la organización.",
            dificultad: 1,
            tema: "Planeación"
        },
        {
            id: 77,
            contexto: "La organización puede ser formal e informal.",
            pregunta: "¿Qué es la organización informal?",
            opciones: [
                "A) La que aparece en organigramas",
                "B) Relaciones espontáneas entre miembros de la organización",
                "C) Departamentos oficiales",
                "D) Jerarquías formales",
                "E) Reglamentos"
            ],
            correcta: 1,
            explicacion: "La organización informal surge espontáneamente de las interacciones sociales entre los miembros.",
            dificultad: 1,
            tema: "Organización"
        },
        {
            id: 78,
            contexto: "La dirección incluye liderazgo.",
            pregunta: "¿Qué estilo de liderazgo deja total libertad al grupo?",
            opciones: [
                "A) Autocrático",
                "B) Democrático",
                "C) Laissez-faire",
                "D) Transaccional",
                "E) Transformacional"
            ],
            correcta: 2,
            explicacion: "El liderazgo laissez-faire (dejar hacer) da libertad total al grupo para tomar decisiones.",
            dificultad: 1,
            tema: "Dirección"
        },
        {
            id: 79,
            contexto: "La motivación impulsa el desempeño.",
            pregunta: "¿Qué teoría de motivación propuso Maslow?",
            opciones: [
                "A) Teoría X y Y",
                "B) Jerarquía de necesidades",
                "C) Dos factores",
                "D) Expectativas",
                "E) Equidad"
            ],
            correcta: 1,
            explicacion: "Maslow propuso una jerarquía de necesidades: fisiológicas, seguridad, sociales, estima y autorrealización.",
            dificultad: 1,
            tema: "Dirección"
        },
        {
            id: 80,
            contexto: "La comunicación es clave en dirección.",
            pregunta: "¿Qué tipos de comunicación existen en la organización?",
            opciones: [
                "A) Solo escrita",
                "B) Formal e informal, ascendente, descendente y horizontal",
                "C) Únicamente verbal",
                "D) Solo digital",
                "E) Exclusivamente interna"
            ],
            correcta: 1,
            explicacion: "La comunicación puede ser formal (canales oficiales) e informal (rumores), y fluir en diferentes direcciones.",
            dificultad: 1,
            tema: "Dirección"
        },
        {
            id: 81,
            contexto: "El control puede ser preventivo o correctivo.",
            pregunta: "¿Qué tipo de control actúa antes de la operación?",
            opciones: [
                "A) Control concurrente",
                "B) Control preventivo",
                "C) Control posterior",
                "D) Control financiero",
                "E) Control de calidad"
            ],
            correcta: 1,
            explicacion: "El control preventivo (feedforward) anticipa problemas antes de que ocurran.",
            dificultad: 2,
            tema: "Control"
        },
        {
            id: 82,
            contexto: "La departamentalización agrupa actividades.",
            pregunta: "¿Qué criterio de departamentalización agrupa por funciones similares?",
            opciones: [
                "A) Por producto",
                "B) Funcional",
                "C) Geográfica",
                "D) Por clientes",
                "E) Por procesos"
            ],
            correcta: 1,
            explicacion: "La departamentalización funcional agrupa actividades por funciones (producción, ventas, finanzas, RH).",
            dificultad: 1,
            tema: "Organización"
        },
        {
            id: 83,
            contexto: "La centralización concentra autoridad.",
            pregunta: "¿Qué significa centralización?",
            opciones: [
                "A) Delegar autoridad",
                "B) Concentrar la autoridad en la alta dirección",
                "C) Distribuir poder",
                "D) Crear comités",
                "E) Formar equipos"
            ],
            correcta: 1,
            explicacion: "Centralización significa que la autoridad para tomar decisiones se concentra en los niveles superiores.",
            dificultad: 1,
            tema: "Organización"
        },
        {
            id: 84,
            contexto: "La delegación asigna responsabilidades.",
            pregunta: "¿Qué elementos incluye la delegación?",
            opciones: [
                "A) Autoridad, responsabilidad y rendición de cuentas",
                "B) Solo tareas",
                "C) Únicamente autoridad",
                "D) Solo responsabilidad",
                "E) Poder y dinero"
            ],
            correcta: 0,
            explicacion: "La delegación transfiere autoridad y responsabilidad, manteniendo la rendición de cuentas.",
            dificultad: 1,
            tema: "Organización"
        },
        {
            id: 85,
            contexto: "El tramo de control define número de subordinados.",
            pregunta: "¿Qué es el tramo de control?",
            opciones: [
                "A) Tiempo de trabajo",
                "B) Número de subordinados que reportan a un jefe",
                "C) Área geográfica",
                "D) Presupuesto",
                "E) Horario laboral"
            ],
            correcta: 1,
            explicacion: "El tramo de control es la cantidad de personas que un gerente puede supervisar eficazmente.",
            dificultad: 1,
            tema: "Organización"
        },

        // ============================================
        // 7. CONCEPTO DE SISTEMA ECONÓMICO (Preguntas 86-100)
        // ============================================
        {
            id: 86,
            contexto: "La economía estudia la asignación de recursos escasos.",
            pregunta: "¿Cuál es el problema fundamental de la economía?",
            opciones: [
                "A) Inflación",
                "B) Escasez",
                "C) Desempleo",
                "D) Crecimiento",
                "E) Distribución"
            ],
            correcta: 1,
            explicacion: "La escasez de recursos frente a necesidades ilimitadas es el problema económico fundamental.",
            dificultad: 1,
            tema: "Definición y objetivo de la economía"
        },
        {
            id: 87,
            contexto: "La economía responde preguntas básicas.",
            pregunta: "¿Cuáles son las tres preguntas básicas de la economía?",
            opciones: [
                "A) ¿Qué?, ¿Cómo? y ¿Para quién? producir",
                "B) ¿Cuándo?, ¿Dónde? y ¿Por qué?",
                "C) ¿Quién?, ¿Cuánto? y ¿Cuál?",
                "D) ¿Precio?, ¿Costo? y ¿Utilidad?",
                "E) ¿Oferta?, ¿Demanda? y ¿Equilibrio?"
            ],
            correcta: 0,
            explicacion: "Toda sociedad debe responder qué producir, cómo producirlo y para quién producirlo.",
            dificultad: 1,
            tema: "Definición y objetivo de la economía"
        },
        {
            id: 88,
            contexto: "Los sistemas económicos organizan la actividad económica.",
            pregunta: "¿Qué tipos de sistemas económicos existen?",
            opciones: [
                "A) Solo capitalismo",
                "B) Economía de mercado, economía centralizada y economía mixta",
                "C) Únicamente socialismo",
                "D) Solo feudalismo",
                "E) Economía tradicional"
            ],
            correcta: 1,
            explicacion: "Los principales sistemas son: mercado (capitalista), planificación central (socialista) y mixtos.",
            dificultad: 1,
            tema: "Tipos de sistemas económicos"
        },
        {
            id: 89,
            contexto: "La economía de mercado se basa en la libre empresa.",
            pregunta: "¿Qué caracteriza a una economía de mercado?",
            opciones: [
                "A) El Estado decide todo",
                "B) Propiedad privada, libertad de empresa y precios determinados por oferta y demanda",
                "C) Propiedad estatal",
                "D) Planificación central",
                "E) Ausencia de mercado"
            ],
            correcta: 1,
            explicacion: "La economía de mercado se basa en propiedad privada, iniciativa privada y precios determinados por el mercado.",
            dificultad: 1,
            tema: "Tipos de sistemas económicos"
        },
        {
            id: 90,
            contexto: "La economía centralizada planifica todo.",
            pregunta: "¿Qué caracteriza a una economía centralizada?",
            opciones: [
                "A) Libre mercado",
                "B) El Estado posee los medios de producción y planifica la economía",
                "C) Propiedad privada",
                "D) Competencia",
                "E) Libre empresa"
            ],
            correcta: 1,
            explicacion: "En la economía centralizada, el Estado es propietario de los medios de producción y decide la asignación de recursos.",
            dificultad: 1,
            tema: "Tipos de sistemas económicos"
        },
        {
            id: 91,
            contexto: "La economía mixta combina mercado e intervención estatal.",
            pregunta: "¿Qué país tiene una economía mixta?",
            opciones: [
                "A) Corea del Norte",
                "B) México",
                "C) Cuba (antes)",
                "D) URSS (histórica)",
                "E) China (antes)"
            ],
            correcta: 1,
            explicacion: "México tiene economía mixta: mercado libre con intervención estatal en sectores estratégicos.",
            dificultad: 1,
            tema: "Tipos de sistemas económicos"
        },
        {
            id: 92,
            contexto: "La microeconomía estudia agentes individuales.",
            pregunta: "¿Qué estudia la microeconomía?",
            opciones: [
                "A) La economía nacional",
                "B) El comportamiento de consumidores, empresas y mercados específicos",
                "C) La inflación",
                "D) El desempleo",
                "E) El PIB"
            ],
            correcta: 1,
            explicacion: "La microeconomía analiza decisiones de hogares, empresas y el funcionamiento de mercados particulares.",
            dificultad: 1,
            tema: "Micro y macroeconomía"
        },
        {
            id: 93,
            contexto: "La macroeconomía estudia agregados.",
            pregunta: "¿Qué variables estudia la macroeconomía?",
            opciones: [
                "A) Precio de un producto",
                "B) PIB, inflación, desempleo, balanza de pagos",
                "C) Costo de producción",
                "D) Demanda individual",
                "E) Utilidad de una empresa"
            ],
            correcta: 1,
            explicacion: "La macroeconomía estudia variables agregadas como producción nacional, nivel general de precios y empleo.",
            dificultad: 1,
            tema: "Micro y macroeconomía"
        },
        {
            id: 94,
            contexto: "La oferta y demanda determinan precios.",
            pregunta: "¿Qué ocurre cuando aumenta la demanda y la oferta permanece constante?",
            opciones: [
                "A) El precio baja",
                "B) El precio sube",
                "C) El precio no cambia",
                "D) Desaparece el mercado",
                "E) Aumenta la oferta"
            ],
            correcta: 1,
            explicacion: "Si la demanda aumenta con oferta constante, el precio tiende a subir por mayor competencia entre compradores.",
            dificultad: 1,
            tema: "Microeconomía"
        },
        {
            id: 95,
            contexto: "La elasticidad mide sensibilidad.",
            pregunta: "Si la demanda es elástica, ¿qué ocurre al subir el precio?",
            opciones: [
                "A) Aumentan ingresos",
                "B) Disminuyen ingresos",
                "C) No cambian ingresos",
                "D) Aumenta cantidad demandada",
                "E) Todo permanece igual"
            ],
            correcta: 1,
            explicacion: "En demanda elástica, el aumento de precio reduce tanto la cantidad demandada que los ingresos totales disminuyen.",
            dificultad: 2,
            tema: "Microeconomía"
        },
        {
            id: 96,
            contexto: "La inflación es aumento general de precios.",
            pregunta: "¿Qué causa la inflación por demanda?",
            opciones: [
                "A) Aumento de costos",
                "B) Exceso de demanda agregada",
                "C) Reducción de dinero",
                "D) Menor consumo",
                "E) Mayor oferta"
            ],
            correcta: 1,
            explicacion: "La inflación por demanda ocurre cuando la demanda agregada supera la capacidad productiva de la economía.",
            dificultad: 1,
            tema: "Macroeconomía"
        },
        {
            id: 97,
            contexto: "El desempleo afecta a la fuerza laboral.",
            pregunta: "¿Qué es la tasa de desempleo?",
            opciones: [
                "A) Personas sin trabajo",
                "B) Porcentaje de la PEA que busca trabajo y no encuentra",
                "C) Población total",
                "D) Jubilados",
                "E) Estudiantes"
            ],
            correcta: 1,
            explicacion: "La tasa de desempleo es el porcentaje de la Población Económicamente Activa que está sin trabajo y buscando.",
            dificultad: 1,
            tema: "Macroeconomía"
        },
        {
            id: 98,
            contexto: "La política fiscal usa gasto e impuestos.",
            pregunta: "¿Qué instrumentos usa la política fiscal?",
            opciones: [
                "A) Tasas de interés",
                "B) Gasto público e impuestos",
                "C) Tipo de cambio",
                "D) Oferta monetaria",
                "E) Reservas bancarias"
            ],
            correcta: 1,
            explicacion: "La política fiscal utiliza el gasto público y los impuestos para influir en la economía.",
            dificultad: 1,
            tema: "Macroeconomía"
        },
        {
            id: 99,
            contexto: "La política monetaria controla dinero y crédito.",
            pregunta: "¿Qué institución aplica la política monetaria en México?",
            opciones: [
                "A) SHCP",
                "B) Banco de México",
                "C) SAT",
                "D) CNBV",
                "E) CONDUSEF"
            ],
            correcta: 1,
            explicacion: "El Banco de México (Banxico) es el banco central encargado de la política monetaria.",
            dificultad: 1,
            tema: "Macroeconomía"
        },
        {
            id: 100,
            contexto: "La balanza de pagos registra transacciones internacionales.",
            pregunta: "¿Qué cuenta de la balanza de pagos registra exportaciones e importaciones?",
            opciones: [
                "A) Cuenta de capital",
                "B) Cuenta corriente",
                "C) Cuenta financiera",
                "D) Errores y omisiones",
                "E) Reservas internacionales"
            ],
            correcta: 1,
            explicacion: "La cuenta corriente registra el comercio de bienes y servicios, rentas y transferencias corrientes.",
            dificultad: 1,
            tema: "Macroeconomía"
        }
    ];
    
    console.log("✅ TOTAL:", DATOS_ACUDE.preguntas.economia.length, "preguntas de economía y administración cargadas correctamente");
    console.log("📊 Distribución:");
    console.log("- Introducción y antecedentes: 10 preguntas");
    console.log("- Enfoques de administración: 5 preguntas");
    console.log("- Desarrollo de teoría administrativa: 15 preguntas");
    console.log("- Funciones básicas de empresa: 30 preguntas");
    console.log("- Teoría del valor neoclásico: 5 preguntas");
    console.log("- Proceso administrativo: 15 preguntas");
    console.log("- Sistemas económicos: 20 preguntas");
}