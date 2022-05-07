let money, time;

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {
       
    },
    optionalExpenses: {

    },
    income: [],
    savings: true,
};

function start() {
    money = +prompt ("Ваш бюджет на месяц?", '');
    time = prompt ("Введите дату в формате YYYY-MM-DD", '');  

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt ("Если вы не введёте ваш бюджет на месяц, программа не будет работать. Ваш бюджет на месяц?", '');
    }
    appData.moneyData = money;
    appData.timeData = time;

}

start();

  
function chooseExpenses() {
    inputExpenses: for (let i = 0; i < 2; ) {
        let a = prompt ("Введитgе обязательную статью расходов в этом месяце", ''),
            b = prompt ("Во сколько обойдется?", '');
    
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a !='' && a !='' && a.length < 50) {
                console.log("Все ок");
                appData.expenses[a] = b;
                i++;
            } else if (i > 0) {
                i++;
            } else {
                alert('Введите хотя бы 1 статью расходов');
                continue inputExpenses;
            }
    }
}

chooseExpenses();


function chooseOptExpenses() {
    inputExpenses: for (let i = 0; i < 3; ) {
        let a = prompt ("Статья не обязательных расходов?", ''),
            b = prompt ("Сколько хотите потратить?", '');
    
                appData.optionalExpenses[a] = b;
                i++;
    }
}

chooseOptExpenses();


function detectDayBudget() {
    appData.moneyPerDay = +(appData.moneyData / 30).toFixed();
alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();


function detectLevel() {
    if (appData.moneyPerDay <= 1000) {
        console.log ('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 5000) {
        console.log ('Средний уровень достатка');
    } else if (appData.moneyPerDay >= 5000) {
        console.log ('Высокий уровень достатка');
    } else {
        console.log ('Произошла ошибка');
    }
}

detectLevel();


function checkSavinds() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent =+prompt("Под какой процент?");

        appData.monthIncome = (save/100/12*percent).toFixed(2);
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavinds();