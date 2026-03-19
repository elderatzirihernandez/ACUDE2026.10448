// js/datos-literatura.js
// PREGUNTAS DE LITERATURA

if (typeof DATOS_ACUDE !== 'undefined') {
    
    // ============================================
    // AGREGAR PREGUNTAS DE LITERATURA
    // ============================================
    DATOS_ACUDE.preguntas.literatura = [
        {
            id: 1,
            contexto: "Literatura española del Siglo de Oro",
            pregunta: "¿Quién escribió 'El ingenioso hidalgo Don Quijote de la Mancha'?",
            opciones: ["A) Lope de Vega", "B) Miguel de Cervantes", "C) Francisco de Quevedo", "D) Luis de Góngora", "E) Calderón de la Barca"],
            correcta: 1,
            explicacion: "Miguel de Cervantes Saavedra publicó la primera parte del Quijote en 1605.",
            dificultad: 2,
            tema: "Literatura española"
        },
        {
            id: 2,
            contexto: "Literatura universal - Autores famosos",
            pregunta: "¿Qué obra escribió Gabriel García Márquez?",
            opciones: ["A) La ciudad y los perros", "B) Rayuela", "C) Cien años de soledad", "D) Pedro Páramo", "E) El túnel"],
            correcta: 2,
            explicacion: "'Cien años de soledad' es la obra maestra del escritor colombiano y uno de los máximos exponentes del realismo mágico.",
            dificultad: 1,
            tema: "Literatura latinoamericana"
        },
        {
            id: 3,
            contexto: "Géneros literarios",
            pregunta: "¿Cuál de los siguientes es un género literario?",
            opciones: ["A) Ensayo", "B) Soneto", "C) Romance", "D) Fábula", "E) Todos son géneros"],
            correcta: 4,
            explicacion: "Todos son formas o subgéneros literarios: el ensayo es género didáctico, el soneto es forma poética, el romance es poesía narrativa y la fábula es narrativa con moraleja.",
            dificultad: 3,
            tema: "Géneros literarios"
        },
        {
            id: 4,
            contexto: "Literatura inglesa",
            pregunta: "¿Quién es el autor de 'Romeo y Julieta'?",
            opciones: ["A) Charles Dickens", "B) William Shakespeare", "C) Jane Austen", "D) Oscar Wilde", "E) Emily Brontë"],
            correcta: 1,
            explicacion: "William Shakespeare escribió esta tragedia romántica alrededor de 1597.",
            dificultad: 1,
            tema: "Teatro universal"
        },
        {
            id: 5,
            contexto: "Movimientos literarios",
            pregunta: "¿Qué movimiento literario se caracteriza por la exaltación de los sentimientos y la naturaleza?",
            opciones: ["A) Clasicismo", "B) Barroco", "C) Romanticismo", "D) Realismo", "E) Modernismo"],
            correcta: 2,
            explicacion: "El Romanticismo surgió en el siglo XIX como reacción al racionalismo, destacando la emoción, la individualidad y la naturaleza.",
            dificultad: 2,
            tema: "Movimientos literarios"
        }
    ];
    
    console.log("✅ datos-literatura.js cargado con", DATOS_ACUDE.preguntas.literatura.length, "preguntas");
}