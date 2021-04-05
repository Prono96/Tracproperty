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
    itemList: '#item-list'
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

    getSelectors: function() {
      return UISelectors;
    }
  }
  
})();

// App Controller 
const App = (function(ItemCtrl, UICtrl) {

  // Load EventListener
  const loadEvenListeners = function() {
    const UISelectors = UICtrl.getSelectors();S
  }

  // Public Method
  return {
    init: function() {
      console.log('Initialising app...');
      const items = ItemCtrl.getItems();
      
      // Populate UI list
      UICtrl.populateItemList(items);

      
    }
  }
  
})(ItemCtrl, UICtrl);

// Initialising app 
App.init();