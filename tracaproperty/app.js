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

  // Return the data 
  return {
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
      
    }
  }
  
})(ItemCtrl, UICtrl);

// Initialising app 
App.init();