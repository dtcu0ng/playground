// Language Handling
function changeLanguage() {
    const language = document.getElementById("languageSelectorBtn").getAttribute("data-language");
    const translation = translations[language];

    const elements = [
        { id: "title", text: translation.title },
        { id: "contentLabel", text: translation.contentLabel },
        { id: "qrText", attribute: "placeholder", value: translation.placeholder },
        { id: "errorMessage", text: translation.errorMessage },
        { id: "generateBtn", text: translation.generateBtn },
        { id: "clearBtn", text: translation.clearBtn },
        { id: "historyBtn", text: translation.historyBtn },
        { id: "customizationBtn", text: translation.customizationBtn },
        { id: "downloadBtn", text: translation.downloadBtn },
        { id: "titleQRHistory", text: translation.titleQRHistory },
        { id: "historyTableQRCode", text: translation.historyTableQRCode },
        { id: "historyTableQRContent", text: translation.historyTableQRContent },
        { id: "historyTableQRTimestamp", text: translation.historyTableQRTimestamp },
        { id: "historyTableQRAction", text: translation.historyTableQRAction },
        { id: "titleCustomizationDialog", text: translation.titleCustomizationDialog },
        { id: "customizationDialogSetting1", text: translation.customizationDialogSetting1 },
        { id: "customizationDialogSetting2", text: translation.customizationDialogSetting2 },
        { id: "customizationDialogSetting3", text: translation.customizationDialogSetting3 },
        { id: "customizationDialogSetting4", text: translation.customizationDialogSetting4 },
        { id: "customizationDialogSetting4B1", text: translation.customizationDialogSetting4B1 },
        { id: "customizationDialogSetting5", text: translation.customizationDialogSetting5 },
        { id: "customizationDialogSetting5B1", text: translation.customizationDialogSetting5B1 },
        { id: "customizationDialogSetting6", text: translation.customizationDialogSetting6 },
        { id: "customizationDialogSetting7", text: translation.customizationDialogSetting7 },
        { id: "customizationDialogSetting8", text: translation.customizationDialogSetting8 },
        { id: "customizationDialogSetting9", text: translation.customizationDialogSetting9 },
        { id: "customizationDialogSetting10", text: translation.customizationDialogSetting10 },
        { id: "customizationDialogSetting11", text: translation.customizationDialogSetting11 },
        { id: "customizationDialogSetting12", text: translation.customizationDialogSetting12 },
        { id: "customizationDialogSetting13", text: translation.customizationDialogSetting13 },
        { id: "customizationDialogSetting14", text: translation.customizationDialogSetting14 },
        { id: "customizationDialogSetting15", text: translation.customizationDialogSetting15 },
        { id: "customizationDialogSetting16", text: translation.customizationDialogSetting16 },
        { id: "customizationDialogSetting17", text: translation.customizationDialogSetting17 },
        { id: "customizationDialogSetting18", text: translation.customizationDialogSetting18 },
        { id: "customizationDialogSetting19", text: translation.customizationDialogSetting19 },
        { id: "customizationDialogSetting20", text: translation.customizationDialogSetting20 },
        { id: "customizationDialogSetting21", text: translation.customizationDialogSetting21 },
        { id: "customizationDialogSetting22", text: translation.customizationDialogSetting22 },
        { id: "customizationDialogSetting23", text: translation.customizationDialogSetting23 },
        { id: "customizationDialogSetting24", text: translation.customizationDialogSetting24 },
        { id: "customizationDialogSetting25", text: translation.customizationDialogSetting25 },
        { id: "customizationDialogSetting26", text: translation.customizationDialogSetting26 },
        { id: "customizationDialogSetting27", text: translation.customizationDialogSetting27 },
        { id: "customizationDialogSetting28", text: translation.customizationDialogSetting28 },
        { id: "customizationDialogSetting29", text: translation.customizationDialogSetting29 },
        { id: "customizationDialogSetting30", text: translation.customizationDialogSetting30 },
        { id: "customizationDialogSetting31", text: translation.customizationDialogSetting31 },
        { id: "customizationDialogSetting32", text: translation.customizationDialogSetting32 },
        { id: "customizationDialogSetting33", text: translation.customizationDialogSetting33 },
        { id: "customizationDialogSetting34", text: translation.customizationDialogSetting34 },
        { id: "customizationDialogSetting35", text: translation.customizationDialogSetting35 },
        { id: "customizationDialogSetting36", text: translation.customizationDialogSetting36 },
        { id: "customizationDialogSetting37", text: translation.customizationDialogSetting37 },
        { id: "customizationDialogSetting38", text: translation.customizationDialogSetting38 },
        { id: "customizationDialogSetting39", text: translation.customizationDialogSetting39 },
        { id: "customizationDialogSetting40", text: translation.customizationDialogSetting40 },
        { id: "customizationDialogSetting41", text: translation.customizationDialogSetting41 },
        { id: "customizationDialogSetting42", text: translation.customizationDialogSetting42 },
        { id: "customizationDialogSetting43", text: translation.customizationDialogSetting43 },
        { id: "customizationDialogSetting44", text: translation.customizationDialogSetting44 },
        { id: "customizationDialogSetting45", text: translation.customizationDialogSetting45 },
        { id: "customizationDialogSetting46", text: translation.customizationDialogSetting46 },
        { id: "customizationDialogSetting47", text: translation.customizationDialogSetting47 },
        { id: "customizationDialogSetting48", text: translation.customizationDialogSetting48 },
        { id: "customizationDialogSetting49", text: translation.customizationDialogSetting49 },
        { id: "qrErrorCorrectionLevel1", text: translation.qrErrorCorrectionLevel1 },
        { id: "qrErrorCorrectionLevel2", text: translation.qrErrorCorrectionLevel2 },
        { id: "qrErrorCorrectionLevel3", text: translation.qrErrorCorrectionLevel3 },
        { id: "qrErrorCorrectionLevel4", text: translation.qrErrorCorrectionLevel4 },
        { id: "historyDialogNote1L1", text: translation.historyDialogNote1L1 },
        { id: "historyDialogNote1L2", text: translation.historyDialogNote1L2 }
    ];

    elements.forEach(({ id, text, attribute, value }) => {
        const element = document.getElementById(id);
        if (text) element.textContent = text;
        if (attribute) element.setAttribute(attribute, value);
    });
}

function setLanguage(language) {
    document.getElementById("languageSelectorBtn").setAttribute("data-language", language);
    changeLanguage();
    toggleLanguageDropdown();
}

function toggleLanguageDropdown() {
    const dropdown = document.getElementById("languageDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Theme Handling
document.addEventListener("DOMContentLoaded", () => {
    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentTheme = localStorage.getItem("theme") || (userPrefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", currentTheme);
    updateThemeIcon(currentTheme);
    setLanguage("en"); // Default to English
    deleteExpiredHistory();
    loadHistory();
});

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = theme === "dark" ? "☀️" : "🌙";
    document.getElementById("toggleThemeBtn").textContent = icon;
}

// QR Code Handling
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

function clearQRCode() {
    document.getElementById("qrcode-container").style.display = "none";
    document.getElementById("qrcode").innerHTML = "";
}

function clearLogo() {
    document.getElementById('qrLogo').value = '';
}

function clearBackgroundImage() {
    document.getElementById('qrBgImage').value = '';
}

function clearPWACache() {
    if ('caches' in window) {
        caches.keys().then(function(cacheNames) {
            cacheNames.forEach(function(cacheName) {
                caches.delete(cacheName);
            });
        }).then(function() {
            alert('PWA cache cleared.');
        }).catch(function(error) {
            console.error('Error clearing PWA cache:', error);
        });
    } else {
        alert('Caches API not supported in this browser.');
    }
}

function downloadQRCode() {
    const qrCodeElement = document.querySelector("#qrcode canvas");
    const dataUrl = qrCodeElement.toDataURL("image/png");
    const now = new Date();
    const fileName = `qr-${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}-${now.getHours()}-${now.getMinutes()}.png`;
    const link = document.createElement("a");

    link.href = dataUrl;
    link.download = fileName;
    link.click();
}

function saveQRCode(text, dataUrl) {
    const now = new Date();
    const qrCodeData = { text, dataUrl, timestamp: now.getTime() };

    const qrCodeHistory = JSON.parse(localStorage.getItem("qrCodeHistory")) || [];
    qrCodeHistory.push(qrCodeData);
    localStorage.setItem("qrCodeHistory", JSON.stringify(qrCodeHistory));
}

// Save QR Code history to local storage
function saveHistory(qrCode, content) {
    const history = JSON.parse(localStorage.getItem('qrCodeHistory')) || [];
    const timestamp = new Date().getTime();
    history.push({ qrCode, content, timestamp });
    localStorage.setItem('qrCodeHistory', JSON.stringify(history));
}

// Load QR Code history from local storage
function loadHistory() {
    const history = JSON.parse(localStorage.getItem('qrCodeHistory')) || [];
    const historyContent = document.getElementById('historyContent');
    historyContent.innerHTML = '';
    history.forEach(({ qrCode, content, timestamp }) => {
        const date = new Date(timestamp).toLocaleString();
        historyContent.innerHTML += `
            <tr>
                <td>${qrCode}</td>
                <td>${content}</td>
                <td>${date}</td>
                <td><button onclick="deleteHistoryItem(${timestamp})">Delete</button></td>
            </tr>
        `;
    });
}

// Delete a specific history item
function deleteHistoryItem(timestamp) {
    let history = JSON.parse(localStorage.getItem('qrCodeHistory')) || [];
    history = history.filter(item => item.timestamp !== timestamp);
    localStorage.setItem('qrCodeHistory', JSON.stringify(history));
    loadHistory();
}

// Delete expired history items
function deleteExpiredHistory() {
    const history = JSON.parse(localStorage.getItem('qrCodeHistory')) || [];
    const now = new Date().getTime();
    const newHistory = history.filter(item => now - item.timestamp <= 30 * 24 * 60 * 60 * 1000); // 30 days in milliseconds
    localStorage.setItem('qrCodeHistory', JSON.stringify(newHistory));
}

// Wipe all history
function wipeHistory() {
    localStorage.removeItem('qrCodeHistory');
    loadHistory();
    alert('QR Code history has been wiped.');
}

// Dialog Handling
function showHistory() {
    const historyDialog = document.getElementById("historyDialog");
    const historyContent = document.getElementById("historyContent");

    historyContent.innerHTML = "";

    const qrCodeHistory = JSON.parse(localStorage.getItem("qrCodeHistory")) || [];
    qrCodeHistory.forEach(({ text, dataUrl, timestamp }) => {
        const row = document.createElement("tr");

        const qrCell = document.createElement("td");
        qrCell.classList.add("qr-code");
        const img = document.createElement("img");
        img.src = dataUrl;
        qrCell.appendChild(img);
        row.appendChild(qrCell);

        const textCell = document.createElement("td");
        textCell.textContent = text;
        row.appendChild(textCell);

        const timestampCell = document.createElement("td");
        const date = new Date(timestamp);
        timestampCell.textContent = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        row.appendChild(timestampCell);

        const actionCell = document.createElement("td");
        actionCell.classList.add("action");
        const downloadBtn = document.createElement("button");
        downloadBtn.textContent = "Download";
        downloadBtn.onclick = () => {
            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = `qr-${date.toLocaleDateString()}-${date.toLocaleTimeString()}.png`;
            link.click();
        };
        actionCell.appendChild(downloadBtn);
        row.appendChild(actionCell);

        historyContent.appendChild(row);
    });

    document.getElementById("overlay").style.display = "block";
    document.getElementById("main-content").classList.add("blur");
    historyDialog.style.display = "block";
}

function closeHistory() {
    document.getElementById("historyDialog").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("main-content").classList.remove("blur");
}

function showCustomization() {
    document.getElementById("customizationDialog").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("main-content").classList.add("blur");
}

function closeCustomization() {
    document.getElementById("customizationDialog").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("main-content").classList.remove("blur");
}

function closeDialogs() {
    closeHistory();
    closeCustomization();
    document.getElementById('overlay').style.display = 'none';
}

// Close dialogs when pressing the Esc key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeDialogs();
    }
});

// Close dialogs when clicking on the overlay
document.getElementById('overlay').addEventListener('click', function() {
    closeHistory();
    closeCustomization();
});
