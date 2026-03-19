// js/examen.js
// LÓGICA COMPLETA DEL EXAMEN - VERSIÓN CON CARGA DIFERIDA

// Variable para controlar si ya se inicializó
let examenInicializado = false;

function inicializarExamenConDatos() {
    // Evitar inicializar múltiples veces
    if (examenInicializado) return;
    
    console.log("🔍 Examen.js inicializando con datos...");
    console.log("📊 DATOS_ACUDE disponible:", typeof DATOS_ACUDE !== 'undefined' ? 'SÍ' : 'NO');
    
    // ============================================
    // 1. VERIFICAR QUE DATOS_ACUDE EXISTA
    // ============================================
    if (typeof DATOS_ACUDE === 'undefined') {
        console.log("⏳ Datos aún no disponibles, reintentando en 500ms...");
        setTimeout(inicializarExamenConDatos, 500);
        return;
    }
    
    examenInicializado = true;
    
    // ============================================
    // 2. OBTENER EL PARÁMETRO DE LA URL
    // ============================================
    const urlParams = new URLSearchParams(window.location.search);
    const materiaId = urlParams.get('materia');
    console.log("📌 Materia seleccionada:", materiaId);
    
    // ============================================
    // 3. REFERENCIAS A ELEMENTOS DEL DOM
    // ============================================
    const elementos = {
        // Títulos
        tituloMateria: document.getElementById('titulo-materia'),
        subtituloMateria: document.getElementById('subtitulo-materia'),
        
        // Spinner y paneles
        spinner: document.getElementById('spinner'),
        panelConfiguracion: document.getElementById('panel-configuracion'),
        areaExamen: document.getElementById('area-examen'),
        
        // Contadores
        contadorPreguntas: document.getElementById('contador-preguntas'),
        respuestasContador: document.getElementById('respuestas-contador'),
        barraProgreso: document.getElementById('barra-progreso'),
        preguntaNumero: document.getElementById('pregunta-numero'),
        
        // Pregunta actual
        contextoPregunta: document.getElementById('contexto-pregunta'),
        textoPregunta: document.getElementById('texto-pregunta'),
        opcionesContainer: document.getElementById('opciones-container'),
        badgeDificultad: document.getElementById('badge-dificultad'),
        
        // Explicación
        explicacionContainer: document.getElementById('explicacion-container'),
        textoExplicacion: document.getElementById('texto-explicacion'),
        
        // Botones
        btnAnterior: document.getElementById('btn-anterior'),
        btnSiguiente: document.getElementById('btn-siguiente'),
        btnFinalizar: document.getElementById('btn-finalizar'),
        btnMarcar: document.getElementById('btn-marcar'),
        botonesCantidad: document.querySelectorAll('[data-cantidad]')
    };
    
    console.log("✅ Elementos del DOM encontrados:", Object.keys(elementos).filter(k => elementos[k]).length);
    
    // ============================================
    // 4. VARIABLES DE ESTADO
    // ============================================
    let estado = {
        materia: null,
        bancoPreguntas: [],
        preguntasExamen: [],
        respuestas: [],
        marcadas: [],
        indiceActual: 0,
        totalPreguntas: 0,
        examenIniciado: false
    };
    
    // ============================================
    // 5. VERIFICAR QUE LA MATERIA EXISTA
    // ============================================
    if (!materiaId) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se especificó ninguna materia',
            confirmButtonText: 'Volver al inicio'
        }).then(() => {
            window.location.href = 'index.html';
        });
        return;
    }
    
    // Buscar la materia en los datos
    const materiaInfo = DATOS_ACUDE.materias.find(m => m.id === materiaId);
    console.log("📚 Información de materia:", materiaInfo);
    
    if (!materiaInfo) {
        Swal.fire({
            icon: 'error',
            title: 'Materia no encontrada',
            text: `La materia "${materiaId}" no existe en el banco de datos`,
            confirmButtonText: 'Volver al inicio'
        }).then(() => {
            window.location.href = 'index.html';
        });
        return;
    }
    
    // Verificar que tenga preguntas
    if (!DATOS_ACUDE.preguntas[materiaId] || DATOS_ACUDE.preguntas[materiaId].length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Sin preguntas',
            text: `La materia ${materiaInfo.nombre} no tiene preguntas disponibles`,
            confirmButtonText: 'Volver al inicio'
        }).then(() => {
            window.location.href = 'index.html';
        });
        return;
    }
    
    console.log(`✅ ${DATOS_ACUDE.preguntas[materiaId].length} preguntas cargadas para ${materiaInfo.nombre}`);
    
    // ============================================
    // 6. INICIALIZAR
    // ============================================
    estado.materia = materiaInfo;
    estado.bancoPreguntas = DATOS_ACUDE.preguntas[materiaId];
    
    // Actualizar título
    if (elementos.tituloMateria) {
        elementos.tituloMateria.textContent = materiaInfo.nombre;
    }
    if (elementos.subtituloMateria) {
        elementos.subtituloMateria.textContent = `${estado.bancoPreguntas.length} preguntas disponibles`;
    }
    
    // Ocultar spinner y mostrar panel de configuración
    if (elementos.spinner) {
        elementos.spinner.style.display = 'none';
    }
    if (elementos.panelConfiguracion) {
        elementos.panelConfiguracion.style.display = 'block';
    }
    
    // ============================================
    // 7. EVENTOS DE CONFIGURACIÓN
    // ============================================
    if (elementos.botonesCantidad && elementos.botonesCantidad.length > 0) {
        elementos.botonesCantidad.forEach(btn => {
            // Eliminar eventos anteriores para evitar duplicados
            btn.removeEventListener('click', manejadorClickCantidad);
            btn.addEventListener('click', manejadorClickCantidad);
        });
    } else {
        console.warn("⚠️ No se encontraron botones de cantidad");
    }
    
    function manejadorClickCantidad(e) {
        const cantidad = parseInt(e.currentTarget.dataset.cantidad);
        console.log("🎯 Iniciando examen con", cantidad, "preguntas");
        iniciarExamen(cantidad);
    }
    
    // ============================================
    // 8. FUNCIÓN: INICIAR EXAMEN
    // ============================================
    function iniciarExamen(cantidad) {
        // Validar cantidad disponible
        let preguntasTomar = cantidad;
        if (cantidad > estado.bancoPreguntas.length) {
            Swal.fire({
                icon: 'warning',
                title: 'Atención',
                text: `Solo hay ${estado.bancoPreguntas.length} preguntas disponibles. Se usarán todas.`,
                confirmButtonText: 'Entendido'
            });
            preguntasTomar = estado.bancoPreguntas.length;
        }
        
        // Seleccionar preguntas aleatorias
        const preguntasMezcladas = [...estado.bancoPreguntas].sort(() => Math.random() - 0.5);
        estado.preguntasExamen = preguntasMezcladas.slice(0, preguntasTomar);
        estado.totalPreguntas = estado.preguntasExamen.length;
        
        // Inicializar arrays de estado
        estado.respuestas = new Array(estado.totalPreguntas).fill(null);
        estado.marcadas = new Array(estado.totalPreguntas).fill(false);
        estado.indiceActual = 0;
        estado.examenIniciado = true;
        
        // Ocultar panel de configuración, mostrar área de examen
        if (elementos.panelConfiguracion) elementos.panelConfiguracion.style.display = 'none';
        if (elementos.areaExamen) elementos.areaExamen.style.display = 'block';
        
        // Actualizar contadores
        actualizarContadores();
        
        // Mostrar primera pregunta
        mostrarPregunta(0);
    }
    
    // ============================================
    // 9. FUNCIÓN: MOSTRAR PREGUNTA
    // ============================================
    function mostrarPregunta(indice) {
        
        const pregunta = estado.preguntasExamen[indice];
        
        // Actualizar número de pregunta
        if (elementos.preguntaNumero) {
            elementos.preguntaNumero.textContent = `Pregunta ${indice + 1} de ${estado.totalPreguntas}`;
        }
        
        // Mostrar contexto (si existe)
        if (elementos.contextoPregunta) {
            if (pregunta.contexto) {
                elementos.contextoPregunta.textContent = pregunta.contexto;
                elementos.contextoPregunta.style.display = 'block';
            } else {
                elementos.contextoPregunta.style.display = 'none';
            }
        }
        
        // Mostrar texto de la pregunta
        if (elementos.textoPregunta) {
            elementos.textoPregunta.innerHTML = pregunta.pregunta;
        }
        
        // Actualizar badge de dificultad
        if (elementos.badgeDificultad) {
            elementos.badgeDificultad.className = `badge-dificultad dificultad-${pregunta.dificultad || 3}`;
            elementos.badgeDificultad.innerHTML = `<i class="fas fa-star me-1"></i> Nivel ${pregunta.dificultad || 3}/5`;
        }
        
        // Generar opciones
        if (elementos.opcionesContainer) {
            elementos.opcionesContainer.innerHTML = '';
            pregunta.opciones.forEach((opcion, idx) => {
                const opcionDiv = document.createElement('div');
                opcionDiv.className = 'opcion-item';
                if (estado.respuestas[indice] === idx) {
                    opcionDiv.classList.add('selected');
                }
                
                // Separar letra y texto
                const letra = String.fromCharCode(65 + idx); // 65 = 'A'
                let textoOpcion = opcion;
                
                // Si la opción tiene formato "A) texto", extraemos solo el texto
                if (opcion.includes(')')) {
                    textoOpcion = opcion.substring(opcion.indexOf(')') + 1).trim();
                }
                
                opcionDiv.innerHTML = `
                    <div class="d-flex align-items-center">
                        <span class="badge bg-secondary me-3" style="width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;">
                            ${letra}
                        </span>
                        <span>${textoOpcion}</span>
                    </div>
                `;
                
                // Evento click para seleccionar
                opcionDiv.addEventListener('click', () => seleccionarOpcion(indice, idx));
                
                elementos.opcionesContainer.appendChild(opcionDiv);
            });
        }
        
        // Ocultar explicación (se muestra después de responder)
        if (elementos.explicacionContainer) {
            elementos.explicacionContainer.style.display = 'none';
        }
        
        // Actualizar estado de botones de navegación
        if (elementos.btnAnterior) {
            elementos.btnAnterior.disabled = (indice === 0);
        }
        
        if (elementos.btnSiguiente) {
            if (indice === estado.totalPreguntas - 1) {
                elementos.btnSiguiente.innerHTML = 'Última <i class="fas fa-angle-double-right ms-2"></i>';
            } else {
                elementos.btnSiguiente.innerHTML = 'Siguiente <i class="fas fa-arrow-right ms-2"></i>';
            }
        }
        
        // Renderizar fórmulas con KaTeX si está disponible
        if (typeof renderMathInElement === 'function') {
            try {
                if (elementos.textoPregunta) {
                    renderMathInElement(elementos.textoPregunta, {
                        delimiters: [
                            {left: '\\(', right: '\\)', display: false},
                            {left: '\\[', right: '\\]', display: true}
                        ]
                    });
                }
            } catch (e) {
                console.log("Error en KaTeX:", e);
            }
        }
    }
    
    // ============================================
// 10. FUNCIÓN: SELECCIONAR OPCIÓN (VERSIÓN MEJORADA)
// ============================================
function seleccionarOpcion(indicePregunta, indiceOpcion) {
    // Guardar respuesta
    estado.respuestas[indicePregunta] = indiceOpcion;
    
    // Obtener la pregunta actual
    const pregunta = estado.preguntasExamen[indicePregunta];
    const opcionesContainer = elementos.opcionesContainer;
    
    if (opcionesContainer) {
        const opciones = opcionesContainer.children;
        
        // Limpiar clases anteriores y habilitar temporalmente para asignar nuevas
        for (let i = 0; i < opciones.length; i++) {
            opciones[i].classList.remove('opcion-correcta', 'opcion-incorrecta', 'selected', 'opcion-seleccionada', 'disabled');
        }
        
        // Marcar la opción correcta (verde)
        if (opciones[pregunta.correcta]) {
            opciones[pregunta.correcta].classList.add('opcion-correcta');
        }
        
        // Si el usuario seleccionó una opción diferente a la correcta, marcarla como incorrecta (rojo)
        if (indiceOpcion !== pregunta.correcta) {
            // La opción del usuario (incorrecta) se marca en rojo
            if (opciones[indiceOpcion]) {
                opciones[indiceOpcion].classList.add('opcion-incorrecta');
            }
        }
        
        // Además, queremos resaltar CUÁL fue la que eligió el usuario (naranja)
        // Esto ayuda a identificar visualmente su elección
        if (opciones[indiceOpcion]) {
            opciones[indiceOpcion].classList.add('opcion-seleccionada');
        }
        
        // Deshabilitar todos los clicks en las opciones para esta pregunta
        for (let i = 0; i < opciones.length; i++) {
            opciones[i].classList.add('disabled');
        }
    }
    
    // Mostrar explicación automáticamente
    mostrarExplicacion(indicePregunta);
    
    // Actualizar contador de respuestas
    actualizarContadores();
}
    
    // ============================================
    // 11. FUNCIÓN: MOSTRAR EXPLICACIÓN
    // ============================================
    function mostrarExplicacion(indice) {
        const pregunta = estado.preguntasExamen[indice];
        if (elementos.textoExplicacion) {
            elementos.textoExplicacion.innerHTML = pregunta.explicacion;
        }
        if (elementos.explicacionContainer) {
            elementos.explicacionContainer.style.display = 'block';
        }
        
        // Renderizar fórmulas en explicación
        if (typeof renderMathInElement === 'function' && elementos.textoExplicacion) {
            try {
                renderMathInElement(elementos.textoExplicacion, {
                    delimiters: [
                        {left: '\\(', right: '\\)', display: false},
                        {left: '\\[', right: '\\]', display: true}
                    ]
                });
            } catch (e) {
                console.log("Error en KaTeX:", e);
            }
        }
    }
    
    // ============================================
    // 12. FUNCIÓN: ACTUALIZAR CONTADORES
    // ============================================
    function actualizarContadores() {
        // Contador de preguntas respondidas
        const respondidas = estado.respuestas.filter(r => r !== null).length;
        
        if (elementos.contadorPreguntas) {
            elementos.contadorPreguntas.innerHTML = `<i class="fas fa-question-circle me-1"></i> ${estado.indiceActual + 1}/${estado.totalPreguntas}`;
        }
        
        if (elementos.respuestasContador) {
            elementos.respuestasContador.innerHTML = `${respondidas} respondidas de ${estado.totalPreguntas}`;
        }
        
        // Barra de progreso
        if (elementos.barraProgreso) {
            const progreso = (respondidas / estado.totalPreguntas) * 100;
            elementos.barraProgreso.style.width = `${progreso}%`;
        }
    }
    
    // ============================================
    // 13. EVENTOS DE NAVEGACIÓN
    // ============================================
    if (elementos.btnAnterior) {
        elementos.btnAnterior.addEventListener('click', () => {
            if (estado.indiceActual > 0) {
                estado.indiceActual--;
                mostrarPregunta(estado.indiceActual);
                actualizarContadores();
            }
        });
    }
    
    if (elementos.btnSiguiente) {
        elementos.btnSiguiente.addEventListener('click', () => {
            if (estado.indiceActual < estado.totalPreguntas - 1) {
                estado.indiceActual++;
                mostrarPregunta(estado.indiceActual);
                actualizarContadores();
            }
        });
    }
    
    // ============================================
// 14. EVENTO: MARCAR PREGUNTA (VERSIÓN MEJORADA)
// ============================================
if (elementos.btnMarcar) {
    elementos.btnMarcar.addEventListener('click', () => {
        // Cambiar estado de marcado
        estado.marcadas[estado.indiceActual] = !estado.marcadas[estado.indiceActual];
        
        // Referencia al contenedor de la pregunta actual
        const preguntaContainer = document.querySelector('.pregunta-container');
        
        if (estado.marcadas[estado.indiceActual]) {
            // Marcar: agregar estilo visual
            preguntaContainer.classList.add('pregunta-marcada');
            
            // Cambiar texto y estilo del botón
            elementos.btnMarcar.innerHTML = '<i class="fas fa-flag me-2"></i>Quitar marca';
            elementos.btnMarcar.classList.add('btn-marcado');
            
            // Mostrar notificación más sutil (opcional)
            Swal.fire({
                icon: 'info',
                title: 'Pregunta marcada',
                text: 'La pregunta ha sido marcada para revisar',
                timer: 1000,
                showConfirmButton: false,
                toast: true,
                position: 'top-end'
            });
        } else {
            // Quitar marca
            preguntaContainer.classList.remove('pregunta-marcada');
            elementos.btnMarcar.innerHTML = '<i class="fas fa-flag me-2"></i>Marcar para revisar';
            elementos.btnMarcar.classList.remove('btn-marcado');
        }
        
        // Actualizar contador de marcadas (opcional)
        actualizarContadorMarcadas();
    });
}

// Función adicional para mostrar cuántas preguntas están marcadas
function actualizarContadorMarcadas() {
    const marcadasCount = estado.marcadas.filter(m => m).length;
    
    // Buscar o crear un badge para mostrar marcadas
    let badgeMarcadas = document.getElementById('badge-marcadas');
    
    if (marcadasCount > 0) {
        if (!badgeMarcadas) {
            // Crear badge si no existe
            badgeMarcadas = document.createElement('span');
            badgeMarcadas.id = 'badge-marcadas';
            badgeMarcadas.className = 'badge-marcadas';
            badgeMarcadas.innerHTML = `<i class="fas fa-flag me-1"></i>${marcadasCount}`;
            
            // Insertar cerca del contador de respuestas
            const respuestasContador = document.getElementById('respuestas-contador');
            if (respuestasContador && respuestasContador.parentNode) {
                respuestasContador.parentNode.appendChild(badgeMarcadas);
            }
        } else {
            badgeMarcadas.innerHTML = `<i class="fas fa-flag me-1"></i>${marcadasCount}`;
        }
    } else if (badgeMarcadas) {
        badgeMarcadas.remove();
    }
}
    // ============================================
    // 15. EVENTO: FINALIZAR EXAMEN
    // ============================================
    if (elementos.btnFinalizar) {
        elementos.btnFinalizar.addEventListener('click', () => {
            const respondidas = estado.respuestas.filter(r => r !== null).length;
            
            if (respondidas < estado.totalPreguntas) {
                Swal.fire({
                    icon: 'question',
                    title: '¿Estás seguro?',
                    text: `Has respondido ${respondidas} de ${estado.totalPreguntas} preguntas. ¿Quieres finalizar?`,
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, finalizar',
                    cancelButtonText: 'Seguir practicando'
                }).then((result) => {
                    if (result.isConfirmed) {
                        mostrarResultados();
                    }
                });
            } else {
                mostrarResultados();
            }
        });
    }
    
    // ============================================
    // 16. FUNCIÓN: MOSTRAR RESULTADOS
    // ============================================
    function mostrarResultados() {
        let aciertos = 0;
        const detalles = [];
        
        estado.preguntasExamen.forEach((pregunta, idx) => {
            const respuestaUsuario = estado.respuestas[idx];
            const esCorrecta = (respuestaUsuario === pregunta.correcta);
            if (esCorrecta) aciertos++;
            
            detalles.push({
                pregunta: pregunta.pregunta,
                opciones: pregunta.opciones,
                respuestaUsuario: respuestaUsuario,
                correcta: pregunta.correcta,
                esCorrecta: esCorrecta,
                explicacion: pregunta.explicacion
            });
        });
        
        const porcentaje = ((aciertos / estado.totalPreguntas) * 100).toFixed(1);
        
        // Determinar mensaje según calificación
        let titulo, icono, color;
        if (porcentaje >= 90) {
            titulo = '¡Excelente! 🎉';
            icono = 'success';
            color = '#2ecc71';
        } else if (porcentaje >= 70) {
            titulo = '¡Buen trabajo! 👍';
            icono = 'success';
            color = '#3498db';
        } else if (porcentaje >= 60) {
            titulo = 'Puedes mejorar 💪';
            icono = 'warning';
            color = '#f39c12';
        } else {
            titulo = 'Sigue practicando 📚';
            icono = 'error';
            color = '#e74c3c';
        }
        
        // Mostrar resumen con Sweet Alert
        Swal.fire({
            title: titulo,
            html: `
                <div class="text-center">
                    <div style="font-size: 3rem; font-weight: bold; color: ${color}">
                        ${porcentaje}%
                    </div>
                    <p class="mt-3">
                        <strong>${aciertos}</strong> aciertos de <strong>${estado.totalPreguntas}</strong> preguntas
                    </p>
                    <div class="progress mt-3" style="height: 10px;">
                        <div class="progress-bar bg-success" style="width: ${porcentaje}%"></div>
                    </div>
                </div>
            `,
            icon: icono,
            confirmButtonText: 'Ver respuestas detalladas',
            showCancelButton: true,
            cancelButtonText: 'Cerrar'
        }).then((result) => {
            if (result.isConfirmed) {
                mostrarRevisionDetallada(detalles);
            }
        });
    }
    
    // ============================================
    // 17. FUNCIÓN: MOSTRAR REVISIÓN DETALLADA
    // ============================================
    function mostrarRevisionDetallada(detalles) {
        let html = '<div class="text-start" style="max-height: 500px; overflow-y: auto;">';
        
        detalles.forEach((detalle, idx) => {
            const letraUsuario = detalle.respuestaUsuario !== null ? String.fromCharCode(65 + detalle.respuestaUsuario) : 'No respondida';
            const letraCorrecta = String.fromCharCode(65 + detalle.correcta);
            const clase = detalle.esCorrecta ? 'text-success' : 'text-danger';
            
            html += `
                <div class="mb-4 p-3 border rounded ${clase}">
                    <p><strong>${idx + 1}.</strong> ${detalle.pregunta}</p>
                    <p class="mb-1"><strong>Tu respuesta:</strong> ${letraUsuario}</p>
                    <p class="mb-1"><strong>Respuesta correcta:</strong> ${letraCorrecta}</p>
                    <p class="mb-0 text-muted small">${detalle.explicacion}</p>
                </div>
            `;
        });
        
        html += '</div>';
        
        Swal.fire({
            title: 'Revisión de respuestas',
            html: html,
            icon: 'info',
            width: '800px',
            confirmButtonText: 'Entendido'
        });
    }
    
}

// ============================================
// INICIAR CUANDO EL DOM ESTÉ LISTO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log("⏳ Examen.js esperando datos...");
    // Esperar un poco para que carguen los scripts
    setTimeout(inicializarExamenConDatos, 100);
});