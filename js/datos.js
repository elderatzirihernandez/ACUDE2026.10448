// js/datos.js
// ARCHIVO PRINCIPAL - SOLO ESTRUCTURA BASE
// Las preguntas se cargarán en archivos separados: datos-lengua.js, datos-biologia.js, etc.

const DATOS_ACUDE = {
    // ============================================
    // INFORMACIÓN DE TODAS LAS MATERIAS
    // ============================================
    materias: [
        // ============================================
        // MATERIAS TRONCALES
        // ============================================
        {
            id: 'lengua',
            nombre: 'Lengua Española',
            icono: 'fa-language',
            color: '#9b59b6',
            descripcion: 'Comprensión lectora, gramática, categorías gramaticales y ortografía',
            totalPreguntas: 100
        },
        {
            id: 'razonamiento',
            nombre: 'Razonamiento Matemático',
            icono: 'fa-brain',
            color: '#f1c40f',
            descripcion: 'Aritmética, álgebra, ecuaciones y razonamiento lógico',
            totalPreguntas: 100
        },
        {
            id: 'ingles',
            nombre: 'Inglés',
            icono: 'fa-language',
            color: '#3498db',
            descripcion: 'Gramática, tiempos verbales, morfosintaxis y uso integrativo',
            totalPreguntas: 100
        },

        // ============================================
        // CIENCIAS QUÍMICO-BIOLÓGICAS
        // ============================================
        {
            id: 'biologia',
            nombre: 'Biología',
            icono: 'fa-dna',
            color: '#2ecc71',
            descripcion: 'Origen de la vida, célula, genética, ecología y evolución',
            totalPreguntas: 100
        },
        {
            id: 'quimica',
            nombre: 'Química',
            icono: 'fa-flask',
            color: '#e74c3c',
            descripcion: 'Estructura atómica, tabla periódica, enlaces y nomenclatura',
            totalPreguntas: 100
        },
        {
            id: 'matematicas',
            nombre: 'Matemáticas (Ciencias)',
            icono: 'fa-calculator',
            color: '#f39c12',
            descripcion: 'Aritmética, álgebra, ecuaciones y aplicaciones',
            totalPreguntas: 100
        },
        {
            id: 'fisica',
            nombre: 'Física',
            icono: 'fa-bolt',
            color: '#3498db',
            descripcion: 'Medición, vectores, cinemática, dinámica y termodinámica',
            totalPreguntas: 100
        },

        // ============================================
        // CIENCIAS SOCIALES Y HUMANIDADES
        // ============================================
        {
            id: 'historia',
            nombre: 'Historia',
            icono: 'fa-landmark',
            color: '#e67e22',
            descripcion: 'Historia universal, guerras mundiales, historia de México',
            totalPreguntas: 100
        },
        {
            id: 'literatura',
            nombre: 'Literatura',
            icono: 'fa-book-open',
            color: '#1abc9c',
            descripcion: 'Géneros literarios, épica, lírica, dramática y narrativa',
            totalPreguntas: 100
        },
        {
            id: 'derecho',
            nombre: 'Derecho',
            icono: 'fa-gavel',
            color: '#34495e',
            descripcion: 'Fundamentos del derecho, tipos de normas, clasificación jurídica',
            totalPreguntas: 100
        },

        // ============================================
        // CIENCIAS EXACTAS INGENIERÍA Y ARQUITECTURA
        // ============================================
        {
            id: 'quimica_ing',
            nombre: 'Química (Ingeniería)',
            icono: 'fa-flask',
            color: '#c0392b',
            descripcion: 'Conceptos básicos, estructura atómica, enlaces y funciones químicas',
            totalPreguntas: 100
        },
        {
            id: 'matematicas_ing',
            nombre: 'Matemáticas (Ingeniería)',
            icono: 'fa-square-root-alt',
            color: '#d35400',
            descripcion: 'Aritmética, álgebra, geometría, cálculo diferencial e integral',
            totalPreguntas: 100
        },
        {
            id: 'fisica_ing',
            nombre: 'Física (Ingeniería)',
            icono: 'fa-rocket',
            color: '#2980b9',
            descripcion: 'Medición, vectores, cinemática, dinámica, energía y electromagnetismo',
            totalPreguntas: 100
        },

        // ============================================
        // CIENCIAS ECONÓMICO ADMINISTRATIVAS
        // ============================================
        {
            id: 'economia',
            nombre: 'Economía y Administración',
            icono: 'fa-chart-line',
            color: '#27ae60',
            descripcion: 'Administración, teoría del valor, sistemas económicos',
            totalPreguntas: 100
        },
        {
            id: 'matematicas_fin',
            nombre: 'Matemáticas Financieras',
            icono: 'fa-coins',
            color: '#f39c12',
            descripcion: 'Aritmética, álgebra, interés compuesto y aplicaciones financieras',
            totalPreguntas: 100
        }
    ],

    
    // ============================================
    // BANCO DE PREGUNTAS (INICIALMENTE VACÍO)
    // Se llenará con los archivos: datos-lengua.js, datos-biologia.js, etc.
    // ============================================
    preguntas: {
        // Las preguntas se agregarán dinámicamente desde los archivos secundarios
    }
};

// ============================================
// EXPORTAR GLOBALMENTE
// ============================================
window.DATOS_ACUDE = DATOS_ACUDE;

// ============================================
// VERIFICACIÓN EN CONSOLA
// ============================================
console.log("✅ datos.js (base) cargado correctamente");
console.log("📚 Materias disponibles:", DATOS_ACUDE.materias.length);
console.log("📝 IDs de materias:", DATOS_ACUDE.materias.map(m => m.id));