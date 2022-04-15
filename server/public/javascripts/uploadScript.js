
let xhr_uploadSound = new XMLHttpRequest();

xhr_uploadSound.onload = function () {
    if (xhr_uploadSound.status == 200) {
        console.log("Upload response OKOK");
        console.log(JSON.parse(xhr_uploadSound.response));
    }
    else {
        console.log("Upload response NOT OK???");
        console.log(JSON.parse(xhr_uploadSound.response));
    }
}

async function uploadSound(token) {
    console.log("Uploading sound.");
    // TODO: SET PAYLOAD FOR SOUNDBOWDATA
    var payload = document.getElementById("payload");
    var data = payload.innerText;
    var dddata = JSON.stringify({content: data});
    console.log(data);
    // TODO: SET DEPLOY VALUE FOR URL
    // xhr_uploadSound.open("POST", "http://localhost:3001/api/soundbow/save");
    xhr_uploadSound.open("POST", "https://friendly-roentgen164336.app.dockr.net/api/soundbow/save");
    xhr_uploadSound.setRequestHeader("Content-Type", "application/json");
    xhr_uploadSound.setRequestHeader('Accept', 'application/json');
    xhr_uploadSound.setRequestHeader('Token', token);
    xhr_uploadSound.send(dddata);
}

function deleteSoundPayload() {
    const payload = document.getElementById("payload");
    if (payload != undefined) {
        payload.remove();
    }
}

function toggleInstructionDialog() {
    if (document.getElementById("instruction_dialog").style.display == 'none') {
        document.getElementById("instruction_dialog").style.display = 'flex';
    }
    else {
        document.getElementById("instruction_dialog").style.display = 'none';
    }
}

function toggleConfirmationDialog() {
    if (document.getElementById("confirmation_dialog").style.display == 'none') {
        document.getElementById("confirmation_dialog").style.display = 'flex';
    }
    else {
        document.getElementById("confirmation_dialog").style.display = 'none';
    }
}

// function toggleRecaptchaDialog() {
//     if (document.getElementById("toggleRecaptchaDialog").style.display == 'none') {
//         document.getElementById("toggleRecaptchaDialog").style.display = 'flex';
//     }
// }

function showRecaptchaDialog() {
    document.getElementById("recaptcha_dialog").style.display = 'flex';
}

function closeRecaptchaDialog() {
    document.getElementById("recaptcha_dialog").style.display = 'none';
}

function closeDialogs() {
    document.getElementById("confirmation_dialog").style.display = 'none';
    document.getElementById("instruction_dialog").style.display = 'none';
}