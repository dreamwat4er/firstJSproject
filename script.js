let money= +prompt("Ваш бюджет на месяц?"),
    time=prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses :{},
    optionalExpenses:"",
    income :[],
    savings :false
};
for (let i = 0; i < 2; i++) {
   let a = prompt("Введите обязательную статью расходов в этом месяце",''),
       b = prompt("Во сколько обойдется?",'');

    if ( (typoff(a) === 'string') && (typoff(a) !== null) && (typoff(b) !== null)
    && a !='' && b !=='' && a.length < 50){
        console.log("done");
    }
    else{

    }
}

appData.moneyPerDay = appData.budget/30;

alert("Ежедневный бюджет" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("минимальный уровень достатка");
}   else if(appData.moneyPerDay >100 && appData.moneyPerDay <2000){ 
        console.log("средний уровень достатка");
}   else if (appData.moneyPerDay >2000) {
        console.log("высокий уровень достатка");
}   else {
        console.log("произошла ошибка")
}