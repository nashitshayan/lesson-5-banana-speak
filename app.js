var btnTranslate = document.querySelector("#btn-translate")
var inputText= document.querySelector("#txt-input")
var outputDiv= document.querySelector("#output")

var url= "https://api.funtranslations.com/translate/minion.json"


function getTranslationUrl(input) {
    return url+ "?"+ "text="+ input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("server not responding, try again later!")
}


function clickHandler(){
    var inputTxt= inputText.value;
    
    fetch(getTranslationUrl(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedText= json.contents.translated;
        outputDiv.innerText= translatedText;
    } )
    .catch(errorHandler)
}


 btnTranslate.addEventListener("click",  clickHandler)
