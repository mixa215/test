'use strict'

// let age = prompt('Сколько тебе лет?', '');

// alert(`Тебе ${age} лет!`); // Тебе 100 лет!




// funtction detectDayBudget() {

// }

// funtction detectLevel() {

// }

// funtction chooseOptExpenses() {

// }

// prompt('Статья необязательных расходов?', '');
// 
let detectDayBudgetData = prompt('Статья необязательных расходов?', '');
let detectLevelData = prompt('Статья необязательных расходов?', '');
let chooseOptExpensesData = prompt('Статья необязательных расходов?', '');

let optionalExpenses = {
    Data1: detectDayBudgetData,
    Data2: detectLevelData,
    Data3: chooseOptExpensesData
}
alert(optionalExpenses.Data1);
alert(optionalExpenses.Data2);
alert(optionalExpenses.Data3);