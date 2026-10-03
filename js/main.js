const setAlarm = document.getElementById("set-alarm");
const stopAlarm = document.getElementById("stop-alarm");
const audio = document.getElementById("audio");
const alarmForm = document.getElementById("alarm");
const timeInput = document.getElementById("time");

let selectedTime = null;
let isPlaying = false;

alarmForm.addEventListener("submit", function(e) {
    e.preventDefault();
    selectedTime = timeInput.value;
    isPlaying = false;
    alert(`Будильник установлен на ${selectedTime}`);
});

stopAlarm.addEventListener("click", function() {
    audio.pause();
    audio.currentTime = 0; 
    selectedTime = null; 
    isPlaying = false;
});

setInterval(() => {
    if (!selectedTime) return; 
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const realTime = `${hours}:${minutes}`;

    if (selectedTime === realTime && !isPlaying) {
        audio.currentTime = 0;
        audio.play();
        isPlaying = true;
    }else if (selectedTime !== realTime && isPlaying) {
        audio.pause();
        audio.currentTime = 0;
        selectedTime = null;
        isPlaying = false;
    }
}, 1000);