function submit(){
let email =document.getElementById(`email`).Value;
let Password =document.getElementById(`Password`).Value;
window.open(`mailto:${email}?subject=FromMfg&body${Password}`)



}