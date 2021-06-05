//Задание 2
//Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

// ПОМЕНЯЛ, ПОУДАЛЯЛ, СЛЕПИЛ КОСОГО С ГОРБАТЫМ.....ПОНИМАЮ, ЭТО ТРЭШ...ДОЛГО СИДЕЛ НИЧЕГО ЛУЧШЕГО НЕ ПРИДУМАЛ...

const inventory = {
  items: ["Knife", "Gas mask", "Medkit"],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);
  },
};
const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};
invokeInventoryAction("Medkit", inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory
console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
invokeInventoryAction("Gas mask", inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

let numbers = ["Knife", "Gas mask", "Medkit"];
let result = numbers.splice(1, 1);
// console.log(result);
console.log(numbers); // ['Knife', 'Medkit']
