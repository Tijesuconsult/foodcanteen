let loginbutt = document.getElementById('login1')
let loginUser = document.getElementById('loginUser')
let userPassword = document.getElementById('userPassword')
let message = document.getElementById('message')

let password = document.getElementById('password')
let userName = document.getElementById('userName')

let accName = document.getElementById('accName')

login1.onclick = function(){
    if(loginUser.value == ''){
        alert('Please Enter Your UserName')
    }
    else if(loginUser.value !== localStorage.getItem('UserName')){
        alert('User Name does not Exit')
        window.NavigationPreloadManager()
    }
    if(userPassword.value == ''){
        alert('Please Enter Your Password')
    }
    else if(userPassword.value !== localStorage.getItem('Password')){
        alert('Password does not Exit')
    }
    else{
    alert('Successful')
    loginUser.value = localStorage.getItem('UserName')
    userPassword.value = localStorage.getItem('Password')
    window.location.href = 'foodpage.html'
    // accName.innerHTML = `Hi! ${localStorage.getItem('UserName')}`
    
    // for(let i = 0; i < localStorage.length; i++){
    //     const userName = localStorage.userName(i);
    //     accName.innerHTML+= `${userName}`
    // }
    }
}