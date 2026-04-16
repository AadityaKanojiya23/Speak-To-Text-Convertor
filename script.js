let recognition;
function startConverting() {

    if (!('webkitSpeechRecognition' in window)) {
        alert("Use Google Chrome!");
        return;
    }

    recognition = new webkitSpeechRecognition();

    recognition.lang = "en-IN";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.start();

    recognition.onstart = function () {
        console.log("Mic started 🎤");
    };

    recognition.onresult = function (event) {
        let text = "";

        for (let i = 0; i < event.results.length; i++) {
            text += event.results[i][0].transcript;
        }

        document.getElementById("result").innerText = text;
        console.log("TEXT:", text);
    };

    recognition.onerror = function (event) {
        console.error("Error:", event.error);
    };
}

function stopConverting() {
    if (recognition) {
        recognition.stop();
        console.log("Mic stopped");
    }
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
    button.classList.toggle("active");
});
