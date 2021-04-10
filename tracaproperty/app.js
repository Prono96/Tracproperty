// Storage Controller 

// Item Controller 
const ItemCtrl = (function() {
  const Item = function(id, name, price){
    this.id = id;
    this.name = name;
    this.price = price;
  }

  //Data Structure
  const data = {
    items: [
      {id: 0, name: 'Samsung Electronics', price:50000},
      {id: 1, name: 'Dinning Table', price:100000},
      {id: 2, name: 'Wallpapers', price:80000},
    ],
    currentitem: null,
    totalPrice: 0
  }

  // Return Data
  return {
    getItems: function() {
      return data.items;
    },
    logData: function() {
      return data;
    }
  }
})();

// UI Controller 
const UICtrl = (function() {

  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemPriceInput: '#item-price'
  }

// Public Method  
  return {
    populateItemList: function(items) {
      let html = '';

      items.forEach(function(item) {
        html += ` <li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.price}</em>
        <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;

      });

      // Insert list items into UI 
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },

    getItemInput: function() {
      return {
        name: querySelector(UISelectors.itemNameInput).value,
        price: querySelector(UISelectors.itemPriceInput).value
      }
    },

    getSelectors: function() {
      return UISelectors;
    }
  }
  
})();

// App Controller 
const App = (function(ItemCtrl, UICtrl) {

  // Load EventListener
  const loadEvenListeners = function() {
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors();
    // Add Item Event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
  }

  // Add item submit 
  const itemAddSubmit = function(e) {
  
    //get form input from UI controller
    const input = UICtrl.getItemInput();

    if(input.name !== '' && input.price !== '') {
      console.log(123);
    }

    e.preventDefault();
  }

  // Public Method
  return {
    init: function() {
      // fetch items from data structure
      const items = ItemCtrl.getItems();
      
      // Populate UI list
      UICtrl.populateItemList(items);

      // Load Event Listeners
      loadEvenListeners();

    }
  }
  
})(ItemCtrl, UICtrl);

// Initialising app 
App.init();