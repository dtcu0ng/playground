function generateQRCode() {
    const qrText = document.getElementById("qrText").value;
    const errorMessage = document.getElementById("errorMessage");

    if (!qrText) {
        errorMessage.style.display = "block";
        return;
    }

    errorMessage.style.display = "none";
    document.getElementById("qrcode").innerHTML = "";
    document.getElementById("qrcode-container").style.display = "flex";

    const options = {
        text: qrText,
        width: parseInt(document.getElementById("qrSize").value),
        height: parseInt(document.getElementById("qrSize").value),
        colorDark: document.getElementById("qrDark").value,
        colorLight: document.getElementById("qrLight").value,
        correctLevel: QRCode.CorrectLevel[document.getElementById("qrErrorCorrectionLevel").value],
        dotScale: parseFloat(document.getElementById("qrDotScale").value),
        dotScaleTiming: parseFloat(document.getElementById("qrDotScaleTiming").value),
        dotScaleTiming_H: parseFloat(document.getElementById("qrDotScaleTiming_H").value),
        dotScaleTiming_V: parseFloat(document.getElementById("qrDotScaleTiming_V").value),
        dotScaleA: parseFloat(document.getElementById("qrDotScaleA").value),
        dotScaleAO: parseFloat(document.getElementById("qrDotScaleAO").value),
        dotScaleAI: parseFloat(document.getElementById("qrDotScaleAI").value),
        quietZone: parseInt(document.getElementById("qrQuietZone").value),
        quietZoneColor: document.getElementById("qrQuietZoneColor").value,
        logo: "",
        logoWidth: parseInt(document.getElementById("qrLogoWidth").value),
        logoHeight: parseInt(document.getElementById("qrLogoHeight").value),
        logoMaxWidth: parseInt(document.getElementById("qrLogoMaxWidth").value),
        logoMaxHeight: parseInt(document.getElementById("qrLogoMaxHeight").value),
        logoBackgroundColor: document.getElementById("qrLogoBackgroundColor").value,
        logoBackgroundTransparent: document.getElementById("qrLogoBackgroundTransparent").checked,
        backgroundImage: '',
        backgroundImageAlpha: parseFloat(document.getElementById("qrBgImageAlpha").value),
        autoColor: document.getElementById("qrAutoColor").checked,
        autoColorDark: document.getElementById("qrAutoColorDark").value,
        autoColorLight: document.getElementById("qrAutoColorLight").value,
        PO: document.getElementById("qrPO").value,
        PI: document.getElementById("qrPI").value,
        PO_TL: document.getElementById("qrPO_TL").value,
        PI_TL: document.getElementById("qrPI_TL").value,
        PO_TR: document.getElementById("qrPO_TR").value,
        PI_TR: document.getElementById("qrPI_TR").value,
        PO_BL: document.getElementById("qrPO_BL").value,
        PI_BL: document.getElementById("qrPI_BL").value,
        AO: document.getElementById("qrAO").value,
        AI: document.getElementById("qrAI").value,
        timing: document.getElementById("qrTiming").value,
        timing_H: document.getElementById("qrTiming_H").value,
        timing_V: document.getElementById("qrTiming_V").value,
        title: document.getElementById("qrTitle").value,
        titleFont: document.getElementById("qrTitleFont").value,
        titleColor: document.getElementById("qrTitleColor").value,
        titleBackgroundColor: document.getElementById("qrTitleBackgroundColor").value,
        titleHeight: parseInt(document.getElementById("qrTitleHeight").value),
        titleTop: parseInt(document.getElementById("qrTitleTop").value),
        subTitle: document.getElementById("qrSubtitle").value,
        subTitleFont: document.getElementById("qrSubtitleFont").value,
        subTitleColor: document.getElementById("qrSubtitleColor").value,
        subTitleTop: parseInt(document.getElementById("qrSubtitleTop").value),
        binary: document.getElementById("qrBinary").checked,
        tooltip: document.getElementById("qrTooltip").checked,
        drawer: document.getElementById("qrDrawer").value,
        utf8WithoutBOM: true
    };

    const logoFile = document.getElementById("qrLogo").files[0];
    const bgImageFile = document.getElementById("qrBgImage").files[0];

    const readerCallback = (reader, key) => {
        reader.onload = (e) => {
            options[key] = e.target.result;
            new QRCode(document.getElementById("qrcode"), options);
            saveQRCode(options.text, document.querySelector("#qrcode canvas").toDataURL("image/png"));
        };
        reader.readAsDataURL(key === "logo" ? logoFile : bgImageFile);
    };

    if (logoFile) readerCallback(new FileReader(), "logo");
    else if (bgImageFile) readerCallback(new FileReader(), "backgroundImage");
    else {
        new QRCode(document.getElementById("qrcode"), options);
        saveQRCode(options.text, document.querySelector("#qrcode canvas").toDataURL("image/png"));
    }
}