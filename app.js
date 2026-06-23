const bancoPreguntasPorNivel = {
    0: [
        { categoria: "F1 - PHISHING SMS", q: "Te llega un SMS diciendo que tu paquete de correo está retenido y debes pagar $1.50 en un link externo. ¿Cómo actúas?", opts: ["Pago rápido, es poco dinero.", "Borro el mensaje. Es Smishing para robar mi tarjeta.", "Abro el enlace solo para ver si es real."], correcta: 1 },
        { categoria: "F1 - CONTRASEÑAS", q: "¿Cuál es la práctica más segura para gestionar tus accesos en plataformas web?", opts: ["Usar la misma clave en todo cambiando el año.", "Anotarlas en un bloc de notas en el escritorio.", "Usar un gestor de contraseñas con claves robustas."], correcta: 2 },
        { categoria: "F1 - REDES WIFI", q: "Estás en un centro comercial y ves una red Wi-Fi abierta sin contraseña llamada 'Internet_Gratis'. ¿Qué es seguro hacer?", opts: ["Conectarme pero evitar entrar a apps de bancos.", "No conectarme, puede ser un punto de acceso falso para capturar mi tráfico.", "Conectarme normalmente para actualizar mis juegos móviles."], correcta: 1 },
        { categoria: "F1 - INGENIERÍA SOCIAL", q: "Alguien te llama diciendo ser de tu banco y te pide los números de atrás de tu tarjeta de crédito por 'mantenimiento'. ¿Qué haces?", opts: ["Se los doy para evitar que bloqueen mi cuenta.", "Cuelgo de inmediato. Los bancos nunca solicitan códigos de seguridad por llamada.", "Le doy números falsos para jugar con el operador."], correcta: 1 },
        { categoria: "F1 - MALWARE", q: "Descargas un activador de software gratuito y Windows Defender te alerta de una amenaza 'Trojan:Win32'. ¿Qué es lo más prudente?", opts: ["Desactivar el antivirus porque seguro es un falso positivo.", "Eliminar el archivo inmediatamente; altera el sistema para abrir puertas traseras.", "Mover el archivo a un pendrive para limpiarlo luego."], correcta: 1 },
        { categoria: "F1 - ACTUALIZACIONES", q: "🔒 ¿Por qué es crítico instalar parches de seguridad de Windows o tu sistema móvil apenas salen?", opts: ["Por que hacen que la batería dure el doble.", "Porque cierran vulnerabilidades de día cero que los atacantes ya conocen.", "Solo sirven para cambiar la interfaz estética del sistema."], correcta: 1 }
    ],
    1: [
        { categoria: "F2 - IA Y PRIVACIDAD", q: "Quieres usar una IA generativa en línea para resumir un informe confidencial. ¿Cuál es el principal riesgo?", opts: ["La IA podría asimilar mis datos privados en su modelo público de entrenamiento.", "El documento podría quedar mal estructurado.", "Las IAs borran todo al instante, no hay riesgo."], correcta: 0 },
        { categoria: "F2 - DEEPFAKES", q: "Ves un video donde un líder de tecnología promociona una application financiera milagrosa, pero su voz se oye algo robótica. ¿Qué sospechas?", opts: ["Fallo de edición del video original.", "Un Deepfake de audio/video creado con IA para cometer fraudes.", "Mala señal de mi operador de internet."], correcta: 1 },
        { categoria: "F2 - INGENIERÍA SOCIAL IA", q: "Una cuenta de soporte técnico automatizada por IA te contacta pidiendo tu código 2FA para 'verificar tu identidad'. ¿Qué haces?", opts: ["Se lo doy, al ser una IA oficial es seguro.", "Jamás comparto códigos temporales, el soporte legítimo nunca los pide.", "Le pido que me llame por teléfono primero."], correcta: 1 },
        { categoria: "F2 - ENGAÑOS LLAMADAS", q: "Recibes una llamada telefónica urgente donde escuchas la voz de un familiar pidiéndote dinero por una emergencia, pero la llamada se corta rápido. ¿Qué debes verificar?", opts: ["Hacer una transferencia de inmediato.", "Llamar directamente al familiar por un canal seguro; la IA puede clonar voces con muestras de pocos segundos.", "Asumir que es real e ir al banco."], correcta: 1 },
        { categoria: "F2 - CHATBOTS INTEGRADOS", q: "Al interactuar con una extensión de IA de tu navegador para transacciones, te pide acceso total al portapapeles. ¿Qué riesgo representa?", opts: ["Ninguno, es para copiar texto más rápido.", "Podría capturar credenciales o claves criptográficas copiadas por el usuario.", "Hace que el navegador consuma menos RAM."], correcta: 1 },
        { categoria: "F2 - INTELIGENCIA DE AMENAZAS", q: "En una empresa, ¿cuál es el uso defensivo correcto de la IA en ciberseguridad?", opts: ["Automatizar el escaneo de logs para detectar patrones de ataque inusuales en tiempo real.", "Reemplazar por completo a todo el equipo de ingenieros de seguridad.", "Desactivar firewalls obsoletos de forma autónoma."], correcta: 0 }
    ],
    2: [
        { categoria: "F3 - RESPALDOS ISO 27001", q: "¿Cómo debes estructurar una política eficaz de copias de seguridad según buenas prácticas?", opts: ["Guardar todo en un disco duro externo conectado permanentemente a la PC.", "Aplicar la regla 3-2-1: 3 copias, 2 medios distintos, 1 fuera de línea (offline).", "Confiar en que la nube sincroniza todo automáticamente."], correcta: 1 },
        { categoria: "F3 - CIFRADO WEB", q: "Ves que un sitio web de compras usa el prefijo 'http://' en lugar de 'https://'. ¿Qué significa técnicamente?", opts: ["Que los datos viajan en texto plano y pueden ser interceptados mediante sniffing.", "Que la página carga más rápido por no encriptar.", "No pasa nada mientras el logo de la marca sea real."], correcta: 0 },
        { categoria: "F3 - PUERTOS LÓGICOS", q: "Durante una auditoría de red, detectas que el puerto de administración remota Telnet (23) está abierto al exterior. ¿Cuál es la acción correcta?", opts: ["Dejarlo abierto para mantenimientos rápidos de los servidores.", "Cerrarlo inmediatamente y migrar el tráfico a un protocolo seguro cifrado como SSH (22).", "Cambiarle el número de puerto al 8080."], correcta: 1 },
        { categoria: "F3 - MITIGACIÓN RANSOMWARE", q: "Un servidor de la organización amanece con archivos cifrados con extensión '.locked' y una nota de rescate. ¿Cuál es el primer paso del protocolo de incidentes?", opts: ["Pagar el rescate en bitcoins rápido para que no borren nada.", "Aislar el servidor de la red desconectando el cable/Wi-Fi para evitar el movimiento lateral.", "Reiniciar el servidor repetidas veces."], correcta: 1 },
        { categoria: "F3 - AUTENTICACIÓN AVANZADA", q: "¿Cuál de los siguientes métodos de Segundo Factor de Autenticación (2FA) se considera el más inmune ante ataques de Phishing inverso?", opts: ["Mensajes de texto (SMS).", "Tokens basados en hardware físico (FIDO2 / llaves USB Yubikey).", "Correos electrónicos de respaldo."], correcta: 1 },
        { categoria: "F3 - POLÍTICA DE PRIVILEGIOS", q: "💻 ¿En qué consiste el 'Principio del Menor Privilegio' en control de accesos?", opts: ["Dar accesos completos a todos los ingenieros por igual para evitar retrasos.", "Garantizar a cada usuario únicamente los permisos mínimos necesarios para realizar sus tareas laborales.", "Asignar roles según el orden de llegada a la empresa."], correcta: 1 }
    ]
};

const anunciosIngenieriaSocial = [
    "🔥 ¡FELICIDADES! Eres el visitante 1,000,000. Reclama tu iPhone 17 Pro Max GRATIS aquí. ¡Solo quedan 2 minutos! 📲",
    "📍 Laura está a solo 4.8 km de ti y quiere ver tu perfil ahora mismo. Haz clic para chatear en vivo. 💬",
    "⚠️ ¡ALERTA DE VIRUS! Tu navegador Chrome ha sido comprometido por 3 troyanos. Haz clic para DESCARGAR Antivirus_Gratis.exe inmediato. 🛑",
    "💸 ¡GANA $500 AL DÍA DESDE CASA! Sin experiencia. Cupos limitados para Panamá. Haz clic y empieza a facturar ya. 💰"
];

const jefes = [
    { name: "👾 Troyano.bat (Fase 1)", hp: 100, daño: 20, avatar: "👾" },
    { name: "🤖 Rogue_AI_Botnet (Fase 2)", hp: 120, daño: 30, avatar: "🤖" },
    { name: "👑 Crypto_Ransom_Core (Fase 3)", hp: 150, daño: 40, avatar: "👑" }
];

let jefeActualIndex = 0;
let score = 0;
let playerHP = 100;
let bossHP = jefes[jefeActualIndex].hp;
let maxBossHP = jefes[jefeActualIndex].hp;

let poolPreguntasFase = []; 
let preguntaActual = null;
let criticoActivo = false;

let timerInterval = null;
let tiempoRestante = 25;
const TIEMPO_MAX = 25;
let audioMuted = false;

const screenStart = document.getElementById("start-screen");
const screenGame = document.getElementById("main-game-screen");
const screenGameOver = document.getElementById("game-over-screen");
const screenVictory = document.getElementById("victory-screen");
const txtGameOverReason = document.getElementById("game-over-reason");

const btnStartGame = document.getElementById("btn-start-game");
const txtQuestion = document.getElementById("question");
const txtCategory = document.getElementById("question-category");
const divOptions = document.getElementById("options");
const txtLog = document.getElementById("log-text");
const txtScore = document.getElementById("game-score");
const btnVpn = document.getElementById("skill-vpn");
const btnCrit = document.getElementById("skill-crit");
const alertCrit = document.getElementById("modifier-status");

const gameViewport = document.getElementById("game-viewport");
const playerCard = document.getElementById("player-card");
const bossCard = document.getElementById("boss-card");
const bossAvatarIcon = document.getElementById("boss-avatar-icon");
const timerBar = document.getElementById("timer-bar");
const btnMute = document.getElementById("btn-mute");

const nameBoss = document.getElementById("boss-name");
const barPlayer = document.getElementById("player-hp");
const barBoss = document.getElementById("boss-hp");
const txtPlayerHp = document.getElementById("player-hp-txt");
const txtBossHp = document.getElementById("boss-hp-txt");

const btnGlobalRestart = document.getElementById("btn-global-restart");
const btnGlobalVictory = document.getElementById("btn-global-victory");

const popupBox = document.getElementById("malicious-popup");
const popupBody = document.getElementById("popup-body");
const btnClosePopup = document.getElementById("btn-close-popup");

const btnToggleInstructions = document.getElementById("btn-toggle-instructions");
const instructionsContent = document.getElementById("instructions-content");
const accordionArrow = document.getElementById("accordion-arrow");

const btnToggleShop = document.getElementById("btn-toggle-shop");
const shopContent = document.getElementById("shop-content");
const shopAccordionArrow = document.getElementById("shop-accordion-arrow");

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(tipo) {
    if (audioMuted) return; 
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    const time = audioCtx.currentTime;

    if (tipo === "acierto") {
        osc.frequency.setValueAtTime(523.25, time);
        osc.frequency.exponentialRampToValueAtTime(783.99, time + 0.15);
        gainNode.gain.setValueAtTime(0.1, time);
        gainNode.gain.linearRampToValueAtTime(0, time + 0.2);
        osc.start(time); osc.stop(time + 0.2);
    } else if (tipo === "error") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(140, time);
        osc.frequency.linearRampToValueAtTime(60, time + 0.25);
        gainNode.gain.setValueAtTime(0.15, time);
        gainNode.gain.linearRampToValueAtTime(0, time + 0.3);
        osc.start(time); osc.stop(time + 0.3);
    } else if (tipo === "curar") {
        osc.frequency.setValueAtTime(293.66, time);
        osc.frequency.exponentialRampToValueAtTime(587.33, time + 0.3);
        gainNode.gain.setValueAtTime(0.1, time);
        gainNode.gain.linearRampToValueAtTime(0, time + 0.3);
        osc.start(time); osc.stop(time + 0.3);
    }
}

btnMute.addEventListener("click", () => {
    audioMuted = !audioMuted;
    btnMute.textContent = audioMuted ? "🔇 Sonido: OFF" : "🔊 Sonido: ON";
});

btnToggleInstructions.addEventListener("click", () => {
    const isHidden = instructionsContent.classList.contains("hidden");
    if (isHidden) {
        instructionsContent.classList.remove("hidden");
        accordionArrow.textContent = "▲";
    } else {
        instructionsContent.classList.add("hidden");
        accordionArrow.textContent = "▼";
    }
});

btnToggleShop.addEventListener("click", () => {
    const isHidden = shopContent.classList.contains("hidden");
    if (isHidden) {
        shopContent.classList.remove("hidden");
        shopAccordionArrow.textContent = "▲";
    } else {
        shopContent.classList.add("hidden");
        shopAccordionArrow.textContent = "▼";
    }
});

btnStartGame.addEventListener("click", () => {
    screenStart.classList.add("hidden");
    screenGame.classList.remove("hidden");
    inicializarPreguntasDeFase();
    iniciarCombate();
});

function inicializarPreguntasDeFase() {
    const originales = bancoPreguntasPorNivel[jefeActualIndex] || bancoPreguntasPorNivel[0];
    poolPreguntasFase = [...originales];
}

function actualizarInterfaz() {
    barPlayer.style.width = `${playerHP}%`;
    barBoss.style.width = `${(bossHP / maxBossHP) * 100}%`;
    txtPlayerHp.textContent = playerHP;
    txtBossHp.textContent = bossHP;
    txtScore.textContent = score;
    
    nameBoss.textContent = jefes[jefeActualIndex].name;
    bossAvatarIcon.textContent = jefes[jefeActualIndex].avatar;

    btnVpn.disabled = !(score >= 40 && playerHP < 100);
    btnCrit.disabled = !(score >= 30 && !criticoActivo);

    if (criticoActivo) alertCrit.classList.remove("hidden");
    else alertCrit.classList.add("hidden");
}

function iniciarTemporizador() {
    clearInterval(timerInterval);
    tiempoRestante = TIEMPO_MAX;
    timerBar.style.width = "100%";
    
    timerInterval = setInterval(() => {
        tiempoRestante -= 0.1;
        const porcentaje = (tiempoRestante / TIEMPO_MAX) * 100;
        timerBar.style.width = `${porcentaje}%`;
        
        if (tiempoRestante <= 0) {
            clearInterval(timerInterval);
            procesarTimeout();
        }
    }, 100);
}

function procesarTimeout() {
    let dañoEnemigo = jefes[jefeActualIndex].daño;
    playerHP -= dañoEnemigo;
    if (playerHP < 0) playerHP = 0;
    
    playSound("error");
    
    gameViewport.classList.add("glitch-hit");
    playerCard.classList.add("shake-damage");
    setTimeout(() => {
        gameViewport.classList.remove("glitch-hit");
        playerCard.classList.remove("shake-damage");
    }, 400);

    txtLog.textContent = `⏳ ¡TIEMPO AGOTADO! El malware aprovechó el retraso técnico e infectó tus defensas (-${dañoEnemigo} HP).`;
    criticoActivo = false;
    actualizarInterfaz();
    
    divOptions.innerHTML = "<p style='color: #ef4444; font-style: italic; font-size:0.85rem;'>Buscando nueva traza de red...</p>";
    
    setTimeout(() => {
        lanzarPopupAleatorio();
        iniciarCombate();
    }, 2200);
}

function lanzarPopupAleatorio() {
    popupBox.classList.add("hidden");
    if (Math.random() < 0.25) {
        const randomAdIndex = Math.floor(Math.random() * anunciosIngenieriaSocial.length);
        popupBody.innerHTML = `${anunciosIngenieriaSocial[randomAdIndex]} <em>👉 ¡Haz clic aquí para reclamar!</em>`;
        const randomTop = Math.floor(Math.random() * 30) + 20; 
        popupBox.style.top = `${randomTop}%`;
        popupBox.classList.remove("hidden");
    }
}

function iniciarCombate() {
    if (playerHP <= 0) {
        clearInterval(timerInterval);
        ejecutarGameOver("El malware superó tus políticas de seguridad perimetral. El núcleo del sistema fue compromised.");
        return;
    }

    if (bossHP <= 0) {
        clearInterval(timerInterval);
        score += 50; 
        jefeActualIndex++;
        
        if (jefeActualIndex < jefes.length) {
            txtLog.textContent = `💥 ¡Amenaza purgada! Escalando privilegios contra: ${jefes[jefeActualIndex].name}`;
            bossHP = jefes[jefeActualIndex].hp;
            maxBossHP = jefes[jefeActualIndex].hp;
            inicializarPreguntasDeFase();
        } else {
            popupBox.classList.add("hidden");
            screenGame.classList.add("hidden");
            screenVictory.classList.remove("hidden");
            actualizarInterfaz();
            return;
        }
    }

    if (poolPreguntasFase.length === 0) {
        inicializarPreguntasDeFase();
    }

    const randomIndex = Math.floor(Math.random() * poolPreguntasFase.length);
    preguntaActual = poolPreguntasFase[randomIndex];

    txtCategory.textContent = `VÉCTOR: ${preguntaActual.categoria}`;
    txtQuestion.textContent = preguntaActual.q;
    divOptions.innerHTML = "";

    preguntaActual.opts.forEach((opcion, i) => {
        const btn = document.createElement("button");
        btn.className = "opt-btn";
        btn.textContent = opcion;
        btn.onclick = () => {
            clearInterval(timerInterval); 
            popupBox.classList.add("hidden");
            procesarTurno(i, randomIndex);
        };
        divOptions.appendChild(btn);
    });

    actualizarInterfaz();
    iniciarTemporizador(); 
}

function procesarTurno(seleccion, indexEnPool) {
    let dañoEnemigo = jefes[jefeActualIndex].daño;
    let dañoAlBoss = 40;

    if (criticoActivo) {
        dañoAlBoss = 80;  
        dañoEnemigo += 15; 
    }

    if (seleccion === preguntaActual.correcta) {
        bossHP -= dañoAlBoss;
        if (bossHP < 0) bossHP = 0;
        score += 20; 
        playSound("acierto");
        
        bossCard.classList.add("shake-damage");
        setTimeout(() => bossCard.classList.remove("shake-damage"), 400);

        txtLog.textContent = criticoActivo 
            ? `💥 ¡¡EXPLORE CRÍTICO!! Inyectaste código malicioso en ${jefes[jefeActualIndex].name} por -${dañoAlBoss} HP.`
            : `✨ ¡Contramedida limpia! Mitigación exitosa contra el ataque. (-${dañoAlBoss} HP)`;
        
        poolPreguntasFase.splice(indexEnPool, 1);
    } else {
        playerHP -= dañoEnemigo;
        if (playerHP < 0) playerHP = 0;
        playSound("error");
        
        gameViewport.classList.add("glitch-hit");
        playerCard.classList.add("shake-damage");
        setTimeout(() => {
            gameViewport.classList.remove("glitch-hit");
            playerCard.classList.remove("shake-damage");
        }, 400);

        txtLog.textContent = criticoActivo
            ? `⚠️ ¡DESBORDAMIENTO CRÍTICO! Tu payload explotó en tus terminales locales. Pierdes -${dañoEnemigo} HP.`
            : `⚠️ ¡Alerta de Incidente! Fallaste el análisis de red. Recibes un impacto directo de -${dañoEnemigo} HP.`;
    }

    criticoActivo = false;
    actualizarInterfaz();
    
    divOptions.innerHTML = "<p style='color: #94a3b8; font-style: italic; font-size:0.85rem;'>Consultando bases de firmas en el firewall...</p>";
    
    setTimeout(() => {
        lanzarPopupAleatorio();
        iniciarCombate();
    }, 2200);
}

function ejecutarGameOver(motivo) {
    clearInterval(timerInterval);
    playSound("error");
    popupBox.classList.add("hidden");
    txtGameOverReason.innerHTML = motivo;
    screenGame.classList.add("hidden");
    screenGameOver.classList.remove("hidden");
}

btnClosePopup.addEventListener("click", (e) => {
    e.stopPropagation();
    popupBox.classList.add("hidden");
    txtLog.textContent = "🛡️ Bloqueaste un Pop-up sospechoso de ingeniería social. ¡Bien jugado!";
});

popupBody.addEventListener("click", () => {
    playerHP = 0;
    actualizarInterfaz();
    ejecutarGameOver(`
        <span style="color:#ef4444; font-weight:bold;">❌ ¡ERROR CRÍTICO DE USUARIO!</span><br><br>
        Le diste clic a un anuncio engañoso de fraude/malware.<br>
        <strong>Lección de Ciberseguridad:</strong> Las ofertas milagrosas son el vector número uno de virus. ¡Jamás confíes en pop-ups externos!
    `);
});

btnVpn.addEventListener("click", () => {
    if (score >= 40 && playerHP < 100) {
        score -= 40;
        playerHP += 30;
        if (playerHP > 100) playerHP = 100;
        playSound("curar");
        
        playerCard.classList.add("flash-heal");
        setTimeout(() => playerCard.classList.remove("flash-heal"), 600);

        txtLog.textContent = "🛡️ ¡Túnel VPN IPSec activo! Tráfico anonimizado. Recuperas +30 HP.";
        actualizarInterfaz();
    }
});

btnCrit.addEventListener("click", () => {
    if (score >= 30 && !criticoActivo) {
        score -= 30;
        criticoActivo = true;
        playSound("curar");
        txtLog.textContent = "⚡ ¡Script Crítico precargado en la consola! Listo para disparar.";
        actualizarInterfaz();
    }
});

btnGlobalRestart.addEventListener("click", reiniciarTodoElSistema);
btnGlobalVictory.addEventListener("click", reiniciarTodoElSistema);

function reiniciarTodoElSistema() {
    clearInterval(timerInterval);
    jefeActualIndex = 0;
    score = 0;
    playerHP = 100;
    bossHP = jefes[0].hp;
    maxBossHP = jefes[0].hp;
    criticoActivo = false;

    screenGameOver.classList.add("hidden");
    screenVictory.classList.add("hidden");
    screenGame.classList.add("hidden");
    screenStart.classList.remove("hidden"); 
    popupBox.classList.add("hidden");
    shopContent.classList.add("hidden");
    shopAccordionArrow.textContent = "▼";

    txtLog.textContent = "Reinicio de contingencia exitoso. Firewalls levantados.";
    actualizarInterfaz();
}

const feedbackForm = document.getElementById("feedback-form");
const feedbackSuccess = document.getElementById("feedback-success");

if (feedbackForm) {
    feedbackForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const data = new FormData(feedbackForm);
        fetch(feedbackForm.action, {
            method: feedbackForm.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                feedbackSuccess.classList.remove("hidden");
                feedbackForm.reset();
                setTimeout(() => feedbackSuccess.classList.add("hidden"), 5000);
            } else {
                alert("Hubo un problema al enviar las sugerencias.");
            }
        }).catch(error => {
            alert("Error de conexión al enviar el formulario.");
        });
    });
}