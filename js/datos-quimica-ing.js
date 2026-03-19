// js/datos-quimica-ing.js
// PREGUNTAS DE QUÍMICA PARA INGENIERÍA

if (typeof DATOS_ACUDE !== 'undefined') {
    
    DATOS_ACUDE.preguntas.quimica_ing = [
        {
            id: 1,
            contexto: "Se necesita calcular la masa molar del ácido sulfúrico (H₂SO₄).",
            pregunta: "¿Cuál es su masa molar? (H=1, S=32, O=16)",
            opciones: [
                "A) 49 g/mol",
                "B) 98 g/mol",
                "C) 100 g/mol",
                "D) 82 g/mol",
                "E) 50 g/mol"
            ],
            correcta: 1,
            explicacion: "H₂SO₄ = (2×1) + 32 + (4×16) = 2 + 32 + 64 = 98 g/mol.",
            dificultad: 2,
            tema: "Estequiometría"
        }
    ];
    
    console.log("✅ datos-quimica-ing.js cargado con", DATOS_ACUDE.preguntas.quimica_ing.length, "pregunta");
}