let count = 0;
const maxCount = 150;

const counterEl = document.getElementById('counter');
const controlsEl = document.getElementById('controls');
const restartBtnEl = document.getElementById('restartBtn');
const alertTextEl = document.getElementById('alertText');

function updateUI() {
    counterEl.textContent = count;

    if (count >= maxCount) {
        counterEl.classList.add('limit');
        controlsEl.classList.add('hidden');
        restartBtnEl.classList.remove('hidden');
        alertTextEl.classList.remove('hidden')
    } else{
        counterEl.classList.remove('limit');
        controlsEl.classList.remove('hidden');
        restartBtnEl.classList.add('hidden');
        alertTextEl.classList.add('hidden');
    }
}

function increment() {
    if (count < maxCount) {
        count++;
        updateUI();
    }
}

function decrement() {
    if (count > 0) {
        count--;
        updateUI();
    }
}

function reset() {
    count = 0;
    updateUI();
}

const modalEl = document.getElementById('developerModal');

function openModal() {
    modalEl.classList.remove('hidden');
}

function closeModal() {
    modalEl.classList.add('hidden');
}

document.addEventListener('keydown' , function(event) {
    if (event.key === 'i' || event.key ==='I') {
        openModal();
    }
});




