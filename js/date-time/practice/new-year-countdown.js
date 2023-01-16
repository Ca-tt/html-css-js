// elements
let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

// base dates


// console.log('todayDate: ', todayDate);
// console.log('newYearDate: ', newYearDate);





// allminutes: minutesRemainder * 60



// console.log('allMilliseconds: ', allMilliseconds);
// console.log('time left: ', allTimeLeft);
// // console.log('daysLeft: ', daysLeft);
// console.log('daysRemainder: ', daysRemainder);
// console.log('daysToHoursLeft: ', daysToHoursLeft);
// console.log('minutesRemainder: ', minutesRemainder);
// // console.log('hoursLeft: ', hoursLeft);
// console.log('minutes left: ', minutesRemainder);
// // console.log('minutesLeft: ', minutesLeft);
// console.log('secondsRemainder: ', secondsRemainder);
// console.log('secondsLeft: ', secondsLeft);

// console.log('minutesRemainder: ', minutesLeft);

function dateCalculation() {
    let todayDate = new Date();
    let newYearDate = new Date(new Date().getFullYear() + 1, 0, 1);
    let allMilliseconds = newYearDate - todayDate;
    let allTimeLeft = allMilliseconds / 24 / 60 / 60 / 1000;
    let daysLeft = Math.floor(allMilliseconds / 24 / 60 / 60 / 1000);

    let daysRemainder = allTimeLeft - daysLeft;
    let daysToHoursLeft = daysRemainder * 24;
    let hoursLeft = Math.floor(daysRemainder * 24);

    let minutesRemainder = daysToHoursLeft - hoursLeft;
    let minutesWithSecondsLeft = minutesRemainder * 60;
    let minutesLeft = Math.floor(minutesWithSecondsLeft);

    let secondsRemainder = minutesWithSecondsLeft - minutesLeft;

    let secondsLeft = Math.floor(secondsRemainder * 60);

    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft;
    minutes.innerHTML = minutesLeft;
    seconds.innerHTML = secondsLeft;
}


setInterval(() => {
    dateCalculation();
}, 1000)




