// 📦 POOL DE PREGUNTAS EXPANDIDO (6 por fase para máxima aleatoriedad)
const bancoPreguntasPorNivel = {
    0: [ // FASE 1: Troyano.bat
        {
            categoria: "F1 - PHISHING SMS",
            q: "Te llega un SMS diciendo que tu paquete de correo está retenido y debes pagar $1.50 en un link externo. ¿Cómo actúas?",
            opts: ["Pago rápido, es poco dinero.", "Borro el mensaje. Es Smishing para robar mi tarjeta.", "Abro el enlace solo para ver si es real."],
            correcta: 1
        },
        {
            categoria: "F1 - CONTRASEÑAS",
            q: "¿Cuál es la práctica más segura para gestionar tus accesos en plataformas web?",
            opts: ["Usar la misma clave en todo cambiando el año.", "Anotarlas en un bloc de notas en el escritorio.", "Usar un gestor de contraseñas con claves robustas."],
            correcta: 2
        },
        {
            categoria: "F1 - REDES WIFI",
            q: "Estás en un centro comercial y ves una red Wi-Fi abierta sin contraseña llamada 'Internet_Gratis'. ¿Qué es seguro hacer?",
            opts: ["Conectarme pero evitar entrar a apps de bancos.", "No conectarme, puede ser un punto de acceso falso para capturar mi tráfico.", "Conectarme normalmente para actualizar mis juegos móviles."],
            correcta: 1
        },
        {
            categoria: "F1 - INGENIERÍA SOCIAL",
            q: "Alguien te llama diciendo ser de tu banco y te pide los números de atrás de tu tarjeta de crédito por 'mantenimiento'. ¿Qué haces?",
            opts: ["Se los doy para evitar que bloqueen mi cuenta.", "Cuelgo de inmediato. Los bancos nunca solicitan códigos de seguridad por llamada.", "Le doy números falsos para jugar con el operador."],
            correcta: 1
        },
        {
            categoria: "F1 - MALWARE",
            q: "Descargas un activador de software gratuito y Windows Defender te alerta de una amenaza 'Trojan:Win32'. ¿Qué es lo más prudente?",
            opts: ["Desactivar el antivirus porque seguro es un falso positivo.", "Eliminar el archivo inmediatamente; altera el sistema para abrir puertas traseras.", "Mover el archivo a un pendrive para limpiarlo luego."],
            correcta: 1
        },
        {
            categoria: "F1 - ACTUALIZACIONES",
            q: "¿Por qué es crítico instalar parches de seguridad de Windows o tu sistema móvil apenas salen?",
            opts: ["Porque hacen que la batería dure el doble.", "Porque cierran vulnerabilidades de día cero que los atacantes ya conocen.", "Solo sirven para cambiar la interfaz estética del sistema."],
            correcta: 1
        }
    ],
    1: [ // FASE 2: Rogue_AI_Botnet
        {
            categoria: "F2 - IA Y PRIVACIDAD",
            q: "Quieres usar una IA generativa en línea para resumir un informe confidencial. ¿Cuál es el principal riesgo?",
            opts: ["La IA podría asimilar mis datos privados en su modelo público de entrenamiento.", "El documento podría quedar mal estructurado.", "Las IAs borran todo al instante, no hay riesgo."],
            correcta: 0
        },
        {
            categoria: "F2 - DEEPFAKES",
            q: "Ves un video donde un líder de tecnología promociona una aplicación financiera milagrosa, pero su voz se oye algo robótica. ¿Qué sospechas?",
            opts: ["Fallo de edición del video original.", "Un Deepfake de audio/video creado con IA para cometer fraudes.", "Mala señal de mi operador de internet."],
            correcta: 1
        },
        {
            categoria: "F2 - INGENIERÍA SOCIAL IA",
            q: "Una cuenta de soporte técnico automatizada por IA te contacta pidiendo tu código 2FA para 'verificar tu identidad'. ¿Qué haces?",
            opts: ["Se lo doy, al ser una IA oficial es seguro.", "Jamás comparto códigos temporales, el soporte legítimo nunca los pide.", "Le pido que me llame por teléfono primero."],
            correcta: 1
        },
        {
            categoria: "F2 - ENGAÑOS LLAMADAS",
            q: "Recibes una llamada telefónica urgente donde escuchas la voz de un familiar pidiéndote dinero por una emergencia, pero la llamada se corta rápido. ¿Qué debes verificar?",
            opts: ["Hacer una transferencia de inmediato.", "Llamar directamente al familiar por un canal seguro; la IA puede clonar voces con muestras de pocos segundos.", "Asumir que es real e ir al banco."],
            correcta: 1
        },
        {
            categoria: "F2 - CHATBOTS INTEGRADOS",
            q: "Al interactuar con una extensión de IA de tu navegador para transacciones, te pide acceso total al portapapeles. ¿Qué riesgo representa?",
            opts: ["Ninguno, es para copiar texto más rápido.", "Podría capturar credenciales o claves criptográficas copiadas por el usuario.", "Hace que el navegador consuma menos RAM."],
            correcta: 1
        },
        {
            categoria: "F2 - INTELIGENCIA DE AMENAZAS",
            q: "En una empresa, ¿cuál es el uso defensivo correcto de la IA en ciberseguridad?",
            opts: ["Automatizar el escaneo de logs para detectar patrones de ataque inusuales en tiempo real.", "Reemplazar por completo a todo el equipo de ingenieros de seguridad.", "Desactivar firewalls obsoletos de forma autónoma."],
            correcta: 0
        }
    ],
    2: [ // FASE 3: Crypto_Ransom_Core
        {
            categoria: "F3 - RESPALDOS ISO 27001",
            q: "¿Cómo debes estructurar una política eficaz de copias de seguridad según buenas prácticas?",
            opts: ["Guardar todo en un disco duro externo conectado permanentemente a la PC.", "Aplicar la regla 3-2-1: 3 copias, 2 medios distintos, 1 fuera de línea (offline).", "Confiar en que la nube sincroniza todo automáticamente."],
            correcta: 1
        },
        {
            categoria: "F3 - CIFRADO WEB",
            q: "Ves que un sitio web de compras usa el prefijo 'http://' en lugar de 'https://'. ¿Qué significa técnicamente?",
            opts: ["Que los datos viajan en texto plano y pueden ser interceptados mediante sniffing.", "Que la página carga más rápido por no encriptar.", "No pasa nada mientras el logo de la marca sea real."],
            correcta: 0
        },
        {
            categoria: "F3 - PUERTOS LÓGICOS",
            q: "Durante una auditoría de red, detectas que el puerto de administración remota Telnet (23) está abierto al exterior. ¿Cuál es la acción correcta?",
            opts: ["Dejarlo abierto para mantenimientos rápidos de los servidores.", "Cerrarlo inmediatamente y migrar el tráfico a un protocolo seguro cifrado como SSH (22).", "Cambiarle el número de puerto al 8080."],
            correcta: 1
        },
        {
            categoria: "F3 - MITIGACIÓN RANSOMWARE",
            q: "Un servidor de la organización amanece con archivos cifrados con extensión '.locked' y una nota de rescate. ¿Cuál es el primer paso del protocolo de incidentes?",
            opts: ["Pagar el rescate en bitcoins rápido para que no borren nada.", "Aislar el servidor de la red desconectando el cable/Wi-Fi para evitar el movimiento lateral.", "Reiniciar el servidor repetidas veces."],
            correcta: 1
        },
        {
            categoria: "F3 - AUTENTICACIÓN AVANZADA",
            q: "¿Cuál de los siguientes métodos de Segundo Factor de Autenticación (2FA) se considera el más inmune ante ataques de Phishing inverso?",
            opts: ["Mensajes de texto (SMS).", "Tokens basados en hardware físico (FIDO2 / llaves USB Yubikey).", "Correos electrónicos de respaldo."],
            correcta: 1
        },
        {
            categoria: "F3 - POLÍTICA DE PRIVILEGIOS",
            q: "¿En qué consiste el 'Principio del Menor Privilegio' en control de accesos?",
            opts: ["Dar accesos completos a todos los ingenieros por igual para evitar retrasos.", "Garantizar a cada usuario únicamente los permisos mínimos necesarios para realizar sus tareas laborales.", "Asignar roles según el orden de llegada a la empresa."],
            correcta: 1
        }
    ]
};

const jefes = [
    { name: "👾 Troyano.bat (Fase 1)", hp: 100, daño: 20 },
    { name: "🤖 Rogue_AI_Botnet (Fase 2)", hp: 120, daño: 30 },
    { name: "👑 Crypto_Ransom_Core (Fase 3)", hp: 150, daño: 40 }
];

let jefeActualIndex = 0;
let score = 0;
let playerHP = 100;
let bossHP = jefes[jefeActualIndex].hp;
let maxBossHP = jefes[jefeActualIndex].hp;

let poolPreguntasFase = []; 
let preguntaActual = null;
let criticoActivo = false;

// DOM
const screenGame = document.getElementById("main-game-screen");
const screenGameOver = document.getElementById("game-over-screen");
const screenVictory = document.getElementById("victory-screen");

const txtQuestion = document.getElementById("question");
const txtCategory = document.getElementById("question-category");
const divOptions = document.getElementById("options");
const txtLog = document.getElementById("log-text");
const txtScore = document.getElementById("game-score");
const btnVpn = document.getElementById("skill-vpn");
const btnCrit = document.getElementById("skill-crit");
const alertCrit = document.getElementById("modifier-status");

const nameBoss = document.getElementById("boss-name");
const barPlayer = document.getElementById("player-hp");
const barBoss = document.getElementById("boss-hp");
const txtPlayerHp = document.getElementById("player-hp-txt");
const txtBossHp = document.getElementById("boss-hp-txt");

const btnGlobalRestart = document.getElementById("btn-global-restart");
const btnGlobalVictory = document.getElementById("btn-global-victory");

// Audio API
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(tipo) {
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

function inicializarPreguntasDeFase() {
    // Clona la lista completa de la fase correspondiente
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

    btnVpn.disabled = !(score >= 40 && playerHP < 100);
    btnCrit.disabled = !(score >= 30 && !criticoActivo);

    if (criticoActivo) alertCrit.classList.remove("hidden");
    else alertCrit.classList.add("hidden");
}

function iniciarCombate() {
    // CONTROL DE DERROTA
    if (playerHP <= 0) {
        playSound("error");
        screenGame.classList.add("hidden");
        screenGameOver.classList.remove("hidden");
        return;
    }

    // CONTROL DE VICTORIA DE FASE
    if (bossHP <= 0) {
        score += 50; 
        jefeActualIndex++;
        
        if (jefeActualIndex < jefes.length) {
            txtLog.textContent = `💥 ¡Amenaza purgada! Escalando privilegios contra: ${jefes[jefeActualIndex].name}`;
            bossHP = jefes[jefeActualIndex].hp;
            maxBossHP = jefes[jefeActualIndex].hp;
            inicializarPreguntasDeFase(); // Carga el pool limpio del siguiente jefe
        } else {
            screenGame.classList.add("hidden");
            screenVictory.classList.remove("hidden");
            actualizarInterfaz();
            return;
        }
    }

    // Si el pool se vacía y el boss sigue vivo, recarga todas las de esta fase
    if (poolPreguntasFase.length === 0) {
        inicializarPreguntasDeFase();
    }

    // Selección aleatoria del pool actual de la fase
    const randomIndex = Math.floor(Math.random() * poolPreguntasFase.length);
    preguntaActual = poolPreguntasFase[randomIndex];

    // Renderizar datos en los elementos estables del DOM
    txtCategory.textContent = `VÉCTOR: ${preguntaActual.categoria}`;
    txtQuestion.textContent = preguntaActual.q;
    divOptions.innerHTML = "";

    preguntaActual.opts.forEach((opcion, i) => {
        const btn = document.createElement("button");
        btn.className = "opt-btn";
        btn.textContent = opcion;
        btn.onclick = () => procesarTurno(i, randomIndex);
        divOptions.appendChild(btn);
    });

    actualizarInterfaz();
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
        txtLog.textContent = criticoActivo 
            ? `💥 ¡¡EXPLORE CRÍTICO!! Inyectaste código malicioso en ${jefes[jefeActualIndex].name} por -${dañoAlBoss} HP.`
            : `✨ ¡Contramedida limpia! Mitigación exitosa contra el ataque. (-${dañoAlBoss} HP)`;
        
        // REGLA DE PROBABILIDAD: Si aciertas, se elimina de este pool activo para que salgan las otras
        poolPreguntasFase.splice(indexEnPool, 1);

    } else {
        playerHP -= dañoEnemigo;
        if (playerHP < 0) playerHP = 0;
        playSound("error");
        txtLog.textContent = criticoActivo
            ? `⚠️ ¡DESBORDAMIENTO CRÍTICO! Tu payload explotó en tus terminales locales. Pierdes -${dañoEnemigo} HP.`
            : `⚠️ ¡Alerta de Incidente! Fallaste el análisis de red. Recibes un impacto directo de -${dañoEnemigo} HP.`;
        
        // Si fallas, NO se elimina del pool, permitiendo que pueda salir después de forma aleatoria
    }

    criticoActivo = false;
    actualizarInterfaz();
    
    divOptions.innerHTML = "<p style='color: #94a3b8; font-style: italic; font-size:0.85rem;'>Consultando bases de firmas en el firewall...</p>";
    setTimeout(iniciarCombate, 2200);
}

// Compras
btnVpn.addEventListener("click", () => {
    if (score >= 40 && playerHP < 100) {
        score -= 40;
        playerHP += 30;
        if (playerHP > 100) playerHP = 100;
        playSound("curar");
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

// Event Listeners de los botones globales de reinicios limpios sin tocar nodos
btnGlobalRestart.addEventListener("click", reiniciarTodoElSistema);
btnGlobalVictory.addEventListener("click", reiniciarTodoElSistema);

function reiniciarTodoElSistema() {
    jefeActualIndex = 0;
    score = 0;
    playerHP = 100;
    bossHP = jefes[0].hp;
    maxBossHP = jefes[0].hp;
    criticoActivo = false;

    // Control de pantallas por clases CSS
    screenGameOver.classList.add("hidden");
    screenVictory.classList.add("hidden");
    screenGame.classList.remove("hidden");

    txtLog.textContent = "Reinicio de contingencia exitoso. Firewalls levantados.";
    inicializarPreguntasDeFase();
    iniciarCombate();
}

// Inicialización de la primera ejecución
inicializarPreguntasDeFase();
iniciarCombate();