(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "certeza?",
    "vc realmete não é??",
    "mas tipo tu tem uma carinha...",
    "acho q eu ja vi essa cena em.",
    "olha suas chanches estão acabando",
    "tenta denovo...",
    "tipo tu não é mesmo?",
    "caralho mas tu mesma falou aquele dia",
    "bora fuder?",
    "brinks ❤️",
    "mas tipo, tu é uma delicia em",
    "calma esse não é o ponto , tu tchola ou não?",
    "mas assim, tu sabe né",
    "volta pro assunto principal, tu é ou não?",
    "mas aquela coisa de amigo sabe",
    "ta pensando em fazer oq esse final de semana?",
    "tipo acabei de pegar umas fita aqui, chega ai pra nos torrar",
    "quase tudo ai é brincadeira kkkkkkkkkkkkkkkkkkkkkkkkkkk",
    "cabou",
    "cabou",
    "cabou",
    "cabou",
    "sexo?",
    "hoje",
    "as 21 na minha casa",
    "se arruma",
    "passo ai 19h", 
    "vamos primero lá",
    "fim", 
    "cabou",
    "agr é serio",
    "proximo ja vai reptir"
    
     
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "pagina 2.html";
}
