let countDisplay = document.getElementById('count-display');
let entryLog = document.getElementById('entries-log')
let count = 0;

// Increment count being displayed
function increment() {
    count++;
    countDisplay.textContent = count;
}

// Save and log entries of people entering the station and reinitialize count
function save() {
    entryLog.textContent += count + " - ";
    count = 0;
}