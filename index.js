const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startBtn: document.querySelector('[data-action=start]'),
    stopBtn:  document.querySelector('[data-action=stop]')
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = 0;


refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);


function onStartBtnClick () {
    refs.startBtn.setAttribute('disabled', 'disabled');
    intervalId = setInterval(changeBodyColour, 1000);
};

function onStopBtnClick() {
    refs.startBtn.removeAttribute('disabled');
    clearInterval(intervalId);
};

function changeBodyColour() {
    const bodyColour = colors[randomIntegerFromInterval(0, colors.length-1)]
    document.body.style.backgroundColor = bodyColour;
};



