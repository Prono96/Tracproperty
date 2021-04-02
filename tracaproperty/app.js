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
      {id: 0, name: 'Samsung Electronics', price:N50000},
      {id: 1, name: 'Dinning Table', price:N100000},
      {id: 2, name: 'Wallpapers', price:N80000},
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
const App = (function(ItemCtrl, UiCtrl) {
  
})();