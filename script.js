let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let incrementBtn = document.getElementById('increment-btn');
let saveBtn = document.getElementById('');

incrementBtn.addEventListener('click', () => {
    count += 1;
    countEl.textContent = count;
});

saveBtn.addEventListener('click', () => {
    let countStr = count + " - ";
    saveEl.textContenttStr;
    countEl.textContent = 0;
    count = 0;
});