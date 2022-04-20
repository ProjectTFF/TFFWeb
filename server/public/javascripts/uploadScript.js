
let xhr_uploadSound = new XMLHttpRequest();

const ERROR_MESSAGE_END = "You can try to send the sound file again with the 'TRY AGAIN', or return to drawing with 'BACK TO DRAWING'."

xhr_uploadSound.onload = function () {
    closeRecaptchaDialog();
    closeDialogs();
    if (xhr_uploadSound.status == 200) {
        console.log(JSON.parse(xhr_uploadSound.response));
        var response = JSON.parse(xhr_uploadSound.response);

        if (response == undefined) {
            openFailureDialog("Something went wrong with the request. ");
        }
        else {
            if(response.status == "success") {
                openSuccessDialog();
            }
            else if (response.status == "error") {
                openFailureDialog(response.message);
            }
            else {
                openFailureDialog("Something unexpected happened. ");
            }
        }
    }
    else {
        console.log(JSON.parse(xhr_uploadSound.response));
        const errorMessage = "Something went wrong with reaching the server. ";
        openFailureDialog(errorMessage);
    }
}

function openSuccessDialog() {
    // const dialog = document.getElementById("success_dialog");
    // dialog.style.display = 'flex';
    closeDialogs();
    document.getElementById("success_dialog").style.display = 'flex';
}

function openFailureDialog(message) {
    const dialog_text = document.getElementById("failure_text");
    const dialog = document.getElementById("failure_dialog");
    
    const complete_message = message + ERROR_MESSAGE_END;
    dialog_text.innerText = complete_message;
    document.getElementById("failure_dialog").style.display = 'flex';
}

function onRecaptchaError() {
    const message = "Something went wrong with reCAPTCHA. ";
    openFailureDialog(message);
}

function onRecaptchaResponseExpiry() {
    const message = "ReCAPTCHA checkbox was open too long. ";
    openFailureDialog(message);
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
    // xhr_uploadSound.open("POST", "https://friendly-roentgen164336.app.dockr.net/api/soundbow/save");
    xhr_uploadSound.open("POST", "https://tffgo.tampereflutefest.com/api/soundbow/save");
    xhr_uploadSound.setRequestHeader("Content-Type", "application/json");
    xhr_uploadSound.setRequestHeader('Accept', 'application/json');
    xhr_uploadSound.setRequestHeader('Token', token);
    xhr_uploadSound.withCredentials = true;
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

function openInstructionDialog() {
    document.getElementById("instruction_dialog").style.display = 'flex';
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
    grecaptcha.reset()
}

function closeDialogs() {
    document.getElementById("confirmation_dialog").style.display = 'none';
    document.getElementById("instruction_dialog").style.display = 'none';
    document.getElementById("failure_dialog").style.display = 'none';
    document.getElementById("success_dialog").style.display = 'none';
}