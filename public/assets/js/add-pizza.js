const $addToppingBtn = document.querySelector('#add-topping');
const $pizzaForm = document.querySelector('#pizza-form');
const $customToppingList = document.querySelector('#custom-toppings-list');

const handleAddTopping = event => {
    event.preventDefault();

    const toppingValue = document.querySelector('#new-topping').value;
        if (!toppingValue) {
            return false;

        
}
    const checkbox = document.createElement('label');
    checkbox.type = 'checkbox';
    checkbox.name = 'topping';
    checkbox.value = 'toppingValue';
    checkbox.id = 'toppingValue'
        .toLowerCase()
        .split('')
        .join('-');
    
    const lable = document.createElement('lable');
    lable.textContent = toppingValue;
    lable.htmlFor = toppingValue
        .toLowerCase()
        .split('')
        .join('-');
    
    const divWrapper = document.createElement('div');
     divWrapper.appendChild(checkbox);
     divWrapper.appendChild(lable);
     $customToppingList.appendChild(divWrapper);

     toppingValue.value = '';
};

    const handlePizzaSubmit = event => {
        event.preventDefault();
    
    const pizzaName = $pizzaForm.querySelector('#pizza-name').value;
    const createdBy = $pizzaForm.querySelector('#created-by').values;
    const size = $pizzaForm.querySelector('#pizza-size').value;
    const toppings = [...$pizzaForm.querySelectorAll('[name-topping')].map(topping => {
        return topping.value;    
});
    if (!pizzaName || !createdBy || !toppings.length) {
        return;
}

    const FormData = { pizzaName, createdBy, size, toppings };
    fetch('/api/pizzas', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(postResponse => {
            alert('Pizza created successfully! Well done!');
            console.log(postResponse);
        })
        .catch(err => {
            console.log(err);
            saveRecord(formData);
        });
    };

    $pizzaForm.addEventListener('submit', handlePizzaSubmit);
    $addToppingBtn.addEventListener('click', handleAddTopping);
