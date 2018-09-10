var muz = new Audio();
muz.currentTime = 0;
muz.src = "Lilium.mp3";

var bool = true;



function oneuse() {
    if (bool) {
        window.open("https://vk.com/id479121650");
    } else {}
    bool = false;
}


function play() {
    oneuse()
    muz.paused ? muz.play() : muz.pause()

}