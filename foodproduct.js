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

const product = [
    {
        id: 0,
        image: 'food-img/Amala.jpeg',
        title: 'Amala with Abula',
        price: 2000,
    },
    {
        id: 1,
        image: 'food-img/Semo.jpeg',
        title: 'Semo and Egusi',
        price: 2500,
    },
    {
        id: 2,
        image: 'food-img/Amala.jpeg',
        title: 'Amala with Abula',
        price: 2000,
    },
    {
        id: 3,
        image: 'food-img/Amala.jpeg',
        title: 'Amala with Abula',
        price: 2000,
    },
    {
        id: 4,
        image: 'food-img/Amala.jpeg',
        title: 'Amala with Abula',
        price: 2000,
    },
    {
        id: 5,
        image: 'food-img/Amala.jpeg',
        title: 'Amala with Abula',
        price: 2000,
    },
    {
        id: 6,
        image: 'food-img/Amala.jpeg',
        title: 'Amala with Abula',
        price: 2000,
    },
    {
        id: 7,
        image: 'food-img/Amala.jpeg',
        title: 'Amala with Abula',
        price: 2000,
    },
    {
        id: 8,
        image: 'food-img/Amala.jpeg',
        title: 'Amala with Abula',
        price: 2000,
    },
    {
        id: 9,
        image: 'food-img/Amala.jpeg',
        title: 'Amala with Abula',
        price: 2000,
    },
    {
        id: 10,
        image: 'food-img/Amala.jpeg',
        title: 'Amala with Abula',
        price: 2000,
    },
    {
        id: 11,
        image: 'food-img/Amala.jpeg',
        title: 'Amala with Abula',
        price: 2000,
    },
    {
        id: 12,
        image: 'food-img/Amala.jpeg',
        title: 'Amala with Abula',
        price: 2000,
    },
    {
        id: 13,
        image: 'food-img/Amala.jpeg',
        title: 'Amala with Abula',
        price: 2000,
    },
    {
        id: 14,
        image: 'food-img/Amala.jpeg',
        title: 'Amala with Abula',
        price: 2000,
    },
    {
        id: 15,
        image: 'food-img/Amala.jpeg',
        title: 'Amala with Abula',
        price: 2000,
    }
];

// let createProduct = () => {
//     allCommerce.map((value, index) => {
//       console.log(index);
//       const card = `
//           <div key=${index} class='card'>
//               <img src=${value.image} alt=${value.title} class=''/>
//               <h1>${value.title}</h1>
//                <p class="desc">${value.description.substr(0, 10)}...</p>
//               <small class="price">${value.price}</small>
//               <del class="del">$200</del><br>
//               <button class="btn">Shop Now</button>
             
//           </div>
//     `;
//       allCom.innerHTML += card;
//     });
//   };
//   createProduct();

const categories = [...new Set(product.map((item)=>item))]
let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    let {image, title, price} = item;
    return(
        `
        <div class='box'>
        <div class='img-box'>
        <img class="images" src=${image}></img>
        </div>
        <div class="bottom">
        <p>${title}</p>
        <h2># ${price}.00 </h2>` +
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

let cart = [];

function addtocart (a){
    cart.push({...categories[a]});
    displaycart();
}


function delElement(a){
    cart.splice(a, 1);
    displaycart()
}
function displaycart(a){
    let j = 0; total = 0;
    document.getElementById('count').innerHTML = cart.length
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is Empty";
        document.getElementById('total').innerHTML = "#" +0+".00";
    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((items)=>{
            let {image, title, price} = items;
            total=total+price;
            document.getElementById('total').innerHTML = "#"+total+".00";
            return(
                `<div class = 'cart-item'>
                <div class = 'row-img'>
                <img class ="rowimg" src = ${image}>
                </div>
                <p style = "font-size:14px;">${title}</p>
                <h2 style = "font-size:15px;"># ${price}.00</h2>`+
                "<i class ='fa-solid fa-trash' onclick = 'delElement("+ (j++)+")'></i></div>"
            );
        }).join('');
    }
}
let sidebar = document.getElementById('sidebar')
// let showcart = document.getElementById('clickme')
function showcart(){
sidebar.style.display = 'block'
// sidebar.style.transition = 'all 1s ease'
}
function closecart(){
    sidebar.style.display = 'none'
}

// Date and Time Section

let d = new Date();
document.getElementById('date').innerHTML = d.toLocaleDateString()


let myTime = setInterval(myTimer, 1000);
function myTimer(){
    let t = new Date();
    document.getElementById('time').innerHTML = t.toLocaleTimeString()
}


// let root = document.getElementById('root')
// const categories = () =>{
//     product.map((product, index) =>{
//         const card = 
//         `
//         <div class='box'>
//         <div class='img-box'>
//         <img class="images" src=${product.image}></img>
//         </div>
//         <div class="bottom">
//         <p>${product.title}</p>
//         <h2># ${product.price}.00 </h2>
//         </div>`;
//         root.innerHTML += card
//     })
// };
// categories();
