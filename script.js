const input = document.getElementById("date-input")
const output = document.getElementById("output")

const one_second = 1000
const one_minute = one_second * 60
const one_hour = one_minute * 60
const one_day = one_hour *24
const one_month = one_day * 30
const one_year = one_month * 12

function calculateRemainingTime(referenceDate, todayDate) {
    let timeLeft = referenceDate - todayDate
    let yearsLeft = 0
    while (timeLeft > one_year) {
        yearsLeft++
        timeLeft -= one_year
    }
    let monthsLeft = 0
    while (timeLeft > one_month) {
        monthsLeft++
        timeLeft -= one_month
    }
    let daysLeft = 0
    while (timeLeft > one_day) {
        daysLeft++
        timeLeft -= one_day
    }
    let hoursLeft = 0
    while (timeLeft > one_hour) {
        hoursLeft++
        timeLeft -= one_hour
    }
    let minutesLeft = 0
    while (timeLeft > one_minute) {
        minutesLeft++
        timeLeft -= one_minute
    }
    let secondsLeft = 0
    while (timeLeft > one_second) {
        secondsLeft++
        timeLeft -= one_second
    }
    return [
        yearsLeft,
        monthsLeft,
        daysLeft,
        hoursLeft,
        minutesLeft,
        secondsLeft
    ]
}

function textBuilder(years, months, days, hours, minutes, seconds) {
    let result = []
    if (years) {
        result.push(`${years} ${years > 1 ? "years" : "year"}`)
    }
    if (months) {
        result.push(`${months} ${months > 1 ? "months" : "month"}`)
    }
    if (days) {
        result.push(`${days} ${days > 1 ? "days" : "day"}`)
    }
    if (hours) {
        result.push(`${hours} ${hours > 1 ? "hours" : "hour"}`)
    }
    if (minutes) {
        result.push(`${minutes} ${minutes > 1 ? "minutes" : "minute"}`)
    }
    if (seconds) {
        result.push(`${seconds} ${seconds > 1 ? "seconds" : "second"}`)
    }
    if (!result) {
        return "Completed"
    }
    return result.join(", ")
}

function onInputChange () {
    const [year, month, day] = input.value.split("-");
const referenceDate = new Date(year, month - 1, day).getTime();
const todayDate = new Date().getTime();

let remainingTime = calculateRemainingTime(referenceDate, todayDate)
let text = textBuilder(...remainingTime)
output.textContent = text
}

input.addEventListener("change", onInputChange);
