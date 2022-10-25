let timerEl = document.getElementById('timer-el')
let startTimerBtn = document.getElementById('start-timer')
let stopTimerBtn = document.getElementById('stop-timer')
let hoursInput = document.getElementById('hours-inp')
let minutesInput = document.getElementById('minutes-inp')
let secondsInput = document.getElementById('seconds-inp')
let hoursClass = document.querySelector('.timer__part--hours')
let minutesClass = document.querySelector('.timer__part--minutes')
let secondsClass = document.querySelector('.timer__part--seconds')

let hoursDD = document.getElementById('hours-dd')
let minutesDD = document.getElementById('minutes-dd')
let secondsDD = document.getElementById('seconds-dd')

let timerStoppedPopUp = document.querySelector('.timer-stopped-pop-up')

console.log(timerStoppedPopUp)

let hours = 0
let minutes = 0
let seconds = 0
let timer

let languageEl = document.getElementById('language-el')

if(hoursInput.value === ""){
console.log('equals')
}


function startTimer() {
clearInterval(timer)
timer = setInterval(secondsTimer, 1000)
}

function secondsTimer(){
        if (minutes === 0 && hours === 0 && seconds === 0){
                    clearInterval(timer)
                    console.log('Timer stopped!')
                    timerStopped()
                }

        else if(minutes === 0 && hours > 0 && seconds < 0){
                seconds = 6
                minutes = 6
                hours -= 1
                }
        else if (seconds < 0 && minutes > 0){
            seconds = 6
            minutes -= 1
        }
    if (hours < 10){
    hoursClass.textContent = "0"+ hours
    } else {hoursClass.textContent = hours}
    if (minutes < 10){
    minutesClass.textContent = "0" + minutes
    } else {
    minutesClass.textContent =  minutes
    }
    if(seconds < 10){
    secondsClass.textContent = "0" + seconds
    }  else{
    secondsClass.textContent =  seconds}

    console.log(`${hours} : ${minutes} : ${seconds}`)
    seconds -= 1
}




startTimerBtn.addEventListener('click', function (){
//    hours = +hoursInput.value
//    minutes = +minutesInput.value
//    seconds = +secondsInput.value
    hours = +hoursDD.value
    minutes = +minutesDD.value
    seconds = +secondsDD.value
    console.log('Start')
    startTimer()
})



stopTimerBtn.addEventListener('click', function (){
    console.log('Stop')
    timerStopped()
    hours = minutes = seconds = 0
    hoursClass.textContent = "0" + hours
    minutesClass.textContent = "0"+ minutes
    secondsClass.textContent = "0"+ seconds
    clearInterval(timer)
})

function timerStopped(){
timerStoppedPopUp.classList.add("active");
setTimeout(() => {
timerStoppedPopUp.classList.remove("active");
}, 2000)
}



