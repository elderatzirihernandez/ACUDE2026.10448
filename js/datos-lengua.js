// js/datos-lengua.js
// PREGUNTAS DE LENGUA ESPAÑOLA - 100 PREGUNTAS

if (typeof DATOS_ACUDE !== 'undefined') {

    // ============================================
    // AGREGAR LAS 100 PREGUNTAS DE LENGUA
    // ============================================
    DATOS_ACUDE.preguntas.lengua = [
        // ============================================
    // 1.1. COMPRENSIÓN LECTORA (Preguntas 1-20)
    // ============================================
    // 1.1.1. MENSAJE DEL TEXTO EXPLÍCITO E IMPLÍCITO
    // 1.1.1.a. Estructura de secuencias temporales y narrativas
    {
        id: 1,
        contexto: "Lee el siguiente texto: 'Era una tarde de otoño. Las hojas caían lentamente de los árboles. De pronto, un niño cruzó corriendo la calle. Su madre lo llamó desde la ventana. Él se detuvo y regresó'.",
        pregunta: "¿Qué tipo de estructura predomina en este texto?",
        opciones: [
            "A) Estructura descriptiva sin orden temporal",
            "B) Secuencia temporal y narrativa con marcadores de tiempo",
            "C) Estructura argumentativa con tesis",
            "D) Diálogo entre personajes",
            "E) Texto exclusivamente expositivo"
        ],
        correcta: 1,
        explicacion: "El texto presenta una secuencia temporal: 'Era una tarde' (marco temporal), 'De pronto' (cambio), y acciones sucesivas (cruzó, llamó, detuvo, regresó). Es una estructura narrativa con marcadores temporales.",
        dificultad: 2,
        tema: "Estructura de secuencias temporales"
    },
    {
        id: 2,
        contexto: "Texto: 'Antes de la invención de la imprenta, los libros eran copiados a mano por monjes en los monasterios. Después de Gutenberg, la producción de libros se multiplicó exponencialmente. Actualmente, los libros digitales están transformando nuevamente la lectura'.",
        pregunta: "¿Qué relación temporal establece el texto?",
        opciones: [
            "A) Causa-efecto sin orden cronológico",
            "B) Secuencia cronológica: antes - después - actualmente",
            "C) Simultaneidad de eventos",
            "D) Flashback narrativo",
            "E) Prolepsis (salto al futuro)"
        ],
        correcta: 1,
        explicacion: "El texto organiza la información en orden cronológico usando marcadores temporales explícitos: 'Antes de', 'Después de', 'Actualmente'. Esto permite ver la evolución histórica.",
        dificultad: 2,
        tema: "Estructura de secuencias temporales"
    },

    // 1.1.1.b. Caracterización de personajes, ambientes y acciones
    {
        id: 3,
        contexto: "Fragmento de novela: 'Don Rodrigo era un hombre de unos sesenta años, de complexión robusta y modales bruscos. Vestía siempre de negro, como luto permanente, y su mirada parecía atravesar a quienes se atrevían a sostenerla. Vivía solo en una casona oscura, rodeada de altos muros'.",
        pregunta: "¿Qué elementos predominan en este fragmento?",
        opciones: [
            "A) Descripción de acciones",
            "B) Caracterización del personaje y del ambiente",
            "C) Diálogo entre personajes",
            "D) Argumentación del narrador",
            "E) Exposición de ideas filosóficas"
        ],
        correcta: 1,
        explicacion: "El fragmento describe físicamente al personaje (complexión, vestimenta), psicológicamente (modales, mirada) y el ambiente donde vive (casona oscura, muros). Es caracterización integral.",
        dificultad: 2,
        tema: "Caracterización de personajes y ambientes"
    },
    {
        id: 4,
        contexto: "Texto: 'María caminaba erguida, con paso firme. A pesar de las miradas, no dudó. Subió al estrado y, con voz clara, comenzó su discurso. El público, antes ruidoso, cayó en silencio'.",
        pregunta: "¿Qué caracterización predomina en 'María' y en el 'público' respectivamente?",
        opciones: [
            "A) Física y psicológica / cambio de actitud",
            "B) Solo física en ambos",
            "C) Psicológica en María / física en el público",
            "D) Acciones de María / descripción del lugar",
            "E) Diálogo interno / descripción estática"
        ],
        correcta: 0,
        explicacion: "María se caracteriza por sus acciones y actitud (erguida, paso firme, voz clara) - rasgos psicológicos. El público se caracteriza por su cambio de comportamiento (ruidoso a silencio).",
        dificultad: 3,
        tema: "Caracterización de personajes"
    },

    // 1.1.1.c. Información concreta: datos, hechos, explicaciones y opiniones
    {
        id: 5,
        contexto: "Artículo periodístico: 'El volcán Popocatépetl registró 45 exhalaciones en las últimas 24 horas, según el CENAPRED. La altura de la columna de gases alcanzó los 1,500 metros. Las autoridades recomiendan no acercarse al cráter'.",
        pregunta: "Identifica qué elementos son HECHOS y cuál es una OPINIÓN/RECOMENDACIÓN.",
        opciones: [
            "A) Todo son hechos objetivos",
            "B) 45 exhalaciones y 1,500 metros son hechos; la recomendación es una opinión institucional",
            "C) Solo la altura es un hecho; lo demás son opiniones",
            "D) Las exhalaciones son opiniones; la recomendación es un hecho",
            "E) Nada es verificable"
        ],
        correcta: 1,
        explicacion: "Los datos numéricos (45 exhalaciones, 1,500 metros) son hechos verificables. La recomendación 'no acercarse' es una opinión o consejo basado en esos hechos, no un hecho en sí mismo.",
        dificultad: 2,
        tema: "Hechos vs opiniones"
    },
    {
        id: 6,
        contexto: "Texto científico: 'La clorofila es el pigmento que da color verde a las plantas. Absorbe principalmente luz azul y roja, reflejando la verde. Este proceso, llamado fotosíntesis, convierte CO₂ y agua en glucosa y oxígeno'.",
        pregunta: "¿Qué tipo de información predomina?",
        opciones: [
            "A) Opiniones del autor",
            "B) Datos y explicaciones científicas",
            "C) Narración de eventos",
            "D) Descripción subjetiva",
            "E) Instrucciones para un experimento"
        ],
        correcta: 1,
        explicacion: "El texto presenta información concreta (qué es la clorofila, qué absorbe) y explicaciones del proceso (fotosíntesis). Es texto expositivo-científico con datos objetivos.",
        dificultad: 1,
        tema: "Datos y explicaciones"
    },

    // 1.1.1.d. Forma sintética del texto
    {
        id: 7,
        contexto: "Texto original: 'El Quijote es una novela escrita por Miguel de Cervantes. Se publicó en dos partes, la primera en 1605 y la segunda en 1615. Narra las aventuras de un hidalgo que pierde la razón por leer muchos libros de caballerías'.",
        pregunta: "¿Cuál de las siguientes opciones es una SÍNTESIS adecuada del texto?",
        opciones: [
            "A) Cervantes escribió libros",
            "B) El Quijote, de Cervantes (1605-1615), narra las aventuras de un hidalgo que enloquece por leer novelas de caballerías",
            "C) Una novela sobre un señor que leía mucho",
            "D) El Quijote tiene dos partes",
            "E) Cervantes era español"
        ],
        correcta: 1,
        explicacion: "La opción B sintetiza correctamente: autor, fechas, personaje principal y causa de su locura. Conserva la información esencial sin detalles superfluos.",
        dificultad: 3,
        tema: "Forma sintética"
    },

    // 1.1.1.e. Idea significativa central del texto
    {
        id: 8,
        contexto: "Texto: 'El calentamiento global es causado principalmente por la emisión de gases de efecto invernadero. Estos gases atrapan el calor en la atmósfera. Como consecuencia, los glaciares se derriten, el nivel del mar aumenta y los fenómenos meteorológicos extremos son más frecuentes'.",
        pregunta: "¿Cuál es la idea central del texto?",
        opciones: [
            "A) Los glaciares se derriten",
            "B) El calentamiento global y sus consecuencias",
            "C) Los gases de efecto invernadero son malos",
            "D) El nivel del mar aumenta",
            "E) Hace más calor en verano"
        ],
        correcta: 1,
        explicacion: "La idea central es la relación causal: calentamiento global (causa) → gases invernadero (mecanismo) → consecuencias (derretimiento, nivel del mar, fenómenos). Todo el texto gira en torno a esto.",
        dificultad: 2,
        tema: "Idea central"
    },

    // 1.1.1.f. Premisa y conclusión
    {
        id: 9,
        contexto: "Argumento: 'Todos los mamíferos son vertebrados. El delfín es un mamífero. Por lo tanto, el delfín es vertebrado'.",
        pregunta: "Identifica la premisa mayor, la premisa menor y la conclusión.",
        opciones: [
            "A) Premisa mayor: El delfín es mamífero / Premisa menor: Todos los mamíferos son vertebrados / Conclusión: El delfín es vertebrado",
            "B) Premisa mayor: Todos los mamíferos son vertebrados / Premisa menor: El delfín es mamífero / Conclusión: El delfín es vertebrado",
            "C) Premisa mayor: El delfín es vertebrado / Premisa menor: Todos los mamíferos son vertebrados / Conclusión: El delfín es mamífero",
            "D) No hay premisas, solo conclusión",
            "E) Es una explicación, no un argumento"
        ],
        correcta: 1,
        explicacion: "En un silogismo, la premisa mayor es la general (todos los mamíferos son vertebrados), la premisa menor es el caso particular (el delfín es mamífero), y la conclusión es la consecuencia lógica (delfín es vertebrado).",
        dificultad: 3,
        tema: "Premisa y conclusión"
    },
    {
        id: 10,
        contexto: "Discurso: 'Si aumenta la temperatura media del planeta, entonces se derretirán los polos. La temperatura media está aumentando. Por consiguiente, los polos se derretirán'.",
        pregunta: "¿Qué estructura lógica presenta?",
        opciones: [
            "A) Falacia de causa falsa",
            "B) Modus ponens: si P entonces Q, P, por lo tanto Q",
            "C) Modus tollens: si P entonces Q, no Q, por lo tanto no P",
            "D) Silogismo disyuntivo",
            "E) Petición de principio"
        ],
        correcta: 1,
        explicacion: "Es un modus ponens: 'Si P (aumenta temperatura) entonces Q (polos se derriten)'. Afirmamos P (está aumentando), luego concluimos Q (se derretirán). Estructura válida.",
        dificultad: 4,
        tema: "Premisa y conclusión"
    },

    // ============================================
    // 1.2. INTENCIÓN DEL TEXTO (Preguntas 11-15)
    // 1.2.1. ADECUACIÓN A LA FUNCIÓN
    // 1.2.1.a. Léxico que corresponde al texto (científico, culto, coloquial, literario)
    // ============================================
    {
        id: 11,
        contexto: "Texto A: 'La nefrona es la unidad estructural y funcional del riñón. Realiza la filtración glomerular y la reabsorción tubular'. Texto B: 'Oye, ¿ya viste que los riñones como que limpian la sangre y todo eso?'",
        pregunta: "¿Qué tipo de léxico predomina en cada texto?",
        opciones: [
            "A) A: coloquial / B: científico",
            "B) A: científico / B: coloquial",
            "C) A: literario / B: culto",
            "D) A: técnico / B: poético",
            "E) A: vulgar / B: formal"
        ],
        correcta: 1,
        explicacion: "El texto A usa terminología especializada (nefrona, filtración glomerular) → léxico científico. El texto B usa expresiones cotidianas ('oye', 'como que', 'todo eso') → léxico coloquial.",
        dificultad: 1,
        tema: "Léxico según tipo de texto"
    },
    {
        id: 12,
        contexto: "Fragmento literario: 'Las nieblas matutinas envolvían la vetusta ciudad, como un sudario de ensueño que ocultaba sus heridas de piedra'.",
        pregunta: "¿Qué tipo de léxico predomina y a qué tipo de texto corresponde?",
        opciones: [
            "A) Léxico científico - texto académico",
            "B) Léxico coloquial - conversación diaria",
            "C) Léxico literario con metáforas - texto poético/narrativo",
            "D) Léxico técnico - manual de instrucciones",
            "E) Léxico jurídico - documento legal"
        ],
        correcta: 2,
        explicacion: "El fragmento usa lenguaje figurado (sudario de ensueño, heridas de piedra) y un tono estético. Es claramente literario, con función poética del lenguaje.",
        dificultad: 2,
        tema: "Léxico literario"
    },

    // 1.2.1.b. Fragmentos adaptados según el tipo de lector
    {
        id: 13,
        contexto: "Versión A: 'El corazón bombea sangre a través de las arterias'. Versión B: 'El corazón es como una bomba que impulsa la sangre por unos tubitos llamados arterias'.",
        pregunta: "¿A qué tipo de lector estaría dirigida cada versión?",
        opciones: [
            "A) A: público general / B: niños",
            "B) A: niños / B: especialistas",
            "C) A: especialistas / B: público general o infantil",
            "D) Ambas son iguales",
            "E) A: poético / B: científico"
        ],
        correcta: 2,
        explicacion: "La versión A es más directa y técnica (podría ser para adolescentes o adultos). La versión B usa una analogía simple (bomba, tubitos) típica de explicaciones para niños o público sin formación científica.",
        dificultad: 2,
        tema: "Adaptación al lector"
    },

    // 1.2.1.c. Elementos paratextuales
    {
        id: 14,
        contexto: "Al inicio de un libro aparece: 'A mis padres, por enseñarme a leer entre montañas de libros'.",
        pregunta: "¿Qué elemento paratextual es?",
        opciones: [
            "A) Epígrafe",
            "B) Dedicatoria",
            "C) Cita",
            "D) Nota al pie",
            "E) Prólogo"
        ],
        correcta: 1,
        explicacion: "Es una dedicatoria: el autor expresa gratitud o dedica su obra a alguien. Generalmente aparece al inicio y tiene tono personal.",
        dificultad: 1,
        tema: "Elementos paratextuales"
    },
    {
        id: 15,
        contexto: "En un ensayo filosófico aparece: 'Como señaló Nietzsche: <strong>Dios ha muerto</strong> (Nietzsche, 1882, p. 125)'.",
        pregunta: "¿Qué elemento paratextual se utiliza?",
        opciones: [
            "A) Dedicatoria",
            "B) Epígrafe",
            "C) Cita con referencia",
            "D) Paráfrasis",
            "E) Resumen"
        ],
        correcta: 2,
        explicacion: "Es una cita textual (reproduce palabras exactas de Nietzsche) acompañada de su referencia bibliográfica (autor, año, página).",
        dificultad: 2,
        tema: "Citas y referencias"
    },

    // ============================================
    // 1.3. ESTRUCTURA DE LA LENGUA (Preguntas 16-30)
    // 1.3.1. CATEGORÍAS GRAMATICALES: VERBOS
    // 1.3.1.a. Perífrasis: verbo conjugado y verbo no personal
    // ============================================
    {
        id: 16,
        contexto: "Oración: 'María <strong>está estudiando</strong> para el examen final'.",
        pregunta: "¿Qué construcción verbal encontramos?",
        opciones: [
            "A) Tiempo compuesto",
            "B) Perífrasis de infinitivo",
            "C) Perífrasis de gerundio",
            "D) Perífrasis de participio",
            "E) Voz pasiva"
        ],
        correcta: 2,
        explicacion: "<strong>'Está estudiando'</strong> es una perífrasis de gerundio: verbo auxiliar conjugado (está) + verbo principal en gerundio (estudiando). Indica acción en desarrollo.",
        dificultad: 2,
        tema: "Perífrasis verbales"
    },
    {
        id: 17,
        contexto: "Oración: '<strong>Debes entregar</strong> el trabajo antes del viernes'.",
        pregunta: "¿Qué tipo de perífrasis es <strong>'debes entregar'</strong>?",
        opciones: [
            "A) Perífrasis de gerundio",
            "B) Perífrasis de participio",
            "C) Perífrasis de infinitivo (modal de obligación)",
            "D) Tiempo compuesto",
            "E) Locución verbal"
        ],
        correcta: 2,
        explicacion: "<strong>'Debes entregar'</strong> es perífrasis de infinitivo. 'Debes' (auxiliar modal) + 'entregar' (infinitivo). Indica obligación.",
        dificultad: 2,
        tema: "Perífrasis de infinitivo"
    },
    {
        id: 18,
        contexto: "Oración: '<strong>Tengo terminado</strong> el informe desde ayer'.",
        pregunta: "¿Qué tipo de perífrasis encontramos?",
        opciones: [
            "A) Perífrasis de infinitivo",
            "B) Perífrasis de gerundio",
            "C) Perífrasis de participio",
            "D) Pretérito perfecto compuesto",
            "E) Pluscuamperfecto"
        ],
        correcta: 2,
        explicacion: "<strong>'Tengo terminado'</strong> es perífrasis de participio: verbo auxiliar (tengo) + verbo principal en participio (terminado). Indica resultado o estado resultante de una acción.",
        dificultad: 3,
        tema: "Perífrasis de participio"
    },

    // 1.3.1.b. Tiempos verbales simples y compuestos
    {
        id: 19,
        contexto: "Oración: 'Cuando llegué, ella <strong>ya había salido</strong>'.",
        pregunta: "¿Qué tiempo verbal es <strong>'había salido'</strong>?",
        opciones: [
            "A) Pretérito perfecto simple",
            "B) Pretérito imperfecto",
            "C) Pretérito pluscuamperfecto de indicativo",
            "D) Pretérito perfecto compuesto",
            "E) Condicional compuesto"
        ],
        correcta: 2,
        explicacion: "<strong>'Había salido'</strong> es pretérito pluscuamperfecto de indicativo. Indica una acción anterior a otra acción pasada (llegué - había salido).",
        dificultad: 3,
        tema: "Tiempos compuestos"
    },
    {
        id: 20,
        contexto: "Oración: 'Mañana <strong>habré terminado</strong> el proyecto'.",
        pregunta: "¿Qué tiempo verbal es <strong>'habré terminado'</strong>?",
        opciones: [
            "A) Futuro simple",
            "B) Futuro perfecto (compuesto)",
            "C) Condicional simple",
            "D) Pretérito anterior",
            "E) Presente de subjuntivo"
        ],
        correcta: 1,
        explicacion: "<strong>'Habré terminado'</strong> es futuro perfecto de indicativo. Indica una acción futura que estará terminada antes de otro momento también futuro.",
        dificultad: 3,
        tema: "Tiempos compuestos"
    },

    // 1.3.1.c. Tiempos verbales del subjuntivo: presente, pretérito y futuro
    {
        id: 21,
        contexto: "Oración: 'Espero que <strong>vengas</strong> a la fiesta'.",
        pregunta: "¿En qué modo y tiempo está <strong>'vengas'</strong>?",
        opciones: [
            "A) Indicativo presente",
            "B) Subjuntivo presente",
            "C) Subjuntivo pretérito",
            "D) Imperativo",
            "E) Futuro de subjuntivo"
        ],
        correcta: 1,
        explicacion: "<strong>'Vengas'</strong> es presente de subjuntivo. Se usa después de 'espero que' para expresar deseo o probabilidad.",
        dificultad: 2,
        tema: "Presente de subjuntivo"
    },
    {
        id: 22,
        contexto: "Oración: 'Si <strong>quisieras</strong>, podrías ayudarme'.",
        pregunta: "¿Qué tiempo de subjuntivo es <strong>'quisieras'</strong>?",
        opciones: [
            "A) Presente de subjuntivo",
            "B) Pretérito imperfecto de subjuntivo",
            "C) Pretérito perfecto de subjuntivo",
            "D) Futuro de subjuntivo",
            "E) Pluscuamperfecto de subjuntivo"
        ],
        correcta: 1,
        explicacion: "<strong>'Quisieras'</strong> es pretérito imperfecto de subjuntivo (también llamado pretérito). Se usa en oraciones condicionales con 'si' para expresar condiciones improbables o irreales.",
        dificultad: 3,
        tema: "Pretérito imperfecto de subjuntivo"
    },
    {
        id: 23,
        contexto: "Texto antiguo: 'Si alguien <strong>viniere</strong> de fuera, que sea bien recibido'.",
        pregunta: "¿Qué tiempo verbal es <strong>'viniere'</strong>?",
        opciones: [
            "A) Presente de subjuntivo",
            "B) Futuro de subjuntivo (en desuso)",
            "C) Pretérito perfecto simple",
            "D) Condicional",
            "E) Imperfecto de indicativo"
        ],
        correcta: 1,
        explicacion: "<strong>'Viniere'</strong> es futuro de subjuntivo, un tiempo verbal prácticamente en desuso en el español moderno, pero que aparece en textos jurídicos o literarios antiguos.",
        dificultad: 4,
        tema: "Futuro de subjuntivo"
    },

    // 1.3.1.d. Transitivos e intransitivos
    {
        id: 24,
        contexto: "Oración 1: 'Juan <strong>come</strong> manzanas'. Oración 2: 'Juan <strong>come</strong> en el restaurante'.",
        pregunta: "¿Cómo clasificamos el verbo 'comer' en cada oración?",
        opciones: [
            "A) En ambas es transitivo",
            "B) En ambas es intransitivo",
            "C) O1: transitivo (tiene CD: manzanas) / O2: intransitivo (no tiene CD)",
            "D) O1: intransitivo / O2: transitivo",
            "E) En ambas es copulativo"
        ],
        correcta: 2,
        explicacion: "En 'come manzanas', 'manzanas' es complemento directo → verbo transitivo. En 'come en el restaurante', no hay CD, solo complemento circunstancial → verbo intransitivo.",
        dificultad: 3,
        tema: "Verbos transitivos e intransitivos"
    },

    // 1.3.1.e. Impersonales
    {
        id: 25,
        contexto: "¿Cuál de las siguientes oraciones contiene un verbo impersonal?",
        opciones: [
            "A) Los niños juegan en el parque",
            "B) <strong>Hace</strong> mucho calor",
            "C) Ella canta ópera",
            "D) Compramos libros",
            "E) El perro ladra"
        ],
        correcta: 1,
        explicacion: "<strong>'Hace'</strong> en 'hace calor' es un verbo impersonal (meteorológico). No tiene sujeto, no se refiere a ninguna persona o cosa concreta.",
        dificultad: 2,
        tema: "Verbos impersonales"
    },
    {
        id: 26,
        contexto: "Oración: '<strong>Se vive</strong> bien en esta ciudad'.",
        pregunta: "¿Qué tipo de construcción impersonal es?",
        opciones: [
            "A) Impersonal con 'se' (refleja)",
            "B) Impersonal con verbo meteorológico",
            "C) Impersonal con 'haber'",
            "D) Impersonal con 'hacer'",
            "E) Pasiva refleja"
        ],
        correcta: 0,
        explicacion: "<strong>'Se vive'</strong> es una construcción impersonal con 'se'. No hay sujeto explícito, la acción se atribuye a un 'se' impersonal. Significa 'la gente vive bien'.",
        dificultad: 3,
        tema: "Impersonales con 'se'"
    },

    // 1.3.1.f. Modos del verbo
    {
        id: 27,
        contexto: "Oraciones: 1) '<strong>Canta</strong> todas las mañanas'. 2) '<strong>Canta</strong> tú, no tengas miedo'. 3) 'Quizás <strong>cante</strong> mañana'.",
        pregunta: "¿Qué modos verbales aparecen respectivamente?",
        opciones: [
            "A) Indicativo - imperativo - subjuntivo",
            "B) Subjuntivo - indicativo - imperativo",
            "C) Imperativo - subjuntivo - indicativo",
            "D) Indicativo - subjuntivo - imperativo",
            "E) Todas son indicativo"
        ],
        correcta: 0,
        explicacion: "'Canta' en 1 es indicativo (hecho real). 'Canta' en 2 es imperativo (orden). 'Cante' en 3 es subjuntivo (deseo/posibilidad).",
        dificultad: 2,
        tema: "Modos verbales"
    },

    // ============================================
    // 1.4. CATEGORÍAS GRAMATICALES (Preguntas 31-50)
    // 1.4.1. SUSTANTIVOS
    // 1.4.1.a. Formas irregulares al formar plural o diminutivo
    // ============================================
    {
        id: 28,
        contexto: "Palabra: 'régimen'.",
        pregunta: "¿Cuál es su plural correcto?",
        opciones: [
            "A) régimenes",
            "B) regímenes",
            "C) regimenes",
            "D) régimens",
            "E) regimen"
        ],
        correcta: 1,
        explicacion: "El plural de 'régimen' es <strong>'regímenes'</strong>. La tilde se desplaza para mantener la esdrujulidad. Incorrecto: 'régimenes'.",
        dificultad: 3,
        tema: "Plurales irregulares"
    },
    {
        id: 29,
        contexto: "Palabra: 'carácter'.",
        pregunta: "¿Cuál es su plural correcto?",
        opciones: [
            "A) carácteres",
            "B) caracteres",
            "C) carácteres",
            "D) caractres",
            "E) caracter"
        ],
        correcta: 1,
        explicacion: "El plural de 'carácter' es <strong>'caracteres'</strong>. Cambia la posición de la tilde y la pronunciación (de llana a esdrújula).",
        dificultad: 3,
        tema: "Plurales irregulares"
    },
    {
        id: 30,
        contexto: "Palabra: 'joven'.",
        pregunta: "¿Cuál es su plural?",
        opciones: [
            "A) jóvenes",
            "B) jovenes",
            "C) jóven",
            "D) jovénes",
            "E) jovenzuelos"
        ],
        correcta: 0,
        explicacion: "El plural de 'joven' es <strong>'jóvenes'</strong>. Añade '-es' y tilde por ser esdrújula.",
        dificultad: 2,
        tema: "Plurales"
    },
    {
        id: 31,
        contexto: "Diminutivo de 'mano'.",
        pregunta: "¿Cuál es la forma correcta del diminutivo?",
        opciones: [
            "A) manito",
            "B) manita",
            "C) manecita",
            "D) manecilla",
            "E) Todas son válidas según contexto"
        ],
        correcta: 4,
        explicacion: "'Manito' (México, masculino), 'manita' (España, femenino), 'manecita' (otro diminutivo) y 'manecilla' (de reloj) son válidas según el contexto y región.",
        dificultad: 3,
        tema: "Diminutivos"
    },

    // 1.4.1.b. Tipos de sustantivos: propios, comunes y abstractos
    {
        id: 32,
        contexto: "Palabras: 'México', 'mesa', 'esperanza'.",
        pregunta: "Clasifícalas respectivamente:",
        opciones: [
            "A) Propio - común - abstracto",
            "B) Común - propio - abstracto",
            "C) Abstracto - común - propio",
            "D) Propio - abstracto - común",
            "E) Colectivo - individual - abstracto"
        ],
        correcta: 0,
        explicacion: "'México' es nombre propio (país). 'Mesa' es común (objeto). 'Esperanza' es abstracto (sentimiento/idea).",
        dificultad: 1,
        tema: "Tipos de sustantivos"
    },

    // 1.4.2. ADJETIVOS
    // 1.4.2.a. Sustantivación de adjetivos
    {
        id: 33,
        contexto: "Oración: 'Los <strong>pobres</strong> sufren las consecuencias de la crisis'.",
        pregunta: "¿Qué función cumple <strong>'pobres'</strong> en esta oración?",
        opciones: [
            "A) Adjetivo calificando a un sustantivo tácito",
            "B) Sustantivación del adjetivo (actúa como sustantivo)",
            "C) Adverbio de modo",
            "D) Verbo conjugado",
            "E) Preposición"
        ],
        correcta: 1,
        explicacion: "<strong>'Pobres'</strong> aquí es un adjetivo sustantivado. Funciona como núcleo del sujeto (equivale a 'las personas pobres'). Lleva artículo 'los'.",
        dificultad: 2,
        tema: "Sustantivación de adjetivos"
    },

    // 1.4.2.b. Comparativos y superlativos
    {
        id: 34,
        contexto: "Adjetivo: 'bueno'.",
        pregunta: "¿Cuál es su forma comparativa y superlativa?",
        opciones: [
            "A) más bueno / buenísimo",
            "B) mejor / óptimo o buenísimo",
            "C) bueno / muy bueno",
            "D) más bien / bienísimo",
            "E) superior / supremo"
        ],
        correcta: 1,
        explicacion: "El comparativo de 'bueno' es <strong>'mejor'</strong> (irregular). El superlativo puede ser <strong>'óptimo'</strong> (culto) o <strong>'buenísimo'</strong> (coloquial).",
        dificultad: 2,
        tema: "Comparativos y superlativos"
    },
    {
        id: 35,
        contexto: "Adjetivo: 'malo'.",
        pregunta: "¿Cuál es su forma comparativa?",
        opciones: [
            "A) más malo",
            "B) peor",
            "C) malísimo",
            "D) pésimo",
            "E) inferior"
        ],
        correcta: 1,
        explicacion: "El comparativo de 'malo' es <strong>'peor'</strong> (irregular). <strong>'Pésimo'</strong> es el superlativo culto.",
        dificultad: 2,
        tema: "Comparativos irregulares"
    },

    // 1.4.3. ADVERBIOS
    // 1.4.3.a. Tipos de adverbios
    {
        id: 36,
        contexto: "Oración: '<strong>Aquí</strong> hay mucha comida, <strong>ayer</strong> trajeron más, <strong>desgraciadamente</strong> se echó a perder <strong>rápidamente</strong>'.",
        pregunta: "Clasifica los adverbios subrayados en orden:",
        opciones: [
            "A) Lugar - tiempo - modo - afirmación",
            "B) Lugar - tiempo - duda - modo",
            "C) Lugar - tiempo - negación - modo",
            "D) Lugar - tiempo - modo - cantidad",
            "E) Lugar - tiempo - exclusión - modo"
        ],
        correcta: 1,
        explicacion: "<strong>'Aquí'</strong> (lugar), <strong>'ayer'</strong> (tiempo), <strong>'desgraciadamente'</strong> (duda/ modalidad), <strong>'rápidamente'</strong> (modo).",
        dificultad: 2,
        tema: "Tipos de adverbios"
    },
    {
        id: 37,
        contexto: "Oración: '<strong>Quizás</strong> <strong>no</strong> venga <strong>más</strong>'.",
        pregunta: "¿Qué tipos de adverbios aparecen?",
        opciones: [
            "A) Duda - negación - cantidad",
            "B) Afirmación - negación - tiempo",
            "C) Modo - negación - lugar",
            "D) Duda - negación - tiempo",
            "E) Probabilidad - exclusión - modo"
        ],
        correcta: 0,
        explicacion: "<strong>'Quizás'</strong> (duda), <strong>'no'</strong> (negación), <strong>'más'</strong> (cantidad, aquí con valor de 'ya no').",
        dificultad: 2,
        tema: "Tipos de adverbios"
    },

    // 1.4.4. PREPOSICIONES
    // 1.4.4.a. Características generales
    {
        id: 38,
        contexto: "Oración: 'El libro está <strong>sobre</strong> la mesa. Hablaron <strong>sobre</strong> política'.",
        pregunta: "¿Qué relación expresa <strong>'sobre'</strong> en cada caso?",
        opciones: [
            "A) 1: lugar / 2: tema o asunto",
            "B) 1: modo / 2: causa",
            "C) 1: tiempo / 2: compañía",
            "D) 1: finalidad / 2: oposición",
            "E) 1: instrumento / 2: posesión"
        ],
        correcta: 0,
        explicacion: "En 'sobre la mesa' indica posición/lugar. En 'sobre política' indica tema o asunto. Las preposiciones pueden tener múltiples significados según contexto.",
        dificultad: 2,
        tema: "Preposiciones"
    },

    // ============================================
    // 1.5. REGLAS ORTOGRÁFICAS (Preguntas 51-65)
    // 1.5.1. PUNTUACIÓN Y ACENTUACIÓN
    // 1.5.1.a. Signos básicos: coma, punto, punto y coma
    // ============================================
    {
        id: 39,
        contexto: "Oración: 'Compramos manzanas, peras, plátanos y uvas'.",
        pregunta: "¿Por qué NO lleva coma antes de 'y'?",
        opciones: [
            "A) Debería llevarla siempre",
            "B) Porque 'y' es conjunción y cierra la enumeración",
            "C) Porque es una enumeración incompleta",
            "D) Porque son menos de 4 elementos",
            "E) Porque la coma solo va después de 'y'"
        ],
        correcta: 1,
        explicacion: "En enumeraciones, no se escribe coma antes de la conjunción (y, e, o, u) que introduce el último elemento. Es incorrecto poner coma antes de 'y' en este caso.",
        dificultad: 2,
        tema: "Uso de la coma"
    },
    {
        id: 40,
        contexto: "Oración: 'Llegué tarde, sin embargo, me dejaron entrar'.",
        pregunta: "¿Qué función cumplen las comas?",
        opciones: [
            "A) Enumerar elementos",
            "B) Separar el conector 'sin embargo' (inciso)",
            "C) Indicar omisión de verbo",
            "D) Separar vocativo",
            "E) No deberían ir comas"
        ],
        correcta: 1,
        explicacion: "Los conectores como 'sin embargo', 'no obstante', 'por lo tanto' se aíslan entre comas cuando van intercalados en la oración.",
        dificultad: 2,
        tema: "Coma en conectores"
    },
    {
        id: 41,
        contexto: "Texto: 'Terminó el trabajo. Luego salió a cenar'.",
        pregunta: "¿Por qué se usa punto y no coma?",
        opciones: [
            "A) Porque son oraciones independientes con significado completo",
            "B) Porque es un error, debería ser coma",
            "C) Porque 'luego' exige punto",
            "D) Porque es un texto literario",
            "E) Porque son acciones simultáneas"
        ],
        correcta: 0,
        explicacion: "El punto separa oraciones autónomas que tienen sentido completo por sí mismas. Cada oración podría funcionar independientemente.",
        dificultad: 1,
        tema: "Uso del punto"
    },
    {
        id: 42,
        contexto: "Oración: 'Juan estudia medicina; su hermana, derecho'.",
        pregunta: "¿Por qué se usa punto y coma y luego coma?",
        opciones: [
            "A) Está mal puntuado",
            "B) Punto y coma separa oraciones relacionadas; la coma sustituye al verbo (elipsis)",
            "C) Debería ser punto y seguido",
            "D) El punto y coma es por la longitud de la oración",
            "E) La coma es por enumeración"
        ],
        correcta: 1,
        explicacion: "El punto y coma separa dos proposiciones relacionadas. La coma en 'su hermana, derecho' indica elipsis del verbo (su hermana ESTUDIA derecho).",
        dificultad: 3,
        tema: "Punto y coma y elipsis"
    },

    // 1.5.1.b. Signos complementarios: interrogación, paréntesis, guiones, comillas
    {
        id: 43,
        contexto: "Oración: '¿Cómo te llamas'.",
        pregunta: "¿Qué error ortográfico tiene?",
        opciones: [
            "A) Falta la apertura de interrogación",
            "B) Debería llevar punto final",
            "C) La palabra 'cómo' no lleva tilde",
            "D) Falta coma",
            "E) Todo está correcto"
        ],
        correcta: 0,
        explicacion: "En español, las preguntas llevan signo de apertura (¿) y cierre (?). Falta el signo de apertura.",
        dificultad: 1,
        tema: "Signos de interrogación"
    },
    {
        id: 44,
        contexto: "Texto: 'El Quijote (1605) es una obra cumbre'.",
        pregunta: "¿Qué función cumplen los paréntesis?",
        opciones: [
            "A) Introducir una aclaración (año de publicación)",
            "B) Citar una fuente",
            "C) Indicar una opción",
            "D) Encerrar un inciso largo",
            "E) Todas son correctas"
        ],
        correcta: 0,
        explicacion: "Los paréntesis introducen información complementaria o aclaratoria, en este caso el año de publicación de la obra.",
        dificultad: 1,
        tema: "Paréntesis"
    },
    {
        id: 45,
        contexto: "Diálogo: 'María dijo: —No vendré mañana— y se fue'.",
        pregunta: "¿Qué función tienen las rayas (—)?",
        opciones: [
            "A) Encerrar un inciso",
            "B) Introducir diálogo o intervenciones",
            "C) Separar elementos de una lista",
            "D) Indicar énfasis",
            "E) Sustituir a las comillas"
        ],
        correcta: 1,
        explicacion: "Las rayas (guiones largos) se usan para introducir las intervenciones de los personajes en un diálogo, en lugar de comillas.",
        dificultad: 2,
        tema: "Guiones/rayas"
    },

    // 1.5.1.c. Acento gráfico
    {
        id: 46,
        contexto: "Palabras: 'cárcel', 'árbol', 'fácil'.",
        pregunta: "¿Cómo se clasifican por su acentuación?",
        opciones: [
            "A) Todas son agudas",
            "B) Todas son graves (llanas)",
            "C) Todas son esdrújulas",
            "D) Mezcla de agudas y graves",
            "E) Sobresdrújulas"
        ],
        correcta: 1,
        explicacion: "<strong>'Cárcel', 'árbol', 'fácil'</strong> son palabras graves (llanas) porque tienen la sílaba tónica en la penúltima sílaba. Llevan tilde porque terminan en consonante distinta de 'n' o 's'.",
        dificultad: 2,
        tema: "Clasificación de palabras por acento"
    },
    {
        id: 47,
        contexto: "Palabras: 'teléfono', 'pájaro', 'médico'.",
        pregunta: "¿Cómo se clasifican?",
        opciones: [
            "A) Graves",
            "B) Agudas",
            "C) Esdrújulas",
            "D) Sobresdrújulas",
            "E) Monosílabas"
        ],
        correcta: 2,
        explicacion: "Todas son esdrújulas: la sílaba tónica es la antepenúltima. Las esdrújulas SIEMPRE llevan tilde.",
        dificultad: 1,
        tema: "Palabras esdrújulas"
    },

    // 1.5.1.d. Acento diacrítico
    {
        id: 48,
        contexto: "Oraciones: '<strong>Tú</strong> eres mi amigo' / '<strong>Tu</strong> libro es nuevo'.",
        pregunta: "¿Por qué <strong>'tú'</strong> lleva tilde en la primera y <strong>'tu'</strong> no en la segunda?",
        opciones: [
            "A) Porque 'tú' es más largo",
            "B) 'Tú' con tilde es pronombre personal; 'tu' sin tilde es posesivo",
            "C) Es un error, ambas deberían llevar tilde",
            "D) Porque la primera está al inicio",
            "E) Porque 'tú' es aguda"
        ],
        correcta: 1,
        explicacion: "El acento diacrítico diferencia palabras con la misma forma pero distinta función: <strong>'tú'</strong> (pronombre personal) lleva tilde; <strong>'tu'</strong> (adjetivo posesivo) no lleva.",
        dificultad: 2,
        tema: "Acento diacrítico"
    },
    {
        id: 49,
        contexto: "Oración: '<strong>Sé</strong> más amable' / 'No <strong>sé</strong> nada' / '<strong>Se</strong> lo dije'.",
        pregunta: "¿Cuál 'se' lleva tilde y por qué?",
        opciones: [
            "A) El primero (Sé) es verbo 'ser' o 'saber' y lleva tilde; el último es pronombre sin tilde",
            "B) Todos llevan tilde",
            "C) Ninguno lleva tilde",
            "D) Solo el segundo lleva tilde",
            "E) Solo el tercero lleva tilde"
        ],
        correcta: 0,
        explicacion: "<strong>'Sé'</strong> con tilde puede ser imperativo de 'ser' (sé amable) o presente de 'saber' (no sé). <strong>'Se'</strong> sin tilde es pronombre personal (se lo dije).",
        dificultad: 3,
        tema: "Acento diacrítico"
    },
    {
        id: 50,
        contexto: "Oración: '¿Por qué no vienes? / Porque no quiero / Lo haré por tí'.",
        pregunta: "¿Hay algún error de acentuación?",
        opciones: [
            "A) Todo está correcto",
            "B) 'Por qué' lleva tilde (interrogativo); 'porque' no lleva (conjunción); 'tí' está mal, debe ser 'ti' sin tilde",
            "C) 'Porque' debería llevar tilde",
            "D) 'Tí' está correcto",
            "E) 'Por qué' no lleva tilde"
        ],
        correcta: 1,
        explicacion: "<strong>'Por qué'</strong> (interrogativo) lleva tilde. <strong>'Porque'</strong> (conjunción causal) no lleva. <strong>'Ti'</strong> es pronombre personal que NUNCA lleva tilde (error común).",
        dificultad: 3,
        tema: "Acento diacrítico y porqués"
    },

    // ============================================
    // 1.6. RELACIONES SEMÁNTICAS (Preguntas 66-80)
    // 1.6.1. SINÓNIMOS Y ANTÓNIMOS
    // ============================================
    {
        id: 51,
        contexto: "Palabra: 'efímero'.",
        pregunta: "¿Cuál es su sinónimo más preciso?",
        opciones: [
            "A) Eterno",
            "B) Pasajero",
            "C) Intenso",
            "D) Duradero",
            "E) Inmortal"
        ],
        correcta: 1,
        explicacion: "<strong>'Efímero'</strong> significa que dura poco tiempo. Su sinónimo es <strong>'pasajero'</strong>, 'fugaz' o 'transitorio'.",
        dificultad: 2,
        tema: "Sinónimos"
    },
    {
        id: 52,
        contexto: "Frase: 'Era un hombre <strong>probo</strong>'.",
        pregunta: "¿Qué significa <strong>'probo'</strong>?",
        opciones: [
            "A) Honesto, íntegro",
            "B) Pobre, necesitado",
            "C) Enfermo, débil",
            "D) Rico, poderoso",
            "E) Viejo, anciano"
        ],
        correcta: 0,
        explicacion: "<strong>'Probo'</strong> significa honesto, de probidad. Es un adjetivo culto.",
        dificultad: 3,
        tema: "Sinónimos cultos"
    },
    {
        id: 53,
        contexto: "Palabra: 'cándido'.",
        pregunta: "¿Cuál es su sinónimo?",
        opciones: [
            "A) Astuto",
            "B) Ingenuo, sin malicia",
            "C) Amargo",
            "D) Dulce",
            "E) Caliente"
        ],
        correcta: 1,
        explicacion: "<strong>'Cándido'</strong> significa ingenuo, sin malicia, inocente. No confundir con 'candente' (caliente).",
        dificultad: 3,
        tema: "Sinónimos"
    },
    {
        id: 54,
        contexto: "Palabra: 'ósculo'.",
        pregunta: "¿Qué significa en sentido literal?",
        opciones: [
            "A) Beso",
            "B) Abrazo",
            "C) Saludo",
            "D) Mirada",
            "E) Palabra"
        ],
        correcta: 0,
        explicacion: "<strong>'Ósculo'</strong> es un cultismo que significa <strong>'beso'</strong>. Se usa en contextos formales o literarios.",
        dificultad: 4,
        tema: "Sinónimos cultos"
    },
    {
        id: 55,
        contexto: "Palabra: 'beligerante'.",
        pregunta: "¿Cuál es su antónimo?",
        opciones: [
            "A) Pacífico",
            "B) Guerrillero",
            "C) Agresivo",
            "D) Combativo",
            "E) Hostil"
        ],
        correcta: 0,
        explicacion: "<strong>'Beligerante'</strong> significa que está en guerra o es agresivo. Su antónimo es <strong>'pacífico'</strong>.",
        dificultad: 3,
        tema: "Antónimos"
    },
    {
        id: 56,
        contexto: "En un texto literario: 'Sus ojos eran dos luceros'.",
        pregunta: "¿Qué figura retórica y qué relación semántica encontramos?",
        opciones: [
            "A) Comparación: ojos como luceros",
            "B) Metáfora: identifica ojos con luceros",
            "C) Hipérbole: exageración",
            "D) Ironía",
            "E) Sinécdoque"
        ],
        correcta: 1,
        explicacion: "Es una metáfora pura: identifica directamente los ojos con los luceros (sin usar 'como'). Hay una relación semántica de sustitución basada en la semejanza.",
        dificultad: 3,
        tema: "Uso metafórico"
    },
    {
        id: 57,
        contexto: "Palabra: 'ebrio'.",
        pregunta: "¿Cuál es su sinónimo en contexto formal y coloquial?",
        opciones: [
            "A) Borracho / alcoholizado",
            "B) Alegre / triste",
            "C) Enfermo / sano",
            "D) Loco / cuerdo",
            "E) Rico / pobre"
        ],
        correcta: 0,
        explicacion: "<strong>'Ebrio'</strong> es formal, <strong>'borracho'</strong> es coloquial. Ambos significan bajo efecto del alcohol.",
        dificultad: 2,
        tema: "Sinónimos según registro"
    },

    // 1.6.2. PARÓNIMOS
    // 1.6.2.a. Homófonos
    {
        id: 58,
        contexto: "Oración: 'Voy a <strong>casar</strong> / <strong>cazar</strong>'.",
        pregunta: "¿Cuál es la diferencia?",
        opciones: [
            "A) Son sinónimos",
            "B) 'Casar' es contraer matrimonio; 'cazar' es atrapar animales",
            "C) 'Casar' es atrapar; 'cazar' es casarse",
            "D) Ambas significan lo mismo",
            "E) Una es verbo, la otra no"
        ],
        correcta: 1,
        explicacion: "Son homófonas (suenan igual en español pero se escriben diferente). <strong>'Casar'</strong> (matrimonio), <strong>'cazar'</strong> (capturar presas).",
        dificultad: 2,
        tema: "Homófonos"
    },
    {
        id: 59,
        contexto: "Oración: '<strong>Haya</strong> un árbol en el jardín' / '<strong>Halla</strong> la solución' / '<strong>Allá</strong> está lejos'.",
        pregunta: "¿Cuál oración es correcta?",
        opciones: [
            "A) La primera ('haya' de haber)",
            "B) La segunda ('halla' de encontrar)",
            "C) La tercera ('allá' de lugar)",
            "D) Todas son correctas en su contexto",
            "E) Ninguna es correcta"
        ],
        correcta: 3,
        explicacion: "Todas son correctas: <strong>'haya'</strong> (del verbo haber), <strong>'halla'</strong> (del verbo hallar/encontrar), <strong>'allá'</strong> (adverbio de lugar). Son homófonas.",
        dificultad: 3,
        tema: "Homófonos"
    },
    {
        id: 60,
        contexto: "Palabras: 'tubo' y 'tuvo'.",
        pregunta: "¿Qué son?",
        opciones: [
            "A) Sinónimos",
            "B) Antónimos",
            "C) Homófonos",
            "D) Homónimos",
            "E) Parónimos"
        ],
        correcta: 2,
        explicacion: "Son homófonas: suenan igual pero se escriben diferente. <strong>'Tubo'</strong> (cilindro), <strong>'tuvo'</strong> (del verbo tener).",
        dificultad: 2,
        tema: "Homófonos"
    },

    // 1.6.2.b. Homónimos
    {
        id: 61,
        contexto: "Palabra: 'banco' (institución financiera / asiento / conjunto de peces).",
        pregunta: "¿Qué fenómeno lingüístico es?",
        opciones: [
            "A) Sinonimia",
            "B) Antonimia",
            "C) Polisemia (una palabra con múltiples significados relacionados)",
            "D) Homonimia (palabras con mismo origen pero significados distintos)",
            "E) Paronimia"
        ],
        correcta: 3,
        explicacion: "<strong>'Banco'</strong> es un caso de homonimia (o polisemia según teoría). Misma palabra con significados diferentes pero relacionados etimológicamente.",
        dificultad: 3,
        tema: "Homónimos/polisemia"
    },
    {
        id: 62,
        contexto: "Palabras: 'vino' (bebida) y 'vino' (del verbo venir).",
        pregunta: "¿Son homónimas?",
        opciones: [
            "A) Sí, son homónimas (igual escritura, diferente significado)",
            "B) No, son sinónimas",
            "C) Son antónimas",
            "D) Son parónimas",
            "E) No existen"
        ],
        correcta: 0,
        explicacion: "Son homónimas: se escriben igual pero tienen significados diferentes (sustantivo y verbo).",
        dificultad: 2,
        tema: "Homónimos"
    },
    {
        id: 63,
        contexto: "Palabra: 'cura' (sacerdote / acción de curar).",
        pregunta: "¿Cómo se llama este fenómeno?",
        opciones: [
            "A) Homonimia",
            "B) Sinonimia",
            "C) Antonimia",
            "D) Derivación",
            "E) Composición"
        ],
        correcta: 0,
        explicacion: "<strong>'Cura'</strong> es una palabra homónima: mismo significante, dos significados no relacionados etimológicamente (uno del latín 'cura' -cuidado- y otro del griego 'kyrios' -señor-).",
        dificultad: 3,
        tema: "Homónimos"
    },
    {
        id: 64,
        contexto: "Oración: 'El <strong>capital</strong> de la empresa / La <strong>capital</strong> de Francia'.",
        pregunta: "¿Qué diferencia de género y significado hay?",
        opciones: [
            "A) Masculino: dinero / Femenino: ciudad principal",
            "B) Masculino: ciudad / Femenino: dinero",
            "C) Ambos significan dinero",
            "D) Ambos significan ciudad",
            "E) No hay diferencia"
        ],
        correcta: 0,
        explicacion: "Son homónimos con cambio de género: <strong>'el capital'</strong> (dinero, recursos), <strong>'la capital'</strong> (ciudad principal).",
        dificultad: 2,
        tema: "Homónimos"
    },
    {
        id: 65,
        contexto: "Texto: 'No <strong>sabía</strong> que <strong>savia</strong> significa jugo de las plantas'.",
        pregunta: "¿Qué relación hay entre <strong>'sabía'</strong> y <strong>'savia'</strong>?",
        opciones: [
            "A) Sinónimos",
            "B) Homófonos",
            "C) Homónimos",
            "D) Antónimos",
            "E) Parónimos"
        ],
        correcta: 1,
        explicacion: "Son homófonas: suenan igual pero se escriben diferente. <strong>'Sabía'</strong> (de saber), <strong>'savia'</strong> (líquido vegetal).",
        dificultad: 2,
        tema: "Homófonos"
    },

    // ============================================
    // PREGUNTAS DE REPASO GENERAL (Preguntas 81-100)
    // ============================================
    {
        id: 66,
        contexto: "Oración: 'Hubo mucha gente en la plaza'.",
        pregunta: "¿Por qué <strong>'hubo'</strong> es impersonal?",
        opciones: [
            "A) Porque tiene sujeto tácito",
            "B) Porque 'haber' en singular expresa existencia y no tiene sujeto",
            "C) Porque está en pasado",
            "D) Porque es un verbo irregular",
            "E) Porque concuerda con 'gente'"
        ],
        correcta: 1,
        explicacion: "El verbo 'haber' cuando expresa existencia es impersonal y va siempre en singular, aunque lo que exista sea plural.",
        dificultad: 2,
        tema: "Verbos impersonales"
    },
    {
        id: 67,
        contexto: "Oración: 'Me dijeron que <strong>vinieras</strong> temprano'.",
        pregunta: "¿Qué modo y tiempo es <strong>'vinieras'</strong>?",
        opciones: [
            "A) Presente de indicativo",
            "B) Pretérito imperfecto de subjuntivo",
            "C) Futuro de subjuntivo",
            "D) Condicional simple",
            "E) Pretérito perfecto simple"
        ],
        correcta: 1,
        explicacion: "<strong>'Vinieras'</strong> es pretérito imperfecto de subjuntivo (también -se: vinieses). Se usa en subordinadas después de verbos de mandato o deseo en pasado.",
        dificultad: 3,
        tema: "Subjuntivo"
    },
    {
        id: 68,
        contexto: "Palabra: 'automóvil'.",
        pregunta: "¿Cómo está formada?",
        opciones: [
            "A) Prefijo + sufijo",
            "B) Composición culta: auto- (por sí mismo) + móvil (que se mueve)",
            "C) Derivación simple",
            "D) Parasíntesis",
            "E) Onomatopeya"
        ],
        correcta: 1,
        explicacion: "<strong>'Automóvil'</strong> es una palabra compuesta por elementos grecolatinos: 'auto-' (por sí mismo) y '-móvil' (que se mueve).",
        dificultad: 3,
        tema: "Formación de palabras"
    },
    {
        id: 69,
        contexto: "Oración: 'Lo hizo <strong>adrede</strong>'.",
        pregunta: "¿Qué tipo de palabra es <strong>'adrede'</strong>?",
        opciones: [
            "A) Adjetivo",
            "B) Sustantivo",
            "C) Adverbio de modo",
            "D) Preposición",
            "E) Conjunción"
        ],
        correcta: 2,
        explicacion: "<strong>'Adrede'</strong> significa 'a propósito, intencionadamente'. Es un adverbio de modo.",
        dificultad: 2,
        tema: "Adverbios"
    },
    {
        id: 70,
        contexto: "Oración: '<strong>Quizá</strong> <strong>no</strong> <strong>le</strong> importe'.",
        pregunta: "Clasifica las palabras subrayadas:",
        opciones: [
            "A) Adverbio de duda - adverbio de negación - pronombre",
            "B) Adverbio de tiempo - adverbio de modo - artículo",
            "C) Conjunción - preposición - pronombre",
            "D) Adverbio de duda - conjunción - pronombre",
            "E) Interjección - adverbio - verbo"
        ],
        correcta: 0,
        explicacion: "<strong>'Quizá'</strong> (adverbio de duda), <strong>'no'</strong> (adverbio de negación), <strong>'le'</strong> (pronombre personal átono).",
        dificultad: 2,
        tema: "Categorías gramaticales"
    },
    {
        id: 71,
        contexto: "Texto: 'El tren <strong>partió</strong> a las tres. Cuando <strong>llegó</strong>, ya <strong>había salido</strong>'.",
        pregunta: "Analiza la secuencia temporal:",
        opciones: [
            "A) Partió (anterior) - llegó (posterior) - había salido (anterior a llegó)",
            "B) Partió (posterior) - llegó (anterior) - había salido (simultáneo)",
            "C) Todo es simultáneo",
            "D) Partió y llegó son iguales",
            "E) No hay secuencia"
        ],
        correcta: 0,
        explicacion: "El tren partió (acción 1). Alguien llegó después (acción 2). Para cuando llegó, el tren ya había salido (acción anterior a la llegada).",
        dificultad: 3,
        tema: "Secuencia temporal"
    },
    {
        id: 72,
        contexto: "Oración: '<strong>Ojalá</strong> <strong>llueva</strong> mañana'.",
        pregunta: "¿Qué modo exige <strong>'ojalá'</strong>?",
        opciones: [
            "A) Indicativo",
            "B) Subjuntivo",
            "C) Imperativo",
            "D) Condicional",
            "E) Infinitivo"
        ],
        correcta: 1,
        explicacion: "<strong>'Ojalá'</strong> (del árabe 'wa sha allah' - si Dios quiere) siempre va seguido de subjuntivo porque expresa deseo.",
        dificultad: 2,
        tema: "Modos verbales"
    },
    {
        id: 73,
        contexto: "Palabras: 'absorber/absorción', 'conducir/conducción'.",
        pregunta: "¿Qué fenómeno morfológico ocurre?",
        opciones: [
            "A) Cambio de raíz en la derivación",
            "B) Son verbos regulares",
            "C) Son sustantivos sin relación",
            "D) Son antónimos",
            "E) Son compuestos"
        ],
        correcta: 0,
        explicacion: "En la derivación de verbos a sustantivos, a veces la raíz cambia: absorber → absorción (cambio de b a p y pérdida de er).",
        dificultad: 4,
        tema: "Derivación irregular"
    },
    {
        id: 74,
        contexto: "Oración: '<strong>Hubieron</strong> muchos accidentes'.",
        pregunta: "¿Es correcta esta oración?",
        opciones: [
            "A) Sí, porque 'accidentes' es plural",
            "B) No, 'haber' impersonal siempre va en singular: 'hubo'",
            "C) Sí, es correcto en algunos países",
            "D) Depende del contexto",
            "E) Solo es correcto en presente"
        ],
        correcta: 1,
        explicacion: "El verbo 'haber' como impersonal (existencial) es invariable en singular: 'hubo muchos accidentes', no 'hubieron'.",
        dificultad: 3,
        tema: "Errores comunes"
    },
    {
        id: 75,
        contexto: "Oración: '<strong>A</strong> <strong>ver</strong> si vienes / <strong>Haber</strong> si vienes'.",
        pregunta: "¿Cuál es la forma correcta?",
        opciones: [
            "A) 'A ver' (preposición + verbo ver)",
            "B) 'Haber' (infinitivo)",
            "C) Ambas son correctas",
            "D) Ninguna es correcta",
            "E) Depende del país"
        ],
        correcta: 0,
        explicacion: "La expresión correcta es <strong>'a ver'</strong> (para expresar expectativa, deseo). <strong>'Haber'</strong> es incorrecto en este contexto.",
        dificultad: 2,
        tema: "Homófonos"
    },
    {
        id: 76,
        contexto: "Oración: '<strong>Han</strong> <strong>habido</strong> problemas'.",
        pregunta: "¿Es correcta esta construcción?",
        opciones: [
            "A) Sí, está bien",
            "B) No, debe ser 'ha habido' o 'hubo'",
            "C) Sí, 'han habido' es plural correcto",
            "D) Depende del tiempo verbal",
            "E) Solo en preguntas"
        ],
        correcta: 1,
        explicacion: "La construcción impersonal de 'haber' es invariable: <strong>'ha habido problemas'</strong>. <strong>'Han habido'</strong> es un error frecuente.",
        dificultad: 3,
        tema: "Impersonales"
    },
    {
        id: 77,
        contexto: "Palabra: 'fotografía'.",
        pregunta: "Si le añadimos el sufijo '-ico', obtenemos:",
        opciones: [
            "A) fotográfico",
            "B) fotografíaico",
            "C) fotoico",
            "D) grafíaico",
            "E) fotico"
        ],
        correcta: 0,
        explicacion: "<strong>'Fotografía'</strong> + '-ico' = <strong>'fotográfico'</strong> (adjetivo). La raíz se adapta.",
        dificultad: 2,
        tema: "Sufijación"
    },
    {
        id: 78,
        contexto: "Oración: '<strong>Detrás</strong> <strong>de</strong> la puerta'.",
        pregunta: "¿Qué tipo de expresión es <strong>'detrás de'</strong>?",
        opciones: [
            "A) Adverbio + preposición (locución prepositiva)",
            "B) Preposición + adverbio",
            "C) Conjunción compuesta",
            "D) Frase hecha",
            "E) Verbo + preposición"
        ],
        correcta: 0,
        explicacion: "<strong>'Detrás de'</strong> es una locución prepositiva: funciona como una preposición compuesta por un adverbio (detrás) + preposición (de).",
        dificultad: 3,
        tema: "Locuciones prepositivas"
    },
    {
        id: 79,
        contexto: "Palabras: 'in-, des-'.",
        pregunta: "¿Qué aportan estos elementos?",
        opciones: [
            "A) Significado aumentativo",
            "B) Significado diminutivo",
            "C) Negación o privación (prefijos)",
            "D) Significado de lugar",
            "E) Significado temporal"
        ],
        correcta: 2,
        explicacion: "<strong>'in-'</strong> (im-) y <strong>'des-'</strong> son prefijos que indican negación, inversión o privación: imposible, deshacer.",
        dificultad: 1,
        tema: "Prefijos negativos"
    },
    {
        id: 80,
        contexto: "Oración: '<strong>Conque</strong> no vienes, ¿eh? / <strong>Con que</strong> estudies, basta / <strong>Con qué</strong> lo hiciste?'.",
        pregunta: "Diferencia los usos:",
        opciones: [
            "A) Conque (consecuencia) - con que (prep + relativo) - con qué (prep + interrogativo)",
            "B) Todos son iguales",
            "C) Conque (interrogativo) - con que (consecuencia)",
            "D) Solo cambia la tilde",
            "E) No hay diferencia"
        ],
        correcta: 0,
        explicacion: "<strong>'Conque'</strong> (junto) es conjunción consecutiva. <strong>'Con que'</strong> (separado) es preposición + relativo. <strong>'Con qué'</strong> (separado, tilde) es preposición + interrogativo.",
        dificultad: 4,
        tema: "Homófonos gramaticales"
    },
        // ============================================
    // PREGUNTAS 81-100 (COMPLETANDO LAS 100)
    // ============================================
    {
        id: 81,
        contexto: "Oración: 'El niño, <strong>cuyo</strong> padre es médico, llegó tarde'.",
        pregunta: "¿Qué función gramatical cumple <strong>'cuyo'</strong>?",
        opciones: [
            "A) Pronombre personal",
            "B) Adjetivo posesivo",
            "C) Pronombre relativo con valor posesivo",
            "D) Conjunción subordinante",
            "E) Adverbio relativo"
        ],
        correcta: 2,
        explicacion: "<strong>'Cuyo'</strong> es un pronombre relativo que además indica posesión (el padre del niño). Concuerda en género y número con lo poseído (padre).",
        dificultad: 4,
        tema: "Pronombres relativos"
    },
    {
        id: 82,
        contexto: "Oración: '<strong>Quizás</strong> <strong>no</strong> <strong>le</strong> importe'.",
        pregunta: "Clasifica las palabras subrayadas en orden:",
        opciones: [
            "A) Adverbio de duda - adverbio de negación - pronombre",
            "B) Adverbio de tiempo - adverbio de modo - artículo",
            "C) Conjunción - preposición - pronombre",
            "D) Adverbio de duda - conjunción - pronombre",
            "E) Interjección - adverbio - verbo"
        ],
        correcta: 0,
        explicacion: "<strong>'Quizás'</strong> (adverbio de duda), <strong>'no'</strong> (adverbio de negación), <strong>'le'</strong> (pronombre personal átono en función de objeto indirecto).",
        dificultad: 2,
        tema: "Categorías gramaticales"
    },
    {
        id: 83,
        contexto: "Oración: '<strong>Hubieron</strong> muchos accidentes en la carretera'.",
        pregunta: "¿Es correcta esta oración?",
        opciones: [
            "A) Sí, porque 'accidentes' es plural",
            "B) No, 'haber' impersonal siempre va en singular: 'hubo'",
            "C) Sí, es correcto en algunos países de América",
            "D) Depende del contexto temporal",
            "E) Solo es correcto en presente"
        ],
        correcta: 1,
        explicacion: "El verbo 'haber' como impersonal (existencial) es invariable y siempre va en singular. Lo correcto es <strong>'Hubo muchos accidentes'</strong>. <strong>'Hubieron'</strong> es un error gramatical grave.",
        dificultad: 3,
        tema: "Verbos impersonales"
    },
    {
        id: 84,
        contexto: "Frase: '<strong>A</strong> <strong>ver</strong> si vienes mañana' vs '<strong>Haber</strong> si vienes mañana'.",
        pregunta: "¿Cuál es la forma correcta?",
        opciones: [
            "A) 'A ver' (preposición + verbo 'ver')",
            "B) 'Haber' (infinitivo del verbo auxiliar)",
            "C) Ambas son correctas y significan lo mismo",
            "D) Ninguna es correcta, debe ser 'haber a ver'",
            "E) Depende del país hispanohablante"
        ],
        correcta: 0,
        explicacion: "La expresión correcta es <strong>'a ver'</strong> (para expresar expectativa, deseo o curiosidad). <strong>'Haber'</strong> en este contexto es un error ortográfico y gramatical.",
        dificultad: 2,
        tema: "Homófonos"
    },
    {
        id: 85,
        contexto: "Oración: '<strong>Han</strong> <strong>habido</strong> muchas quejas sobre el servicio'.",
        pregunta: "¿Qué error encontramos?",
        opciones: [
            "A) No hay error, está bien escrita",
            "B) Debe ser 'ha habido' porque 'haber' es impersonal",
            "C) Debe ser 'han habían'",
            "D) Debe ser 'han habidos' concordando con 'quejas'",
            "E) Falta tilde en 'han'"
        ],
        correcta: 1,
        explicacion: "La construcción impersonal de 'haber' es invariable: <strong>'ha habido quejas'</strong>. <strong>'Han habido'</strong> es un error frecuente (concordancia incorrecta del verbo haber).",
        dificultad: 3,
        tema: "Impersonales"
    },
    {
        id: 86,
        contexto: "Palabra: 'fotografía'.",
        pregunta: "Si añadimos el sufijo '-ico' para formar un adjetivo, obtenemos:",
        opciones: [
            "A) fotográfico",
            "B) fotografíaico",
            "C) fotoico",
            "D) grafíaico",
            "E) fotico"
        ],
        correcta: 0,
        explicacion: "Al añadir el sufijo '-ico' a 'fotografía', se produce una adaptación: se elimina la terminación '-ía' y se añade '-ico' para formar <strong>'fotográfico'</strong>. Es un proceso de derivación.",
        dificultad: 2,
        tema: "Sufijación y derivación"
    },
    {
        id: 87,
        contexto: "Oración: 'El libro está <strong>detrás de</strong> la puerta'.",
        pregunta: "¿Qué tipo de expresión es <strong>'detrás de'</strong>?",
        opciones: [
            "A) Adverbio + preposición (locución prepositiva)",
            "B) Preposición + adverbio",
            "C) Conjunción compuesta",
            "D) Frase hecha sin función gramatical",
            "E) Verbo + preposición"
        ],
        correcta: 0,
        explicacion: "<strong>'Detrás de'</strong> es una locución prepositiva: funciona como una preposición compuesta por un adverbio (detrás) seguido de la preposición 'de'. Indica posición.",
        dificultad: 3,
        tema: "Locuciones prepositivas"
    },
    {
        id: 88,
        contexto: "Prefijos: 'in-', 'des-', 'a-'.",
        pregunta: "¿Qué significado aportan generalmente estos prefijos?",
        opciones: [
            "A) Aumentativo o superlativo",
            "B) Diminutivo o atenuante",
            "C) Negación, privación o inversión",
            "D) Lugar o posición",
            "E) Tiempo o aspecto"
        ],
        correcta: 2,
        explicacion: "Los prefijos <strong>'in-'</strong> (y sus variantes 'im-', 'i-'), <strong>'des-'</strong> y <strong>'a-'</strong> (en algunos casos) indican negación, privación o inversión del significado base: imposible, deshacer, ateo.",
        dificultad: 2,
        tema: "Prefijos negativos"
    },
    {
        id: 89,
        contexto: "Oraciones: '<strong>Conque</strong> no vienes, ¿eh?' / '<strong>Con que</strong> estudies, es suficiente' / '<strong>¿Con qué</strong> lo hiciste?'.",
        pregunta: "¿Cuál es la diferencia entre estos usos?",
        opciones: [
            "A) 'Conque' (consecuencia) - 'con que' (prep + relativo) - 'con qué' (prep + interrogativo)",
            "B) Todos significan lo mismo y se escriben igual",
            "C) 'Conque' es incorrecto, solo valen las otras formas",
            "D) Solo cambia la tilde, el significado es idéntico",
            "E) Depende del acento regional"
        ],
        correcta: 0,
        explicacion: "<strong>'Conque'</strong> (junto, sin tilde) es conjunción consecutiva. <strong>'Con que'</strong> (separado) es preposición + relativo o conjunción. <strong>'Con qué'</strong> (separado, con tilde) es preposición + interrogativo/exclamativo.",
        dificultad: 4,
        tema: "Homófonos gramaticales"
    },
    {
        id: 90,
        contexto: "Oración: '<strong>Por qué</strong> no viniste? / <strong>Porque</strong> no quise / Es <strong>por que</strong> lo necesitas / <strong>Porqué</strong> no entiendo'.",
        pregunta: "Relaciona correctamente:",
        opciones: [
            "A) Por qué (interrogativo) - porque (causal) - por que (prep + conjunción) - porqué (sustantivo)",
            "B) Todos son iguales",
            "C) Porqué es el único correcto",
            "D) Porque es interrogativo",
            "E) Por qué es causal"
        ],
        correcta: 0,
        explicacion: "<strong>'Por qué'</strong> (interrogativo directo o indirecto), <strong>'porque'</strong> (conjunción causal), <strong>'por que'</strong> (preposición + conjunción o relativo), <strong>'porqué'</strong> (sustantivo: 'el porqué').",
        dificultad: 4,
        tema: "Porqués"
    },
    {
        id: 91,
        contexto: "Oración: '<strong>Sino</strong> <strong>si no</strong> estudias, no aprobarás'.",
        pregunta: "¿Es correcto el uso de 'sino' aquí?",
        opciones: [
            "A) Sí, 'sino' puede usarse en condicionales",
            "B) No, debe ser 'si no' (condicional: si + no)",
            "C) Ambas formas son válidas",
            "D) Debe ser 'sino que'",
            "E) Solo es correcto en México"
        ],
        correcta: 1,
        explicacion: "<strong>'Si no'</strong> (condicional + negación) es correcto. <strong>'Sino'</strong> (conjunción adversativa) es incorrecto aquí. La confusión es común.",
        dificultad: 3,
        tema: "Sino vs si no"
    },
    {
        id: 92,
        contexto: "Oración: 'No lo hizo Juan, <strong>sino</strong> Pedro'.",
        pregunta: "¿Qué función cumple <strong>'sino'</strong>?",
        opciones: [
            "A) Condicional",
            "B) Adversativa (contraposición)",
            "C) Causal",
            "D) Consecutiva",
            "E) Temporal"
        ],
        correcta: 1,
        explicacion: "<strong>'Sino'</strong> es conjunción adversativa que contrapone un elemento a otro previamente negado. Equivale a 'sino que' en algunos contextos.",
        dificultad: 2,
        tema: "Conjunciones adversativas"
    },
    {
        id: 93,
        contexto: "Palabra: '<strong>también</strong>'.",
        pregunta: "¿Qué tipo de palabra es y qué indica?",
        opciones: [
            "A) Adverbio de modo",
            "B) Adverbio de afirmación/adición",
            "C) Conjunción copulativa",
            "D) Adjetivo indefinido",
            "E) Pronombre personal"
        ],
        correcta: 1,
        explicacion: "<strong>'También'</strong> es un adverbio de afirmación que indica adición o inclusión. Significa 'además'.",
        dificultad: 1,
        tema: "Adverbios"
    },
    {
        id: 94,
        contexto: "Oración: '<strong>Tan</strong> bueno <strong>como</strong> el anterior'.",
        pregunta: "¿Qué estructura gramatical tenemos?",
        opciones: [
            "A) Comparación de superioridad",
            "B) Comparación de igualdad (tan + adj + como)",
            "C) Superlativo absoluto",
            "D) Superlativo relativo",
            "E) Grado positivo"
        ],
        correcta: 1,
        explicacion: "La estructura <strong>'tan + adjetivo + como'</strong> expresa comparación de igualdad. Indica que dos elementos poseen la misma cualidad en igual grado.",
        dificultad: 2,
        tema: "Comparativos"
    },
    {
        id: 95,
        contexto: "Oración: 'Es <strong>el más</strong> inteligente <strong>de</strong> la clase'.",
        pregunta: "¿Qué tipo de construcción es?",
        opciones: [
            "A) Comparativo de superioridad",
            "B) Superlativo relativo",
            "C) Superlativo absoluto",
            "D) Grado positivo",
            "E) Comparativo de igualdad"
        ],
        correcta: 1,
        explicacion: "<strong>'El más + adjetivo + de'</strong> es la estructura del superlativo relativo. Destaca a un elemento por encima de todos los demás de un grupo.",
        dificultad: 2,
        tema: "Superlativos"
    },
    {
        id: 96,
        contexto: "Palabra: '<strong>altísimo</strong>'.",
        pregunta: "¿Qué grado del adjetivo es?",
        opciones: [
            "A) Comparativo de superioridad",
            "B) Superlativo absoluto (sintético)",
            "C) Superlativo relativo",
            "D) Grado positivo",
            "E) Comparativo de igualdad"
        ],
        correcta: 1,
        explicacion: "<strong>'Altísimo'</strong> es un superlativo absoluto sintético. Indica una cualidad en su grado máximo, sin comparación con otros elementos. Se forma con el sufijo '-ísimo'.",
        dificultad: 2,
        tema: "Superlativos absolutos"
    },
    {
        id: 97,
        contexto: "Oración: '<strong>Había</strong> una vez un rey...'.",
        pregunta: "¿Qué función tiene <strong>'había'</strong> aquí?",
        opciones: [
            "A) Verbo haber como auxiliar",
            "B) Verbo haber impersonal existencial",
            "C) Verbo haber posesivo",
            "D) Verbo haber en voz pasiva",
            "E) Verbo haber como sinónimo de tener"
        ],
        correcta: 1,
        explicacion: "En los cuentos, <strong>'había'</strong> (pretérito imperfecto de 'haber') se usa como impersonal existencial para introducir personajes o situaciones. No tiene sujeto.",
        dificultad: 2,
        tema: "Verbos impersonales"
    },
    {
        id: 98,
        contexto: "Texto: '<strong>Llueve</strong> mucho en esta ciudad'.",
        pregunta: "¿Por qué <strong>'llueve'</strong> es impersonal?",
        opciones: [
            "A) Porque está en tercera persona",
            "B) Porque es un verbo meteorológico que no admite sujeto",
            "C) Porque el sujeto es 'la lluvia'",
            "D) Porque es un verbo irregular",
            "E) Porque está en singular"
        ],
        correcta: 1,
        explicacion: "Los verbos meteorológicos (llover, nevar, granizar) son impersonales: no tienen sujeto gramatical. La acción no la realiza nadie.",
        dificultad: 2,
        tema: "Verbos impersonales"
    },
    {
        id: 99,
        contexto: "Oración: '<strong>Se</strong> vive bien aquí'.",
        pregunta: "¿Qué tipo de construcción es?",
        opciones: [
            "A) Pasiva refleja",
            "B) Impersonal con 'se'",
            "C) Reflexiva directa",
            "D) Recíproca",
            "E) Dativo ético"
        ],
        correcta: 1,
        explicacion: "<strong>'Se vive'</strong> es una construcción impersonal con 'se'. No hay sujeto explícito, la acción se atribuye a un 'se' impersonal. Equivale a 'la gente vive bien'.",
        dificultad: 3,
        tema: "Impersonales con 'se'"
    },
    {
        id: 100,
        contexto: "Pregunta de repaso final: ¿Cuál de las siguientes oraciones presenta un <strong>error gramatical</strong>?",
        opciones: [
            "A) Habían muchas personas en la fiesta",
            "B) Hubo muchos problemas",
            "C) Ha habido quejas",
            "D) Habrá sorpresas",
            "E) Hay gente esperando"
        ],
        correcta: 0,
        explicacion: "<strong>'Habían muchas personas'</strong> es incorrecto. El verbo haber impersonal debe ir en singular: <strong>'Había muchas personas'</strong>. Las demás opciones son correctas.",
        dificultad: 4,
        tema: "Repaso general"
    }
    // FIN DE LENGUA - 100 PREGUNTAS
    ];

    console.log("✅ datos-lengua.js cargado con", DATOS_ACUDE.preguntas.lengua.length, "preguntas");
} else {
    console.error("❌ Error: DATOS_ACUDE no está definido en datos-lengua.js");
}