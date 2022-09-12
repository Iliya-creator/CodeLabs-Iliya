// You will be given an array of drinks, with each drink being an object with two properties: name and price. Define a function with the parameter representing the array of drinks and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
  {name: 'carrot', price: 34}
];


function sortDrinkByPrice(drinks){
    return drinks.sort((a, b) => a.price - b.price);
}

console.log(sortDrinkByPrice(drinks));