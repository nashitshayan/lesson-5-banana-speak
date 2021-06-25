// referencing the Input, output and button from HTMl

var btnTranslate = document.querySelector("#btn-translate")
var inputText= document.querySelector("#txt-input")
var outputDiv= document.querySelector("#output")


// the API URL from funtranslations.com

var url= "https://api.funtranslations.com/translate/minion.json"

// constructing the url for fetch
function getTranslationUrl(input) {
    return url+ "?"+ "text="+ input
}

// a function to handle errors

function errorHandler(error) {
    console.log("error occured", error);
    alert("server not responding, try again later!")
}

// main clickHandler function that takes the input, sends the request to sever and gets the translated texxt back

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

// when the user clicks on the Translate button, the clickHandler function gets called
 btnTranslate.addEventListener("click",  clickHandler)
