// js/datos-ingles.js
// PREGUNTAS DE INGLÉS

if (typeof DATOS_ACUDE !== 'undefined') {
    
    DATOS_ACUDE.preguntas.ingles = [
        {
            id: 1,
            contexto: "Choose the correct option to complete the sentence: 'If I _____ you, I would study more'.",
            pregunta: "Which verb form is correct?",
            opciones: [
                "A) am",
                "B) was",
                "C) were",
                "D) be",
                "E) is"
            ],
            correcta: 2,
            explicacion: "En condicionales con 'if', se usa 'were' para todos los sujetos en situaciones hipotéticas (subjuntivo).",
            dificultad: 3,
            tema: "Condicionales"
        }
    ];
    
    console.log("✅ datos-ingles.js cargado con", DATOS_ACUDE.preguntas.ingles.length, "pregunta");
}