const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let lessThanEight = false;
let moreThanFifteen = false;

let password1 = document.getElementById("pw1");
let password2 = document.getElementById("pw2");
let password3 = document.getElementById("pw3");
let password4 = document.getElementById("pw4");

let resultTextElement = document.getElementById("resultText");


function getRandomCharacters() {
    let randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}


function generatePasswords() {
       let passwordString = "";

       let inputNoElement = document.getElementById("passwordlength");
       let inputNoText = inputNoElement.value;
       inputNo = Number(inputNoText);

       if (inputNo < 8) {
           resultTextElement.textContent = "Minimum characters not less than 8.";
           lessThanEight = true;
        } else {
           if (inputNo > 15) {
               resultTextElement.textContent = "Maximum characters not more than 15.";
               moreThanFifteen = true;
            } else {
               resultTextElement.textContent = "Your passwords are ready!";
            }
        }

        if (lessThanEight === false && moreThanFifteen === false) {
            for (let i = 0; i < inputNo; i++) {
            passwordString += getRandomCharacters();
            } return passwordString;
        }
} 

function showPassword() {
    lessThanEight = false;
    moreThanFifteen = false;

    password1.textContent = generatePasswords();
    password2.textContent = generatePasswords();
    password3.textContent = generatePasswords();
    password4.textContent = generatePasswords();
}

function pw1() {
    /* Save value of myText to input variable */
    var input = password1.textContent;
   
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(input);
}

function pw2() {
    var input = password2.textContent;

    navigator.clipboard.writeText(input);
}

function pw3 () {
    var input = password3.textContent;

    navigator.clipboard.writeText(input);
}

function pw4 () {
    var input = password4.textContent;

    navigator.clipboard.writeText(input);
}