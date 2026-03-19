// js/datos-fisica.js
// PREGUNTAS DE FÍSICA - TEMARIO ENCUENTRO ACUDE 2026

if (typeof DATOS_ACUDE !== 'undefined') {
    
    DATOS_ACUDE.preguntas.fisica = [
        // ============================================
        // 7.1. LA MEDIDA EN LA FÍSICA (Preguntas 1-10)
        // ============================================
        {
            id: 1,
            contexto: "Los sistemas de unidades son fundamentales en física.",
            pregunta: "¿Cuáles son las unidades fundamentales del Sistema Internacional para longitud, masa y tiempo?",
            opciones: [
                "A) Centímetro, gramo, segundo",
                "B) Metro, kilogramo, segundo",
                "C) Metro, gramo, hora",
                "D) Kilómetro, libra, minuto",
                "E) Pie, slug, segundo"
            ],
            correcta: 1,
            explicacion: "El SI establece el metro (m), kilogramo (kg) y segundo (s) como unidades básicas.",
            dificultad: 1,
            tema: "Sistemas de unidades"
        },
        {
            id: 2,
            contexto: "Las conversiones de unidades son esenciales en problemas.",
            pregunta: "Convertir 108 km/h a m/s:",
            opciones: [
                "A) 10 m/s",
                "B) 20 m/s",
                "C) 30 m/s",
                "D) 40 m/s",
                "E) 50 m/s"
            ],
            correcta: 2,
            explicacion: "Para convertir km/h a m/s se divide entre 3.6: 108 ÷ 3.6 = 30 m/s.",
            dificultad: 1,
            tema: "Sistemas de unidades y conversiones"
        },
        {
            id: 3,
            contexto: "Las magnitudes pueden ser fundamentales o derivadas.",
            pregunta: "¿Cuál de las siguientes es una magnitud fundamental?",
            opciones: [
                "A) Velocidad",
                "B) Aceleración",
                "C) Fuerza",
                "D) Tiempo",
                "E) Trabajo"
            ],
            correcta: 3,
            explicacion: "El tiempo es una magnitud fundamental; las demás son derivadas.",
            dificultad: 1,
            tema: "Magnitudes físicas"
        },
        {
            id: 4,
            contexto: "La notación científica facilita números extremos.",
            pregunta: "Expresar 0.00025 en notación científica:",
            opciones: [
                "A) 2.5 × 10⁻³",
                "B) 2.5 × 10⁻⁴",
                "C) 2.5 × 10⁻⁵",
                "D) 25 × 10⁻⁵",
                "E) 0.25 × 10⁻³"
            ],
            correcta: 1,
            explicacion: "0.00025 = 2.5 × 10⁻⁴ (se movió el punto 4 lugares a la derecha).",
            dificultad: 2,
            tema: "Sistemas de unidades"
        },
        {
            id: 5,
            contexto: "Las unidades derivadas se expresan con las fundamentales.",
            pregunta: "La unidad de fuerza en el SI, el Newton, equivale a:",
            opciones: [
                "A) kg·m/s",
                "B) kg·m/s²",
                "C) kg·m²/s²",
                "D) kg²·m/s²",
                "E) g·cm/s²"
            ],
            correcta: 1,
            explicacion: "1 N = 1 kg × 1 m/s² (masa por aceleración).",
            dificultad: 1,
            tema: "Magnitudes físicas"
        },
        {
            id: 6,
            contexto: "Los prefijos del SI indican múltiplos y submúltiplos.",
            pregunta: "¿Qué significa el prefijo 'centi' (c)?",
            opciones: [
                "A) 10²",
                "B) 10¹",
                "C) 10⁻¹",
                "D) 10⁻²",
                "E) 10⁻³"
            ],
            correcta: 3,
            explicacion: "Centi (c) = 10⁻² = 0.01 (centímetro = 0.01 m).",
            dificultad: 1,
            tema: "Sistemas de unidades"
        },
        {
            id: 7,
            contexto: "La densidad relaciona masa y volumen.",
            pregunta: "¿Cuál es la densidad de un cuerpo de 500 g que ocupa 250 cm³?",
            opciones: [
                "A) 0.5 g/cm³",
                "B) 1 g/cm³",
                "C) 2 g/cm³",
                "D) 3 g/cm³",
                "E) 4 g/cm³"
            ],
            correcta: 2,
            explicacion: "ρ = m/V = 500 g / 250 cm³ = 2 g/cm³.",
            dificultad: 1,
            tema: "Magnitudes físicas"
        },
        {
            id: 8,
            contexto: "Las cifras significativas indican precisión.",
            pregunta: "¿Cuántas cifras significativas tiene 0.02050?",
            opciones: [
                "A) 3",
                "B) 4",
                "C) 5",
                "D) 6",
                "E) 7"
            ],
            correcta: 1,
            explicacion: "Los ceros a la izquierda no cuentan. Los dígitos significativos son 2,0,5,0 = 4 cifras.",
            dificultad: 2,
            tema: "La medida en física"
        },
        {
            id: 9,
            contexto: "El error en mediciones es importante.",
            pregunta: "Si una longitud se mide como 25.3 ± 0.2 cm, ¿cuál es el error relativo porcentual?",
            opciones: [
                "A) 0.2%",
                "B) 0.4%",
                "C) 0.8%",
                "D) 1.2%",
                "E) 2.5%"
            ],
            correcta: 2,
            explicacion: "Error relativo = (0.2/25.3) × 100 = 0.79% ≈ 0.8%.",
            dificultad: 2,
            tema: "La medida en física"
        },
        {
            id: 10,
            contexto: "Las magnitudes pueden ser escalares o vectoriales.",
            pregunta: "¿Cuál de las siguientes es una magnitud escalar?",
            opciones: [
                "A) Velocidad",
                "B) Fuerza",
                "C) Aceleración",
                "D) Masa",
                "E) Desplazamiento"
            ],
            correcta: 3,
            explicacion: "La masa es escalar (solo magnitud). Las demás son vectoriales.",
            dificultad: 1,
            tema: "Magnitudes físicas"
        },

        // ============================================
        // 7.2. VECTORES (Preguntas 11-20)
        // ============================================
        {
            id: 11,
            contexto: "Los vectores tienen propiedades específicas.",
            pregunta: "¿Qué caracteriza a un vector?",
            opciones: [
                "A) Solo magnitud",
                "B) Magnitud y dirección",
                "C) Solo dirección",
                "D) Sentido únicamente",
                "E) Punto de aplicación solo"
            ],
            correcta: 1,
            explicacion: "Un vector tiene magnitud, dirección y sentido.",
            dificultad: 1,
            tema: "Magnitudes escalares y vectoriales"
        },
        {
            id: 12,
            contexto: "Los vectores pueden representarse gráficamente.",
            pregunta: "¿Qué son vectores colineales?",
            opciones: [
                "A) Vectores perpendiculares",
                "B) Vectores con la misma dirección",
                "C) Vectores opuestos",
                "D) Vectores de igual magnitud",
                "E) Vectores concurrentes"
            ],
            correcta: 1,
            explicacion: "Vectores colineales tienen la misma dirección, aunque pueden tener sentido opuesto.",
            dificultad: 1,
            tema: "Representación de vectores"
        },
        {
            id: 13,
            contexto: "La suma de vectores puede hacerse gráficamente.",
            pregunta: "El método del paralelogramo sirve para sumar:",
            opciones: [
                "A) Más de 3 vectores",
                "B) Exactamente 2 vectores",
                "C) Vectores perpendiculares solamente",
                "D) Vectores paralelos solamente",
                "E) Cualquier número de vectores"
            ],
            correcta: 1,
            explicacion: "El método del paralelogramo suma exactamente dos vectores con origen común.",
            dificultad: 1,
            tema: "Métodos gráficos"
        },
        {
            id: 14,
            contexto: "Las componentes rectangulares facilitan cálculos.",
            pregunta: "Un vector de 10 N forma 60° con la horizontal. Su componente horizontal es:",
            opciones: [
                "A) 5 N",
                "B) 8.66 N",
                "C) 10 N",
                "D) 7.07 N",
                "E) 6 N"
            ],
            correcta: 0,
            explicacion: "Vx = V·cosθ = 10 × cos60° = 10 × 0.5 = 5 N.",
            dificultad: 2,
            tema: "Método analítico"
        },
        {
            id: 15,
            contexto: "La magnitud de un vector se obtiene con Pitágoras.",
            pregunta: "Un vector tiene componentes (3, 4). Su magnitud es:",
            opciones: [
                "A) 3",
                "B) 4",
                "C) 5",
                "D) 7",
                "E) 12"
            ],
            correcta: 2,
            explicacion: "|V| = √(3² + 4²) = √(9 + 16) = √25 = 5.",
            dificultad: 1,
            tema: "Método analítico"
        },
        {
            id: 16,
            contexto: "El vector unitario tiene magnitud 1.",
            pregunta: "El vector unitario en la dirección de (3, 4) es:",
            opciones: [
                "A) (3, 4)",
                "B) (0.6, 0.8)",
                "C) (0.8, 0.6)",
                "D) (1, 1)",
                "E) (3/5, 4/5)"
            ],
            correcta: 1,
            explicacion: "Magnitud = 5. Unitario = (3/5, 4/5) = (0.6, 0.8).",
            dificultad: 2,
            tema: "Propiedades de los vectores"
        },
        {
            id: 17,
            contexto: "La resta vectorial equivale a sumar el opuesto.",
            pregunta: "Si A = (5, 2) y B = (3, 1), entonces A - B =",
            opciones: [
                "A) (2, 1)",
                "B) (8, 3)",
                "C) (2, 3)",
                "D) (8, 1)",
                "E) (5, 1)"
            ],
            correcta: 0,
            explicacion: "A - B = (5-3, 2-1) = (2, 1).",
            dificultad: 1,
            tema: "Suma y resta de vectores"
        },
        {
            id: 18,
            contexto: "Vectores concurrentes se cruzan en un punto.",
            pregunta: "¿Qué significa que dos vectores sean concurrentes?",
            opciones: [
                "A) Tienen la misma magnitud",
                "B) Sus líneas de acción se intersectan",
                "C) Son paralelos",
                "D) Son opuestos",
                "E) Son perpendiculares"
            ],
            correcta: 1,
            explicacion: "Vectores concurrentes tienen sus líneas de acción que se cortan en un punto.",
            dificultad: 1,
            tema: "Representación de vectores"
        },
        {
            id: 19,
            contexto: "El producto punto entre vectores da un escalar.",
            pregunta: "El producto punto de dos vectores perpendiculares es:",
            opciones: [
                "A) Máximo",
                "B) Mínimo",
                "C) Cero",
                "D) Unitario",
                "E) Negativo"
            ],
            correcta: 2,
            explicacion: "A·B = |A||B|cos90° = |A||B|×0 = 0.",
            dificultad: 1,
            tema: "Operaciones con vectores"
        },
        {
            id: 20,
            contexto: "La dirección de un vector se da por su ángulo.",
            pregunta: "Un vector con componentes (10, 10) tiene un ángulo de:",
            opciones: [
                "A) 30°",
                "B) 45°",
                "C) 60°",
                "D) 90°",
                "E) 0°"
            ],
            correcta: 1,
            explicacion: "θ = arctan(10/10) = arctan(1) = 45°.",
            dificultad: 1,
            tema: "Método analítico"
        },

        // ============================================
        // 7.3. CINEMÁTICA (Preguntas 21-40)
        // ============================================
        {
            id: 21,
            contexto: "El movimiento rectilíneo uniforme tiene velocidad constante.",
            pregunta: "Un auto viaja a 25 m/s durante 20 s. ¿Qué distancia recorre?",
            opciones: [
                "A) 250 m",
                "B) 400 m",
                "C) 500 m",
                "D) 600 m",
                "E) 750 m"
            ],
            correcta: 2,
            explicacion: "d = v·t = 25 × 20 = 500 m.",
            dificultad: 1,
            tema: "Movimiento rectilíneo uniforme"
        },
        {
            id: 22,
            contexto: "La velocidad es una magnitud vectorial.",
            pregunta: "Un auto da una vuelta completa a una pista circular y regresa al punto de partida. Su desplazamiento es:",
            opciones: [
                "A) La longitud de la pista",
                "B) El radio",
                "C) El diámetro",
                "D) Cero",
                "E) La mitad de la pista"
            ],
            correcta: 3,
            explicacion: "El desplazamiento es cero porque la posición final es igual a la inicial.",
            dificultad: 1,
            tema: "Concepto de desplazamiento"
        },
        {
            id: 23,
            contexto: "La aceleración es cambio de velocidad.",
            pregunta: "Un auto aumenta su velocidad de 10 m/s a 30 m/s en 5 s. ¿Cuál es su aceleración?",
            opciones: [
                "A) 2 m/s²",
                "B) 3 m/s²",
                "C) 4 m/s²",
                "D) 5 m/s²",
                "E) 6 m/s²"
            ],
            correcta: 2,
            explicacion: "a = (30 - 10)/5 = 20/5 = 4 m/s².",
            dificultad: 1,
            tema: "Concepto de aceleración"
        },
        {
            id: 24,
            contexto: "La caída libre es un MRUV con g = 9.8 m/s².",
            pregunta: "¿Cuál es la velocidad de un objeto después de 2 s de caída libre desde el reposo?",
            opciones: [
                "A) 9.8 m/s",
                "B) 14.7 m/s",
                "C) 19.6 m/s",
                "D) 24.5 m/s",
                "E) 29.4 m/s"
            ],
            correcta: 2,
            explicacion: "v = g·t = 9.8 × 2 = 19.6 m/s.",
            dificultad: 1,
            tema: "Caída libre"
        },
        {
            id: 25,
            contexto: "La altura en caída libre se calcula con h = ½ gt².",
            pregunta: "¿Qué altura cae un objeto en 3 s de caída libre? (g = 9.8 m/s²)",
            opciones: [
                "A) 14.7 m",
                "B) 29.4 m",
                "C) 44.1 m",
                "D) 58.8 m",
                "E) 73.5 m"
            ],
            correcta: 2,
            explicacion: "h = ½ × 9.8 × 9 = 4.9 × 9 = 44.1 m.",
            dificultad: 2,
            tema: "Caída libre"
        },
        {
            id: 26,
            contexto: "El tiro vertical hacia arriba tiene velocidad inicial positiva.",
            pregunta: "Se lanza una pelota hacia arriba con 15 m/s. ¿Qué altura máxima alcanza? (g = 10 m/s²)",
            opciones: [
                "A) 7.5 m",
                "B) 11.25 m",
                "C) 15 m",
                "D) 22.5 m",
                "E) 30 m"
            ],
            correcta: 1,
            explicacion: "h max = v₀²/(2g) = 225/20 = 11.25 m.",
            dificultad: 2,
            tema: "Movimiento vertical"
        },
        {
            id: 27,
            contexto: "El tiempo de subida es t = v₀/g.",
            pregunta: "¿Cuánto tarda en alcanzar la altura máxima una pelota lanzada con 20 m/s? (g = 10 m/s²)",
            opciones: [
                "A) 1 s",
                "B) 2 s",
                "C) 3 s",
                "D) 4 s",
                "E) 5 s"
            ],
            correcta: 1,
            explicacion: "t = v₀/g = 20/10 = 2 s.",
            dificultad: 1,
            tema: "Movimiento vertical"
        },
        {
            id: 28,
            contexto: "La velocidad relativa depende del observador.",
            pregunta: "Dos trenes se acercan en sentidos opuestos con 80 km/h y 60 km/h. ¿Cuál es su velocidad relativa?",
            opciones: [
                "A) 20 km/h",
                "B) 80 km/h",
                "C) 140 km/h",
                "D) 200 km/h",
                "E) 4800 km/h"
            ],
            correcta: 2,
            explicacion: "Velocidad relativa = 80 + 60 = 140 km/h (se suman por ir en sentidos opuestos).",
            dificultad: 2,
            tema: "Velocidad relativa"
        },
        {
            id: 29,
            contexto: "En movimiento circular uniforme, la velocidad es constante en magnitud.",
            pregunta: "Un objeto da 20 vueltas en 10 segundos. ¿Cuál es su frecuencia?",
            opciones: [
                "A) 0.5 Hz",
                "B) 1 Hz",
                "C) 2 Hz",
                "D) 5 Hz",
                "E) 10 Hz"
            ],
            correcta: 2,
            explicacion: "f = número de vueltas/tiempo = 20/10 = 2 Hz.",
            dificultad: 1,
            tema: "Movimiento circular uniforme"
        },
        {
            id: 30,
            contexto: "El período es el inverso de la frecuencia.",
            pregunta: "Si la frecuencia es 0.5 Hz, ¿cuál es el período?",
            opciones: [
                "A) 0.5 s",
                "B) 1 s",
                "C) 2 s",
                "D) 4 s",
                "E) 5 s"
            ],
            correcta: 2,
            explicacion: "T = 1/f = 1/0.5 = 2 s.",
            dificultad: 1,
            tema: "Movimiento circular uniforme"
        },
        {
            id: 31,
            contexto: "La velocidad angular se mide en rad/s.",
            pregunta: "¿Cuál es la velocidad angular de un objeto que gira a 120 RPM?",
            opciones: [
                "A) 2π rad/s",
                "B) 4π rad/s",
                "C) 6π rad/s",
                "D) 8π rad/s",
                "E) 10π rad/s"
            ],
            correcta: 1,
            explicacion: "120 RPM = 120/60 = 2 rev/s = 4π rad/s.",
            dificultad: 2,
            tema: "Movimiento circular uniforme"
        },
        {
            id: 32,
            contexto: "La aceleración centrípeta apunta al centro.",
            pregunta: "Un auto toma una curva de 50 m de radio a 20 m/s. Su aceleración centrípeta es:",
            opciones: [
                "A) 4 m/s²",
                "B) 6 m/s²",
                "C) 8 m/s²",
                "D) 10 m/s²",
                "E) 12 m/s²"
            ],
            correcta: 2,
            explicacion: "ac = v²/r = (20)²/50 = 400/50 = 8 m/s².",
            dificultad: 2,
            tema: "Movimiento circular uniforme"
        },
        {
            id: 33,
            contexto: "El movimiento parabólico combina MRU y caída libre.",
            pregunta: "En tiro parabólico, ¿qué componente de velocidad cambia constantemente?",
            opciones: [
                "A) Horizontal",
                "B) Vertical",
                "C) Ambas",
                "D) Ninguna",
                "E) La rapidez"
            ],
            correcta: 1,
            explicacion: "La velocidad vertical cambia por la aceleración de la gravedad; la horizontal es constante.",
            dificultad: 1,
            tema: "Movimiento parabólico"
        },
        {
            id: 34,
            contexto: "El alcance máximo se logra con 45°.",
            pregunta: "¿Con qué ángulo se obtiene el máximo alcance horizontal?",
            opciones: [
                "A) 30°",
                "B) 45°",
                "C) 60°",
                "D) 75°",
                "E) 90°"
            ],
            correcta: 1,
            explicacion: "El alcance máximo en tiro parabólico (sin resistencia) se logra con 45°.",
            dificultad: 1,
            tema: "Movimiento parabólico"
        },
        {
            id: 35,
            contexto: "El tiempo de vuelo depende de la velocidad vertical inicial.",
            pregunta: "Con v₀ = 40 m/s y ángulo 30°, ¿cuál es el tiempo de vuelo? (g = 10 m/s²)",
            opciones: [
                "A) 2 s",
                "B) 3 s",
                "C) 4 s",
                "D) 5 s",
                "E) 6 s"
            ],
            correcta: 2,
            explicacion: "v₀y = 40·sen30° = 40·0.5 = 20 m/s. t vuelo = 2v₀y/g = 40/10 = 4 s.",
            dificultad: 2,
            tema: "Movimiento parabólico"
        },
        {
            id: 36,
            contexto: "La altura máxima es (v₀y²)/(2g).",
            pregunta: "Con v₀y = 30 m/s, ¿cuál es la altura máxima? (g = 10 m/s²)",
            opciones: [
                "A) 15 m",
                "B) 30 m",
                "C) 45 m",
                "D) 60 m",
                "E) 75 m"
            ],
            correcta: 2,
            explicacion: "h max = (30)²/(2×10) = 900/20 = 45 m.",
            dificultad: 1,
            tema: "Movimiento parabólico"
        },
        {
            id: 37,
            contexto: "El movimiento armónico simple es oscilatorio.",
            pregunta: "¿Cuál es la condición para que un movimiento sea armónico simple?",
            opciones: [
                "A) Fuerza constante",
                "B) Fuerza proporcional al desplazamiento y opuesta",
                "C) Velocidad constante",
                "D) Aceleración constante",
                "E) Fuerza nula"
            ],
            correcta: 1,
            explicacion: "En MAS, la fuerza es F = -kx, proporcional y opuesta al desplazamiento.",
            dificultad: 2,
            tema: "Movimiento armónico simple"
        },
        {
            id: 38,
            contexto: "El período del péndulo simple depende de la longitud.",
            pregunta: "La fórmula del período de un péndulo simple es:",
            opciones: [
                "A) T = 2π√(L/g)",
                "B) T = 2π√(k/m)",
                "C) T = 2π√(m/k)",
                "D) T = 2π√(g/L)",
                "E) T = √(L/g)"
            ],
            correcta: 0,
            explicacion: "El período del péndulo es T = 2π√(L/g), independiente de la masa.",
            dificultad: 1,
            tema: "Movimiento armónico simple"
        },
        {
            id: 39,
            contexto: "La gráfica posición-tiempo en MRU es una línea recta.",
            pregunta: "En MRU, la gráfica posición vs tiempo es:",
            opciones: [
                "A) Una parábola",
                "B) Una recta con pendiente constante",
                "C) Una hipérbola",
                "D) Una curva exponencial",
                "E) Una recta horizontal"
            ],
            correcta: 1,
            explicacion: "x = x₀ + vt es una línea recta con pendiente v.",
            dificultad: 1,
            tema: "Análisis de gráficas"
        },
        {
            id: 40,
            contexto: "En MRUV, la gráfica v-t es una recta.",
            pregunta: "En MRUV con aceleración constante, la gráfica velocidad-tiempo es:",
            opciones: [
                "A) Horizontal",
                "B) Recta con pendiente igual a la aceleración",
                "C) Parábola",
                "D) Curva creciente",
                "E) Recta vertical"
            ],
            correcta: 1,
            explicacion: "v = v₀ + at es una línea recta con pendiente a.",
            dificultad: 1,
            tema: "Análisis de gráficas"
        },

        // ============================================
        // 7.4-7.5. DINÁMICA Y LEYES DE NEWTON (Preguntas 41-55)
        // ============================================
        {
            id: 41,
            contexto: "La primera ley de Newton es la ley de la inercia.",
            pregunta: "¿Qué establece la primera ley de Newton?",
            opciones: [
                "A) F = m·a",
                "B) A toda acción corresponde una reacción igual y opuesta",
                "C) Un cuerpo mantiene su estado de reposo o MRU si no actúa fuerza neta",
                "D) La energía se conserva",
                "E) El momento lineal es constante"
            ],
            correcta: 2,
            explicacion: "La primera ley (inercia) dice que un cuerpo permanece en reposo o MRU a menos que actúe una fuerza neta.",
            dificultad: 1,
            tema: "Principios de la inercia"
        },
        {
            id: 42,
            contexto: "La segunda ley relaciona fuerza y aceleración.",
            pregunta: "¿Qué fuerza se requiere para acelerar un objeto de 8 kg a 5 m/s²?",
            opciones: [
                "A) 13 N",
                "B) 20 N",
                "C) 40 N",
                "D) 50 N",
                "E) 80 N"
            ],
            correcta: 2,
            explicacion: "F = m·a = 8 × 5 = 40 N.",
            dificultad: 1,
            tema: "Leyes de Newton"
        },
        {
            id: 43,
            contexto: "La tercera ley es acción y reacción.",
            pregunta: "Si una persona empuja una pared con 100 N, ¿qué fuerza ejerce la pared sobre la persona?",
            opciones: [
                "A) 0 N",
                "B) 50 N",
                "C) 100 N en sentido opuesto",
                "D) 200 N",
                "E) Depende de la masa"
            ],
            correcta: 2,
            explicacion: "Por la tercera ley, la pared ejerce 100 N sobre la persona en sentido contrario.",
            dificultad: 1,
            tema: "Leyes de Newton"
        },
        {
            id: 44,
            contexto: "El peso es la fuerza gravitacional.",
            pregunta: "¿Cuál es el peso de un objeto de 12 kg en la Tierra? (g = 9.8 m/s²)",
            opciones: [
                "A) 58.8 N",
                "B) 98.6 N",
                "C) 117.6 N",
                "D) 125.4 N",
                "E) 136.2 N"
            ],
            correcta: 2,
            explicacion: "P = m·g = 12 × 9.8 = 117.6 N.",
            dificultad: 1,
            tema: "Masa y peso"
        },
        {
            id: 45,
            contexto: "La fricción se opone al movimiento.",
            pregunta: "La fuerza de fricción cinética depende de:",
            opciones: [
                "A) La velocidad",
                "B) El área de contacto",
                "C) El coeficiente de fricción y la normal",
                "D) La masa exclusivamente",
                "E) El tiempo"
            ],
            correcta: 2,
            explicacion: "f = μ·N, donde μ es coeficiente y N la fuerza normal.",
            dificultad: 1,
            tema: "Tipos de fricción"
        },
        {
            id: 46,
            contexto: "Los diagramas de cuerpo libre representan fuerzas.",
            pregunta: "En un diagrama de cuerpo libre de un libro sobre una mesa, ¿qué fuerzas actúan?",
            opciones: [
                "A) Solo el peso",
                "B) Peso hacia abajo y normal hacia arriba",
                "C) Peso y fricción",
                "D) Normal y fricción",
                "E) Solo la normal"
            ],
            correcta: 1,
            explicacion: "Actúan el peso (hacia abajo) y la normal (hacia arriba) en equilibrio.",
            dificultad: 1,
            tema: "Diagramas de fuerzas"
        },
        {
            id: 47,
            contexto: "La fuerza normal es perpendicular a la superficie.",
            pregunta: "Un bloque de 5 kg sobre una superficie horizontal. La normal es:",
            opciones: [
                "A) 0 N",
                "B) 25 N",
                "C) 49 N",
                "D) 98 N",
                "E) 5 N"
            ],
            correcta: 2,
            explicacion: "N = peso = m·g = 5 × 9.8 = 49 N.",
            dificultad: 1,
            tema: "Diagramas de fuerzas"
        },
        {
            id: 48,
            contexto: "La fuerza neta es la suma vectorial.",
            pregunta: "Sobre un cuerpo actúan 40 N a la derecha y 25 N a la izquierda. La fuerza neta es:",
            opciones: [
                "A) 65 N derecha",
                "B) 65 N izquierda",
                "C) 15 N derecha",
                "D) 15 N izquierda",
                "E) 0 N"
            ],
            correcta: 2,
            explicacion: "F neta = 40 - 25 = 15 N a la derecha.",
            dificultad: 1,
            tema: "Fuerza"
        },
        {
            id: 49,
            contexto: "La inercia es la resistencia al cambio.",
            pregunta: "¿Qué propiedad física es una medida de la inercia?",
            opciones: [
                "A) El peso",
                "B) La masa",
                "C) La velocidad",
                "D) La aceleración",
                "E) El volumen"
            ],
            correcta: 1,
            explicacion: "La masa es la medida de la inercia de un cuerpo.",
            dificultad: 1,
            tema: "Principios de la inercia"
        },
        {
            id: 50,
            contexto: "La fuerza de fricción estática tiene un máximo.",
            pregunta: "Si μₑ = 0.3 y N = 100 N, ¿cuál es la máxima fricción estática?",
            opciones: [
                "A) 10 N",
                "B) 20 N",
                "C) 30 N",
                "D) 40 N",
                "E) 50 N"
            ],
            correcta: 2,
            explicacion: "fₑ max = μₑ·N = 0.3 × 100 = 30 N.",
            dificultad: 1,
            tema: "Tipos de fricción"
        },
        {
            id: 51,
            contexto: "La tensión es la fuerza en cuerdas.",
            pregunta: "Un objeto de 10 kg cuelga de una cuerda. La tensión en la cuerda es:",
            opciones: [
                "A) 0 N",
                "B) 49 N",
                "C) 98 N",
                "D) 196 N",
                "E) 10 N"
            ],
            correcta: 2,
            explicacion: "T = peso = m·g = 10 × 9.8 = 98 N.",
            dificultad: 1,
            tema: "Aplicaciones de leyes de Newton"
        },
        {
            id: 52,
            contexto: "La fuerza centrípeta causa movimiento circular.",
            pregunta: "¿Qué fuerza actúa como centrípeta para un satélite en órbita?",
            opciones: [
                "A) La tensión",
                "B) La fricción",
                "C) La gravedad",
                "D) La normal",
                "E) La fuerza elástica"
            ],
            correcta: 2,
            explicacion: "La fuerza gravitacional proporciona la fuerza centrípeta para mantener el satélite en órbita.",
            dificultad: 1,
            tema: "Fuerza"
        },
        {
            id: 53,
            contexto: "La ley de Hooke describe fuerzas elásticas.",
            pregunta: "Un resorte se estira 0.2 m con una fuerza de 40 N. Su constante k es:",
            opciones: [
                "A) 8 N/m",
                "B) 20 N/m",
                "C) 200 N/m",
                "D) 400 N/m",
                "E) 800 N/m"
            ],
            correcta: 2,
            explicacion: "F = k·x → k = F/x = 40/0.2 = 200 N/m.",
            dificultad: 1,
            tema: "Fuerza"
        },
        {
            id: 54,
            contexto: "El equilibrio requiere suma de fuerzas cero.",
            pregunta: "Tres fuerzas actúan sobre un punto: 30 N al este, 40 N al norte, y una desconocida para equilibrio. La fuerza equilibrante es:",
            opciones: [
                "A) 50 N a 53° al SO",
                "B) 50 N a 37° al SO",
                "C) 70 N al oeste",
                "D) 10 N al sur",
                "E) 50 N a 53° al NE"
            ],
            correcta: 0,
            explicacion: "La resultante es 50 N a 53° NE, la equilibrante es 50 N a 53° SO (sentido opuesto).",
            dificultad: 2,
            tema: "Diagramas de fuerzas"
        },
        {
            id: 55,
            contexto: "La masa es constante, el peso varía.",
            pregunta: "Un objeto tiene masa de 10 kg en la Tierra. En la Luna (g = 1.6 m/s²), su masa y peso son:",
            opciones: [
                "A) 10 kg, 98 N",
                "B) 10 kg, 16 N",
                "C) 1.6 kg, 16 N",
                "D) 1.6 kg, 98 N",
                "E) 10 kg, 1.6 N"
            ],
            correcta: 1,
            explicacion: "La masa es constante (10 kg). Peso lunar = 10 × 1.6 = 16 N.",
            dificultad: 1,
            tema: "Masa y peso"
        },

        // ============================================
        // 7.6-7.7. ENERGÍA, TRABAJO Y COLISIONES (Preguntas 56-70)
        // ============================================
        {
            id: 56,
            contexto: "La energía cinética depende de la velocidad.",
            pregunta: "¿Cuál es la energía cinética de un objeto de 4 kg a 5 m/s?",
            opciones: [
                "A) 10 J",
                "B) 20 J",
                "C) 30 J",
                "D) 40 J",
                "E) 50 J"
            ],
            correcta: 4,
            explicacion: "Ec = ½ m v² = 0.5 × 4 × 25 = 2 × 25 = 50 J.",
            dificultad: 1,
            tema: "Energía cinética"
        },
        {
            id: 57,
            contexto: "La energía potencial gravitatoria depende de la altura.",
            pregunta: "¿Qué energía potencial tiene un objeto de 3 kg a 8 m de altura? (g = 10 m/s²)",
            opciones: [
                "A) 120 J",
                "B) 240 J",
                "C) 360 J",
                "D) 480 J",
                "E) 600 J"
            ],
            correcta: 1,
            explicacion: "Ep = m·g·h = 3 × 10 × 8 = 240 J.",
            dificultad: 1,
            tema: "Energía potencial gravitatoria"
        },
        {
            id: 58,
            contexto: "La energía mecánica se conserva sin fricción.",
            pregunta: "Un objeto cae desde 45 m. ¿Con qué velocidad llega al suelo? (g = 10 m/s²)",
            opciones: [
                "A) 15 m/s",
                "B) 20 m/s",
                "C) 25 m/s",
                "D) 30 m/s",
                "E) 35 m/s"
            ],
            correcta: 3,
            explicacion: "v = √(2gh) = √(2×10×45) = √900 = 30 m/s.",
            dificultad: 1,
            tema: "Conservación de energía"
        },
        {
            id: 59,
            contexto: "El trabajo es fuerza por desplazamiento.",
            pregunta: "¿Qué trabajo realiza una fuerza de 80 N al desplazar un objeto 5 m en la dirección de la fuerza?",
            opciones: [
                "A) 16 J",
                "B) 40 J",
                "C) 80 J",
                "D) 400 J",
                "E) 800 J"
            ],
            correcta: 3,
            explicacion: "W = F·d = 80 × 5 = 400 J.",
            dificultad: 1,
            tema: "Energía"
        },
        {
            id: 60,
            contexto: "La potencia es trabajo por unidad de tiempo.",
            pregunta: "Una máquina realiza 1200 J de trabajo en 30 s. Su potencia es:",
            opciones: [
                "A) 10 W",
                "B) 20 W",
                "C) 30 W",
                "D) 40 W",
                "E) 50 W"
            ],
            correcta: 3,
            explicacion: "P = W/t = 1200/30 = 40 W.",
            dificultad: 1,
            tema: "Energía"
        },
        {
            id: 61,
            contexto: "La cantidad de movimiento se conserva en choques.",
            pregunta: "Un objeto de 2 kg a 3 m/s choca con otro de 3 kg en reposo y quedan unidos. La velocidad después del choque es:",
            opciones: [
                "A) 0.8 m/s",
                "B) 1.0 m/s",
                "C) 1.2 m/s",
                "D) 1.5 m/s",
                "E) 2.0 m/s"
            ],
            correcta: 2,
            explicacion: "m₁v₁ + m₂v₂ = (m₁+m₂)v → 2×3 + 3×0 = 5v → 6 = 5v → v = 1.2 m/s.",
            dificultad: 2,
            tema: "Conservación de cantidad de movimiento"
        },
        {
            id: 62,
            contexto: "El impulso cambia la cantidad de movimiento.",
            pregunta: "Un impulso de 50 N·s actúa sobre un objeto de 5 kg en reposo. Su velocidad final es:",
            opciones: [
                "A) 5 m/s",
                "B) 10 m/s",
                "C) 15 m/s",
                "D) 20 m/s",
                "E) 25 m/s"
            ],
            correcta: 1,
            explicacion: "I = Δp = m·Δv → 50 = 5·Δv → Δv = 10 m/s.",
            dificultad: 2,
            tema: "Conservación de cantidad de movimiento"
        },
        {
            id: 63,
            contexto: "En choques elásticos se conserva la energía cinética.",
            pregunta: "¿Qué caracteriza a un choque perfectamente elástico?",
            opciones: [
                "A) Los cuerpos quedan unidos",
                "B) Se conserva la energía cinética",
                "C) Se pierde toda la energía",
                "D) No se conserva el momento",
                "E) La velocidad final es cero"
            ],
            correcta: 1,
            explicacion: "En choques elásticos se conserva tanto el momento como la energía cinética.",
            dificultad: 1,
            tema: "Colisiones elásticas"
        },
        {
            id: 64,
            contexto: "El trabajo puede ser positivo o negativo.",
            pregunta: "¿Cuándo el trabajo de una fuerza es negativo?",
            opciones: [
                "A) Cuando la fuerza y el desplazamiento son perpendiculares",
                "B) Cuando la fuerza se opone al desplazamiento",
                "C) Siempre",
                "D) Cuando la fuerza es cero",
                "E) Cuando el desplazamiento es cero"
            ],
            correcta: 1,
            explicacion: "El trabajo es negativo cuando la fuerza tiene componente opuesta al desplazamiento (θ > 90°).",
            dificultad: 1,
            tema: "Energía"
        },
        {
            id: 65,
            contexto: "La energía potencial elástica es ½ kx².",
            pregunta: "Un resorte de constante 200 N/m se comprime 0.1 m. Su energía potencial elástica es:",
            opciones: [
                "A) 0.5 J",
                "B) 1 J",
                "C) 2 J",
                "D) 4 J",
                "E) 10 J"
            ],
            correcta: 1,
            explicacion: "Ep = ½ k x² = 0.5 × 200 × 0.01 = 100 × 0.01 = 1 J.",
            dificultad: 2,
            tema: "Energía"
        },
        {
            id: 66,
            contexto: "El teorema trabajo-energía relaciona trabajo y energía cinética.",
            pregunta: "El trabajo neto sobre un cuerpo es igual a:",
            opciones: [
                "A) Su energía potencial",
                "B) Su energía mecánica",
                "C) El cambio en su energía cinética",
                "D) Su cantidad de movimiento",
                "E) Su masa por aceleración"
            ],
            correcta: 2,
            explicacion: "Teorema trabajo-energía: W neto = ΔEc.",
            dificultad: 1,
            tema: "Energía"
        },
        {
            id: 67,
            contexto: "La potencia también puede expresarse como F·v.",
            pregunta: "Un motor aplica una fuerza de 200 N a un auto que se mueve a 15 m/s. La potencia desarrollada es:",
            opciones: [
                "A) 300 W",
                "B) 1000 W",
                "C) 1500 W",
                "D) 2000 W",
                "E) 3000 W"
            ],
            correcta: 3,
            explicacion: "P = F·v = 200 × 15 = 3000 W.",
            dificultad: 1,
            tema: "Energía"
        },
        {
            id: 68,
            contexto: "La energía se mide en joules (J).",
            pregunta: "¿Cuál es la unidad de energía en el SI?",
            opciones: [
                "A) Watt",
                "B) Newton",
                "C) Joule",
                "D) Pascal",
                "E) Voltio"
            ],
            correcta: 2,
            explicacion: "El Joule (J) es la unidad de energía, trabajo y calor.",
            dificultad: 1,
            tema: "Energía"
        },
        {
            id: 69,
            contexto: "La conservación de energía resuelve problemas.",
            pregunta: "Un objeto de 2 kg se lanza hacia arriba con 20 m/s. ¿Qué altura máxima alcanza por conservación de energía? (g = 10 m/s²)",
            opciones: [
                "A) 10 m",
                "B) 20 m",
                "C) 30 m",
                "D) 40 m",
                "E) 50 m"
            ],
            correcta: 1,
            explicacion: "½ m v² = m g h → h = v²/(2g) = 400/20 = 20 m.",
            dificultad: 1,
            tema: "Conservación de energía"
        },
        {
            id: 70,
            contexto: "El coeficiente de restitución relaciona velocidades.",
            pregunta: "En un choque elástico, el coeficiente de restitución e es:",
            opciones: [
                "A) 0",
                "B) 0.5",
                "C) 1",
                "D) 2",
                "E) Infinito"
            ],
            correcta: 2,
            explicacion: "En choques perfectamente elásticos, e = 1.",
            dificultad: 1,
            tema: "Colisiones"
        },

        // ============================================
        // 7.8. CALOR Y TERMODINÁMICA (Preguntas 71-85)
        // ============================================
        {
            id: 71,
            contexto: "Calor y temperatura son conceptos diferentes.",
            pregunta: "¿Qué es la temperatura?",
            opciones: [
                "A) La energía total de un cuerpo",
                "B) La medida de la energía cinética promedio de las moléculas",
                "C) El calor contenido en un cuerpo",
                "D) La energía en tránsito",
                "E) El flujo de energía"
            ],
            correcta: 1,
            explicacion: "La temperatura mide la energía cinética promedio de las partículas.",
            dificultad: 1,
            tema: "Calor y temperatura"
        },
        {
            id: 72,
            contexto: "La conducción térmica ocurre en sólidos.",
            pregunta: "¿En qué medio es mejor la conducción térmica?",
            opciones: [
                "A) Gases",
                "B) Líquidos",
                "C) Sólidos metálicos",
                "D) Vacío",
                "E) Plásticos"
            ],
            correcta: 2,
            explicacion: "Los metales son buenos conductores por sus electrones libres.",
            dificultad: 1,
            tema: "Transmisión del calor"
        },
        {
            id: 73,
            contexto: "La convección ocurre en fluidos.",
            pregunta: "La transferencia de calor por movimiento de fluidos se llama:",
            opciones: [
                "A) Conducción",
                "B) Convección",
                "C) Radiación",
                "D) Calentamiento",
                "E) Enfriamiento"
            ],
            correcta: 1,
            explicacion: "Convección es la transferencia por movimiento de masas de fluido.",
            dificultad: 1,
            tema: "Transmisión del calor"
        },
        {
            id: 74,
            contexto: "La radiación no necesita medio material.",
            pregunta: "¿Cómo llega el calor del Sol a la Tierra?",
            opciones: [
                "A) Conducción",
                "B) Convección",
                "C) Radiación",
                "D) Convección y radiación",
                "E) Conducción y convección"
            ],
            correcta: 2,
            explicacion: "La radiación electromagnética viaja por el vacío.",
            dificultad: 1,
            tema: "Transmisión del calor"
        },
        {
            id: 75,
            contexto: "Las variables termodinámicas describen el estado.",
            pregunta: "¿Cuáles son variables termodinámicas?",
            opciones: [
                "A) Presión, volumen, temperatura",
                "B) Fuerza, masa, aceleración",
                "C) Velocidad, tiempo, distancia",
                "D) Carga, campo, potencial",
                "E) Resistencia, corriente, voltaje"
            ],
            correcta: 0,
            explicacion: "Las variables de estado son presión (P), volumen (V) y temperatura (T).",
            dificultad: 1,
            tema: "Variables termodinámicas"
        },
        {
            id: 76,
            contexto: "La primera ley de termodinámica conserva energía.",
            pregunta: "La primera ley de la termodinámica establece:",
            opciones: [
                "A) La entropía siempre aumenta",
                "B) ΔU = Q - W",
                "C) No se puede llegar al cero absoluto",
                "D) El calor fluye de caliente a frío",
                "E) PV = nRT"
            ],
            correcta: 1,
            explicacion: "Primera ley: ΔU = Q - W (cambio de energía interna = calor añadido menos trabajo realizado).",
            dificultad: 2,
            tema: "Primera ley de termodinámica"
        },
        {
            id: 77,
            contexto: "La segunda ley habla de entropía.",
            pregunta: "¿Qué afirma la segunda ley de la termodinámica?",
            opciones: [
                "A) La energía se conserva",
                "B) La entropía del universo siempre aumenta",
                "C) El calor siempre fluye de frío a caliente",
                "D) El trabajo siempre es posible",
                "E) La temperatura es constante"
            ],
            correcta: 1,
            explicacion: "Segunda ley: en procesos irreversibles, la entropía del universo aumenta.",
            dificultad: 2,
            tema: "Segunda ley de termodinámica"
        },
        {
            id: 78,
            contexto: "La ley cero define equilibrio térmico.",
            pregunta: "¿Qué establece la ley cero de la termodinámica?",
            opciones: [
                "A) Si A está en equilibrio con B y B con C, entonces A y C están en equilibrio",
                "B) La energía se conserva",
                "C) La entropía aumenta",
                "D) No se puede llegar al cero absoluto",
                "E) El calor fluye de caliente a frío"
            ],
            correcta: 0,
            explicacion: "La ley cero permite definir la temperatura: el equilibrio térmico es transitivo.",
            dificultad: 2,
            tema: "Leyes de termodinámica"
        },
        {
            id: 79,
            contexto: "La presión es fuerza por unidad de área.",
            pregunta: "¿Qué presión ejerce un peso de 500 N sobre un área de 2 m²?",
            opciones: [
                "A) 100 Pa",
                "B) 150 Pa",
                "C) 200 Pa",
                "D) 250 Pa",
                "E) 300 Pa"
            ],
            correcta: 3,
            explicacion: "P = F/A = 500/2 = 250 Pa.",
            dificultad: 1,
            tema: "Variables termodinámicas"
        },
        {
            id: 80,
            contexto: "La densidad es masa/volumen.",
            pregunta: "Un objeto de 2 kg ocupa 0.5 m³. Su densidad es:",
            opciones: [
                "A) 1 kg/m³",
                "B) 2 kg/m³",
                "C) 3 kg/m³",
                "D) 4 kg/m³",
                "E) 5 kg/m³"
            ],
            correcta: 3,
            explicacion: "ρ = m/V = 2/0.5 = 4 kg/m³.",
            dificultad: 1,
            tema: "Variables termodinámicas"
        },
        {
            id: 81,
            contexto: "La dilatación térmica aumenta las dimensiones.",
            pregunta: "La fórmula de dilatación lineal es:",
            opciones: [
                "A) ΔL = α L₀ ΔT",
                "B) ΔL = α L₀ / ΔT",
                "C) ΔL = α ΔT / L₀",
                "D) ΔL = L₀ / (α ΔT)",
                "E) ΔL = α L₀ T"
            ],
            correcta: 0,
            explicacion: "Dilatación lineal: ΔL = α L₀ ΔT, donde α es coeficiente de dilatación.",
            dificultad: 1,
            tema: "Calor y temperatura"
        },
        {
            id: 82,
            contexto: "La capacidad calorífica específica es característica.",
            pregunta: "¿Qué significa que el agua tenga alta capacidad calorífica específica?",
            opciones: [
                "A) Se calienta fácilmente",
                "B) Se enfría fácilmente",
                "C) Necesita mucho calor para elevar su temperatura",
                "D) No cambia de temperatura",
                "E) Hierve a baja temperatura"
            ],
            correcta: 2,
            explicacion: "Alta capacidad calorífica significa que se requiere mucho calor para aumentar su temperatura.",
            dificultad: 1,
            tema: "Calor y temperatura"
        },
        {
            id: 83,
            contexto: "La ecuación de los gases ideales es PV = nRT.",
            pregunta: "En la ecuación de gases ideales, R es:",
            opciones: [
                "A) La presión",
                "B) El volumen",
                "C) La constante universal de los gases",
                "D) La temperatura",
                "E) El número de moles"
            ],
            correcta: 2,
            explicacion: "R es la constante universal de los gases (8.314 J/mol·K).",
            dificultad: 1,
            tema: "Variables termodinámicas"
        },
        {
            id: 84,
            contexto: "Un proceso isotérmico ocurre a temperatura constante.",
            pregunta: "En un proceso isotérmico, ¿qué permanece constante?",
            opciones: [
                "A) Presión",
                "B) Volumen",
                "C) Temperatura",
                "D) Energía interna",
                "E) Entropía"
            ],
            correcta: 2,
            explicacion: "Isotérmico significa temperatura constante.",
            dificultad: 1,
            tema: "Leyes de termodinámica"
        },
        {
            id: 85,
            contexto: "Un proceso adiabático no transfiere calor.",
            pregunta: "En un proceso adiabático, Q = 0. Esto significa que:",
            opciones: [
                "A) La temperatura es constante",
                "B) No hay transferencia de calor",
                "C) La presión es constante",
                "D) El volumen es constante",
                "E) La entropía es constante"
            ],
            correcta: 1,
            explicacion: "Adiabático significa que no hay intercambio de calor con el entorno.",
            dificultad: 1,
            tema: "Leyes de termodinámica"
        },

        // ============================================
        // 7.9-7.11. ELECTROSTÁTICA, ELECTRODINÁMICA, ÓPTICA (Preguntas 86-100)
        // ============================================
        {
            id: 86,
            contexto: "La carga eléctrica puede ser positiva o negativa.",
            pregunta: "¿Cuál es la unidad de carga eléctrica en el SI?",
            opciones: [
                "A) Amperio",
                "B) Voltio",
                "C) Coulomb",
                "D) Ohmio",
                "E) Faradio"
            ],
            correcta: 2,
            explicacion: "El Coulomb (C) es la unidad de carga eléctrica.",
            dificultad: 1,
            tema: "Carga eléctrica"
        },
        {
            id: 87,
            contexto: "La ley de Coulomb describe fuerza entre cargas.",
            pregunta: "Dos cargas de 2 μC y 3 μC a 0.1 m se atraen con fuerza de: (k = 9×10⁹ N·m²/C²)",
            opciones: [
                "A) 0.54 N",
                "B) 5.4 N",
                "C) 54 N",
                "D) 540 N",
                "E) 5400 N"
            ],
            correcta: 1,
            explicacion: "F = k·q₁q₂/r² = 9×10⁹ × (2×10⁻⁶)(3×10⁻⁶)/(0.1)² = 9×10⁹ × 6×10⁻¹²/0.01 = 54×10⁻³/0.01 = 5.4 N.",
            dificultad: 2,
            tema: "Ley de Coulomb"
        },
        {
            id: 88,
            contexto: "La ley de Ohm relaciona voltaje, corriente y resistencia.",
            pregunta: "¿Cuál es la ley de Ohm?",
            opciones: [
                "A) V = I·R",
                "B) P = V·I",
                "C) Q = I²·R·t",
                "D) F = k·q₁q₂/r²",
                "E) E = m·c²"
            ],
            correcta: 0,
            explicacion: "Ley de Ohm: V = I·R (voltaje = corriente × resistencia).",
            dificultad: 1,
            tema: "Resistencia eléctrica"
        },
        {
            id: 89,
            contexto: "La potencia eléctrica es P = V·I.",
            pregunta: "¿Cuál es la potencia de un foco de 120 V que consume 2 A?",
            opciones: [
                "A) 60 W",
                "B) 120 W",
                "C) 180 W",
                "D) 240 W",
                "E) 300 W"
            ],
            correcta: 3,
            explicacion: "P = V·I = 120 × 2 = 240 W.",
            dificultad: 1,
            tema: "Electrodinámica"
        },
        {
            id: 90,
            contexto: "La resistencia se mide en ohmios.",
            pregunta: "La resistencia de un conductor depende de:",
            opciones: [
                "A) Voltaje y corriente",
                "B) Longitud, área y resistividad",
                "C) Solo del material",
                "D) Solo de la temperatura",
                "E) De la potencia"
            ],
            correcta: 1,
            explicacion: "R = ρ·L/A (resistividad × longitud / área transversal).",
            dificultad: 1,
            tema: "Resistencia eléctrica"
        },
        {
            id: 91,
            contexto: "Los circuitos pueden ser serie o paralelo.",
            pregunta: "En un circuito serie, la corriente:",
            opciones: [
                "A) Es diferente en cada resistencia",
                "B) Es la misma en todas las resistencias",
                "C) Se divide",
                "D) Es cero",
                "E) Depende del voltaje"
            ],
            correcta: 1,
            explicacion: "En serie, la corriente es la misma en todos los elementos.",
            dificultad: 1,
            tema: "Electrodinámica"
        },
        {
            id: 92,
            contexto: "En paralelo, el voltaje es el mismo.",
            pregunta: "Dos resistencias de 6 Ω y 3 Ω en paralelo equivalen a:",
            opciones: [
                "A) 2 Ω",
                "B) 3 Ω",
                "C) 4 Ω",
                "D) 6 Ω",
                "E) 9 Ω"
            ],
            correcta: 0,
            explicacion: "1/Req = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 → Req = 2 Ω.",
            dificultad: 2,
            tema: "Electrodinámica"
        },
        {
            id: 93,
            contexto: "El campo magnético es creado por cargas en movimiento.",
            pregunta: "¿Qué genera un campo magnético?",
            opciones: [
                "A) Cargas en reposo",
                "B) Cargas en movimiento (corrientes)",
                "C) Campos eléctricos estáticos",
                "D) Materiales aislantes",
                "E) Temperatura"
            ],
            correcta: 1,
            explicacion: "Las corrientes eléctricas (cargas en movimiento) generan campos magnéticos.",
            dificultad: 1,
            tema: "Campo magnético"
        },
        {
            id: 94,
            contexto: "La reflexión de la luz cumple leyes específicas.",
            pregunta: "En la reflexión, el ángulo de incidencia es:",
            opciones: [
                "A) Mayor que el de reflexión",
                "B) Menor que el de reflexión",
                "C) Igual al de reflexión",
                "D) Complementario",
                "E) Suplementario"
            ],
            correcta: 2,
            explicacion: "Ley de reflexión: θᵢ = θᵣ.",
            dificultad: 1,
            tema: "Reflexión de la luz"
        },
        {
            id: 95,
            contexto: "La refracción cambia la dirección de la luz.",
            pregunta: "¿Qué ley describe la refracción?",
            opciones: [
                "A) Ley de Snell",
                "B) Ley de Ohm",
                "C) Ley de Coulomb",
                "D) Ley de Gauss",
                "E) Ley de Faraday"
            ],
            correcta: 0,
            explicacion: "Ley de Snell: n₁·senθ₁ = n₂·senθ₂.",
            dificultad: 1,
            tema: "Refracción de la luz"
        },
        {
            id: 96,
            contexto: "Las ondas pueden ser longitudinales o transversales.",
            pregunta: "¿Qué tipo de onda es la luz?",
            opciones: [
                "A) Longitudinal",
                "B) Transversal",
                "C) Mecánica",
                "D) Sonora",
                "E) De presión"
            ],
            correcta: 1,
            explicacion: "La luz es una onda electromagnética transversal.",
            dificultad: 1,
            tema: "Ondas longitudinales y transversales"
        },
        {
            id: 97,
            contexto: "La velocidad de la luz en el vacío es constante.",
            pregunta: "La velocidad de la luz en el vacío es aproximadamente:",
            opciones: [
                "A) 3×10⁵ m/s",
                "B) 3×10⁶ m/s",
                "C) 3×10⁷ m/s",
                "D) 3×10⁸ m/s",
                "E) 3×10⁹ m/s"
            ],
            correcta: 3,
            explicacion: "c = 3×10⁸ m/s = 300,000 km/s.",
            dificultad: 1,
            tema: "Óptica"
        },
        {
            id: 98,
            contexto: "El sonido es una onda mecánica.",
            pregunta: "El sonido es una onda:",
            opciones: [
                "A) Electromagnética",
                "B) Transversal",
                "C) Longitudinal",
                "D) De radio",
                "E) Luminosa"
            ],
            correcta: 2,
            explicacion: "El sonido es una onda mecánica longitudinal (vibración en dirección de propagación).",
            dificultad: 1,
            tema: "Acústica"
        },
        {
            id: 99,
            contexto: "La frecuencia determina el tono.",
            pregunta: "¿Qué característica del sonido determina la frecuencia?",
            opciones: [
                "A) Intensidad (volumen)",
                "B) Tono (altura)",
                "C) Timbre",
                "D) Velocidad",
                "E) Amplitud"
            ],
            correcta: 1,
            explicacion: "La frecuencia determina el tono: alta frecuencia = sonido agudo.",
            dificultad: 1,
            tema: "Acústica"
        },
        {
            id: 100,
            contexto: "La velocidad del sonido depende del medio.",
            pregunta: "¿En qué medio viaja más rápido el sonido?",
            opciones: [
                "A) Aire",
                "B) Agua",
                "C) Acero",
                "D) Vacío",
                "E) Madera"
            ],
            correcta: 2,
            explicacion: "El sonido viaja más rápido en sólidos porque las moléculas están más cercanas.",
            dificultad: 1,
            tema: "Acústica"
        }
    ];
    
    console.log("✅ TOTAL:", DATOS_ACUDE.preguntas.fisica.length, "preguntas de física general cargadas correctamente");
    console.log("📊 Distribución por temas:");
    console.log("- La medida en física: 10 preguntas");
    console.log("- Vectores: 10 preguntas");
    console.log("- Cinemática: 20 preguntas");
    console.log("- Dinámica y leyes de Newton: 15 preguntas");
    console.log("- Energía, trabajo y colisiones: 15 preguntas");
    console.log("- Calor y termodinámica: 15 preguntas");
    console.log("- Electrostática, electrodinámica, óptica: 15 preguntas");
}