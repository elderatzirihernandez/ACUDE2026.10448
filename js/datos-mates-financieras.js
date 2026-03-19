// js/datos-mates-financieras.js
// PREGUNTAS DE MATEMÁTICAS FINANCIERAS

if (typeof DATOS_ACUDE !== 'undefined') {
    
    DATOS_ACUDE.preguntas.matematicas_fin = [
        {
            id: 1,
            contexto: "Se invierten $5,000 a una tasa de interés compuesto del 8% anual capitalizable anualmente.",
            pregunta: "¿Cuánto se tendrá después de 2 años?",
            opciones: [
                "A) $5,400",
                "B) $5,600",
                "C) $5,800",
                "D) $5,832",
                "E) $6,000"
            ],
            correcta: 3,
            explicacion: "Monto = C(1 + i)^t = 5000(1.08)² = 5000 × 1.1664 = 5,832.",
            dificultad: 2,
            tema: "Interés compuesto"
        }
    ];
    
    console.log("✅ datos-mates-financieras.js cargado con", DATOS_ACUDE.preguntas.matematicas_fin.length, "pregunta");
}