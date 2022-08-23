const daysEl = document.getElementById('days')

const hoursEl = document.getElementById('hours')

const minutesEl = document.getElementById('minutes')

const secondsEl = document.getElementById('seconds')

 

const newYears = '1 Jan ' + (new Date().getFullYear()+1)

 

function countDown() {

    const newYearsDate = new Date(newYears)

    const currentDate = new Date()

 

    const millisecondsLeft = newYearsDate - currentDate

    const secondsLeft = Math.floor(millisecondsLeft / 1000)

    const minutesLeft = Math.floor(secondsLeft / 60)

    const hoursLeft = Math.floor(minutesLeft / 60)

    const daysLeft = Math.floor(hoursLeft / 24)

 

    const hoursRemainder = hoursLeft % 24

    const minutesRemainder = minutesLeft % 60

    const secondsRemainder = secondsLeft % 60

 

    daysEl.innerHTML = daysLeft

    hoursEl.innerHTML = hoursRemainder

    minutesEl.innerHTML = minutesRemainder

    secondsEl.innerHTML = secondsRemainder

}

 

countDown()

 

setInterval(countDown, 1000)