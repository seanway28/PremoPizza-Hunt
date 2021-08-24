const $addToppingBtn = document.querySelector('#add-topping');
const $pizzaForm = document.querySelector('#pizza-form');
const $customToppingList = document.querySelector('#custom-toppings-list');

const handleAddTopping = event => {
    event.preventDefault();

    const toppingValue = document.querySelector('#new-topping').value;
        if (!toppingValue) {
            return false;

        }
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
    
