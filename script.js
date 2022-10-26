function hello1(){
    alert("say hello")
}
function hello(){
    alert("Say Something")
}
var Hello=document.getElementById("ss");
Hello.addEventListener("click",hello1)
var Hello=document.getElementById("ss1");
Hello.addEventListener("click",hello,hello1)
var Hello=document.getElementById("ss1");
Hello.addEventListener("click",hello1);