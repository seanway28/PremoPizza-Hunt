const { response } = require("express");

const $backBtn = document.querySelector('#back-btn');
const $pizzaName = document.querySelector('#pizza-name');
const $createdBy = document.querySelector('#created-by');
const $createdAt =document.querySelector('#created-at');
const $size = document.querySelector('#size');
const $toppingsList = document.querySelector('#toppings-list');
const $commentSection = document.querySelector('#comment-section');
const $newCommentForm = document.querySelector('#new-comment-form');

let pizzaId;

function getPizza() {
    // Get id of pizza 
    const searchParams = new URLSearchParams(document.location.search.substring(1));
    const pizzaId = searchParams.get('id');

    // Get pizzaInfo
    fetch(`/api/pizzas/${pizzaId}`)
    .then(response => {
        // Check for a 4xx or 5xx error from server
        if (!response.ok) {
            throw new Error({ message: 'Something Went Wrong!' });
        }
        return response.json();
    })
    .then(printPizza)
    .catch(err => {
        console.log(err);
        alert('Cannot find a pizza with this Id! Taking you back to page.');
        window.history.back();
    });
}