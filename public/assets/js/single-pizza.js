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

function printPizza(pizzaData) {
    console.log(pizzaData);

    pizzaId = pizzaData._id;

    const { pizzaName, createdBy, createdAt, size, toppings, comments } = pizzaData;

    $pizzaName.textContent = pizzaName;
    $createdBy.textContent = createdBy;
    $createdAt.textContent = createdAt;
    $size.textContent = size;
    $toppingsList.innerHTML = toppings
    .map(topping => `<span class="col-auto m-2 text-center btn">${topping}</span>`)
    .join('');
    
    if (comments && comments.length) {
        comments.forEach(printComment);
    } else {
        $commentSection.innerHTML = '<h4 class="bg-dark p-3 rounded">No comments just yet!</h4>';
    } 
}

function printComment(comment) {
    // Make div to hold comment and subcomments
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('my-2', 'card', 'p-2', 'w-100', 'text-dark', 'rounded');

    const commentContent = `
        <h5 class="text-dark">${comment.writtenBy} commented on ${comment.createdAt}:</h5>
        <p>${comment.commentBody}</p>
        <div class="bg-dark ml-3 p-2 rounded">
            ${comment.replies && comment.replies.length
            ? `<h5$>${comment.replies.length} ${comment.replies.length === 1 ? 'Reply' : 'Replies'
            }</h5>
                ${comment.replies.map(printReply).join('')}`
                : '<h5 class='

}
