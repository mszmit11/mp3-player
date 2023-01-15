const btnPlay = document.querySelector('.playTrack')
const btnStop = document.querySelector('.stopTrack')
const titleText = document.querySelector('.titleTrack')
const btnLoop = document.querySelector('.loopTrack')
const volumeRange = document.querySelector('.volume')
const mute = document.querySelector('.mute')
const back_time = document.querySelector('.back')
const shuffle_track = document.querySelector('shuffleTrack')
const forward_time = document.querySelector('.forward')
const current_time = document.querySelector('.current-Time')
const audioDuration = document.querySelector('.audio-Duration')
const slider_time = document.querySelector('.timeSlider')
const next_Track = document.querySelector('.nextTrack')
const previous_Track = document.querySelector('.previousTrack')
const titleTxt = document.querySelector('.titleTrack')
const author = document.querySelector('.authorTrack')
const playlist1 = document.querySelector('.titleTrack1')
const playlist2 = document.querySelector('.titleTrack2')
const playlist3 = document.querySelector('.titleTrack3')
const playlist4 = document.querySelector('.titleTrack4')
const playlist5 = document.querySelector('.titleTrack5')
const imgSector = document.querySelector('.imgPlace')
const btn_track_1 = document.querySelector('.btn-track-1')
const btn_track_2 = document.querySelector('.btn-track-2')
const btn_track_3 = document.querySelector('.btn-track-3')
const btn_track_4 = document.querySelector('.btn-track-4')
const btn_track_5 = document.querySelector('.btn-track-5')
const changeButton = document.querySelector('.change')
const element = document.querySelector('.imgPlace')
const element2 = document.querySelector('imgSector')
const element3 = document.querySelector('.mute')

// tag track
let track = [
    {
        music : 'audio1.mp3',
        img : 'img0.jpg',
        artist : 'Robbie Williams',
        title : 'Feel'
    },
    {
        music : 'audio2.mp3',
        img : 'image/img1.jpg',
        artist : 'Lana Del Rey',
        title : 'Blue Jeans'
    },
    {
        music : 'audio3.mp3',
        img : 'image/img2.jpg',
        artist : 'Cannons',
        title : 'Hurricane'
    },
    {
        music : 'audio4.mp3',
        img : 'image/img3.jpg',
        artist : 'The Cranberries',
        title : 'Zombie'
    },
    {
        music : 'audio5.mp3',
        img : 'image/img4.jpg',
        artist : 'Red Hot Chili Peppers',
        title : 'Under The Bridge'
    }]

let indexTrack = 0
let url = track[indexTrack].music
let titleMain = track[indexTrack].title
audio = new Audio(url)
let count = 0
let count2 = 0
let count3 = 0
let count4 = 0
let audioVolume = volumeRange.value

// function next track
function upIndex(){
    if (indexTrack == 4){
        indexTrack = 0
        count = 1
        url = track[indexTrack].music
        audio.load()
        audio = new Audio(url)
        audio.play();
    }else{
        indexTrack = indexTrack + 1
        count = 1
        url = track[indexTrack].music
        audio.load()
        audio = new Audio(url)
        audio.play();
    }
    author.innerHTML = track[indexTrack].artist
    titleTxt.innerHTML = track[indexTrack].title
    audio.volume = volumeRange.value
    element.style.background = `url(image/img${indexTrack}.jpg) no-repeat`;
}
// function previous track
function downIndex(){
    if (indexTrack == 0){
        indexTrack = 4
        url = track[indexTrack].music
        audio.load()
        audio = new Audio(url)
        audio.play();
    }else{
        indexTrack = indexTrack - 1
        url = track[indexTrack].music
        audio.load()
        audio = new Audio(url)
        audio.play();
    }
    author.innerHTML = track[indexTrack].artist
    titleTxt.innerHTML = track[indexTrack].title
    audio.volume = volumeRange.value
    element.style.background = `url(image/img${indexTrack}.jpg) no-repeat`;
}
function playTrackPlaylist1() {
    indexTrack = 0
    count = 1
    url = track[indexTrack].music
    audio.load()
    audio = new Audio(url)
    audio.play()
    author.innerHTML = track[indexTrack].artist
    titleTxt.innerHTML = track[indexTrack].title
    audio.volume = volumeRange.value
    element.style.background = 'url(image/img0.jpg) no-repeat';
    btnPlay.style.background = `url(icons/pause-icon.png) no-repeat`
    btnPlay.style.backgroundSize = `40px`
    btnPlay.style.height = `40px`
    btnPlay.style.width = `40px`
}
function playTrackPlaylist2() {
    indexTrack = 1
    count = 1
    url = track[indexTrack].music
    audio.load()
    audio = new Audio(url)
    audio.play()
    author.innerHTML = track[indexTrack].artist
    titleTxt.innerHTML = track[indexTrack].title
    audio.volume = volumeRange.value
    element.style.background = 'url(image/img1.jpg) no-repeat';
    btnPlay.style.background = `url(icons/pause-icon.png) no-repeat`
    btnPlay.style.backgroundSize = `40px`
    btnPlay.style.height = `40px`
    btnPlay.style.width = `40px`
}
function playTrackPlaylist3() {
    indexTrack = 2
    count = 1
    url = track[indexTrack].music
    audio.load()
    audio = new Audio(url)
    audio.play()
    author.innerHTML = track[indexTrack].artist
    titleTxt.innerHTML = track[indexTrack].title
    audio.volume = volumeRange.value
    element.style.background = 'url(image/img2.jpg) no-repeat';
    btnPlay.style.background = `url(icons/pause-icon.png) no-repeat`
    btnPlay.style.backgroundSize = `40px`
    btnPlay.style.height = `40px`
    btnPlay.style.width = `40px`
}
function playTrackPlaylist4() {
    indexTrack = 3
    count = 1
    url = track[indexTrack].music
    audio.load()
    audio = new Audio(url)
    audio.play()
    author.innerHTML = track[indexTrack].artist
    titleTxt.innerHTML = track[indexTrack].title
    audio.volume = volumeRange.value
    element.style.background = 'url(image/img3.jpg) no-repeat';
    btnPlay.style.background = `url(icons/pause-icon.png) no-repeat`
    btnPlay.style.backgroundSize = `40px`
    btnPlay.style.height = `40px`
    btnPlay.style.width = `40px`
}
function playTrackPlaylist5() {
    indexTrack = 4
    count = 1
    url = track[indexTrack].music
    audio.load()
    audio = new Audio(url)
    audio.play()
    author.innerHTML = track[indexTrack].artist
    titleTxt.innerHTML = track[indexTrack].title
    audio.volume = volumeRange.value
    element.style.background = 'url(image/img4.jpg) no-repeat';
    btnPlay.style.background = `url(icons/pause-icon.png) no-repeat`
    btnPlay.style.backgroundSize = `40px`
    btnPlay.style.height = `40px`
    btnPlay.style.width = `40px`
}

// playlist
playlist1.innerHTML = track[0].artist + ' - ' + track[0].title
playlist2.innerHTML = track[1].artist + ' - ' + track[1].title
playlist3.innerHTML = track[2].artist + ' - ' + track[2].title
playlist4.innerHTML = track[3].artist + ' - ' + track[3].title
playlist5.innerHTML = track[4].artist + ' - ' + track[4].title

//time slider
function sliderTimer(){
    let seekTo = audio.duration * (slider_time.value / 100)
    audio.currentTime = seekTo;
}

// play/Pause button
function playPause(){
    if(count == 0){
    count = 1
    audio.play()
    btnPlay.style.background = `url(icons/pause-icon.png) no-repeat`
    btnPlay.style.backgroundSize = `40px`
    btnPlay.style.height = `40px`
    btnPlay.style.width = `40px`
    } else{
        count = 0
        audio.pause()
        btnPlay.style.background = `url(icons/play-icon.png) no-repeat`
        btnPlay.style.backgroundSize = `40px`
        btnPlay.style.height = `40px`
        btnPlay.style.width = `40px`
        btnPlay.style.border = `none`
    }
    author.innerHTML = track[indexTrack].artist
    titleTxt.innerHTML = track[indexTrack].title
    element.style.background = `url(image/img${indexTrack}.jpg) no-repeat`;
}

// time function
    slider_time.max = slider_time.max + audio.duration   
    setInterval(() => {
        let minCur= Math.floor(audio.currentTime / 60 % 60);
        let segCur= Math.floor(audio.currentTime % 60);
        let minDur= Math.floor(audio.duration / 60 % 60);
        let segDur= Math.floor(audio.duration % 60);
        current_time.innerHTML = `${minCur}:${segCur >= 10 ? segCur : '0' + segCur} /`
        audioDuration.innerHTML = `${minDur}:${segDur >= 10 ? segDur : '0' + segDur}`
        sliderPosition = audio.currentTime * (100 / audio.duration)
        slider_time.value = sliderPosition
        if (audio.currentTime == audio.duration){
            if (indexTrack == 4){
                indexTrack = 0
            } else{
                indexTrack += 1
            }
            audio = new Audio(track[indexTrack].music)
            audio.load()
            audio.play()
            author.innerHTML = track[indexTrack].artist
            titleTxt.innerHTML = track[indexTrack].title
            audio.volume = volumeRange.value
            element.style.background = `url(image/img${indexTrack}.jpg) no-repeat`;
        }
        
    }, 1001);

// stop button
function stop(){
    audio.pause()
    audio.currentTime = 0
    slider_time.value = 0
}

// loop button
function loop(){
    if(count2 == 0){
        count2 = 1
        audio.loop = true
    }else{
        count2 = 0
        audio.loop = false
    }

    audio.volume = volumeRange.value
}

// volume slider
function volume(){
    audio.volume = volumeRange.value
}

// time changer + button 
function forwardTime(){
    audio.currentTime = audio.currentTime + 10
}

// time changer - button 
function backTime(){
    if (audio.currentTime < 10){
        audio.currentTime = 0
    } else{
        audio.currentTime = audio.currentTime - 10
    }
}

// mute/unmute button
function mute1(){
    if (count3 == 0){
        count3 = 1
        audio.volume = 0
        volumeRange.value = audio.volume
        element3.style.background = `url(icons/speaker-mute-icon.png) no-repeat`;
        element3.style.backgroundSize = `20px`;
        element3.style.height = `20px`;
        element3.style.width = `20px`;
    } else{
        count3 = 0
        audio.volume = 0.5
        volumeRange.value = audio.volume
        element3.style.background = `url(icons/speaker-unmute-icon.png) no-repeat`;
        element3.style.backgroundSize = `20px`;
        element3.style.height = `20px`;
        element3.style.width = `20px`;
    }
}

// button listeners
btnPlay.addEventListener('click', playPause)
btnStop.addEventListener('click', stop)
btnLoop.addEventListener('click', loop)
volumeRange.addEventListener('click', volume)
mute.addEventListener('click', mute1)
back_time.addEventListener('click', backTime)
forward_time.addEventListener('click', forwardTime)
slider_time.addEventListener('click', sliderTimer)
next_Track.addEventListener('click', upIndex)
btn_track_1.addEventListener('click', playTrackPlaylist1)
btn_track_2.addEventListener('click', playTrackPlaylist2)
btn_track_3.addEventListener('click', playTrackPlaylist3)
btn_track_4.addEventListener('click', playTrackPlaylist4)
btn_track_5.addEventListener('click', playTrackPlaylist5)
previous_Track.addEventListener('click', downIndex)
shuffle_track.addEventListener('click', randomTrack)