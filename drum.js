
window.addEventListener('keydown',(e)=>{
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key= document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return;
    audio.currentTime=0; //rewind to restart
    audio.play()
    key.classList.add('playing')
});


function removeTransistion(e){
    console.log(e);
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing')

}

const keys=document.querySelectorAll('.key');
console.log(keys)



keys.forEach(key=>key.addEventListener('transitionend',removeTransistion))