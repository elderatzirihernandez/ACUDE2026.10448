// js/datos-quimica.js
// PREGUNTAS DE QUÍMICA

if (typeof DATOS_ACUDE !== 'undefined') {
    
    DATOS_ACUDE.preguntas.quimica = [
        {
            id: 1,
            contexto: "En el laboratorio se tiene una disolución de ácido clorhídrico (HCl) 0.1 M.",
            pregunta: "Si se necesitan 25 mL de esta disolución para neutralizar 20 mL de NaOH, ¿cuál es la concentración del NaOH?",
            opciones: [
                "A) 0.08 M",
                "B) 0.125 M",
                "C) 0.1 M",
                "D) 0.15 M",
                "E) 0.2 M"
            ],
            correcta: 1,
            explicacion: "Usando M₁V₁ = M₂V₂: (0.1 M)(25 mL) = M₂(20 mL). M₂ = (0.1 × 25)/20 = 2.5/20 = 0.125 M.",
            dificultad: 2,
            tema: "Ácidos y bases"
        }
    ];
    
    console.log("✅ datos-quimica.js cargado con", DATOS_ACUDE.preguntas.quimica.length, "pregunta");
}