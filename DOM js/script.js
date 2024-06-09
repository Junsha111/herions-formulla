// const age = prompt("enter age:");
// var newage=Number.parseInt(age)
// if (newage<=18){
//     document.body.firstElementChild.innerHTML += age;
//     document.getElementById("heading").innerHTML += 'cannot drive'
// }
const colors = ["red" , "green" , "blue"]
function handleClick(){
        document.body.style.backgroundColor = colors[0];
    }
    function handleDblClick(){
    document.body.style.backgroundColor = colors[1];
}