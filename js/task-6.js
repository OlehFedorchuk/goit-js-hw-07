const refs = {
    input: document.querySelector('#controls input[type="number"]'),
    btnCreate: document.querySelector('[data-create]'),
    btnDestroy: document.querySelector('[data-destroy]'),
    boxes: document.querySelector('#boxes'),
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}

function createBoxes(amount) {
    destroyBoxes();

    const BASE = 30;
    const STEP = 10;

    const items = [];
    for (let i = 0; i < amount; i++) {
        const size = BASE + i * STEP;
        const div = document.createElement('div');
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor();
        items.push(div);
    }

    refs.boxes.append(...items);
}

function destroyBoxes() {
    refs.boxes.innerHTML = '';
}

refs.btnCreate.addEventListener('click', () => {
    const value = Number(refs.input.value.trim());
    if (!Number.isFinite(value) || value < 1 || value > 100) {
        return;
    }
    createBoxes(value);
    refs.input.value = '';
});

refs.btnDestroy.addEventListener('click', destroyBoxes);
