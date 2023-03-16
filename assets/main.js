document.addEventListener('DOMContentLoaded', function() {
    // конечная дата, например 1 июля 2021
    const deadline = new Date(2023, 4, 1);
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
        const diff = deadline - new Date();

        if (diff <= 0) {
            clearInterval(timerId);
        }

        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        const daysText = `${days} ${declensionNum(days, ['день', 'дня', 'дней'])}`;
        const hoursText = `${hours} ${declensionNum(hours, ['час', 'часа', 'часов'])}`;
        const minutesText = `${minutes} ${declensionNum(minutes, ['минута', 'минуты', 'минут'])}`;
        const secondsText = `${seconds} ${declensionNum(seconds, ['секунда', 'секунды', 'секунд'])}`;

        timer.textContent = `${daysText} ${hoursText} ${minutesText} ${secondsText}`;
        timer2.textContent = `${days} д. ${hours} ч. ${minutes} м. ${seconds} с.`;
    }

    const timer = document.getElementById('timer');
    const timer2 = document.getElementById('timer2');

    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
});