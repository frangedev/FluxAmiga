const audioPlayer = document.getElementById('audio-player');
const trackInfo = document.getElementById('track-info');
let currentTrack = null;

function loadTrack(event) {
    const file = event.target.files[0];
    if (file) {
        currentTrack = URL.createObjectURL(file);
        audioPlayer.src = currentTrack;
        trackInfo.textContent = `Playing: ${file.name}`;
    }
}

function playTrack() {
    if (currentTrack) {
        audioPlayer.play();
    } else {
        alert('Please load a track first!');
    }
}

function pauseTrack() {
    audioPlayer.pause();
}

function stopTrack() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    trackInfo.textContent = 'No track loaded';
    currentTrack = null;
}