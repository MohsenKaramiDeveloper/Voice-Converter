let speech = new SpeechSynthesisUtterance();

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;

    // Get the selected language code from the dropdown
    let selectedLanguage = document.getElementById("languageSelector").value;
    
    // Set the selected language for speech synthesis
    speech.lang = selectedLanguage;

    // Speak the text with the chosen language
    window.speechSynthesis.speak(speech);
});
