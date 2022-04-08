
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

    // TODO: SET DEPLOY VALUE FOR URL
    xhr_uploadSound.open("POST", "http://localhost:3001/api/soundbow/save");
    xhr_uploadSound.setRequestHeader('Token', token);
    xhr_uploadSound.send();
}
