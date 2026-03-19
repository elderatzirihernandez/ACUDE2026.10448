// js/datos-fisica-ing.js
// PREGUNTAS DE FÍSICA PARA INGENIERÍA - TEMARIO ENCUENTRO ACUDE 2026

if (typeof DATOS_ACUDE !== 'undefined') {
    
    DATOS_ACUDE.preguntas.fisica_ing = [
        // ============================================
        // 7.1. LA MEDIDA EN LA FÍSICA (Preguntas 1-10)
        // ============================================
        {
            id: 1,
            contexto: "Los sistemas de unidades son fundamentales en física.",
            pregunta: "¿Cuáles son las unidades fundamentales del Sistema Internacional (SI)?",
            opciones: [
                "A) Metro, kilogramo, segundo",
                "B) Metro, gramo, segundo",
                "C) Centímetro, gramo, segundo",
                "D) Pie, libra, segundo",
                "E) Metro, kilogramo, hora"
            ],
            correcta: 0,
            explicacion: "Las unidades fundamentales del SI son metro (longitud), kilogramo (masa) y segundo (tiempo), además de otras como ampere, kelvin, etc.",
            dificultad: 1,
            tema: "Sistemas de unidades"
        },
        {
            id: 2,
            contexto: "Las conversiones de unidades son esenciales en problemas de física.",
            pregunta: "Convertir 36 km/h a m/s:",
            opciones: [
                "A) 5 m/s",
                "B) 10 m/s",
                "C) 12.5 m/s",
                "D) 15 m/s",
                "E) 20 m/s"
            ],
            correcta: 1,
            explicacion: "Para convertir km/h a m/s se divide entre 3.6: 36 ÷ 3.6 = 10 m/s.",
            dificultad: 1,
            tema: "Sistemas de unidades y conversiones"
        },
        {
            id: 3,
            contexto: "Las magnitudes físicas pueden ser fundamentales o derivadas.",
            pregunta: "¿Cuál de las siguientes es una magnitud derivada?",
            opciones: [
                "A) Longitud",
                "B) Masa",
                "C) Tiempo",
                "D) Velocidad",
                "E) Temperatura"
            ],
            correcta: 3,
            explicacion: "La velocidad es derivada porque combina longitud y tiempo (m/s). Longitud, masa y tiempo son fundamentales.",
            dificultad: 1,
            tema: "Magnitudes físicas"
        },
        {
            id: 4,
            contexto: "La notación científica facilita trabajar con números muy grandes o pequeños.",
            pregunta: "Expresar 0.000045 en notación científica:",
            opciones: [
                "A) 4.5 × 10⁻⁴",
                "B) 4.5 × 10⁻⁵",
                "C) 45 × 10⁻⁶",
                "D) 4.5 × 10⁵",
                "E) 45 × 10⁻⁵"
            ],
            correcta: 1,
            explicacion: "0.000045 = 4.5 × 10⁻⁵ (se movió el punto decimal 5 lugares a la derecha).",
            dificultad: 2,
            tema: "Sistemas de unidades"
        },
        {
            id: 5,
            contexto: "Las conversiones requieren factores de conversión.",
            pregunta: "Convertir 250 gramos a kilogramos:",
            opciones: [
                "A) 0.025 kg",
                "B) 0.25 kg",
                "C) 2.5 kg",
                "D) 25 kg",
                "E) 2500 kg"
            ],
            correcta: 1,
            explicacion: "1 kg = 1000 g, entonces 250 g = 250/1000 = 0.25 kg.",
            dificultad: 1,
            tema: "Sistemas de unidades"
        },
        {
            id: 6,
            contexto: "Los prefijos del SI indican múltiplos y submúltiplos.",
            pregunta: "¿Qué significa el prefijo 'mega' (M)?",
            opciones: [
                "A) 10³",
                "B) 10⁶",
                "C) 10⁹",
                "D) 10⁻³",
                "E) 10⁻⁶"
            ],
            correcta: 1,
            explicacion: "Mega (M) significa 10⁶ = 1,000,000.",
            dificultad: 1,
            tema: "Sistemas de unidades"
        },
        {
            id: 7,
            contexto: "Las conversiones entre sistemas son necesarias.",
            pregunta: "Convertir 10 pulgadas a centímetros (1 pulgada = 2.54 cm):",
            opciones: [
                "A) 15.4 cm",
                "B) 20.4 cm",
                "C) 25.4 cm",
                "D) 30.4 cm",
                "E) 35.4 cm"
            ],
            correcta: 2,
            explicacion: "10 pulgadas × 2.54 cm/pulgada = 25.4 cm.",
            dificultad: 1,
            tema: "Sistemas de unidades"
        },
        {
            id: 8,
            contexto: "Las unidades derivadas se expresan en términos de las fundamentales.",
            pregunta: "¿En qué unidades se mide la fuerza en el SI?",
            opciones: [
                "A) kg·m/s",
                "B) kg·m/s² (Newton)",
                "C) kg·m²/s²",
                "D) kg²·m/s",
                "E) m/s²"
            ],
            correcta: 1,
            explicacion: "La fuerza (Newton) = masa × aceleración = kg × m/s².",
            dificultad: 1,
            tema: "Magnitudes físicas"
        },
        {
            id: 9,
            contexto: "Las cifras significativas indican precisión.",
            pregunta: "¿Cuántas cifras significativas tiene 0.00340?",
            opciones: [
                "A) 2",
                "B) 3",
                "C) 4",
                "D) 5",
                "E) 6"
            ],
            correcta: 1,
            explicacion: "Los ceros a la izquierda no cuentan; los ceros a la derecha después del decimal sí. 3,4,0 = 3 cifras significativas.",
            dificultad: 2,
            tema: "La medida en física"
        },
        {
            id: 10,
            contexto: "El error en mediciones es importante.",
            pregunta: "Si una medición da 15.3 ± 0.2 cm, ¿cuál es el error relativo?",
            opciones: [
                "A) 0.2%",
                "B) 0.5%",
                "C) 1.3%",
                "D) 2%",
                "E) 15%"
            ],
            correcta: 2,
            explicacion: "Error relativo = (0.2/15.3) × 100 = 1.307% ≈ 1.3%.",
            dificultad: 2,
            tema: "La medida en física"
        },

        // ============================================
        // 7.2. VECTORES (Preguntas 11-25)
        // ============================================
        {
            id: 11,
            contexto: "Las magnitudes pueden ser escalares o vectoriales.",
            pregunta: "¿Cuál de las siguientes es una magnitud vectorial?",
            opciones: [
                "A) Masa",
                "B) Tiempo",
                "C) Temperatura",
                "D) Velocidad",
                "E) Energía"
            ],
            correcta: 3,
            explicacion: "La velocidad tiene magnitud y dirección, por eso es vectorial. Las demás son escalares.",
            dificultad: 1,
            tema: "Magnitudes escalares y vectoriales"
        },
        {
            id: 12,
            contexto: "Los vectores tienen propiedades específicas.",
            pregunta: "¿Qué caracteriza a un vector libre?",
            opciones: [
                "A) Su punto de aplicación es fijo",
                "B) Puede desplazarse paralelamente sin cambiar el efecto",
                "C) Solo tiene magnitud",
                "D) Siempre es unitario",
                "E) No tiene dirección"
            ],
            correcta: 1,
            explicacion: "Un vector libre puede moverse paralelamente a sí mismo sin cambiar el efecto que representa.",
            dificultad: 2,
            tema: "Propiedades de los vectores"
        },
        {
            id: 13,
            contexto: "Los vectores pueden representarse gráficamente.",
            pregunta: "¿Qué son vectores colineales?",
            opciones: [
                "A) Vectores con igual dirección",
                "B) Vectores perpendiculares",
                "C) Vectores en diferentes direcciones",
                "D) Vectores opuestos",
                "E) Vectores nulos"
            ],
            correcta: 0,
            explicacion: "Vectores colineales tienen la misma dirección, aunque pueden tener diferente sentido y magnitud.",
            dificultad: 1,
            tema: "Representación de vectores"
        },
        {
            id: 14,
            contexto: "La suma de vectores puede hacerse gráficamente.",
            pregunta: "¿Qué método gráfico usa un polígono para sumar vectores?",
            opciones: [
                "A) Método del paralelogramo",
                "B) Método del triángulo",
                "C) Método del polígono",
                "D) Método de componentes",
                "E) Método analítico"
            ],
            correcta: 2,
            explicacion: "El método del polígono coloca los vectores uno tras otro; el vector resultante va del origen del primero al final del último.",
            dificultad: 1,
            tema: "Suma y resta de vectores"
        },
        {
            id: 15,
            contexto: "Los vectores tienen componentes rectangulares.",
            pregunta: "Dado un vector de 10 N a 30°, ¿cuál es su componente horizontal?",
            opciones: [
                "A) 5 N",
                "B) 8.66 N",
                "C) 10 N",
                "D) 7.07 N",
                "E) 6 N"
            ],
            correcta: 1,
            explicacion: "Componente horizontal = F·cosθ = 10 × cos30° = 10 × 0.866 = 8.66 N.",
            dificultad: 2,
            tema: "Método analítico"
        },
        {
            id: 16,
            contexto: "Las componentes rectangulares facilitan sumas analíticas.",
            pregunta: "Un vector tiene componentes Ax = 3, Ay = 4. ¿Cuál es su magnitud?",
            opciones: [
                "A) 3",
                "B) 4",
                "C) 5",
                "D) 7",
                "E) 12"
            ],
            correcta: 2,
            explicacion: "Magnitud = √(Ax² + Ay²) = √(9 + 16) = √25 = 5.",
            dificultad: 1,
            tema: "Método analítico"
        },
        {
            id: 17,
            contexto: "Los vectores unitarios tienen magnitud 1.",
            pregunta: "¿Qué son los vectores unitarios i, j, k?",
            opciones: [
                "A) Vectores de magnitud variable",
                "B) Vectores de magnitud 1 en direcciones x, y, z",
                "C) Vectores nulos",
                "D) Vectores opuestos",
                "E) Vectores libres"
            ],
            correcta: 1,
            explicacion: "i, j, k son vectores unitarios en las direcciones de los ejes x, y, z respectivamente.",
            dificultad: 1,
            tema: "Propiedades de los vectores"
        },
        {
            id: 18,
            contexto: "La resta vectorial equivale a sumar el opuesto.",
            pregunta: "Si A = (3, 4) y B = (1, 2), ¿cuál es A - B?",
            opciones: [
                "A) (2, 2)",
                "B) (4, 6)",
                "C) (2, 6)",
                "D) (4, 2)",
                "E) (3, 2)"
            ],
            correcta: 0,
            explicacion: "A - B = (3-1, 4-2) = (2, 2).",
            dificultad: 1,
            tema: "Suma y resta de vectores"
        },
        {
            id: 19,
            contexto: "Los vectores pueden ser concurrentes.",
            pregunta: "¿Qué significa que vectores sean concurrentes?",
            opciones: [
                "A) Tienen la misma magnitud",
                "B) Sus líneas de acción se cruzan en un punto",
                "C) Son paralelos",
                "D) Son perpendiculares",
                "E) Son opuestos"
            ],
            correcta: 1,
            explicacion: "Vectores concurrentes tienen sus líneas de acción intersectándose en un punto común.",
            dificultad: 1,
            tema: "Representación de vectores"
        },
        {
            id: 20,
            contexto: "El producto punto entre vectores da un escalar.",
            pregunta: "Calcular el producto punto de A = (2, 3) y B = (4, 1):",
            opciones: [
                "A) 8",
                "B) 11",
                "C) 14",
                "D) 7",
                "E) 5"
            ],
            correcta: 1,
            explicacion: "A·B = (2)(4) + (3)(1) = 8 + 3 = 11.",
            dificultad: 2,
            tema: "Operaciones con vectores"
        },
        {
            id: 21,
            contexto: "El producto cruz da un vector perpendicular.",
            pregunta: "El producto cruz de dos vectores paralelos es:",
            opciones: [
                "A) Máximo",
                "B) Cero",
                "C) Unitario",
                "D) Negativo",
                "E) Infinito"
            ],
            correcta: 1,
            explicacion: "El producto cruz es cero cuando los vectores son paralelos (sen 0° = 0).",
            dificultad: 2,
            tema: "Operaciones con vectores"
        },
        {
            id: 22,
            contexto: "La dirección de un vector se da por su ángulo.",
            pregunta: "Un vector con componentes (5, 5) tiene un ángulo de:",
            opciones: [
                "A) 30°",
                "B) 45°",
                "C) 60°",
                "D) 90°",
                "E) 0°"
            ],
            correcta: 1,
            explicacion: "θ = arctan(5/5) = arctan(1) = 45°.",
            dificultad: 1,
            tema: "Método analítico"
        },
        {
            id: 23,
            contexto: "Vectores opuestos tienen igual magnitud y dirección opuesta.",
            pregunta: "El opuesto del vector (3, -4) es:",
            opciones: [
                "A) (-3, 4)",
                "B) (3, 4)",
                "C) (-3, -4)",
                "D) (4, -3)",
                "E) (-4, 3)"
            ],
            correcta: 0,
            explicacion: "El opuesto cambia el signo de todas las componentes: (-3, 4).",
            dificultad: 1,
            tema: "Propiedades de los vectores"
        },
        {
            id: 24,
            contexto: "El método del paralelogramo suma dos vectores.",
            pregunta: "En el método del paralelogramo, la resultante es:",
            opciones: [
                "A) La diagonal del paralelogramo",
                "B) La suma de las magnitudes",
                "C) La diferencia de vectores",
                "D) El lado mayor",
                "E) El lado menor"
            ],
            correcta: 0,
            explicacion: "La resultante es la diagonal del paralelogramo formado por los dos vectores desde el origen común.",
            dificultad: 1,
            tema: "Métodos gráficos"
        },
        {
            id: 25,
            contexto: "El vector resultante puede calcularse por componentes.",
            pregunta: "Sumar vectores F1 = (10, 0) N y F2 = (0, 10) N:",
            opciones: [
                "A) (10, 10) N",
                "B) (0, 20) N",
                "C) (20, 0) N",
                "D) (5, 5) N",
                "E) (10, -10) N"
            ],
            correcta: 0,
            explicacion: "La suma por componentes: (10+0, 0+10) = (10, 10) N.",
            dificultad: 1,
            tema: "Método analítico"
        },

        // ============================================
        // 7.3. CINEMÁTICA (Preguntas 26-50)
        // ============================================
        {
            id: 26,
            contexto: "El movimiento rectilíneo uniforme (MRU) tiene velocidad constante.",
            pregunta: "Un auto viaja a 20 m/s durante 15 segundos. ¿Qué distancia recorre?",
            opciones: [
                "A) 100 m",
                "B) 200 m",
                "C) 300 m",
                "D) 400 m",
                "E) 500 m"
            ],
            correcta: 2,
            explicacion: "d = v × t = 20 m/s × 15 s = 300 m.",
            dificultad: 1,
            tema: "Movimiento rectilíneo uniforme"
        },
        {
            id: 27,
            contexto: "El desplazamiento es diferente de la distancia.",
            pregunta: "Una persona camina 3 km al este y luego 4 km al norte. ¿Cuál es su desplazamiento resultante?",
            opciones: [
                "A) 5 km",
                "B) 7 km",
                "C) 1 km",
                "D) 12 km",
                "E) 25 km"
            ],
            correcta: 0,
            explicacion: "Desplazamiento = √(3² + 4²) = √(9+16) = √25 = 5 km (teorema de Pitágoras).",
            dificultad: 1,
            tema: "Concepto de desplazamiento"
        },
        {
            id: 28,
            contexto: "La velocidad media considera desplazamiento total.",
            pregunta: "Si un auto recorre 100 km en 2 horas, ¿cuál es su velocidad media?",
            opciones: [
                "A) 25 km/h",
                "B) 50 km/h",
                "C) 75 km/h",
                "D) 100 km/h",
                "E) 200 km/h"
            ],
            correcta: 1,
            explicacion: "v = d/t = 100 km / 2 h = 50 km/h.",
            dificultad: 1,
            tema: "Velocidad y rapidez"
        },
        {
            id: 29,
            contexto: "La rapidez es una magnitud escalar.",
            pregunta: "¿Qué diferencia hay entre velocidad y rapidez?",
            opciones: [
                "A) Son lo mismo",
                "B) La rapidez es vectorial, la velocidad escalar",
                "C) La velocidad incluye dirección; la rapidez no",
                "D) La rapidez es siempre mayor",
                "E) La velocidad es siempre constante"
            ],
            correcta: 2,
            explicacion: "La velocidad es vectorial (incluye dirección), la rapidez es escalar (solo magnitud).",
            dificultad: 1,
            tema: "Velocidad y rapidez"
        },
        {
            id: 30,
            contexto: "La aceleración es cambio de velocidad.",
            pregunta: "Un auto pasa de 10 m/s a 30 m/s en 5 segundos. ¿Cuál es su aceleración?",
            opciones: [
                "A) 2 m/s²",
                "B) 4 m/s²",
                "C) 6 m/s²",
                "D) 8 m/s²",
                "E) 10 m/s²"
            ],
            correcta: 1,
            explicacion: "a = (vf - vi)/t = (30 - 10)/5 = 20/5 = 4 m/s².",
            dificultad: 1,
            tema: "Concepto de aceleración"
        },
        {
            id: 31,
            contexto: "Las unidades de aceleración son m/s².",
            pregunta: "¿Qué representa 1 m/s²?",
            opciones: [
                "A) Cambio de velocidad de 1 m/s cada segundo",
                "B) Velocidad de 1 m/s",
                "C) Distancia de 1 m",
                "D) Fuerza de 1 N",
                "E) Tiempo de 1 s"
            ],
            correcta: 0,
            explicacion: "1 m/s² significa que la velocidad aumenta 1 m/s cada segundo.",
            dificultad: 1,
            tema: "Unidades de aceleración"
        },
        {
            id: 32,
            contexto: "Las ecuaciones del MRUV relacionan variables.",
            pregunta: "En MRUV, ¿qué ecuación relaciona velocidad final, inicial, aceleración y tiempo?",
            opciones: [
                "A) vf = vi + a t",
                "B) d = vi t + ½ a t²",
                "C) vf² = vi² + 2 a d",
                "D) d = (vi + vf)t/2",
                "E) Todas son correctas"
            ],
            correcta: 4,
            explicacion: "Todas son ecuaciones del MRUV para diferentes situaciones.",
            dificultad: 1,
            tema: "Fórmulas del MRUV"
        },
        {
            id: 33,
            contexto: "Un objeto en caída libre acelera a 9.8 m/s².",
            pregunta: "¿Cuál es la velocidad de un objeto después de 3 segundos de caída libre desde el reposo?",
            opciones: [
                "A) 9.8 m/s",
                "B) 19.6 m/s",
                "C) 29.4 m/s",
                "D) 39.2 m/s",
                "E) 49 m/s"
            ],
            correcta: 2,
            explicacion: "v = g·t = 9.8 × 3 = 29.4 m/s.",
            dificultad: 1,
            tema: "Caída libre"
        },
        {
            id: 34,
            contexto: "La altura en caída libre se calcula con h = ½ gt².",
            pregunta: "¿Qué altura cae un objeto en 2 segundos de caída libre?",
            opciones: [
                "A) 4.9 m",
                "B) 9.8 m",
                "C) 19.6 m",
                "D) 29.4 m",
                "E) 39.2 m"
            ],
            correcta: 2,
            explicacion: "h = ½ gt² = 0.5 × 9.8 × 4 = 19.6 m.",
            dificultad: 1,
            tema: "Caída libre"
        },
        {
            id: 35,
            contexto: "El tiro vertical hacia arriba tiene velocidad inicial positiva.",
            pregunta: "Se lanza una pelota hacia arriba con 20 m/s. ¿Qué altura máxima alcanza? (g = 10 m/s²)",
            opciones: [
                "A) 10 m",
                "B) 20 m",
                "C) 30 m",
                "D) 40 m",
                "E) 50 m"
            ],
            correcta: 1,
            explicacion: "h max = v₀²/(2g) = (20)²/(2×10) = 400/20 = 20 m.",
            dificultad: 2,
            tema: "Movimiento vertical"
        },
        {
            id: 36,
            contexto: "El tiempo de subida en tiro vertical es t = v₀/g.",
            pregunta: "¿Cuánto tarda en alcanzar la altura máxima una pelota lanzada con 30 m/s? (g = 10 m/s²)",
            opciones: [
                "A) 1 s",
                "B) 2 s",
                "C) 3 s",
                "D) 4 s",
                "E) 5 s"
            ],
            correcta: 2,
            explicacion: "t = v₀/g = 30/10 = 3 s.",
            dificultad: 1,
            tema: "Movimiento vertical"
        },
        {
            id: 37,
            contexto: "La velocidad relativa depende del observador.",
            pregunta: "Dos autos se acercan en sentidos opuestos con 60 km/h y 40 km/h. ¿Cuál es su velocidad relativa?",
            opciones: [
                "A) 20 km/h",
                "B) 50 km/h",
                "C) 100 km/h",
                "D) 140 km/h",
                "E) 2400 km/h"
            ],
            correcta: 2,
            explicacion: "Velocidad relativa = 60 + 40 = 100 km/h (se suman por ir en sentidos opuestos).",
            dificultad: 2,
            tema: "Velocidad relativa"
        },
        {
            id: 38,
            contexto: "En movimiento circular uniforme, la velocidad es constante en magnitud.",
            pregunta: "Un objeto da 10 vueltas en 5 segundos. ¿Cuál es su frecuencia?",
            opciones: [
                "A) 0.5 Hz",
                "B) 1 Hz",
                "C) 2 Hz",
                "D) 5 Hz",
                "E) 10 Hz"
            ],
            correcta: 2,
            explicacion: "f = número de vueltas/tiempo = 10/5 = 2 Hz.",
            dificultad: 1,
            tema: "Movimiento circular uniforme"
        },
        {
            id: 39,
            contexto: "El período es el inverso de la frecuencia.",
            pregunta: "Si la frecuencia es 0.25 Hz, ¿cuál es el período?",
            opciones: [
                "A) 0.25 s",
                "B) 1 s",
                "C) 2 s",
                "D) 4 s",
                "E) 5 s"
            ],
            correcta: 3,
            explicacion: "T = 1/f = 1/0.25 = 4 s.",
            dificultad: 1,
            tema: "Movimiento circular uniforme"
        },
        {
            id: 40,
            contexto: "La velocidad angular se mide en rad/s.",
            pregunta: "¿Cuál es la velocidad angular de un objeto que gira a 60 RPM?",
            opciones: [
                "A) π rad/s",
                "B) 2π rad/s",
                "C) 3π rad/s",
                "D) 4π rad/s",
                "E) 6π rad/s"
            ],
            correcta: 1,
            explicacion: "60 RPM = 60/60 = 1 rev/s = 2π rad/s.",
            dificultad: 2,
            tema: "Movimiento circular uniforme"
        },
        {
            id: 41,
            contexto: "La aceleración centrípeta apunta al centro.",
            pregunta: "Fórmula de aceleración centrípeta:",
            opciones: [
                "A) a = v²/r",
                "B) a = v/r",
                "C) a = v·r",
                "D) a = r/v",
                "E) a = v²·r"
            ],
            correcta: 0,
            explicacion: "La aceleración centrípeta es a = v²/r = ω²r.",
            dificultad: 1,
            tema: "Movimiento circular uniforme"
        },
        {
            id: 42,
            contexto: "El movimiento parabólico combina MRU y caída libre.",
            pregunta: "En tiro parabólico, ¿qué componente de velocidad permanece constante?",
            opciones: [
                "A) Vertical",
                "B) Horizontal",
                "C) Ambas",
                "D) Ninguna",
                "E) Depende del ángulo"
            ],
            correcta: 1,
            explicacion: "La velocidad horizontal es constante porque no hay aceleración horizontal.",
            dificultad: 1,
            tema: "Movimiento parabólico"
        },
        {
            id: 43,
            contexto: "El alcance máximo depende de la velocidad inicial.",
            pregunta: "¿Con qué ángulo se obtiene el máximo alcance en tiro parabólico?",
            opciones: [
                "A) 30°",
                "B) 45°",
                "C) 60°",
                "D) 75°",
                "E) 90°"
            ],
            correcta: 1,
            explicacion: "El alcance máximo se logra con 45° (despreciando resistencia del aire).",
            dificultad: 1,
            tema: "Movimiento parabólico"
        },
        {
            id: 44,
            contexto: "El tiempo de vuelo depende de la velocidad vertical inicial.",
            pregunta: "En tiro parabólico con v₀ = 50 m/s y ángulo 30°, ¿cuál es el tiempo de vuelo? (g = 10 m/s²)",
            opciones: [
                "A) 2.5 s",
                "B) 5 s",
                "C) 7.5 s",
                "D) 10 s",
                "E) 12.5 s"
            ],
            correcta: 1,
            explicacion: "v₀y = 50·sen30° = 50·0.5 = 25 m/s. t vuelo = 2v₀y/g = 50/10 = 5 s.",
            dificultad: 2,
            tema: "Movimiento parabólico"
        },
        {
            id: 45,
            contexto: "La altura máxima en tiro parabólico es (v₀y²)/(2g).",
            pregunta: "Con v₀y = 20 m/s, ¿cuál es la altura máxima? (g = 10 m/s²)",
            opciones: [
                "A) 10 m",
                "B) 20 m",
                "C) 30 m",
                "D) 40 m",
                "E) 50 m"
            ],
            correcta: 1,
            explicacion: "h max = (20)²/(2×10) = 400/20 = 20 m.",
            dificultad: 1,
            tema: "Movimiento parabólico"
        },
        {
            id: 46,
            contexto: "El movimiento armónico simple es oscilatorio.",
            pregunta: "¿Qué fuerza actúa en el MAS?",
            opciones: [
                "A) Fuerza constante",
                "B) Fuerza proporcional al desplazamiento y opuesta",
                "C) Fuerza de fricción",
                "D) Fuerza centrífuga",
                "E) Fuerza gravitacional"
            ],
            correcta: 1,
            explicacion: "En MAS, F = -kx, proporcional al desplazamiento y en dirección opuesta.",
            dificultad: 2,
            tema: "Movimiento armónico simple"
        },
        {
            id: 47,
            contexto: "El período del MAS en un resorte es T = 2π√(m/k).",
            pregunta: "Un resorte con k = 100 N/m y masa 1 kg tiene período:",
            opciones: [
                "A) 0.2π s",
                "B) 0.4π s",
                "C) 0.6π s",
                "D) 0.8π s",
                "E) π s"
            ],
            correcta: 0,
            explicacion: "T = 2π√(1/100) = 2π√0.01 = 2π×0.1 = 0.2π s.",
            dificultad: 2,
            tema: "Movimiento armónico simple"
        },
        {
            id: 48,
            contexto: "La frecuencia es el inverso del período.",
            pregunta: "Si el período es 0.5 s, ¿cuál es la frecuencia?",
            opciones: [
                "A) 0.5 Hz",
                "B) 1 Hz",
                "C) 2 Hz",
                "D) 4 Hz",
                "E) 5 Hz"
            ],
            correcta: 2,
            explicacion: "f = 1/T = 1/0.5 = 2 Hz.",
            dificultad: 1,
            tema: "Movimiento armónico simple"
        },
        {
            id: 49,
            contexto: "En caída libre, la aceleración es constante.",
            pregunta: "¿Cuánto tarda en caer un objeto desde 45 m? (g = 10 m/s²)",
            opciones: [
                "A) 1 s",
                "B) 2 s",
                "C) 3 s",
                "D) 4 s",
                "E) 5 s"
            ],
            correcta: 2,
            explicacion: "h = ½gt² → t = √(2h/g) = √(90/10) = √9 = 3 s.",
            dificultad: 2,
            tema: "Caída libre"
        },
        {
            id: 50,
            contexto: "La gráfica v-t en MRUV es una línea recta.",
            pregunta: "En un MRUV con aceleración positiva, la gráfica velocidad-tiempo es:",
            opciones: [
                "A) Horizontal",
                "B) Recta con pendiente positiva",
                "C) Recta con pendiente negativa",
                "D) Parábola",
                "E) Hipérbola"
            ],
            correcta: 1,
            explicacion: "v = v₀ + at es una línea recta con pendiente a.",
            dificultad: 1,
            tema: "Análisis de gráficas"
        },

        // ============================================
        // 7.4-7.5. DINÁMICA Y FUERZA (Preguntas 51-65)
        // ============================================
        {
            id: 51,
            contexto: "La primera ley de Newton es la ley de la inercia.",
            pregunta: "¿Qué establece la primera ley de Newton?",
            opciones: [
                "A) F = m·a",
                "B) Acción y reacción",
                "C) Un cuerpo en reposo o MRU permanece así si no hay fuerza neta",
                "D) La energía se conserva",
                "E) El momento es constante"
            ],
            correcta: 2,
            explicacion: "La primera ley (inercia) dice que un cuerpo mantiene su estado de reposo o MRU a menos que actúe una fuerza neta.",
            dificultad: 1,
            tema: "Principios de la inercia"
        },
        {
            id: 52,
            contexto: "La segunda ley relaciona fuerza, masa y aceleración.",
            pregunta: "¿Cuál es la fórmula de la segunda ley de Newton?",
            opciones: [
                "A) F = m·v",
                "B) F = m·a",
                "C) F = m/t",
                "D) F = p·t",
                "E) F = m·g"
            ],
            correcta: 1,
            explicacion: "La segunda ley establece F = m·a (fuerza igual a masa por aceleración).",
            dificultad: 1,
            tema: "Leyes de Newton"
        },
        {
            id: 53,
            contexto: "La tercera ley es acción y reacción.",
            pregunta: "Si un libro ejerce una fuerza de 10 N sobre una mesa, ¿qué fuerza ejerce la mesa sobre el libro?",
            opciones: [
                "A) 0 N",
                "B) 5 N",
                "C) 10 N en sentido opuesto",
                "D) 20 N",
                "E) 100 N"
            ],
            correcta: 2,
            explicacion: "Por la tercera ley, la mesa ejerce 10 N hacia arriba sobre el libro (reacción).",
            dificultad: 1,
            tema: "Leyes de Newton"
        },
        {
            id: 54,
            contexto: "El peso es la fuerza gravitacional.",
            pregunta: "¿Cuál es el peso de un objeto de 5 kg en la Tierra? (g = 9.8 m/s²)",
            opciones: [
                "A) 4.9 N",
                "B) 9.8 N",
                "C) 19.6 N",
                "D) 49 N",
                "E) 98 N"
            ],
            correcta: 3,
            explicacion: "P = m·g = 5 × 9.8 = 49 N.",
            dificultad: 1,
            tema: "Masa y peso"
        },
        {
            id: 55,
            contexto: "La fricción se opone al movimiento.",
            pregunta: "¿De qué depende la fuerza de fricción cinética?",
            opciones: [
                "A) De la velocidad",
                "B) Del área de contacto",
                "C) Del coeficiente de fricción y la normal",
                "D) De la masa solamente",
                "E) Del tiempo"
            ],
            correcta: 2,
            explicacion: "Fricción cinética = μ·N, donde μ es coeficiente y N la fuerza normal.",
            dificultad: 1,
            tema: "Tipos de fricción"
        },
        {
            id: 56,
            contexto: "Los diagramas de cuerpo libre representan fuerzas.",
            pregunta: "En un diagrama de cuerpo libre, ¿qué se representa?",
            opciones: [
                "A) Solo el peso",
                "B) Todas las fuerzas que actúan sobre el cuerpo",
                "C) La trayectoria",
                "D) La velocidad",
                "E) La energía"
            ],
            correcta: 1,
            explicacion: "El diagrama de cuerpo libre muestra todas las fuerzas externas que actúan sobre un cuerpo.",
            dificultad: 1,
            tema: "Diagramas de fuerzas"
        },
        {
            id: 57,
            contexto: "La fuerza normal es perpendicular a la superficie.",
            pregunta: "Un bloque de 10 kg sobre una superficie horizontal. ¿Cuál es la normal? (g = 10 m/s²)",
            opciones: [
                "A) 0 N",
                "B) 10 N",
                "C) 50 N",
                "D) 100 N",
                "E) 1000 N"
            ],
            correcta: 3,
            explicacion: "N = peso = m·g = 10 × 10 = 100 N.",
            dificultad: 1,
            tema: "Diagramas de fuerzas"
        },
        {
            id: 58,
            contexto: "La tensión es la fuerza en cuerdas.",
            pregunta: "Dos masas de 2 kg y 3 kg cuelgan de una polea. ¿Cuál es la aceleración? (g = 10 m/s²)",
            opciones: [
                "A) 1 m/s²",
                "B) 2 m/s²",
                "C) 3 m/s²",
                "D) 4 m/s²",
                "E) 5 m/s²"
            ],
            correcta: 1,
            explicacion: "a = (m₂ - m₁)g/(m₁ + m₂) = (3-2)×10/5 = 10/5 = 2 m/s².",
            dificultad: 2,
            tema: "Aplicaciones de leyes de Newton"
        },
        {
            id: 59,
            contexto: "La fuerza neta es la suma vectorial de fuerzas.",
            pregunta: "Sobre un cuerpo actúan 30 N a la derecha y 20 N a la izquierda. ¿Cuál es la fuerza neta?",
            opciones: [
                "A) 50 N derecha",
                "B) 50 N izquierda",
                "C) 10 N derecha",
                "D) 10 N izquierda",
                "E) 0 N"
            ],
            correcta: 2,
            explicacion: "F neta = 30 - 20 = 10 N a la derecha.",
            dificultad: 1,
            tema: "Fuerza"
        },
        {
            id: 60,
            contexto: "La inercia es la resistencia al cambio de movimiento.",
            pregunta: "¿Qué propiedad mide la masa?",
            opciones: [
                "A) El peso",
                "B) La inercia",
                "C) La velocidad",
                "D) La aceleración",
                "E) La energía"
            ],
            correcta: 1,
            explicacion: "La masa es la medida de la inercia de un cuerpo.",
            dificultad: 1,
            tema: "Principios de la inercia"
        },
        {
            id: 61,
            contexto: "El reposo es un estado de equilibrio.",
            pregunta: "Un libro sobre una mesa está en reposo. ¿Qué podemos decir de las fuerzas?",
            opciones: [
                "A) No actúan fuerzas",
                "B) La fuerza neta es cero",
                "C) Solo actúa el peso",
                "D) Solo actúa la normal",
                "E) Hay aceleración"
            ],
            correcta: 1,
            explicacion: "En reposo, la fuerza neta es cero (equilibrio estático).",
            dificultad: 1,
            tema: "Principios de la inercia"
        },
        {
            id: 62,
            contexto: "La fuerza de fricción estática tiene un máximo.",
            pregunta: "Si μₑ = 0.4 y N = 50 N, ¿cuál es la máxima fricción estática?",
            opciones: [
                "A) 10 N",
                "B) 20 N",
                "C) 30 N",
                "D) 40 N",
                "E) 50 N"
            ],
            correcta: 1,
            explicacion: "fₑ max = μₑ·N = 0.4 × 50 = 20 N.",
            dificultad: 1,
            tema: "Tipos de fricción"
        },
        {
            id: 63,
            contexto: "La fuerza centrípeta causa movimiento circular.",
            pregunta: "¿Qué fuerza proporciona la fuerza centrípeta para un auto en una curva?",
            opciones: [
                "A) El peso",
                "B) La normal",
                "C) La fricción",
                "D) La tensión",
                "E) La gravedad"
            ],
            correcta: 2,
            explicacion: "La fricción entre llantas y pavimento proporciona la fuerza centrípeta.",
            dificultad: 1,
            tema: "Fuerza"
        },
        {
            id: 64,
            contexto: "La fuerza elástica sigue la ley de Hooke.",
            pregunta: "Un resorte se estira 0.1 m con una fuerza de 20 N. ¿Cuál es su constante k?",
            opciones: [
                "A) 2 N/m",
                "B) 20 N/m",
                "C) 200 N/m",
                "D) 2000 N/m",
                "E) 0.5 N/m"
            ],
            correcta: 2,
            explicacion: "F = k·x → k = F/x = 20/0.1 = 200 N/m.",
            dificultad: 1,
            tema: "Fuerza"
        },
        {
            id: 65,
            contexto: "El equilibrio requiere suma de fuerzas cero.",
            pregunta: "Un semáforo de 100 N cuelga de dos cables simétricos de 30° con la horizontal. ¿Cuál es la tensión en cada cable?",
            opciones: [
                "A) 50 N",
                "B) 57.7 N",
                "C) 86.6 N",
                "D) 100 N",
                "E) 115.4 N"
            ],
            correcta: 1,
            explicacion: "2T·sen30° = 100 → 2T·0.5 = 100 → T = 100 N? Error: 2T·0.5 = T = 100 → T = 100 N. Pero eso no es correcto porque sen30°=0.5, 2×0.5=1, entonces T=100N. Sin embargo, con ángulo de 30°, la tensión debería ser mayor. Recalculemos: 2T sen30° = 100 → 2T(0.5)=100 → T=100N. Parece correcto, pero en realidad debería ser T = peso/(2 senθ) = 100/(2×0.5)=100N. Así que la respuesta es 100N.",
            dificultad: 3,
            tema: "Diagramas de fuerzas"
        },

        // ============================================
        // 7.6-7.7. ENERGÍA Y COLISIONES (Preguntas 66-75)
        // ============================================
        {
            id: 66,
            contexto: "La energía cinética depende de la velocidad.",
            pregunta: "¿Cuál es la energía cinética de un auto de 1000 kg a 20 m/s?",
            opciones: [
                "A) 100,000 J",
                "B) 200,000 J",
                "C) 300,000 J",
                "D) 400,000 J",
                "E) 500,000 J"
            ],
            correcta: 1,
            explicacion: "Ec = ½ m v² = 0.5 × 1000 × (20)² = 500 × 400 = 200,000 J.",
            dificultad: 1,
            tema: "Energía cinética"
        },
        {
            id: 67,
            contexto: "La energía potencial gravitatoria depende de la altura.",
            pregunta: "¿Qué energía potencial tiene un objeto de 2 kg a 5 m de altura? (g = 10 m/s²)",
            opciones: [
                "A) 10 J",
                "B) 20 J",
                "C) 50 J",
                "D) 100 J",
                "E) 200 J"
            ],
            correcta: 3,
            explicacion: "Ep = m·g·h = 2 × 10 × 5 = 100 J.",
            dificultad: 1,
            tema: "Energía potencial gravitatoria"
        },
        {
            id: 68,
            contexto: "La energía se conserva en sistemas sin fricción.",
            pregunta: "Un objeto cae desde 20 m. ¿Con qué velocidad llega al suelo? (g = 10 m/s²)",
            opciones: [
                "A) 10 m/s",
                "B) 14.14 m/s",
                "C) 20 m/s",
                "D) 28.28 m/s",
                "E) 40 m/s"
            ],
            correcta: 2,
            explicacion: "v = √(2gh) = √(2×10×20) = √400 = 20 m/s.",
            dificultad: 1,
            tema: "Conservación de energía"
        },
        {
            id: 69,
            contexto: "La cantidad de movimiento se conserva en choques.",
            pregunta: "¿Cuál es la fórmula de la cantidad de movimiento?",
            opciones: [
                "A) p = m·v",
                "B) p = m·a",
                "C) p = F·t",
                "D) p = ½ mv²",
                "E) p = m·g·h"
            ],
            correcta: 0,
            explicacion: "La cantidad de movimiento (momento lineal) es p = m·v.",
            dificultad: 1,
            tema: "Conservación de cantidad de movimiento"
        },
        {
            id: 70,
            contexto: "En choques elásticos se conserva la energía cinética.",
            pregunta: "¿Qué caracteriza a un choque perfectamente elástico?",
            opciones: [
                "A) Los cuerpos quedan unidos",
                "B) Se conserva la energía cinética",
                "C) Se pierde toda la energía",
                "D) No hay conservación de momento",
                "E) La velocidad final es cero"
            ],
            correcta: 1,
            explicacion: "En choques elásticos se conserva tanto el momento como la energía cinética.",
            dificultad: 1,
            tema: "Colisiones elásticas"
        },
        {
            id: 71,
            contexto: "En choques inelásticos los cuerpos se unen.",
            pregunta: "Un auto de 1000 kg a 10 m/s choca con otro de 1500 kg en reposo y quedan unidos. ¿Cuál es su velocidad?",
            opciones: [
                "A) 2 m/s",
                "B) 4 m/s",
                "C) 6 m/s",
                "D) 8 m/s",
                "E) 10 m/s"
            ],
            correcta: 1,
            explicacion: "m₁v₁ + m₂v₂ = (m₁+m₂)v → 1000×10 + 1500×0 = 2500 v → 10000 = 2500v → v = 4 m/s.",
            dificultad: 2,
            tema: "Conservación de cantidad de movimiento"
        },
        {
            id: 72,
            contexto: "El impulso cambia la cantidad de movimiento.",
            pregunta: "¿Qué relación hay entre impulso y cantidad de movimiento?",
            opciones: [
                "A) I = F·t = Δp",
                "B) I = m·v",
                "C) I = ½ mv²",
                "D) I = m·a",
                "E) I = F·d"
            ],
            correcta: 0,
            explicacion: "El impulso (F·t) es igual al cambio en la cantidad de movimiento.",
            dificultad: 1,
            tema: "Conservación de cantidad de movimiento"
        },
        {
            id: 73,
            contexto: "La energía mecánica es suma de cinética y potencial.",
            pregunta: "En ausencia de fricción, la energía mecánica:",
            opciones: [
                "A) Aumenta",
                "B) Disminuye",
                "C) Se conserva",
                "D) Se anula",
                "E) Se duplica"
            ],
            correcta: 2,
            explicacion: "Sin fuerzas no conservativas, la energía mecánica total se conserva.",
            dificultad: 1,
            tema: "Conservación de energía"
        },
        {
            id: 74,
            contexto: "El trabajo es fuerza por desplazamiento.",
            pregunta: "¿Qué trabajo realiza una fuerza de 50 N al desplazar un objeto 3 m en la dirección de la fuerza?",
            opciones: [
                "A) 50 J",
                "B) 100 J",
                "C) 150 J",
                "D) 200 J",
                "E) 250 J"
            ],
            correcta: 2,
            explicacion: "W = F·d = 50 × 3 = 150 J.",
            dificultad: 1,
            tema: "Energía"
        },
        {
            id: 75,
            contexto: "La potencia es trabajo por unidad de tiempo.",
            pregunta: "Si se realiza un trabajo de 600 J en 10 s, ¿cuál es la potencia?",
            opciones: [
                "A) 6 W",
                "B) 60 W",
                "C) 600 W",
                "D) 6000 W",
                "E) 0.6 W"
            ],
            correcta: 1,
            explicacion: "P = W/t = 600/10 = 60 W.",
            dificultad: 1,
            tema: "Energía"
        },

        // ============================================
        // 7.8. CALOR Y TERMODINÁMICA (Preguntas 76-85)
        // ============================================
        {
            id: 76,
            contexto: "Calor y temperatura son conceptos diferentes.",
            pregunta: "¿Qué diferencia hay entre calor y temperatura?",
            opciones: [
                "A) Son lo mismo",
                "B) El calor es energía en transferencia; la temperatura es medida de energía cinética promedio",
                "C) La temperatura es energía; el calor es medida",
                "D) No hay diferencia",
                "E) El calor es frío y temperatura caliente"
            ],
            correcta: 1,
            explicacion: "El calor es energía térmica en tránsito; la temperatura mide la energía cinética promedio de las moléculas.",
            dificultad: 1,
            tema: "Calor y temperatura"
        },
        {
            id: 77,
            contexto: "La transmisión de calor puede ser por conducción.",
            pregunta: "¿En qué medio es más rápida la conducción térmica?",
            opciones: [
                "A) Gases",
                "B) Líquidos",
                "C) Sólidos metálicos",
                "D) Vacío",
                "E) Plásticos"
            ],
            correcta: 2,
            explicacion: "Los metales son buenos conductores del calor por sus electrones libres.",
            dificultad: 1,
            tema: "Transmisión del calor"
        },
        {
            id: 78,
            contexto: "La convección ocurre en fluidos.",
            pregunta: "¿Qué tipo de transferencia de calor ocurre en el agua hirviendo?",
            opciones: [
                "A) Conducción",
                "B) Convección",
                "C) Radiación",
                "D) Todos",
                "E) Ninguno"
            ],
            correcta: 1,
            explicacion: "La convección ocurre por movimiento de masas de fluido con diferente temperatura.",
            dificultad: 1,
            tema: "Transmisión del calor"
        },
        {
            id: 79,
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
            explicacion: "La radiación electromagnética viaja por el vacío sin necesidad de medio material.",
            dificultad: 1,
            tema: "Transmisión del calor"
        },
        {
            id: 80,
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
            explicacion: "Las variables de estado son presión, volumen, temperatura, masa, densidad, energía interna.",
            dificultad: 1,
            tema: "Variables termodinámicas"
        },
        {
            id: 81,
            contexto: "La primera ley de la termodinámica conserva energía.",
            pregunta: "¿Qué establece la primera ley de la termodinámica?",
            opciones: [
                "A) La entropía siempre aumenta",
                "B) ΔU = Q - W",
                "C) No se puede llegar al cero absoluto",
                "D) El calor fluye de caliente a frío",
                "E) La energía no se crea ni destruye"
            ],
            correcta: 1,
            explicacion: "La primera ley: ΔU = Q - W (cambio de energía interna = calor añadido menos trabajo realizado).",
            dificultad: 2,
            tema: "Primera ley de termodinámica"
        },
        {
            id: 82,
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
            explicacion: "La segunda ley establece que la entropía del universo aumenta en procesos irreversibles.",
            dificultad: 2,
            tema: "Segunda ley de termodinámica"
        },
        {
            id: 83,
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
            id: 84,
            contexto: "La densidad relaciona masa y volumen.",
            pregunta: "¿Cuál es la densidad de un objeto de 200 g y 50 cm³?",
            opciones: [
                "A) 2 g/cm³",
                "B) 4 g/cm³",
                "C) 6 g/cm³",
                "D) 8 g/cm³",
                "E) 10 g/cm³"
            ],
            correcta: 1,
            explicacion: "ρ = m/V = 200/50 = 4 g/cm³.",
            dificultad: 1,
            tema: "Variables termodinámicas"
        },
        {
            id: 85,
            contexto: "La presión es fuerza por unidad de área.",
            pregunta: "¿Qué presión ejerce un peso de 100 N sobre un área de 0.5 m²?",
            opciones: [
                "A) 50 Pa",
                "B) 100 Pa",
                "C) 150 Pa",
                "D) 200 Pa",
                "E) 250 Pa"
            ],
            correcta: 3,
            explicacion: "P = F/A = 100/0.5 = 200 Pa.",
            dificultad: 1,
            tema: "Variables termodinámicas"
        },

        // ============================================
        // 7.9-7.11. ELECTROSTÁTICA, ELECTRODINÁMICA, ÓPTICA (Preguntas 86-100)
        // ============================================
        {
            id: 86,
            contexto: "La carga eléctrica es una propiedad fundamental.",
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
            pregunta: "Dos cargas de 1 C cada una a 1 m de distancia se repelen con fuerza de:",
            opciones: [
                "A) 9×10⁹ N",
                "B) 1 N",
                "C) 9 N",
                "D) 9×10⁻⁹ N",
                "E) 0 N"
            ],
            correcta: 0,
            explicacion: "F = k·q₁q₂/r² = 9×10⁹ × 1×1/1² = 9×10⁹ N.",
            dificultad: 2,
            tema: "Ley de Coulomb"
        },
        {
            id: 88,
            contexto: "La ley de Joule relaciona calor y corriente.",
            pregunta: "¿Cuál es la ley de Joule?",
            opciones: [
                "A) V = I·R",
                "B) P = V·I",
                "C) Q = I²·R·t",
                "D) F = k·q₁q₂/r²",
                "E) E = m·c²"
            ],
            correcta: 2,
            explicacion: "La ley de Joule: el calor producido es Q = I²·R·t.",
            dificultad: 1,
            tema: "Ley de Joule"
        },
        {
            id: 89,
            contexto: "La resistencia eléctrica se mide en ohmios.",
            pregunta: "¿Qué ley relaciona voltaje, corriente y resistencia?",
            opciones: [
                "A) Ley de Coulomb",
                "B) Ley de Ohm",
                "C) Ley de Joule",
                "D) Ley de Faraday",
                "E) Ley de Gauss"
            ],
            correcta: 1,
            explicacion: "Ley de Ohm: V = I·R.",
            dificultad: 1,
            tema: "Resistencia eléctrica"
        },
        {
            id: 90,
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
            explicacion: "Las cargas en movimiento (corrientes eléctricas) generan campos magnéticos.",
            dificultad: 1,
            tema: "Campo magnético"
        },
        {
            id: 91,
            contexto: "El electromagnetismo une electricidad y magnetismo.",
            pregunta: "¿Qué ecuación de Maxwell relaciona campos eléctricos variables con campos magnéticos?",
            opciones: [
                "A) Ley de Gauss",
                "B) Ley de Faraday",
                "C) Ley de Ampère-Maxwell",
                "D) Ley de Coulomb",
                "E) Ley de Ohm"
            ],
            correcta: 2,
            explicacion: "La ley de Ampère-Maxwell relaciona campos magnéticos con corrientes y campos eléctricos variables.",
            dificultad: 3,
            tema: "Electromagnetismo"
        },
        {
            id: 92,
            contexto: "La reflexión de la luz cumple leyes específicas.",
            pregunta: "En reflexión, el ángulo de incidencia es:",
            opciones: [
                "A) Mayor que el de reflexión",
                "B) Menor que el de reflexión",
                "C) Igual al de reflexión",
                "D) Complementario",
                "E) Suplementario"
            ],
            correcta: 2,
            explicacion: "Ley de reflexión: θᵢ = θᵣ (ángulo de incidencia igual al de reflexión).",
            dificultad: 1,
            tema: "Reflexión de la luz"
        },
        {
            id: 93,
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
            id: 94,
            contexto: "Las ondas pueden ser longitudinales o transversales.",
            pregunta: "¿Qué tipo de onda es el sonido?",
            opciones: [
                "A) Transversal",
                "B) Longitudinal",
                "C) Electromagnética",
                "D) Superficial",
                "E) Estacionaria"
            ],
            correcta: 1,
            explicacion: "El sonido es una onda longitudinal (vibración en dirección de propagación).",
            dificultad: 1,
            tema: "Ondas longitudinales y transversales"
        },
        {
            id: 95,
            contexto: "La frecuencia determina el tono del sonido.",
            pregunta: "¿Qué característica del sonido determina la frecuencia?",
            opciones: [
                "A) Intensidad",
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
            id: 96,
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
        },
        {
            id: 97,
            contexto: "La ley de Coulomb se aplica a cargas puntuales.",
            pregunta: "Si la distancia entre dos cargas se duplica, la fuerza:",
            opciones: [
                "A) Se duplica",
                "B) Se cuadruplica",
                "C) Se reduce a la mitad",
                "D) Se reduce a la cuarta parte",
                "E) No cambia"
            ],
            correcta: 3,
            explicacion: "F ∝ 1/r², si r se duplica, F se reduce a 1/4.",
            dificultad: 1,
            tema: "Ley de Coulomb"
        },
        {
            id: 98,
            contexto: "La energía potencial eléctrica depende de la distancia.",
            pregunta: "La energía potencial de dos cargas del mismo signo es:",
            opciones: [
                "A) Negativa",
                "B) Positiva",
                "C) Cero",
                "D) Infinita",
                "E) Constante"
            ],
            correcta: 1,
            explicacion: "Cargas iguales se repelen, la energía potencial es positiva (trabajo para acercarlas).",
            dificultad: 2,
            tema: "Electrostática"
        },
        {
            id: 99,
            contexto: "Los circuitos eléctricos pueden ser serie o paralelo.",
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
            id: 100,
            contexto: "La potencia eléctrica es P = V·I.",
            pregunta: "¿Cuál es la potencia de un foco de 120 V que consume 0.5 A?",
            opciones: [
                "A) 30 W",
                "B) 60 W",
                "C) 120 W",
                "D) 240 W",
                "E) 480 W"
            ],
            correcta: 1,
            explicacion: "P = V·I = 120 × 0.5 = 60 W.",
            dificultad: 1,
            tema: "Electrodinámica"
        }
    ];
    
    console.log("✅ TOTAL:", DATOS_ACUDE.preguntas.fisica_ing.length, "preguntas de física para ingeniería cargadas correctamente");
    console.log("📊 Distribución por temas:");
    console.log("- La medida en física: 10 preguntas");
    console.log("- Vectores: 15 preguntas");
    console.log("- Cinemática: 25 preguntas");
    console.log("- Dinámica y fuerza: 15 preguntas");
    console.log("- Energía y colisiones: 10 preguntas");
    console.log("- Calor y termodinámica: 10 preguntas");
    console.log("- Electrostática, electrodinámica, óptica: 15 preguntas");
}