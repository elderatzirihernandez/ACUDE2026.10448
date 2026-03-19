// js/datos-matematicas-ing.js
// PREGUNTAS DE MATEMÁTICAS PARA INGENIERÍA

if (typeof DATOS_ACUDE !== 'undefined') {
    
    DATOS_ACUDE.preguntas.matematicas_ing = [
        {
            id: 1,
            contexto: "Calcula la derivada de f(x) = 3x² + 2x - 5.",
            pregunta: "¿Cuál es f'(x)?",
            opciones: [
                "A) 3x + 2",
                "B) 6x + 2",
                "C) 6x - 2",
                "D) 3x² + 2",
                "E) 6x"
            ],
            correcta: 1,
            explicacion: "Derivada: d/dx (3x²) = 6x, d/dx (2x) = 2, d/dx (-5) = 0. Por lo tanto, f'(x) = 6x + 2.",
            dificultad: 3,
            tema: "Derivadas"
        }
    ];
    
    console.log("✅ datos-matematicas-ing.js cargado con", DATOS_ACUDE.preguntas.matematicas_ing.length, "pregunta");
}