// Storage Controller 


// Item Controller 
const ItemCtrl = (function() {
  // Item Constructor
  const Item = function(id, name, price){
    this.id = id;
    this.name = name;
    this.price = price;
  }

  //Data Structure
  const data = {
    items: [
      // {id: 0, name: 'Samsung Electronics', price:50000},
      // {id: 1, name: 'Dinning Table', price:100000},
      // {id: 2, name: 'Wallpapers', price:80000},
    ],
    currentItem: null,
    totalPrice: 0
  }

  // Public methods
  return {
    getItems: function() {
      return data.items;
    },
    addItem: function(name, price) {
      // Create ID
      let ID;
      if(data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;

      } else {
        ID = 0;
      }

      // Making Price to numbers
      price = parseInt(price);

      // Creating a new item
      newItem = new Item(ID, name, price);

      // Add to items array
      data.items.push(newItem);

      return newItem;
    },

    // Total Price
    getTotalPrice: function() {
      let total = 0;
      // Loop through items and add price
      data.items.forEach(function(item) {
        total += item.price;
      });
      // Set total price in the data structure
      data.totalPrice = total;    
      
      // Return total
      return data.totalPrice;
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
    itemPriceInput: '#item-price',
    totalPrice: '.total-price'
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
        name: document.querySelector(UISelectors.itemNameInput).value,
        price: document.querySelector(UISelectors.itemPriceInput).value
      }
    },

    addListItem: function(item) {
      // Show the List
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // Create Li element 
      const li = document.createElement('li');
      // Add class name
      li.className = 'collection-item';
      // Add ID
      li.id = `item-${item.id}`;
      // Add HTML
      li.innerHTML = `<strong>${item.name}: </strong> <em>${item.price}</em>
      <a href="#" class="secondary-content">
      <i class="edit-item fa fa-pencil"></i>
      </a>`;
      // Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },

    clearInput: function() {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemPriceInput).value = '';
    },

    hidelist: function() {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },

    showTotalPrice: function(totalPrice) {
      document.querySelector(UISelectors.totalPrice).textContent = totalPrice;
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

    // Check for name and price input
    if(input.name !== '' && input.price !== '') {
    
      //Add item
      const newItem = ItemCtrl.addItem(input.name, input.price)

      // Add item list to UI
      UICtrl.addListItem(newItem);

      //get total price
      const totalPrice = ItemCtrl.getTotalPrice();

      // Add total price to UI
      UICtrl.showTotalPrice(totalPrice);

      // Clear input field
      UICtrl.clearInput();
    }

    e.preventDefault();
  }

  // Public Method
  return {
    init: function() {
      // fetch items from data structure
      const items = ItemCtrl.getItems();

      //Check if any items
      if(items.length === 0) {
        UICtrl.hidelist();
      } else {
         // Populate UI list
      UICtrl.populateItemList(items);
      }

      // Get total price
      const totalPrice = ItemCtrl.getTotalPrice();
      // Add total price to UI
      UICtrl.showTotalPrice(totalPrice);


      // Load Event Listeners
      loadEvenListeners();

    }
  }
  
})(ItemCtrl, UICtrl);

// Initialising app 
App.init();