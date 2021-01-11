const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    buttonStart: document.querySelector('button[data-action="start"]'),
    ButtonStop: document.querySelector('button[data-action="stop"]'),
}

let timerId = null;
let isOn = false;

const startIllumination = () => {
    if (!isOn) {
        timerId = setInterval(() => {
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
        }, 1000)
        isOn = true;
    }
    return;
}

const stopIllumination = () => {
    if(isOn){
        clearInterval(timerId)
        timerId = null;
        isOn = false;
    }
    return;
}

refs.buttonStart.addEventListener('click', startIllumination);
refs.ButtonStop.addEventListener('click', stopIllumination)


