'use strict';

/*let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncomeLabel = document.querySelector('.choose-income'),
    checksavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
*/

let startBtn = document.getElementById('start'),
      budgetValue = document.getElementsByClassName('budget-value')[0],
      yearValue = document.querySelector('.year-value'),
      monthValue = document.querySelector('.month-value'),
      dayValue = document.querySelector('.day-value'),
      expensesItemBtn = document.getElementsByTagName('button')[0],
      expensesItem = document.getElementsByClassName('expenses-item'),
      expensesValue = document.querySelector('.expenses-value'),
      optionalExpensesBtn = document.getElementsByTagName('button')[1],
      optionalExpensesItem = document.getElementsByClassName('optionalexpenses-item'),
      optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
      countBudgetBtn = document.getElementsByTagName('button')[2],
      dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
      levelValue = document.getElementsByClassName('level-value')[0],
      chooseIncome = document.querySelector('.choose-income'),
      incomeValue = document.getElementsByClassName('income-value')[0],
      checkSavings = document.querySelector('#savings'),
      chooseSum = document.querySelector('.choose-sum'),
      choosePercent = document.querySelector('.choose-percent'),
      monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
      yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];


let money, time;




startBtn.addEventListener('click', function(){
    time = +prompt ("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt ("Ваш бюджет на месяц?", "");
    

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 

    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed(1);
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth()+1;
    dayValue.value = new Date(Date.parse(time)).getDay();
});

expensesItemBtn.addEventListener('click', () => {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        
        if ((typeof(a)) !=null && (typeof(b)) !=null && a !='' && b !='' && a.length<50) {
     appData.expenses[a]=b;
     sum += +b;
    } else{
        i=i-1;
    }
    expensesValue.textContent = sum;
    }
});

optionalExpensesBtn.addEventListener('click', () =>{
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent  += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', () =>{
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "минимальный уровень достатка";
    }   else if(appData.moneyPerDay >100 && appData.moneyPerDay <2000){ 
        levelValue.textContent = "средний уровень достатка";
    }   else if (appData.moneyPerDay >2000) {
        levelValue.textContent = "высокий уровень достатка";
    }   else {
        levelValue.textContent = "произошла ошибка";
    }
   
});

chooseIncome.addEventListener('input', () =>{
    let inc = chooseIncome.value;
    if (isNaN(inc) || inc !='') {
        appData.income = inc.split(',');
        incomeValue.textContent = appData.income;
    }
});

checkSavings.addEventListener('click', () =>{
    if (appData.savings == true){
        appData.savings = false;
    } else{
        appData.savings = true;
    }
});


chooseSum.addEventListener('input', ()=>{
    if (appData.savings == true){
        let sum = +chooseSum.value,
            perc = +choosePercent.value;
    appData.monthIncome = sum/100/12*perc;
    appData.yearIncome = sum/100*perc;
    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});


choosePercent.addEventListener('input', ()=>{
    if (appData.savings == true){
        let sum = +chooseSum.value,
            perc = +choosePercent.value;
    appData.monthIncome = sum/100/12*perc;
    appData.yearIncome = sum/100*perc;
    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});


const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
