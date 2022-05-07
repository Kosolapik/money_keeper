"use strict";

let money = +prompt ("Ваш бюджет на месяц?", ''),
    time = prompt ("Введите дату в формате YYYY-MM-DD", '');    

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {
       
    },
    optionalExpenses: {

    },
    income: [],
    savings: false,
};


// inputExpenses: for (let i = 0; i < 2; ) {
//     let a = prompt ("Введитgе обязательную статью расходов в этом месяце", ''),
// 	    b = prompt ("Во сколько обойдется?", '');

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//         && a !='' && a !='' && a.length < 50) {
//             console.log("Все ок");
//             appData.expenses[a] = b;
//             i++;
//         } else if (i > 0) {
//             i++;
//         } else {
//             alert('Введите хотя бы 1 статью расходов');
//             continue inputExpenses;
//         }
// }

let i = 0;
inputExpenses: while (i < 2) {
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

appData.moneyPerDay = appData.moneyData / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay <= 1000) {
    console.log ('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 5000) {
    console.log ('Средний уровень достатка');
} else if (appData.moneyPerDay >= 5000) {
    console.log ('Высокий уровень достатка');
} else {
    console.log ('Произошла ошибка');
}