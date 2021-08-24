var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?"

var serverURL = "https://api.funtranslations.com/translate/dothraki.json"

function getTranslation(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something is wrong with server! Try again after some time")
}


function clickHandler() {
    // taking input 

    var inputText = txtInput.value;

    //    calling server for processing 
    fetch(getTranslation(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output
            })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)