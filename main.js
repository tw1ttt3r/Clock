let clock = false;
const typeClocks = ['analogous', 'digital'];
const clocks = Array.from(document.querySelectorAll('.clock'));

document.getElementsByTagName('button')[0].addEventListener('click', changeClock);

function changeClock() {
    clock = !clock;
    this.innerHTML = typeClocks[Number(!clock)];
    setClock();
}

function setClock() {
    clocks[Number(clock)].style.display = 'none';
    clocks[Number(!clock)].style.display = 'flex';
}

function setTimeClock() {
    const time = new Date();
    // analogous
    const handHour = document.querySelector(`.hand[data-hand='hour']`);
    const handMinute = document.querySelector(`.hand[data-hand='minute']`);
    const handSecond = document.querySelector(`.hand[data-hand='second']`);
    const hourDeg = ((time.getHours() / 24) * 360) + 90;
    const minuteDeg = ((time.getMinutes() / 60) * 360) + 90;
    const secondDeg = ((time.getSeconds() / 60) * 360) + 90;
    handHour.style.transform = `rotate(${hourDeg}deg)`;
    handMinute.style.transform = `rotate(${minuteDeg}deg)`;
    handSecond.style.transform = `rotate(${secondDeg}deg)`;
    
    // digital
    const digitalHour = document.querySelector(`p[data-digital='hour']`);
    const digitalMinute = document.querySelector(`p[data-digital='minute']`);
    const digitalSecond = document.querySelector(`p[data-digital='second']`);
    digitalHour.innerHTML = time.getHours() < 10 ? `0${time.getHours()}:` : `${time.getHours()}:`;
    digitalMinute.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}:` : `${time.getMinutes()}:`;
    digitalSecond.innerHTML = time.getSeconds() < 10 ? `0${time.getSeconds()}` : `${time.getSeconds()}`;
}

setClock();

setInterval(setTimeClock, 1000);