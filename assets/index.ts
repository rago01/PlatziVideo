import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/autoPause'

const video = document.querySelector("video")
const player = new MediaPlayer({
        el: video,
        plugins: [new AutoPlay(), new AutoPause()]
});

const playButton: HTMLElement = document.querySelector("#play");
playButton.onclick = () => player.togglePlay();

        const muteButton: HTMLElement = document.querySelector("#sonido");
        muteButton.onclick = () => {
                if (player.media.muted) {
                        player.unMute();        
                } else {
                        player.mute();
                }
        }
