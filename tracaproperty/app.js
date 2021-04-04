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

  // Public method
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
  
})();

// App Controller 
const App = (function(ItemCtrl, UICtrl) {

  return {
    init: function() {
      console.log('Initialising app...');
      const items = ItemCtrl.getItems();
      console.log(items);
      
    }
  }
  
})(ItemCtrl, UICtrl);

// Initialising app 
App.init();