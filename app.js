var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("output");

var serverURL = "https://api.funtranslations.com/translate/dothraki.json"

function getTranslation(input){

    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something is wrong with server! Try again after some time")
}


function clickHandler(){
    var inputText = textInput.value;
    console.log("clicked")

    fetch(getTranslation(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
            })
        .catch(errorHandler)
}



btnTranslate.addEventListener("click", clickHandler )