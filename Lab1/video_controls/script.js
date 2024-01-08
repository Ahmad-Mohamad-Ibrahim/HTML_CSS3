const video = document.getElementById("vid");
const progressBar = document.getElementById("progressBar");
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const toBeginingBtn = document.getElementById("toBegining");
const back5Btn = document.getElementById("back5");
const forward5Btn = document.getElementById("forward5");
const toEnd = document.getElementById("toEnd");
const playBackRateSlider = document.getElementById("playBackRate");
const volumeSlider = document.getElementById("volume");

let percValue = Number(playBackRateSlider.value);
video.playbackRate = percValue * 16 / 100;

let percVolumeValue = Number(volumeSlider.value);
video.volume = percVolumeValue / 100;


video.ontimeupdate = () => {
    // console.log(video);
    let progressVal = (video.currentTime / video.duration) * 100 ;
    // console.log(progressVal);
    progressBar.value = progressVal;
}

playBtn.addEventListener("click" ,(e) => {
    video.play();
});

stopBtn.addEventListener("click" ,(e) => {
    video.pause();
});

toBeginingBtn.addEventListener("click" , () => {
    // console.log(video);
    video.currentTime = 0;
});

back5Btn.addEventListener("click" , () => {
    // console.log(video.currentTime);
    video.currentTime -= 5;
});

forward5Btn.addEventListener("click" , () => {
    console.log(video.currentTime);
    video.currentTime += 5;
    console.log(video.currentTime);

});

toEnd.addEventListener("click" , () => {
    // console.log(video.currentTime);
    video.currentTime = video.duration;
});

playBackRateSlider.onchange = () => {
    let percValue = Number(playBackRateSlider.value);
    video.playbackRate = percValue * 16 / 100;
}

volumeSlider.onchange = () => {  
    let percVolumeValue = Number(volumeSlider.value);
    video.volume = percVolumeValue / 100;
}


