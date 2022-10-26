
const element=document.getElementById('pincode')
element.addEventListener("keypress",e=>{
if(isNaN(e.key)){
e.target.value=e.target.value
e.preventDefault();
}
})