const panels=document.querySelectorAll('.panel')

panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}


//Brio
var isPlaying = false; // Status audio
function firstSound() {
    const audio = document.getElementById('sound1');
    
    // Cek status audio
    if (isPlaying) {
        audio.pause();          // Menghentikan suara
        //audio.currentTime = 0;  // Mengembalikan ke awal
       // audio.currentTime = 0;  //matikan agar tidak mengulang dari awal
    } else {
        audio.play();           // Memutar suara
    }

    isPlaying = !isPlaying; // Mengubah status audio
}


var isPlaying = false; // Status audio
function satuSound() {
    const audio = document.getElementById('soundsatu');
    
    // Cek status audio
    if (isPlaying) {
        audio.pause();          // Menghentikan suara
        audio.currentTime = 0;  // Mengembalikan ke awal
    } else {
        audio.play();           // Memutar suara
    }

    isPlaying = !isPlaying; // Mengubah status audio
}

//City

var isPlaying = false; // Status audio
function secondSound() {
    const audio = document.getElementById('sound2');
    
    // Cek status audio
    if (isPlaying) {
        audio.pause();          // Menghentikan suara
        audio.currentTime = 0;  // Mengembalikan ke awal
    } else {
        audio.play();           // Memutar suara
    }

    isPlaying = !isPlaying; // Mengubah status audio
}

var isPlaying = false; // Status audio
function duaSound() {
    const audio = document.getElementById('sounddua');
    
    // Cek status audio
    if (isPlaying) {
        audio.pause();          // Menghentikan suara
        audio.currentTime = 0;  // Mengembalikan ke awal
    } else {
        audio.play();           // Memutar suara
    }

    isPlaying = !isPlaying; // Mengubah status audio
}

//Civic

var isPlaying = false; // Status audio
function threeSound() {
    const audio = document.getElementById('sound3');
    
    // Cek status audio
    if (isPlaying) {
        audio.pause();          // Menghentikan suara
        audio.currentTime = 0;  // Mengembalikan ke awal
    } else {
        audio.play();           // Memutar suara
    }

    isPlaying = !isPlaying; // Mengubah status audio
}

var isPlaying = false; // Status audio
function tigaSound() {
    const audio = document.getElementById('soundtiga');
    
    // Cek status audio
    if (isPlaying) {
        audio.pause();          // Menghentikan suara
        audio.currentTime = 0;  // Mengembalikan ke awal
    } else {
        audio.play();           // Memutar suara
    }

    isPlaying = !isPlaying; // Mengubah status audio
}

//Jazz

var isPlaying = false; // Status audio
function fourSound() {
    const audio = document.getElementById('sound4');
    
    // Cek status audio
    if (isPlaying) {
        audio.pause();          // Menghentikan suara
        audio.currentTime = 0;  // Mengembalikan ke awal
    } else {
        audio.play();           // Memutar suara
    }

    isPlaying = !isPlaying; // Mengubah status audio
}

var isPlaying = false; // Status audio
function empatSound() {
    const audio = document.getElementById('soundempat');
    
    // Cek status audio
    if (isPlaying) {
        audio.pause();          // Menghentikan suara
        audio.currentTime = 0;  // Mengembalikan ke awal
    } else {
        audio.play();           // Memutar suara
    }

    isPlaying = !isPlaying; // Mengubah status audio
}

//HRV
var isPlaying = false; // Status audio
function fiveSound() {
    const audio = document.getElementById('soundlima');
    
    // Cek status audio
    if (isPlaying) {
        audio.pause();          // Menghentikan suara
        audio.currentTime = 0;  // Mengembalikan ke awal
    } else {
        audio.play();           // Memutar suara
    }

    isPlaying = !isPlaying; // Mengubah status audio
}

//BRV
var isPlaying = false; // Status audio
function sixSound() {
    const audio = document.getElementById('soundenam');
    
    // Cek status audio
    if (isPlaying) {
        audio.pause();          // Menghentikan suara
        audio.currentTime = 0;  // Mengembalikan ke awal
    } else {
        audio.play();           // Memutar suara
    }

    isPlaying = !isPlaying; // Mengubah status audio
}

//CRV
var isPlaying = false; // Status audio
function sevenSound() {
    const audio = document.getElementById('soundtujuh');
    
    // Cek status audio
    if (isPlaying) {
        audio.pause();          // Menghentikan suara
        audio.currentTime = 0;  // Mengembalikan ke awal
    } else {
        audio.play();           // Memutar suara
    }

    isPlaying = !isPlaying; // Mengubah status audio
}

//Accord

var isPlaying = false; // Status audio
function eightSound() {
    const audio = document.getElementById('sound8');
    
    // Cek status audio
    if (isPlaying) {
        audio.pause();          // Menghentikan suara
        audio.currentTime = 0;  // Mengembalikan ke awal
    } else {
        audio.play();           // Memutar suara
    }

    isPlaying = !isPlaying; // Mengubah status audio
}

var isPlaying = false; // Status audio
function lapanSound() {
    const audio = document.getElementById('soundlapan');
    
    // Cek status audio
    if (isPlaying) {
        audio.pause();          // Menghentikan suara
        audio.currentTime = 0;  // Mengembalikan ke awal
    } else {
        audio.play();           // Memutar suara
    }

    isPlaying = !isPlaying; // Mengubah status audio
}

//Ballade

var isPlaying = false; // Status audio
function nineSound() {
    const audio = document.getElementById('sound9');
    
    // Cek status audio
    if (isPlaying) {
        audio.pause();          // Menghentikan suara
        audio.currentTime = 0;  // Mengembalikan ke awal
    } else {
        audio.play();           // Memutar suara
    }

    isPlaying = !isPlaying; // Mengubah status audio
}

var isPlaying = false; // Status audio
function sembilanSound() {
    const audio = document.getElementById('soundbilan');
    
    // Cek status audio
    if (isPlaying) {
        audio.pause();          // Menghentikan suara
        audio.currentTime = 0;  // Mengembalikan ke awal
    } else {
        audio.play();           // Memutar suara
    }

    isPlaying = !isPlaying; // Mengubah status audio
}

//Clarity

var isPlaying = false; // Status audio
function tenSound() {
    const audio = document.getElementById('soundpuluh');
    
    // Cek status audio
    if (isPlaying) {
        audio.pause();          // Menghentikan suara
        audio.currentTime = 0;  // Mengembalikan ke awal
    } else {
        audio.play();           // Memutar suara
    }

    isPlaying = !isPlaying; // Mengubah status audio
}