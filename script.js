'use strict';


let money, time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }

}
start();

    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses:function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt ("Во сколько обойдется?", "");
        
            if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i--;
            }
        
        }
    },
    detectDayBudget:function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    },
    detectLevel:function(){
        if (appData.moneyPerDay < 100) {
            console.log("минимальный уровень достатка");
        }   else if(appData.moneyPerDay >100 && appData.moneyPerDay <2000){ 
                console.log("средний уровень достатка");
        }   else if (appData.moneyPerDay >2000) {
                console.log("высокий уровень достатка");
        }   else {
                console.log("произошла ошибка");
        }
    },
    checkSavings: function(){
        if (appData.savings == true){
            let save = +prompt ("Какова сумма сбережений?", ""),
                percent = +prompt ("Под какой процент?", "");
            
                appData.monthIncome = save/100/12*percent;
                alert("Доход вашего депозита"+ appData.monthIncome);
            }
    },
    chooseOptExpenses:function(){
        for (let i = 0; i<3; i++){
            let opt = prompt ("Введите необязательную статью расходов в этом месяце", "");
             appData.optionalExpenses[i] = opt; 
        }
    },
    chooseIncome: function(){
        let items = prompt("Перечислите виды доп доходов через запятую!",'');
        if (typeof(items) !=string || items != ""|| items !=null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
        
        appData.income = items.split(',');
        appData.income.push( prompt("может что то еще?",''));
        appData.income.sort();
        }
        appData.income.forEach(function(item, i) {
            alert("Способы доп заработка :" + (i+1)+item);
          });
    },
};
for (let key in appData) {
    console.log("Наша программа включает в себя данные: "+ key + '-' + appData[key]);
    
}

/*let soldier = {
    health: 400,
    armor: 100
};
let john = {
    health: 100
};

john.__proto__=soldier;

console.log(john);
console.log(john.armor);
*/