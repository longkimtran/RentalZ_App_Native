// BATTERY STATUS
// https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-battery-status/index.html

// Installation:
// cordova plugin add cordova-plugin-battery-status

$(window).on('batterystatus', onBatteryStatus);
$(window).on('batterylow', onBatteryLow);
$(window).on('batterycritical', onBatteryCritical);

function onBatteryStatus(status) {
    alert(`Level: ${status.level}%. isPlugged: ${status.isPlugged}.`);
}

function onBatteryLow(status) {
    alert(`Battery Level Low ${status.level}%.`);
}

function onBatteryCritical(status) {
    alert(`Battery Level Critical ${status.level}%. Recharge Soon!`);
}

// DIALOGS
// https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-dialogs/index.html

// Installation:
// cordova plugin add cordova-plugin-dialogs

$(document).on('vclick', '#btn-cordova-confirm', cordovaConfirm);
$(document).on('vclick', '#btn-cordova-beep', cordovaBeep);
$(document).on('vclick', '#btn-cordova-vibration', cordovaVibration);


function cordovaConfirm() {
    var message = 'This is Cordova Confirm.';
    var title = 'Cordova Confirm';
    var buttonLabel = 'Click Notification Botton';

    navigator.notification.confirm(message, callback, title, buttonLabel);

    function callback(btnIndex) {
        alert('You must click the "Notification" Botton.');

        if (btnIndex == 0) {
            alert('Cordova Confirm is dismissed.');
        }

        else if (btnIndex == 1) {
            alert('Go and Click Notification.');
        }

    }
}


function cordovaBeep() {
    navigator.notification.beep(2);
}

// VIBRATION
// https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-vibration/index.html

// Installation:
// cordova plugin add cordova-plugin-vibration



function cordovaVibration() { //Function for Vabrate botton
    navigator.vibrate(1000, 1000, 1000, 3000, 3000, 3000, 1000, 1000, 1000);
}

// CAMERA
// https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-camera/index.html

// Installation:
// cordova plugin add cordova-plugin-camera

$(document).on('vclick', '#btn-take-picture', takePicture);

function takePicture() {
    var options = {
        destinationType: Camera.DestinationType.DATA_URL,
        saveToPhotoAlbum: true
    }

    navigator.camera.getPicture(success, error, options);

    function success(imageData) {
        alert(imageData);

        $('#img-01').attr('src', `data:image/jpeg;base64,${imageData}`);
    }

    function error(error) {
        alert(`Failed to take picture. Error: ${error}.`);
    }
}

// BARCODE SCANNER
// https://www.npmjs.com/package/cordova-plugin-barcodescanner

// Installation:
// cordova plugin add cordova-plugin-barcodescanner

$(document).on('vclick', '#btn-take-qrcode', takeQRCode);

function takeQRCode() {
    cordova.plugins.barcodeScanner.scan(success, error);

    function success(result) {
        alert(`Result: ${result.text}.\nType: ${result.format}.`);
    }

    function error(error) {
        alert(`Failed: ${error}.`);
    }
}