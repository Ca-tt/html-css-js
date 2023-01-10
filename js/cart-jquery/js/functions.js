function debug() {
  console.log('- quantity -', quantity);
}

// page load load functionality
function firstLoad() {
  console.log('filling data for the first time...');
  storage.quantity = getDefaultQuantity(inputs);
  storage.statuses = getDefaultStatuses(buttons);
}

function getDefaultQuantity(inputs) {
  inputs.forEach((input, index) => {
    quantity[index] = input.value;
  })
  return JSON.stringify(quantity);
}

function getDefaultStatuses(buttons) {
  buttons.forEach((button, index) => {
    statuses[index] = 'active';
  })
  return JSON.stringify(statuses);
}

// data loading
function loadData() {
  // if storage empty, fill it with default values
  if (storage.quantity == null || storage.statuses == null) {
    firstLoad();
  }

  else {
    quantity = JSON.parse(storage.quantity);
    statuses = JSON.parse(storage.statuses);

    // fill inputs with numbers saved last time
    inputs.forEach((input, index) => {
      input.value = quantity[index];
      input.setAttribute('value', quantity[index])
      updateQuantity(input);
    });

    // check statuses - and hide "deleted" elements
    statuses.forEach((status, index) => {
      if (status == 'deleted') {
        products[index].remove();
      }
    })
  }
}

// save & load data
function saveData(data, key) {
  storage[key] = JSON.stringify(data);
}

// quantity (inputs)
function saveQuantity(input, index) {
  input.onchange = () => {
    // get and save input's value
    quantity[index] = input.value;
    saveData(quantity, 'quantity');
  }
}


// statuses: (buttons) (show/hide elements)
function saveStatus(button, index) {
  button.onclick = () => {
    // add "deleted" status after button clicked 
    // remove product from html
    // and save data
    statuses[index] = 'deleted';
    products[index].remove();
    saveData(statuses, 'statuses')
  }
}

/* ADDITIONAL FUNCTIONS */

// show products, when dedicated button is pressed
function showProducts() {
  buttons.forEach((button, index) => {
    statuses[index] = 'active';
    saveData(statuses, 'statuses')
  });
}