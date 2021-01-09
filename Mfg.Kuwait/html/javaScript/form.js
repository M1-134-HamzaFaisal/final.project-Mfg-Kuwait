function submit(){
let email =document.getElementById(`email`).nodeValue;
let Password =document.getElementById(`Password`).nodeValue;
window.open(`mailto:${email}?subject=FromMfg&body${Password}`)

}