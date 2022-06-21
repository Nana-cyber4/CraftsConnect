// const authBtn = document.querySelectorAll('.auth-btn');
// const overlay = document.querySelector('.overlay');
// const login = document.querySelector('.login');
// const signUp = document.querySelector('.sign-up');
// const userAvatar = document.querySelector('.user-avatar i');
// const accountDropdown = document.querySelector('.account-dropdown');

// const parse = require("nodemon/lib/cli/parse");

// let showOverlay = function() {
//     if (this.value === 'login') {
//         overlay.style.display = 'block';
//         login.style.display = 'block';
//     } else if (this.value === 'sign-up') {
//         overlay.style.display = 'block';
//         signUp.style.display = 'block';
//     }
// };

// let showAccountDropdown = function() {
//     if (accountDropdown.style.display === 'block') {
//         accountDropdown.style.display = 'none';
//     } else {
//         accountDropdown.style.display = 'block';
//     }
// };

// // userAvatar.addEventListener('click', showAccountDropdown);

// authBtn.forEach(btn => {
//     btn.addEventListener('click', showOverlay);    
// });

// /* Craftsman jquery*/
// // 


// const image_input = document.querySelector('#image_input');

// var uploaded_image = '';

// image_input.addEventListener('change', function(){
//     const read = new FileReader();
//     read.addEventListener('load',() =>{
//         uploaded_image = read.result;
//         document.querySelector('#display_image').style.backgroundImage = 'url(${uploaded_image})';
//     })
//     read.readAsDataURL(this.files[0]);
// })



// //const image_input = document.querySelector('#image_input');

// //var uploaded_image = '';

// //image_input.addEventListener('change', function(){
//   //  const read = new FileReader();
//     ///read.addEventListener('load',() =>{
//        // uploaded_image = read.result;
//         //document.querySelector('#display_image').style.backgroundImage = 'url(${uploaded_image})';
//     //})
//     //read.readAsDataURL(this.files[0]);
// //})


const detailAddToCartBtn = document.querySelector('#detail .add-to-cart-btn');
const increaseBtn = document.querySelector('.increase-btn');
const decreaseBtn = document.querySelector('.decrease-btn');
const qty = document.querySelector('.qty-num');
const cart = document.querySelector('.cart-number');


let increaseQty = function() {
    qty.textContent = parseInt(qty.textContent) + 1;
};

let decreaseQty = function() {
    if (parseInt(qty.textContent) > 0) {
        qty.textContent = parseInt(qty.textContent - 1);
    } else if(parseInt(qty.textContent) <= 0) {
        qty.textContent = 0;
    }
};

let detailAddToCart = function() {
    cart.textContent = parseInt(cart.textContent) + parseInt(qty.textContent);
};

increaseBtn.addEventListener('click', increaseQty);
decreaseBtn.addEventListener('click', decreaseQty);
detailAddToCartBtn.addEventListener('click', detailAddToCart);
