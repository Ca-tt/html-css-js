let storage = window.localStorage;

// empty arrays for data. Defined globally
let quantity = [];
let statuses = [];

// all html elements here
let products = document.querySelectorAll('.product');
let inputs = document.querySelectorAll('.product-quantity-input');
let buttons = document.querySelectorAll('.remove-product');
let showProductsButton = document.querySelector('.show-products');

// enable elements
showProductsButton.onclick = showProducts;
inputs.forEach(saveQuantity);
buttons.forEach(saveStatus);
