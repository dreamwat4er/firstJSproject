let money=prompt("Ваш бюджет на месяц?");
let time=prompt("Введите дату в формате YYYY-MM-DD");

let nesessary=prompt("Введите обязательную статью расходов в этом месяце");
let howNesessaryCost=prompt("Во сколько обойдется?");

let appData = {
    budget: money,
    timeData: time,
    expenses :{nesessary:howNesessaryCost},
    optionalExpenses:"",
    income :[],
    savings :false
};
alert(money/30);

