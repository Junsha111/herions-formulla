// let username = prompt("Enter user name")
// let pasword =  prompt("Enter password")


// if(username =="junaid shah" && pasword == "123456"){
//     console.log("login")
// }else{
//     console.log("wronge Credential")
// }
// console.log(randNum); 
// while(randNum <50){
//     console.log("hello")
// }
// do{
//     console.log(randNum)
// }
// while(true){

// }
// var randNum = Number.parseInt(Math.random()*100);
// do{
//     var guess = Number.parseInt(prompt('Guess the number:'));
//     if(guess == randNum){
//         ("You win!");
//         break;
//     }
//     else if (guess>randNum){
//         console.log("your number is greater")
//     }
//     else if ( guess < randNum){
//         console.log("Your number is less")
//     }
//     }
// while(true)
    // for(var i=0; i<=15; i++){
    //     if(i%2==0){
    //         console.log(`${i} is even`)
    //     }
    //     else{
    //         console.log(`${i} is odd`)
    //     }
    // }
// function add(){
//     var x = 20 ;
//     var y =  30 ;
//     console.log(x + y);
// }
// add();
// function add(x , y){
//     return x + y ;
// }
// console.log(add(5 , 6));
// const sub = (x , y)=>{
//     return x - y
// }
// let name = "54533";
// function perimeter(a,b,c) {
//     return (a+b+c)
    
// }
// perimeter(10,5,6)
// console.log(perimeter(10,5,6))
// function her (a,b,c){
//     var s=(a+b+c)/2
//     var x =s-a
//     var y=s-b
//     var z=s-c;
//     var form = Math.sqrt(s*x*y*z)
//     return form

// }
// var result=her (4,5,6)
// console.log(result)
// function greeting (x){
// if(x< 12){ 
//     alert('good morning')

// }
// else if(x>12 && x<18){
//     alert('good afternoon') 
// }else{
//     alert('good evening')
// }
// }
// var number=prompt('enter number')
// number = Number.parseInt(number)
// greeting(number);

// let name = "Junaid";
// let name2 = 'Amir';
// let para = "this is's a paragraph"
// let para2 = " this is a kjsd\"fhkh"
// console.log(para2)
// let para3 = "this is a para\\ 3 "
// console.log(para3)
// let message = `hello ${name2}`;
// console.log(message)
// console.log(name.length);
// console.log(name[0])
// let newName = name[0]="x";
// console.log(name , newName)
// let x = new String("Junaid");
// let year = new Date();
// console.log(year.)
// const name = "W3Schools";
// let letter = name.at(2);
// console.log(letter);
// let name2 = "junaid";
// console.log(name2.toUpperCase())
// let time = new Date();
// let hours = time.getHours();
// let minutes = time.getMinutes();
// let seconds = time.getSeconds();
// settime
// console.log(hours , minutes , seconds);
// setTimeout(function hello(){
//     console.log("hello junaid")
// }, 3000)
// function hello (){
//     console.log("hello junaid")
// }
// setTimeout(hello ,4000 )
// setTimeout(() => {
//     console.log("Hello junaid")
    
// }, 6000);
setInterval(() => {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let pmam = "AM";
    if(hours>12){
        hours-= 12;
    }
    if(hours>=12){
        pmam = "PM";
    }
    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds + " " +pmam
    // console.log(hours + ":" + minutes + ":" + seconds + " " +pmam)
}, 1000);
