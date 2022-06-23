let upperCaseButton = document.getElementById("upper-case");
let lowerCaseButton = document.getElementById("lower-case");
let properCaseButton = document.getElementById("proper-case");
let sentenceCaseButton = document.getElementById("sentence-case");
let saveTextFileButton = document.getElementById("save-text-file");

upperCaseButton.addEventListener("click", function() {
    let text = document.getElementById("textarea");
    text.value = text.value.toUpperCase();
});

lowerCaseButton.addEventListener("click", function() {
    let text = document.getElementById("textarea");
    text.value = text.value.toLowerCase();
});

properCaseButton.addEventListener("click", function() {
    let text = document.getElementById("textarea");
    text.value = text.value.toLowerCase();
    text.value = text.value.split(" ")
        .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
        .join(' ');
});

sentenceCaseButton.addEventListener("click", function() {
    let text = document.getElementById("textarea");
    text.value = text.value.toLowerCase();
    text.value = text.value.split(". ")
        .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
        .join('. ');
});

function download(filename, text) {
    let element = document.createElement("a");
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

saveTextFileButton.addEventListener("click", function () {
    let text = document.getElementById("textarea").value;
    let filename = "text.txt";
    download(filename, text)
});
