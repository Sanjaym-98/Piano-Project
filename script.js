const pianokeys = document.querySelectorAll('.piano-keys .key');
const volume =document.querySelector(".volumn-slider input");
const showkeys = document.querySelector(".keys-checkbox input")
const btn =document.getElementById('btn');
const displaytune = document.getElementById('displaytune')
let allkeys =[];
let audio = new Audio("tunes/a.wav")
const playtune=(key)=>{
    audio.src=`tunes/${key}.wav`
    audio.play();
const clickedkey =document.querySelector(`[data-key="${key}"]`)
clickedkey.classList.add("active")
setTimeout(()=>{
clickedkey.classList.remove("active")
},150)
}

pianokeys.forEach((key)=>{
    allkeys.push(key.dataset.key)
    key.addEventListener("click",()=>{
        playtune(key.dataset.key)
    })
    
})
const pressedkey=(e)=>{
    if(allkeys.includes(e.key)){
  playtune(e.key)
    }
}
document.addEventListener("keydown",pressedkey)
const handleVolume=(e)=>{
    audio.volume=e.target.value;
    }
    
volume.addEventListener("input",handleVolume);

const showhiddenkey=()=>{
    pianokeys.forEach((key)=>{
        key.classList.toggle("hide")
    })
}
showkeys.addEventListener("click",showhiddenkey);

const tunedisplay=()=>{
    if(displaytune.style.display=="none"){
        displaytune.style.display="block"
    }else{
        displaytune.style.display="none"
    }
}
btn.addEventListener("click",tunedisplay);
















