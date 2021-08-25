const $pizzaList = document.querySelector('#pizza-list');

const getPizzaList = () => {
    fetch('/api/pizzas')
    .then(response => response.json())
    .then(pizzaListArr => {
        pizzaListArr.forEach(printPizza);
    })
    .catch(err => {
        console.log(err);
    });
};
const printPizza = ({ _id, pizzaName, toppings, size, commentCount, createdBy, createdAt}) => {
    const pizzaCard =`
    <div class="col-12 col-llg flex-row">
    `
}