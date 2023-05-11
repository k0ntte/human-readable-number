module.exports = function toReadable(number) {
    if (number > 99) { // если число больше 99
        let first = `${firstNum(Math.floor(number / 100))} hundred`; // записываем разряд сотен 
        if (number % 100 > 13) {
            return first + ' ' + secondNum(number % 100);  // если число больше 13, вызываем функцию для двузначных чисел
        }
        if (number%100 == 0) {       // если разряды десятков и единиц отсутствуют, например 300 
            return first;
        }
        return first +" " + firstNum(number % 100); // вызов функции для обычных чисел
    }
    if (number < 100) {
        if (number % 100 > 13) {
            return secondNum(number % 100);
        } else {
            return firstNum(number % 100);
        }
    }
};

function read(number) {
    if (number > 99) {
        let first = `${firstNum(Math.floor(number / 100))} hundred`; // если число 100 и больше
        if (number % 100 > 13) {
            return first + ' ' + secondNum(number % 100);
        }
        if (number%100 == 0) {
            return first;
        }
        return first +" " + firstNum(number % 100);
    }
    if (number < 100) {
        if (number % 100 > 13) {
            return secondNum(number % 100);
        } else {
            return firstNum(number % 100);
        }
    }
}
// Эта функция принимает двузначное число и возвращает строку, представляющую число словами.
function secondNum(num) {
    if (num > 19) {
        if (Math.floor(num / 10) === 2) {
            if(num%10 === 0){
                 return `twenty`;
            }
            return `twenty ${firstNum(num % 10)}`;
        } else if (Math.floor(num / 10) === 5) {
            if(num%10 === 0){
                return `fifty`;
           }
            return `fifty ${firstNum(num % 10)}`;
        } else if (Math.floor(num / 10) === 4) {
            if(num%10 === 0){
                return `forty`;
           }
            return `forty ${firstNum(num % 10)}`;
        } else if (Math.floor(num / 10) === 3) {
            if(num%10 === 0){
                return `thirty`;
           }
            return `thirty ${firstNum(num % 10)}`;
        } else if (Math.floor(num / 10) === 8) {
            if(num%10 === 0){
                return `eighty`;
           }
            return `eighty ${firstNum(num % 10)}`;
        } else {
            if(num%10 === 0){
                return `${firstNum(Math.floor(num / 10))}ty`;
           }
            return `${firstNum(Math.floor(num / 10))}ty ${firstNum(num % 10)}`;
        }
    }
    if (num < 20) {
        if (num === 15) {
            return `fifteen`;
        }
        if(num === 18){
            return `eighteen`;
        }
        return `${firstNum(num % 10)}teen`;
    }
}
//Эта функция принимает однозначное число и возвращает строку, представляющую число словами.
function firstNum(num) {
    const mass = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
    ];

    return mass[num];
}

console.log(read(218));


