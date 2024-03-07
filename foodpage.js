let accName = document.getElementById('accName')
let userName = document.getElementById('userName')

accName.innerHTML = localStorage.getItem('UserName')
function display (){
    if(userName.value == localStorage.setItem('UserName')){
    accName.innerHTML = localStorage.getItem('UserName')
    }


}