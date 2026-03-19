// js/datos-razonamiento.js
// PREGUNTAS DE RAZONAMIENTO MATEMÁTICO

if (typeof DATOS_ACUDE !== 'undefined') {
    
    DATOS_ACUDE.preguntas.razonamiento = [
        {
            id: 1,
            contexto: "En una proporción, se sabe que a/b = c/d.",
            pregunta: "Si a = 6, b = 3 y c = 10, ¿cuál es el valor de d?",
            opciones: [
                "A) 2",
                "B) 3",
                "C) 4",
                "D) 5",
                "E) 6"
            ],
            correcta: 4,
            explicacion: "6/3 = 10/d → 2 = 10/d → d = 10/2 = 5.",
            dificultad: 2,
            tema: "Proporciones"
        }
    ];
    
    console.log("✅ datos-razonamiento.js cargado con", DATOS_ACUDE.preguntas.razonamiento.length, "pregunta");
}