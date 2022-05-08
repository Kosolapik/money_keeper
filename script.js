let money, time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        inputExpenses: for (let i = 0; i < 2; ) {
            let a = prompt ("Введитgе обязательную статью расходов в этом месяце", ''),
                b = prompt ("Во сколько обойдется?", '');
        
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
                && a !='' && a.length < 50) {
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
    },
    chooseOptExpenses: function() {
        inputExpenses: for (let i = 0; i < 3; ) {
            let a = prompt ("Статья не обязательных расходов?", ''),
                b = prompt ("Сколько хотите потратить?", '');
        
                    appData.optionalExpenses[a] = b;
                    i++;
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = +(appData.budget / 30).toFixed();
alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay <= 1000) {
            console.log ('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 5000) {
            console.log ('Средний уровень достатка');
        } else if (appData.moneyPerDay >= 5000) {
            console.log ('Высокий уровень достатка');
        } else {
            console.log ('Произошла ошибка');
        }
    },
    checkSavinds: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent =+prompt("Под какой процент?");
    
            appData.monthIncome = (save/100/12*percent).toFixed(2);
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseIncome: function() {
        for (let i = 0; i < 1;) {
            let items = prompt("Что приносит дополнительный доход? (Перечислите через запятую)", '');

            if ( (typeof(items)) === 'string' && (typeof(items)) != null && items !='') {
                appData.income = items.split(', ');
                i++;
            } else {
                alert('Вы ввели не правильно, попробуйте еще раз');
            };
        };

        for (let i = 0; i < 1;) {
            let items = prompt("Может что-то еще?", '');

            if ( (typeof(items)) === 'string' && items !='') {
                appData.income.push(items);
                i++;
            } else  if (items == null) {
                i++;    
            } else {
                alert('Вы ввели не правильно, попробуйте еще раз или нажмите "Отмена"');
            };
        };  

        appData.income.sort();
        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. зароботка:12 " + (i+1) + " - " + itemmassive);
        }
        );
    },  
    start: function() {
        money = +prompt ("Ваш бюджет на месяц?", '');
    time = prompt ("Введите дату в формате YYYY-MM-DD", '');  

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt ("Если вы не введёте ваш бюджет на месяц, программа не будет работать. Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    },
};

for (let key in appData) {
    console.log("Наша програма включает в себя данные: " + key + " - " + appData[key]);
}