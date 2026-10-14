/* ==========================================================================
   CARRERA DE TORTUGAS - TRIVIA DE DESARROLLO SOFTWARE & GITHUB
   14 Preguntas con respuestas completas y Controles Teclado (W, S, D / Flechas)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. BASE DE DATOS DE LAS 14 PREGUNTAS Y RESPUESTAS DEL USUARIO
    // ----------------------------------------------------------------------
    const quizData = [
        {
            id: 1,
            word: "1. GitHub y su Función",
            question: "¿Qué es GitHub y cuál es su función en el desarrollo de software?",
            options: [
                "Plataforma para almacenar código con Git y trabajar en equipo",
                "Un sistema operativo para servidores web",
                "Un lenguaje de programación para bases de datos",
                "Un editor de código fuente sin control de versiones"
            ],
            correctIndex: 0,
            explanation: "GitHub es una plataforma que permite almacenar proyectos de software utilizando Git. Sirve para guardar código, controlar los cambios realizados, colaborar, crear repositorios, administrar ramas y hacer pull requests."
        },
        {
            id: 2,
            word: "2. Diferencia Git vs GitHub",
            question: "¿Cuál es la diferencia principal entre Git y GitHub?",
            options: [
                "Git es una plataforma web y GitHub es un lenguaje",
                "Git es el sistema de control de versiones y GitHub es la plataforma en línea para almacenar y colaborar",
                "Ambos son exactamente el mismo software instalado en la computadora",
                "GitHub solo sirve para diseñar interfaces y Git para guardar fotos"
            ],
            correctIndex: 1,
            explanation: "Git es el sistema de control de versiones que registra cambios localmente, mientras que GitHub es la plataforma en línea que aloja repositorios Git en Internet para colaborar."
        },
        {
            id: 3,
            word: "3. Repositorio",
            question: "¿Qué es un repositorio y cómo se utiliza en GitHub?",
            options: [
                "Un archivo comprimido zip ejecutable",
                "Espacio donde se almacenan los archivos de un proyecto (HTML, CSS, JS) y su historial de modificaciones",
                "Un tipo de servidor físico que se compra en tiendas",
                "Una contraseña secreta para publicar páginas"
            ],
            correctIndex: 1,
            explanation: "Un repositorio es un espacio donde se almacenan los archivos de un proyecto y su historial completo de modificaciones. En GitHub puede ser público o privado y tener múltiples colaboradores."
        },
        {
            id: 4,
            word: "4. Commits, Branches y Pull Requests",
            question: "¿Qué son los commits, branches, merge y pull requests?",
            options: [
                "Programas de diseño gráfico para hacer banners web",
                "Commit: registro de cambios. Branch: rama independiente. Merge: unir ramas. Pull request: solicitud para revisar y unir cambios",
                "Comandos para reiniciar la computadora al programar",
                "Librerías de CSS para dar estilos de animación"
            ],
            correctIndex: 1,
            explanation: "Commit es un punto de control de cambios. Branch es una versión independiente. Merge une ramas. Pull request solicita la revisión e integración del código a la rama principal."
        },
        {
            id: 5,
            word: "5. Trabajo Colaborativo",
            question: "¿Cómo se puede utilizar GitHub para trabajar colaborativamente en un proyecto?",
            options: [
                "Trabajando todos en el mismo archivo al mismo tiempo sin guardar cambios",
                "Creando un repositorio con colaboradores donde cada uno trabaja en una rama, hace commits y envía un pull request para ser revisado y fusionado con merge",
                "Enviando archivos por correo electrónico todos los días",
                "Exportando el proyecto en una memoria USB"
            ],
            correctIndex: 1,
            explanation: "Cada colaborador trabaja en una rama propia, realiza sus commits y crea un pull request. Tras la revisión, se hace merge con la rama principal, reduciendo el riesgo de perder trabajo."
        },
        {
            id: 6,
            word: "6. Ventajas de GitHub",
            question: "¿Qué ventajas ofrece GitHub para estudiantes y desarrolladores?",
            options: [
                "Permite guardar proyectos en Internet, aprender control de versiones, trabajar en equipo, guardar el historial de cambios y mostrar un portafolio",
                "Regala computadoras a quienes programen",
                "Sustituye completamente la necesidad de aprender lenguajes de programación",
                "Solo sirve para descargar juegos"
            ],
            correctIndex: 0,
            explanation: "GitHub ofrece guardar proyectos en la nube, aprender control de versiones real, trabajar colaborativamente, mantener el historial y presentar un portafolio profesional a empleadores."
        },
        {
            id: 7,
            word: "7. JavaScript en Frontend",
            question: "¿Qué es JavaScript y qué función cumple en el desarrollo frontend?",
            options: [
                "Es un lenguaje para definir estilos como colores y fuentes",
                "Es un lenguaje de programación para agregar interactividad, lógica y comportamiento dinámico a las páginas web",
                "Es un programa para maquetar el esqueleto HTML",
                "Es una base de datos relacional"
            ],
            correctIndex: 1,
            explanation: "HTML estructura, CSS da estilo y JavaScript aporta comportamiento e interactividad (responder a eventos de botones, modificar contenido, validar formularios y actualizar datos)."
        },
        {
            id: 8,
            word: "8. Framework de JavaScript",
            question: "¿Qué es un framework de JavaScript?",
            options: [
                "Una herramienta que proporciona estructura y recursos estandarizados para facilitar el desarrollo de aplicaciones web",
                "Un navegador web especial para ejecutar código",
                "Un plugin para traducir sitios a varios idiomas automáticamente",
                "Un tipo de cable para conectar servidores"
            ],
            correctIndex: 0,
            explanation: "Un framework de JS es una estructura de trabajo con reglas y herramientas listas para organizar el código y trabajar con componentes, rutas y estado de forma eficiente."
        },
        {
            id: 9,
            word: "9. Frameworks Principales",
            question: "¿Cuáles son las principales tecnologías/frameworks utilizados actualmente en frontend?",
            options: [
                "React, Angular, Vue.js y Svelte",
                "C++, Java, Pascal y Fortran",
                "Photoshop, Illustrator, Figma y Canva",
                "MySQL, Oracle, MongoDB y PostgreSQL"
            ],
            correctIndex: 0,
            explanation: "React, Angular, Vue.js y Svelte son los cuatro principales referentes y tecnologías destacadas en el ecosistema actual de desarrollo frontend."
        },
        {
            id: 10,
            word: "10. Características de Frameworks",
            question: "¿Cuáles son características clave de React, Angular, Vue.js y Svelte?",
            options: [
                "Ninguno de ellos permite crear componentes reutilizables",
                "React (basado en componentes y JSX), Angular (plataforma completa mantenida por Google), Vue.js (progresivo y flexible), Svelte (compilador de alto rendimiento)",
                "Solo funcionan en teléfonos celulares",
                "Son lenguajes de servidor que reemplazan a HTML"
            ],
            correctIndex: 1,
            explanation: "React utiliza componentes reutilizables y JSX; Angular ofrece una arquitectura empresarial estructurada; Vue es progresivo e intuitivo; Svelte realiza el trabajo duro en la compilación."
        },
        {
            id: 11,
            word: "11. Diferencias de Frameworks",
            question: "¿Cuáles son las principales diferencias conceptuales entre React, Angular, Vue.js y Svelte?",
            options: [
                "React es una biblioteca de UI; Angular y Vue son frameworks completos; Svelte adopta un enfoque basado en compilador",
                "No hay ninguna diferencia, son nombres del mismo producto",
                "React es solo para diseño, Angular para texto y Svelte para audio",
                "Angular es de código cerrado y de pago obligatorio"
            ],
            correctIndex: 0,
            explanation: "React se define como biblioteca centrada en vistas; Angular y Vue proporcionan soluciones completas de framework; Svelte compila a código imperativo nativo sin Virtual DOM."
        },
        {
            id: 12,
            word: "12. Ventajas y Desventajas",
            question: "¿Qué ventajas y desventajas generales destacan en React, Angular, Vue.js y Svelte?",
            options: [
                "Todos tienen las mismas ventajas exactas sin desventajas",
                "React (gran ecosistema vs requerir librerías extra), Angular (herramientas integradas vs mayor curva inicial), Vue (flexible vs ecosistema variado), Svelte (sintaxis sencilla y veloz vs ecosistema más pequeño)",
                "Ninguno tiene documentación disponible",
                "Solo sirven para páginas estáticas de texto"
            ],
            correctIndex: 1,
            explanation: "La elección depende del proyecto: React por su ecosistema masivo, Angular por su solidez en grandes equipos, Vue por su facilidad y Svelte por su rendimiento de compilación."
        },
        {
            id: 13,
            word: "13. Publicar en GitHub Pages",
            question: "¿Cómo se puede publicar un proyecto frontend desarrollado con JavaScript en GitHub Pages?",
            options: [
                "Enviando un disco físico por correo a GitHub",
                "Subiendo los archivos al repositorio (index.html, style.css, script.js), entrando a Configuración -> Pages, eligiendo la rama y guardando",
                "No es posible publicar proyectos web en GitHub Pages",
                "Instalando un servidor Apache dentro del archivo index.html"
            ],
            correctIndex: 1,
            explanation: "Subes tus archivos web al repositorio, ingresas a Settings -> Pages, seleccionas la rama de publicación (por ejemplo main o gh-pages) y GitHub genera una URL pública para acceder a tu web."
        },
        {
            id: 14,
            word: "14. Flujo de Trabajo Integrado",
            question: "¿Cómo se relacionan GitHub, Git y los frameworks frontend dentro de un proyecto de desarrollo web?",
            options: [
                "Son competidores y no se pueden usar juntos",
                "Se crea la web con HTML/CSS/JS/Framework -> Git controla las versiones -> GitHub almacena y colabora -> GitHub Pages publica el proyecto web",
                "Git compila el código, GitHub diseña las imágenes y los frameworks son el servidor",
                "Solo se relacionan al momento de borrar el proyecto"
            ],
            correctIndex: 1,
            explanation: "El flujo estándar es: Desarrollas la interfaz con JS/Framework -> Usas Git para guardar versiones -> Subes a GitHub para colaborar en equipo -> Publicas con GitHub Pages."
        }
    ];

    // ----------------------------------------------------------------------
    // 2. ESTADO DEL JUEGO Y CONTROLES
    // ----------------------------------------------------------------------
    let currentQuestionIndex = 0;
    let playerScore = 0;
    let playerStreak = 0;
    let correctAnswersCount = 0;
    let playerPos = 2; // Porcentaje horizontal (0% a 100%)
    let rivalPos = 2;
    let playerLaneTop = 12; // Posición vertical en carril
    
    let timerSeconds = 0;
    let timerInterval = null;
    let rivalInterval = null;
    let soundEnabled = true;
    let gameEnded = false;
    let focusedOptionIndex = 0;

    // DOM Elements
    const timerDisplay = document.getElementById('timer-display');
    const scoreDisplay = document.getElementById('score-display');
    const streakDisplay = document.getElementById('streak-display');
    const progressText = document.getElementById('progress-text');
    const soundBtn = document.getElementById('sound-btn');
    const soundIcon = document.getElementById('sound-icon');
    
    const PlayerTurtle = document.getElementById('player-turtle');
    const rivalTurtle = document.getElementById('rival-turtle');
    const playerDistance = document.getElementById('player-distance');
    const rivalDistance = document.getElementById('rival-distance');
    const trackStatusMessage = document.getElementById('track-status-message');

    const btnUp = document.getElementById('btn-up');
    const btnDown = document.getElementById('btn-down');
    const btnRun = document.getElementById('btn-run');

    const currentQuestionNum = document.getElementById('current-question-num');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackBanner = document.getElementById('feedback-banner');
    const feedbackIcon = document.getElementById('feedback-icon');
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackDesc = document.getElementById('feedback-desc');
    const wordsGrid = document.getElementById('words-grid');

    const endModal = document.getElementById('end-modal');
    const modalBanner = document.getElementById('modal-banner');
    const modalEmoji = document.getElementById('modal-emoji');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const finalTime = document.getElementById('final-time');
    const finalScore = document.getElementById('final-score');
    const finalAccuracy = document.getElementById('final-accuracy');
    const restartBtn = document.getElementById('restart-btn');

    // ----------------------------------------------------------------------
    // 3. SINTETIZADOR DE AUDIO (WEB AUDIO API)
    // ----------------------------------------------------------------------
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioCtx = null;

    function initAudio() {
        if (!audioCtx) {
            audioCtx = new AudioContext();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    }

    function playSound(type) {
        if (!soundEnabled) return;
        try {
            initAudio();
            const now = audioCtx.currentTime;
            
            if (type === 'click') {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(600, now);
                osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
                gain.gain.setValueAtTime(0.2, now);
                gain.gain.linearRampToValueAtTime(0.01, now + 0.05);
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start(now);
                osc.stop(now + 0.05);
            } else if (type === 'run') {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(350, now);
                osc.frequency.linearRampToValueAtTime(620, now + 0.08);
                gain.gain.setValueAtTime(0.2, now);
                gain.gain.linearRampToValueAtTime(0.01, now + 0.08);
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start(now);
                osc.stop(now + 0.08);
            } else if (type === 'correct') {
                [523.25, 659.25, 783.99].forEach((freq, idx) => {
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, now + idx * 0.08);
                    gain.gain.setValueAtTime(0.25, now + idx * 0.08);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);
                    osc.connect(gain);
                    gain.connect(audioCtx.destination);
                    osc.start(now + idx * 0.08);
                    osc.stop(now + idx * 0.08 + 0.3);
                });
            } else if (type === 'incorrect') {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(180, now);
                osc.frequency.linearRampToValueAtTime(110, now + 0.25);
                gain.gain.setValueAtTime(0.3, now);
                gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start(now);
                osc.stop(now + 0.25);
            } else if (type === 'victory') {
                const notes = [523.25, 659.25, 783.99, 1046.50];
                notes.forEach((freq, i) => {
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, now + i * 0.12);
                    gain.gain.setValueAtTime(0.3, now + i * 0.12);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.5);
                    osc.connect(gain);
                    gain.connect(audioCtx.destination);
                    osc.start(now + i * 0.12);
                    osc.stop(now + i * 0.12 + 0.5);
                });
            }
        } catch (e) {
            console.log("Audio waiting for interaction:", e);
        }
    }

    // ----------------------------------------------------------------------
    // 4. INICIALIZACIÓN Y CONTROL DEL JUEGO
    // ----------------------------------------------------------------------
    function initGame() {
        currentQuestionIndex = 0;
        playerScore = 0;
        playerStreak = 0;
        correctAnswersCount = 0;
        playerPos = 2;
        rivalPos = 2;
        playerLaneTop = 12;
        timerSeconds = 0;
        gameEnded = false;

        updateStatsUI();
        updateTurtlesUI();
        renderWordsGrid();
        loadQuestion(0);

        // Temporizador de carrera
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            if (!gameEnded) {
                timerSeconds++;
                updateTimerDisplay();
            }
        }, 1000);

        // Movimiento de la tortuga rival (AI)
        clearInterval(rivalInterval);
        rivalInterval = setInterval(moveRivalAI, 2500);

        endModal.classList.add('hidden');
        trackStatusMessage.textContent = "🎮 ¡Presiona D o ESPACIO para CORRER y W/S para cambiar posición!";
    }

    function updateTimerDisplay() {
        const mins = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
        const secs = String(timerSeconds % 60).padStart(2, '0');
        timerDisplay.textContent = `${mins}:${secs}`;
    }

    function updateStatsUI() {
        scoreDisplay.textContent = `${playerScore} PTS`;
        streakDisplay.textContent = `x${playerStreak}`;
        progressText.textContent = `${currentQuestionIndex} / 14`;
    }

    function updateTurtlesUI() {
        const maxTrackPos = 88;
        const playerLeft = Math.min(2 + (playerPos / 100) * (maxTrackPos - 2), maxTrackPos);
        const rivalLeft = Math.min(2 + (rivalPos / 100) * (maxTrackPos - 2), maxTrackPos);

        playerTurtle.style.left = `${playerLeft}%`;
        playerTurtle.style.top = `${playerLaneTop}px`;

        rivalTurtle.style.left = `${rivalLeft}%`;

        playerDistance.textContent = `${Math.round(playerPos)}%`;
        rivalDistance.textContent = `${Math.round(rivalPos)}%`;
    }

    // ----------------------------------------------------------------------
    // 5. ACCIONES DE TECLAS: W (Arriba), S (Abajo), D / ESPACIO (Correr)
    // ----------------------------------------------------------------------
    function runSprint() {
        if (gameEnded) return;

        playSound('run');
        // Avanza 1.8% por cada pulsación de la tecla de CORRER
        playerPos += 1.8;
        playerScore += 10;

        playerTurtle.classList.add('boosting');
        setTimeout(() => playerTurtle.classList.remove('boosting'), 400);

        updateTurtlesUI();
        updateStatsUI();
        trackStatusMessage.textContent = "⚡ ¡ZAS! Presionaste CORRER (D / Espacio) y la tortuga aceleró.";

        if (playerPos >= 100) {
            checkWinner(true);
        }
    }

    function moveUp() {
        if (gameEnded) return;
        playSound('click');
        playerLaneTop = Math.max(4, playerLaneTop - 12);
        updateTurtlesUI();
        
        const btns = optionsContainer.querySelectorAll('.option-btn');
        if (btns.length > 0) {
            focusedOptionIndex = (focusedOptionIndex - 1 + btns.length) % btns.length;
            highlightFocusedOption();
        }
    }

    function moveDown() {
        if (gameEnded) return;
        playSound('click');
        playerLaneTop = Math.min(24, playerLaneTop + 12);
        updateTurtlesUI();

        const btns = optionsContainer.querySelectorAll('.option-btn');
        if (btns.length > 0) {
            focusedOptionIndex = (focusedOptionIndex + 1) % btns.length;
            highlightFocusedOption();
        }
    }

    function highlightFocusedOption() {
        const btns = optionsContainer.querySelectorAll('.option-btn');
        btns.forEach((b, idx) => {
            if (idx === focusedOptionIndex) {
                b.classList.add('focused');
            } else {
                b.classList.remove('focused');
            }
        });
    }

    // ----------------------------------------------------------------------
    // 6. RENDERIZADO DE LAS 14 PREGUNTAS / PALABRAS EN EL DICCIONARIO
    // ----------------------------------------------------------------------
    function renderWordsGrid() {
        wordsGrid.innerHTML = '';
        quizData.forEach((q, index) => {
            const isUnlocked = index < currentQuestionIndex;
            const card = document.createElement('div');
            card.className = `word-card ${isUnlocked ? 'unlocked' : ''}`;
            card.innerHTML = `
                <span class="word-card-num">Pregunta #${q.id}</span>
                <span class="word-card-title">${q.word}</span>
            `;
            wordsGrid.appendChild(card);
        });
    }

    // ----------------------------------------------------------------------
    // 7. CARGAR PREGUNTA ACTUAL
    // ----------------------------------------------------------------------
    function loadQuestion(index) {
        if (index >= quizData.length) {
            checkWinner(true);
            return;
        }

        const data = quizData[index];
        currentQuestionNum.textContent = index + 1;
        questionText.textContent = data.question;
        feedbackBanner.classList.add('hidden');

        optionsContainer.innerHTML = '';
        focusedOptionIndex = 0;

        const optionsWithMeta = data.options.map((opt, i) => ({
            text: opt,
            isCorrect: i === data.correctIndex
        }));
        shuffleArray(optionsWithMeta);

        optionsWithMeta.forEach((optObj, idx) => {
            const btn = document.createElement('button');
            btn.className = `option-btn ${idx === 0 ? 'focused' : ''}`;
            btn.innerHTML = `
                <span>${optObj.text}</span>
                <span class="option-key-badge">Tecla [${idx + 1}]</span>
            `;

            btn.addEventListener('click', () => {
                handleAnswer(btn, optObj.isCorrect, data);
            });

            optionsContainer.appendChild(btn);
        });

        renderWordsGrid();
        updateStatsUI();
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // ----------------------------------------------------------------------
    // 8. RESULTADO DE RESPUESTA
    // ----------------------------------------------------------------------
    function handleAnswer(selectedBtn, isCorrect, questionObj) {
        const allBtns = optionsContainer.querySelectorAll('.option-btn');
        allBtns.forEach(b => b.classList.add('disabled'));

        feedbackBanner.classList.remove('hidden');

        if (isCorrect) {
            playSound('correct');
            selectedBtn.classList.add('correct');
            
            playerStreak++;
            correctAnswersCount++;
            
            const addedPoints = 100 + (playerStreak * 50);
            playerScore += addedPoints;

            const baseStep = 7.14;
            const streakBonus = Math.min(playerStreak * 0.5, 3);
            playerPos += baseStep + streakBonus;

            playerTurtle.classList.add('boosting');
            setTimeout(() => playerTurtle.classList.remove('boosting'), 1000);

            feedbackBanner.classList.remove('incorrect-banner');
            feedbackIcon.textContent = '✅';
            feedbackTitle.textContent = `¡Respuesta Correcta! (${questionObj.word})`;
            feedbackDesc.textContent = `${questionObj.explanation}`;
            trackStatusMessage.textContent = `⚡ ¡Respuesta exacta! Tu tortuga dio un súper salto nitro.`;
        } else {
            playSound('incorrect');
            selectedBtn.classList.add('incorrect');
            
            playerStreak = 0;
            
            // Mostrar la correcta
            const correctOpt = questionObj.options[questionObj.correctIndex];
            allBtns.forEach(b => {
                if (b.textContent.includes(correctOpt)) {
                    b.classList.add('correct');
                }
            });

            rivalPos += 4;

            feedbackBanner.classList.add('incorrect-banner');
            feedbackIcon.textContent = '❌';
            feedbackTitle.textContent = `Incorrecto. Explicación de la Pregunta #${questionObj.id}:`;
            feedbackDesc.textContent = `${questionObj.explanation}`;
            trackStatusMessage.textContent = `⚠️ Fallaste la pregunta. La tortuga rival aprovecha para adelantarse.`;
        }

        updateTurtlesUI();
        updateStatsUI();

        if (playerPos >= 100) {
            setTimeout(() => checkWinner(true), 1200);
            return;
        }

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex >= quizData.length) {
                checkWinner(playerPos > rivalPos);
            } else {
                loadQuestion(currentQuestionIndex);
            }
        }, 2600);
    }

    // ----------------------------------------------------------------------
    // 9. INTELIGENCIA ARTIFICIAL RIVAL
    // ----------------------------------------------------------------------
    function moveRivalAI() {
        if (gameEnded) return;

        const increment = (Math.random() * 3) + 2;
        rivalPos += increment;

        updateTurtlesUI();

        if (rivalPos >= 100 && playerPos < 100) {
            checkWinner(false);
        }
    }

    // ----------------------------------------------------------------------
    // 10. RESULTADO Y MODAL FINAL DE CARRERA
    // ----------------------------------------------------------------------
    function checkWinner(playerWon) {
        if (gameEnded) return;
        gameEnded = true;

        clearInterval(timerInterval);
        clearInterval(rivalInterval);

        const mins = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
        const secs = String(timerSeconds % 60).padStart(2, '0');
        finalTime.textContent = `${mins}:${secs}`;
        finalScore.textContent = `${playerScore} PTS`;
        finalAccuracy.textContent = `${correctAnswersCount} / 14 (${Math.round((correctAnswersCount / 14) * 100)}%)`;

        if (playerWon || playerPos >= rivalPos) {
            playSound('victory');
            modalBanner.className = 'modal-banner';
            modalEmoji.textContent = '🏆';
            modalTitle.textContent = '¡VICTORIA ÉPICA!';
            modalMessage.textContent = '¡Felicidades! Completaste las 14 preguntas sobre GitHub, Git y Frameworks Frontend y tu tortuga ganó la carrera.';
            startConfetti();
        } else {
            playSound('incorrect');
            modalBanner.className = 'modal-banner defeat';
            modalEmoji.textContent = '🐢💨';
            modalTitle.textContent = '¡RIVAL LLEGÓ PRIMERO!';
            modalMessage.textContent = 'La Tortuga Rival cruzó primero la meta. ¡Usa las teclas W, S, D para volver a intentarlo y ganar!';
        }

        endModal.classList.remove('hidden');
    }

    // ----------------------------------------------------------------------
    // 11. CONFETI ANIMADO EN CANVAS
    // ----------------------------------------------------------------------
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    let confettiParticles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function startConfetti() {
        confettiParticles = [];
        const colors = ['#10b981', '#fbbf24', '#38bdf8', '#a855f7', '#ef4444'];
        
        for (let i = 0; i < 120; i++) {
            confettiParticles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                size: Math.random() * 8 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                speedY: Math.random() * 3 + 2,
                speedX: (Math.random() - 0.5) * 2,
                rotation: Math.random() * 360,
                rotSpeed: (Math.random() - 0.5) * 4
            });
        }
        requestAnimationFrame(renderConfetti);
    }

    function renderConfetti() {
        if (!gameEnded) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confettiParticles.forEach(p => {
            p.y += p.speedY;
            p.x += p.speedX;
            p.rotation += p.rotSpeed;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();

            if (p.y > canvas.height) {
                p.y = -20;
                p.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(renderConfetti);
    }

    // ----------------------------------------------------------------------
    // 12. ESCUCHADOR DE TECLAS: W (Arriba), S (Abajo), D / ESPACIO / ➡️ (Correr)
    // ----------------------------------------------------------------------
    window.addEventListener('keydown', (e) => {
        if (gameEnded) {
            if (e.code === 'Space' || e.code === 'Enter' || e.code === 'KeyD') {
                e.preventDefault();
                initGame();
            }
            return;
        }

        // TECLAS DE CORRER: D, ESPACIO, FLECHA DERECHA
        if (e.code === 'KeyD' || e.code === 'Space' || e.code === 'ArrowRight') {
            e.preventDefault();
            btnRun.classList.add('active');
            setTimeout(() => btnRun.classList.remove('active'), 150);
            runSprint();
        }

        // TECLAS DE ARRIBA: W, FLECHA ARRIBA
        if (e.code === 'KeyW' || e.code === 'ArrowUp') {
            e.preventDefault();
            btnUp.classList.add('active');
            setTimeout(() => btnUp.classList.remove('active'), 150);
            moveUp();
        }

        // TECLAS DE ABAJO: S, FLECHA ABAJO
        if (e.code === 'KeyS' || e.code === 'ArrowDown') {
            e.preventDefault();
            btnDown.classList.add('active');
            setTimeout(() => btnDown.classList.remove('active'), 150);
            moveDown();
        }

        // TECLAS 1, 2, 3, 4 PARA RESPONDER
        if (['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Numpad1', 'Numpad2', 'Numpad3', 'Numpad4'].includes(e.code)) {
            const num = parseInt(e.key);
            const btns = optionsContainer.querySelectorAll('.option-btn');
            if (num >= 1 && num <= btns.length && !btns[num - 1].classList.contains('disabled')) {
                btns[num - 1].click();
            }
        }

        // ENTER PARA CONFIRMAR OPCIÓN FOCUSEADA
        if (e.code === 'Enter') {
            const btns = optionsContainer.querySelectorAll('.option-btn');
            if (btns.length > 0 && focusedOptionIndex < btns.length && !btns[focusedOptionIndex].classList.contains('disabled')) {
                btns[focusedOptionIndex].click();
            }
        }
    });

    // Eventos para botones táctiles
    btnRun.addEventListener('click', runSprint);
    btnUp.addEventListener('click', moveUp);
    btnDown.addEventListener('click', moveDown);

    soundBtn.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        soundIcon.textContent = soundEnabled ? '🔊' : '🔇';
        soundBtn.title = soundEnabled ? 'Sonido Activado' : 'Sonido Desactivado';
        if (soundEnabled) playSound('click');
    });

    restartBtn.addEventListener('click', () => {
        playSound('click');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        initGame();
    });

    // Iniciar juego por primera vez
    initGame();
});
