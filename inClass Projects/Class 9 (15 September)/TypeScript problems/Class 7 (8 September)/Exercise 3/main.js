drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
];

function sortDrinkByPrice(drinkArr) {
return drinkArr.sort((a, b) => a.price - b.price);
}

const drinksByPrice = sortDrinkByPrice(drinks);

console.log(drinksByPrice); // [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
