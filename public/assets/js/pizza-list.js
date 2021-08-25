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
        <div class="caard w-100 flex-column">
            <h3 class="card-header">${pizzaName}</h3>
            <div class="card-body flex-column col-auto">
            <h4 class="text-dark">By ${createdBy}</h4>
            <p>On ${createdAt}</p>
            <0>${commentCount} Comments</p>
            <h5 class="text-dark">Suggested Size: ${size}
            <ul>
                ${toppings
                    .map(topping => {
                        return `<li>${topping}</li>`;
                    })
                    .join('')}
            </ul>
            <a class="btn display-block w-100 my-auto" href="/pizza?id=${_id}">See the discussion.</a>
        </div>
       </div>
      </div>
      `;
      
      $pizzaList.innerHTML += pizzaCard;
};

getPizzaList();
