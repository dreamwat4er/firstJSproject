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
    savings: true
};


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
        } else {
            i--;
        }
    
    };
}
chooseExpenses();

function detectDayBudget() {                                            // Расчет дневного бюджета
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}
detectDayBudget();

function detectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log("минимальный уровень достатка");
    }   else if(appData.moneyPerDay >100 && appData.moneyPerDay <2000){ 
            console.log("средний уровень достатка");
    }   else if (appData.moneyPerDay >2000) {
            console.log("высокий уровень достатка");
    }   else {
            console.log("произошла ошибка");
    }
    }
    detectLevel();


function checkSavings() {
    if (appData.savings == true){
    let save = +prompt ("Какова сумма сбережений?", ""),
        percent = +prompt ("Под какой процент?", "");
    
        appData.monthIncome = save/100/12*percent;
        alert("Доход вашего депозита"+ appData.monthIncome);
    }
}
checkSavings() ;



function chooseOptExpenses() {
    
    for (let i = 0; i<3; i++){
        let questionOptExpenses = prompt ("Введите необязательную статью расходов в этом месяце", "");
         appData.optionalExpenses[i] = questionOptExpenses;    
        console.log(appData.optionalExpenses);
        
    
    }
}
chooseOptExpenses();



/**/
/*let i=0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце",''),
        b = prompt("Во сколько обойдется?",'');

 if ( (typeof(a)) === 'string' && (typeof(a)) !== null && (typeof(b)) !== null
 && a !='' && b !='' && a.length < 50){
     console.log("done");
     appData.expenses[a] = b;
    } else {                            
        console.log ("bad result");
        i--;}
    i++;
}*/

/*let i=0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце",''),
       b = prompt("Во сколько обойдется",'');
    if ( (typeof(a)) === 'string' && (typeof(a)) !==null && (typeof(b)) !==null && a !='' && b != '' && a.length<50){ 
        console.log('done');
        appData.expenses[a] = b;
    } else {                            
        console.log("bad result");
        i--;
    }
        i++;
    } 
    while (i<2);
*/



//appData.moneyPerDay = appData.budget/30;

//alert("Ежедневный бюджет" + appData.moneyPerDay);

