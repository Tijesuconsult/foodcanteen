//PAGE LOADER
let loder = document.getElementById("loader")
function showLoader(){
loder.style.display = 'block';
}
function hideLoader(){
  loder.style.display = 'none'
}
window.addEventListener('load', function(){
  showLoader()
})
function timeConsumingTask(){
  const duration = 5000;
  return new Promise(resolve =>{
    setTimeout(()=>{
      resolve();
  }, duration);
})
}
timeConsumingTask().then(()=>{
  hideLoader()
})
// document.addEventListener('DOMContentLoaded', function(){
//   hideLoader()
// })

let mySaveFood = document.getElementById('mySaveFood')
// let food = document.getElementById('foods')
let addCart  = document.getElementById('allcart')
let showcart = document.getElementById('showcart')

let cart =  [];
function addToCart(food){
  cart.push(food);
localStorage.setItem("Cart", food)
addCart.innerHTML += food + `<br />`
  alert('You Saved ' + food + ' to your Cart');
}

function showCart(){
  ToggleEvent
  addCart.style.display = "block"; 
  localStorage.getItem(food) 
}
function closeBut(){
  addCart.style.display = "none"
}