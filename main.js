'use strict';

const sound = {
    'A' : 'boom.wav',
    'S' : 'clap.wav',
    'D' : 'hihat.wav',
    'F' : 'kick.wav',
    'G' : 'openhat.wav',
    'H' : 'ride.wav',
    'J' : 'snare.wav',
    'K' : 'tink.wav',
    'L' : 'tom.wav'
}

const creatDiv = (text) => {
    const div = document.createElement('div');
    div.classList.add('Key');
    div.textContent = text;
    div.id = text;
    document.getElementById('container').appendChild(div);
}

const show =  (sound) => Object.keys(sound).forEach(creatDiv);

const playSound = (letter) => {
    const audio = new Audio(`./sounds/${sound[letter]}`);
    audio.play();
}

const addEffect= (letter) => document.getElementById(letter)
                                    .classList.add('active');

const removeEffect= (letter) => {
    const div = document.getElementById(letter);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend', removeActive);
};


const activateDiv = (event) => {
    const letter = event.type == 'click' ? event.target.id : event.key.toUpperCase();

    const allowedLetter = sound.hasOwnProperty(letter);
    if(allowedLetter){
        addEffect(letter);
        playSound(letter);
        removeEffect(letter);
    }
}

show(sound);

document.getElementById('container')
        .addEventListener('click', activateDiv);

window.addEventListener('keydown', activateDiv);
