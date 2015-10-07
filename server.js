var myButton = document.getElementById('myButton');

function outputText(){
    var myInputText = document.getElementById('myInput').value;
    alert(myInputText);
}

myButton.addEventListener('click', outputText);