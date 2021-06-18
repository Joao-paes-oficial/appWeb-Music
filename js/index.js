const rewdind = document.querySelector(".rewdind");
const playPause = document.querySelector(".play");
const playPauseIcon = document.querySelector(".play img");
const foward = document.querySelector(".foward");
let playing = false;
let numberM = 2;
const song = new Audio();

function playMusic(n) {
  if (!playing) {
    playing = true;
    playPauseIcon.src = "img/pause.png";
    song.src = `music/musica${numberM}.mp3`;
    song.play();
  } else {
    playing = false;
    playPauseIcon.src = "img/play.png";
    song.pause();
  }
}

function changeMusicA() {
  playing = false;
  numberM++;
  playMusic(numberM);
  console.log(numberM);
}
function changeMusicCB() {
  playing = false;
  if (numberM != 1) {
    numberM--
    playMusic(numberM);
    console.log(numberM);
    }else {
        numberM == 1
    }
    
}
playPause.addEventListener("click", () => playMusic(2));
foward.addEventListener("click", () => changeMusicA());
rewdind.addEventListener("click", () => changeMusicCB());
