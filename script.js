// script.js

const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const stopBtn = document.getElementById('stop-btn');
const progressBar = document.getElementById('progress-bar');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');

let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    } else {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    }
    isPlaying =!isPlaying;
});

stopBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    playPauseBtn.textContent = 'Play';
    isPlaying = false;
});

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progress = (currentTime / duration) * 100;
    progressBar.value = progress;
});

audio.addEventListener('ended', () => {
    audio.pause();
    audio.currentTime = 0;
    playPauseBtn.textContent = 'Play';
    isPlaying = false;
});

// Set track title and artist
trackTitle.textContent = 'Track Title';
trackArtist.textContent = 'Track Artist';