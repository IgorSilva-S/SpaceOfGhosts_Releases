let soundId = 0
let soundIdCode = []
const ghost = document.getElementById('soundGhost')
const songName = document.getElementById("soundName")
const songCredit = document.getElementById("soundCredit")
//Buttons
const playButton = document.getElementById("playControl")
const resetButton = document.getElementById("resetControl")
const pauseButton = document.getElementById("pauseControl")
const prevID = document.getElementById("prevID")
const afterID = document.getElementById("afterID")
//End Buttons

//Song vars
const homeSong = document.getElementById('homeSong') // by Artificial Music - Alone Two Days Ago
const song = document.getElementById('soloSong') // by Prod. Riddiman - Deep Space
const duoRSong = document.getElementById('duoRunSong') // by After The Fall - Pieces
const shopSong = document.getElementById('shopSong') // by dyu / Official by Nintendo - Nintendo eShop
const settingsSong = document.getElementById('settingsSong') // by dyu / Official by Nintendo - Nintendo 3DS Internet Settings
const creditsSong = document.getElementById('creditsSong') // by After The Fall - Winter Lights
const soloClassicSong = document.getElementById('soloClassicSong') // by Chillpeach - 2:00 AM
const duoClassicSong = document.getElementById('duoClassicSong') // by Chillpeach - On The Top
//End song vars

prevID.addEventListener('click', () => {
    if (soundId == 0) {
        soundId = 7
    } else {
        soundId--
    }
    homeSong.pause()
    song.pause()
    duoRSong.pause()
    shopSong.pause()
    settingsSong.pause()
    creditsSong.pause()
    soloClassicSong.pause()
    duoClassicSong.pause()

    homeSong.currentTime = 0
    song.currentTime = 0
    duoRSong.currentTime = 0
    shopSong.currentTime = 0
    settingsSong.currentTime = 0
    creditsSong.currentTime = 0
    soloClassicSong.currentTime = 0
    duoClassicSong.currentTime = 0
    ghost.classList.remove('playing')
    ghost.classList.add('stopped')
    checkSong()
})

afterID.addEventListener('click', () => {
    if (soundId == 7) {
        soundId = 0
    } else {
        soundId++
    }
    homeSong.pause()
    song.pause()
    duoRSong.pause()
    shopSong.pause()
    settingsSong.pause()
    creditsSong.pause()
    soloClassicSong.pause()
    duoClassicSong.pause()

    homeSong.currentTime = 0
    song.currentTime = 0
    duoRSong.currentTime = 0
    shopSong.currentTime = 0
    settingsSong.currentTime = 0
    creditsSong.currentTime = 0
    soloClassicSong.currentTime = 0
    duoClassicSong.currentTime = 0
    ghost.classList.remove('playing')
    ghost.classList.add('stopped')
    checkSong()
})

function checkSong() {
    if (soundId == 0) {
        songName.innerText = 'Alone Two Days Ago - Home'
        songCredit.innerText = 'Artificial Music'
    } else if (soundId == 1) {
        songName.innerText = 'Deep Space - Solo Normal'
        songCredit.innerText = 'Prod. Riddiman'
    } else if (soundId == 2) {
        songName.innerText = 'Pieces - Duo Normal'
        songCredit.innerText = 'After The Fall'
    } else if (soundId == 3) {
        songName.innerText = 'Nintendo eShop (Lofi) - Loja'
        songCredit.innerText = 'dyu/Nintendo'
    } else if (soundId == 4) {
        songName.innerText = 'Nintendo 3DS Config. Internet (Lofi) - Configurações'
        songCredit.innerText = 'dyu/Nintendo'
    } else if (soundId == 5) {
        songName.innerText = 'Winter Lights - Créditos'
        songCredit.innerText = 'After The Fall'
    } else if (soundId == 6) {
        songName.innerText = '2:00 AM - Solo Clássico'
        songCredit.innerText = 'Chillpeach'
    } else if (soundId == 7) {
        songName.innerText = 'On The Top - Duo Clássico'
        songCredit.innerText = 'Chillpeach'
    }
}

playButton.addEventListener("click", () => {
    if (soundId == 0) {
        homeSong.play()
        soundIdCode.push(0)
    } else if (soundId == 1) {
        song.play()
        soundIdCode.push(1)
    } else if (soundId == 2) {
        duoRSong.play()
        soundIdCode.push(2)
    } else if (soundId == 3) {
        shopSong.play()
        soundIdCode.push(3)
    } else if (soundId == 4) {
        settingsSong.play()
        soundIdCode.push(4)
    } else if (soundId == 5) {
        creditsSong.play()
        soundIdCode.push(5)
    } else if (soundId == 6) {
        soloClassicSong.play()
        soundIdCode.push(6)
    } else if (soundId == 7) {
        duoClassicSong.play()
        soundIdCode.push(7)
    }

    ghost.classList.remove('stopped')
    ghost.classList.add('playing')
    checkSecretCode()
})

resetButton.addEventListener("click", () => {
    homeSong.currentTime = 0
    song.currentTime = 0
    duoRSong.currentTime = 0
    shopSong.currentTime = 0
    settingsSong.currentTime = 0
    creditsSong.currentTime = 0
    soloClassicSong.currentTime = 0
    duoClassicSong.currentTime = 0

    if (soundId == 0) {
        homeSong.play()
        soundIdCode.push(0)
    } else if (soundId == 1) {
        song.play()
        soundIdCode.push(1)
    } else if (soundId == 2) {
        duoRSong.play()
        soundIdCode.push(2)
    } else if (soundId == 3) {
        shopSong.play()
        soundIdCode.push(3)
    } else if (soundId == 4) {
        settingsSong.play()
        soundIdCode.push(4)
    } else if (soundId == 5) {
        creditsSong.play()
        soundIdCode.push(5)
    } else if (soundId == 6) {
        soloClassicSong.play()
        soundIdCode.push(6)
    } else if (soundId == 7) {
        duoClassicSong.play()
        soundIdCode.push(7)
    }

    ghost.classList.remove('stopped')
    ghost.classList.add('playing')
    checkSecretCode()
})

pauseButton.addEventListener("click", () => {
    if (soundId == 0) {
        homeSong.pause()
    } else if (soundId == 1) {
        song.pause()
    } else if (soundId == 2) {
        duoRSong.pause()
    } else if (soundId == 3) {
        shopSong.pause()
    } else if (soundId == 4) {
        settingsSong.pause()
    } else if (soundId == 5) {
        creditsSong.pause()
    } else if (soundId == 6) {
        soloClassicSong.pause()
    } else if (soundId == 7) {
        duoClassicSong.pause()
    }
    ghost.classList.remove('playing')
    ghost.classList.add('stopped')
})

function checkSecretCode() {
        if (soundIdCode == [0, 5, 0, 1, 2, 4]) {
            alert('DevMode')
            soundIdCode = []
        } else if (soundIdCode == [0, 1, 1, 2, 2, 3]) {
            alert('classicMode')
            localStorage.setItem('classicPurchased', true)
            soundIdCode = []
        } else if (soundIdCode == [4, 1, 2, 7]) {
            alert('allSkinsBuy')
            soundIdCode = []
            localStorage.setItem('purchasedA', 'true')
            localStorage.setItem('purchased1', 'true')
            localStorage.setItem('purchased2', 'true')
            localStorage.setItem('purchased3', 'true')
            localStorage.setItem('purchased4', 'true')
        }
}