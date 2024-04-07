document.addEventListener("DOMContentLoaded", function() {
    var generateButton = document.getElementById("generateButton");
    var inputTextElement = document.getElementById("textInputHash");
    var algorithmSelectElement = document.getElementById("hashType");
    var resultElement = document.getElementById("result");

    if (!generateButton || !inputTextElement || !algorithmSelectElement || !resultElement) {
        console.error("One or more required HTML elements not found.");
        return;
    }

    generateButton.addEventListener("click", function() {
        var inputText = inputTextElement.value;
        var selectedAlgorithm = algorithmSelectElement.value;
        
        if (!inputText) {
            console.error("Input text is empty.");
            return;
        }

        var hashedText;

        switch(selectedAlgorithm) {
            case 'md5':
                hashedText = md5(inputText);
                break;
            case 'sha256':
                hashedText = sha256(inputText);
                break;
            case 'sha512':
                hashedText = sha512(inputText); 
                break;
            default:
                hashedText = "Invalid algorithm";
                console.error("Invalid algorithm selected.");
                break;
        }

        resultElement.innerHTML = "" + selectedAlgorithm.toUpperCase() + ": " + hashedText;
    });
});
