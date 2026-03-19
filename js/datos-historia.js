// js/datos-historia.js
// PREGUNTAS DE HISTORIA

if (typeof DATOS_ACUDE !== 'undefined') {
    
    DATOS_ACUDE.preguntas.historia = [
        {
            id: 1,
            contexto: "Año en que Cristóbal Colón llegó a América.",
            pregunta: "¿En qué año ocurrió este evento?",
            opciones: [
                "A) 1492",
                "B) 1510",
                "C) 1521",
                "D) 1810",
                "E) 1910"
            ],
            correcta: 0,
            explicacion: "Cristóbal Colón llegó a América el 12 de octubre de 1492.",
            dificultad: 1,
            tema: "Descubrimiento de América"
        }
    ];
    
    console.log("✅ datos-historia.js cargado con", DATOS_ACUDE.preguntas.historia.length, "pregunta");
}