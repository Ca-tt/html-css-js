// let now = new Date();
// console.log('- now -', now);

// let Jan01_1970 = new Date(0);
// console.log('- Jan01_1970 -', Jan01_1970);

// let today = new Date(2022, 10, 9);
// console.log('- today -', today);

// let todaysYear = today.getFullYear();
// console.log('- todaysYear -', todaysYear);

// let random = new Date().getTime();
// console.log('- random -', random);


// let date = new Date(2016, 0, 2); // 2 Jan 2016

// // date.setDate(1); // задать первое число месяца
// // console.log('setdate 1', date);

// date.setDate(0); // первый день месяца -- это 1, так что выводится последнее число предыдущего месяца
// console.log('setdate 0', date); // 31 декабря 2022

// let currentTime = new Date();
// console.log(+currentTime); // количество миллисекунд, то же самое, что date.getTime()

// let start = Date.now(); // количество миллисекунд с 1 января 1970 года

// // выполняем некоторые действия
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i;
// }

// let end = Date.now(); // заканчиваем отсчёт времени

// console.log(`Цикл отработал за ${end - start} миллисекунд`); // вычитаются числа, а не даты

// let start = new Date(); // начинаем отсчёт времени

// // выполняем некоторые действия
// for (let i = 0; i < 100000000; i++) {
//   let doSomething = i + i;
// }

// let end = new Date(); // заканчиваем отсчёт времени

// console.log(`Цикл отработал за ${end - start} миллисекунд`);

// let now = Date.now();
// console.log('- now -', now);


// let ms = Date.parse('2012');
// console.log(ms); 

// let dateString = '2022-10-9';
// let jsDate = new Date(Date.parse(dateString));
// console.log('- jsDate -', jsDate);
