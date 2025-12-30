function toCapitalise(){
    paragraph = document.getElementById("floatingTextarea2").value
    console.log(paragraph)

    paraInUpperCase = paragraph.toUpperCase()

    console.log(paraInUpperCase)

    document.getElementById("result").innerHTML = paraInUpperCase
}



const inputElmt = document.getElementById("floatingTextarea2");
const resultElmt = document.getElementById("result");

function countVowel(){
  paragraph = inputElmt.value;
    
  count = 0;
  for (i = 0; i < paragraph.length; i++) {
    if (
      paragraph[i] == "a" ||
      paragraph[i] == "e" ||
      paragraph[i] == "i" ||
      paragraph[i] == "o" ||
      paragraph[i] == "u" ||
      paragraph[i] == "A" ||
      paragraph[i] == "E" ||
      paragraph[i] == "I" ||
      paragraph[i] == "O" ||
      paragraph[i] == "U"
    ) {
      count++;
    }
    }
    resultElmt.innerHTML = "Count of vowels : "+ count;
}
 
function countConsonants(){
    paragraph = inputElmt.value;

    count = 0;
    for(i = 0; i < paragraph.length; i++){
        ch = paragraph[i];

        if( (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') ){

            if( !(ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" ||
                  ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U") ){
                count++;
            }
        }
    }
    resultElmt.innerHTML = "Count of consonants : " + count;
}


function convertSmall(){
    paragraph = inputElmt.value;

    paraInSmall = paragraph.toLowerCase();

    resultElmt.innerHTML = paraInSmall;
}


function countSpaces(){
    paragraph = inputElmt.value;

    count = 0;
    for(i = 0; i < paragraph.length; i++){
        if(paragraph[i] == " "){
            count++;
        }
    }
    resultElmt.innerHTML = "Count of spaces : " + count;
}


function replaceSpacesWithHyphen(){
    paragraph = inputElmt.value;

    updatedPara = paragraph.replaceAll(" ", "-");

    resultElmt.innerHTML = updatedPara;
}

function countNewLines(){
    paragraph = inputElmt.value;

    count = 0;
    for(i = 0; i < paragraph.length; i++){
        if(paragraph[i] == "\n"){
            count++;
        }
    }
    resultElmt.innerHTML = "Count of new lines : " + count;
}


function countWords(){

    paragraph = inputElmt.value;
    let count = 0
    for (let i = 0; i < paragraph.length; i++) {
        if (paragraph[i] == " ")
            count++
    }
    document.getElementById("result").innerHTML = 'total words are: ' + (count + 1)
}




