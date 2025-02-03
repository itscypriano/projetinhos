const circularProgressBar = document.querySelector('#circularProgressBar');
const circularProgressBarNumber = document.querySelector('#circularProgressBar .progress-value');
const buttonTypePomodoro = document.querySelector('#buttonTypePomodoro');
const buttonTypeShortBreak = document.querySelector('#buttonTypeShortBreak');

const audio = new Audio('alarm.mp3');

const pomodoroTimerInSeconds = 1500; // 60 segundos * 25 min
const shortBreakTimerInSeconds = 300; // 60 segundos * 5 min
const TIMER_TYPE_POMODORO = 'POMODORO';
const TIMER_TYPE_SHORT_BREAK = 'SHORTBREAK';

let progressInterval; // variavel que guarda o setInterval
let pomodoroType = TIMER_TYPE_POMODORO;
let timerValue = pomodoroTimerInSeconds;
let multiplierFactor = 360 / timerValue;


// função para transformar segundos no formato MM:SS
function formatNumberInStringMinute(numer) {

    const minutes = Math.trunc(number / 60)
        .toString()
        .padStart(2, '0');
    const seconds = Math.trunc(number % 60)
        .toString()
        .padStart(2, '0');

    return `${minutes}: ${seconds}`;
}

const startTimer = () => {
    progressInterval = setInterval(() => {
        timerValue--;
        setInfoCircularProgressBar();
    }, 1000);
}

const stopTimer = () => clearInterval(progressInterval);


function setInfoCircularProgressBar() {
    if (timerValue === 0) {
        stopTimer();
        audio.play();
    }

    circularProgressBarNumber.textContent =
        `${formatNumberInStringMinute(timerValue)}`;

    circularProgressBar.style.background =
        `conic-gradient (${timerValue * multiplierFactor} 360deg,
        var(--purple) 0deg)`
}
