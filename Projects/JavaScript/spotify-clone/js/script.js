let currSong = new Audio();
let secondsToMinutesSeconds;
let songs;
let currFolder;
async function getSong(folder) {
  currFolder = folder;
  console.log(currFolder);
  let req = await fetch(`/${folder}/`);
  let res = await req.text();
  let div = document.createElement("div");
  div.innerHTML = res;

  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let i = 0; i < as.length; i++) {
    const element = as[i];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split(`${folder}/`)[1]);
      //   console.log(element);
      //   console.log(element.href.split("/assets/songs/")[1]);
    }
  }
  return songs;
}

function playSong(song, pause = false) {
  currSong.src = `${currFolder}/` + song;
  if (!pause) {
    currSong.play();
    play.src = "./assets/icon/pause.svg";
  }

  document.querySelector(".song_info").innerHTML = decodeURI(song);
  document.querySelector(".song_time").innerHTML = "00:00 / 00:00";
}

async function main() {
  // Get the list of all the songs
  songs = await getSong("assets/songs");

  playSong(songs[0], true);
  //   play.src = "./assets/icon/play.svg";

  // Show all the songs in the playlist
  let songUL = document
    .querySelector(".songs_list")
    .getElementsByTagName("ul")[0];
  for (const song of songs) {
    songUL.innerHTML += ` 
        <li class="ele">
            <img
                class="invert"
                width="20"
                src="./assets/icon/music.svg"
                alt="music"
            />
            <div class="info">
                <div>${song.replaceAll("%20", " ")}</div>
                <div>${song
                  .replaceAll("%20", " ")
                  .split("-")[1]
                  .replace(".mp3", "")}</div>
            </div>
            <div class="playnow invert">
                <img src="./assets/icon/play.svg" alt="play" />
            </div>
        </li>
    `;
  }
  // Attach event listeners to each song
  Array.from(
    document.querySelector(".songs_list").getElementsByTagName("li")
  ).forEach((ele) => {
    ele.addEventListener("click", () => {
      playSong(ele.querySelector(".info").firstElementChild.innerHTML.trim());
    });
  });

  //  Attach an event listener to play, next and previous
  play.addEventListener("click", () => {
    if (currSong.paused) {
      currSong.play();
      play.src = "./assets/icon/pause.svg";
    } else {
      currSong.pause();
      play.src = "./assets/icon/play.svg";
    }
  });

  //   Listen for timeupdate event
  currSong.addEventListener("timeupdate", () => {
    document.querySelector(".song_time").innerHTML = `${secondsToMinutesSeconds(
      currSong.currentTime
    )} / ${secondsToMinutesSeconds(currSong.duration)}`;

    //   Add an style to the circle
    document.querySelector(".circle").style.left =
      (currSong.currentTime / currSong.duration) * 99 + "%";
  });

  // Add an event listener to the seekbar
  let seekbar = document.querySelector(".seekbar");
  seekbar.addEventListener("click", (e) => {
    let percent = (e.offsetX / seekbar.offsetWidth) * 100;
    currSong.currentTime = (currSong.duration * percent) / 100;
  });

  // Add an event listener to the next button
  next.addEventListener("click", () => {
    currSong.pause();
    currSong.currentTime = 0;
    let index = songs.indexOf(currSong.src.split("/assets/songs/")[1]);
    if (index === songs.length - 1) {
      playSong(songs[0], false);
    } else {
      playSong(songs[index + 1], false);
    }
  });

  // Add an event listener to the previous button
  previous.addEventListener("click", () => {
    currSong.pause();
    currSong.currentTime = 0;
    let index = songs.indexOf(currSong.src.split("/assets/songs/")[1]);
    console.log(songs.indexOf(currSong.src.split("/assets/songs/")[1]));
    if (index === 0) {
      playSong(songs[songs.length - 1], false);
    } else {
      playSong(songs[index - 1], false);
    }
  });

  // add an event listener to the volume seekbar
  let volumeSeekbar = document.querySelector(".volume_seekbar");
  volumeSeekbar.addEventListener("click", (e) => {
    let percent = (e.offsetX / volumeSeekbar.offsetWidth) * 100;
    currSong.volume = percent / 100;
  });

  // add an event listener to the volume_circle
  let volumeCircle = document.querySelector(".volume_circle");
  volumeSeekbar.addEventListener("click", () => {
    volumeCircle.style.left = currSong.volume * 87 + "%";
  });

  // Add an event listener to the volume button
  volume.addEventListener("click", () => {
    if (currSong.muted) {
      currSong.muted = false;
      volumeCircle.style.left = currSong.volume * 87 + "%";
      volume.src = "./assets/icon/volume.svg";
    } else {
      currSong.muted = true;
      volumeCircle.style.left = "0";
      volume.src = "./assets/icon/mute.svg";
    }
  });
}

secondsToMinutesSeconds = (seconds) => {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
};

// Add an event listener to the hamburger
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  document.querySelector(".left").style.left = "0";
});

// add an event listener to the close button
let close = document.querySelector(".close");
close.addEventListener("click", () => {
  document.querySelector(".left").style.left = "-500px";
});

main();
