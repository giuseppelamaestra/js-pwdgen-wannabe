
const nome = prompt("Type your name");
const surname = prompt("Type your surname");
const color = prompt("Type your favourite color");

document.getElementById("name").innerHTML = "Type your name: " + nome; 
document.getElementById("surname").innerHTML = "Type your surname: " + surname; 
document.getElementById("favourite-color").innerHTML = "Type your favourite color: " + color; 
document.getElementById("overall-outcome").innerHTML = "Overall outcome: " + nome + surname + color + 21; 




