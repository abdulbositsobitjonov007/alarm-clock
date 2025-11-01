let setAlarm = document.getElementById("set-alarm");
let stopAlarm = document.getElementById("stop-alarm");
let playAlarm = document.getElementById("play-alarm");
let pauseAlarm = document.getElementById("pause-alarm");

let audio = document.getElementById("audio");
let alarmTime = document.getElementById("alarm");
let selectedTime;



alarmTime.addEventListener("submit", function(e){
    e.preventDefault();
    selectedTime = e.target[0].value
});

playAlarm.addEventListener("click", function(){
    audio.play()
});
 


let stopint = setInterval(() => {
    let date = new Date();

    let time = date.toTimeString().split(" ")[0];
    let realTime = time.split(":").slice(0, 2).join(":");

    if(selectedTime === realTime){
        audio.play()
    }
}, 1000);

pauseAlarm.addEventListener("click", function(){
    audio.pause();
    clearInterval(stopint)
});

stopAlarm.addEventListener("click", function(){
    audio.pause();
    clearInterval(stopint);
})