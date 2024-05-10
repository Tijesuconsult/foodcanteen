let allform = document.getElementById('allform')
let form1 = document.getElementById('form1')
let name = document.getElementById('name')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')
let userName = document.getElementById('userName')
let password = document.getElementById('password')
let confPss = document.getElementById('confPass')

let otp = document.getElementById('otp')
let otpdisplay = document.getElementById('otpdisplay')
let otpGenerator = document.getElementById('otp-generator')

let errname = document.getElementById('errname')
let errlastname = document.getElementById('errlastname')
let erremail = document.getElementById('erremail')
let errusername = document.getElementById('errusername')
let errpass = document.getElementById('errpass')
let errconfpass = document.getElementById('errconfpass')
let = errotp = document.getElementById('errotp')

let butt = document.getElementById('butt')

let digits = Math.floor(Math.random()*554567)+1;


butt.onclick = function() {
    // localStorage.setItem('FirstName', name.value)
if(name.value == '' || name.value == null){
name.style.border = '1px solid red'
// errname.innerHTML = "Required"
// errname.style.color = 'red'
}
else if(name.value == name.value){
}

if(lastName.value == '' || lastName.value == null){
lastName.style.border = '1px solid red'
// errlastname.innerHTML = 'Required'
// errlastname.style.color = 'red'
}
if(email.value == ''){
email.style.border = '1px solid red'
// erremail.innerHTML = 'Required'
// erremail.style.color = 'red'
}
if(userName.value == '' ){
userName.style.border = '1px solid red'
// errusername.innerHTML = 'Required'
// errusername.style.color = 'red'
}
// else if(userName.value == localStorage.getItem(userName)){
//     alert('User Name is already Exit')
// }

if(password.value == ''){
// errconfpass.innerHTML = 'Ivalid'
// errconfpass.style.color = 'red'
password.style.border = '1px solid red'
}
if(confPss.value !== password.value){
errconfpass.innerHTML = 'Ivalid'
errconfpass.style.color = 'red'
confPss.style.border = '1px solid red'
}
else if(confPss.value == ''){
confPss.style.border = '1px solid red'
}

else if(otp.value == ''){
    otp.style.border = '1px solid red'
    otpdisplay.innerHTML = 'Please Generate OTP'
    otpdisplay.style.fontStyle = 'italic'
    // alert('Please Generate OTP')
}
else if(otp.value != digits){
    otpdisplay.innerHTML = 'Invalid OTP'
    otpdisplay.style.color = 'red'
}

else{
    // let names = [];
    // if(localStorage.getItem('namas')){
    //     names = JSON.parse(localStorage.getItem('names'))
    // }
    // names.push(name)
    // const dataUsers = JSON.stringify(names)
    // localStorage.setItem('names', dataUsers)

    // allform.style.display = 'none'
    window.location.href = "Login.html"
    localStorage.setItem('FirstName',name.value)
    localStorage.setItem('lastName',lastName.value)
    localStorage.setItem('Email',email.value)
    localStorage.setItem('UserName',userName.value)
    localStorage.setItem('Password',password.value)
    localStorage.setItem('ConfirmPass',confPss.value)
    

    // location.reload()
}
}

otpGenerator.onclick = function(){
otp.value = digits
otp.style.color = 'blue'
otp.style.fontSize = '20px'
}
otpGenerator.style.padding = '5px'
otpGenerator.style.backgroundColor = 'black'
otpGenerator.style.color = 'white'
otpGenerator.style.border = '1px solid transparent'
// for (let i = 0; i < localStorage.length; i++){

// }
