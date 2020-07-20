import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

        const video = document.querySelector("video")
        const player = new MediaPlayer({el: video, plugins: [new AutoPlay()]});

        const inicio = document.querySelector("#play");
        const sonido = document.querySelector("#sonido");
        inicio.onclick = () => player.togglePlay();
        sonido.onclick = () => player.toggleMute();
