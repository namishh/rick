var h1 = document.querySelector('.h1')
var vid = document.querySelector('#vid')

var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "./com.mp4"

h1.addEventListener("click", function () {
    audio.play()
    vid.play()
    this.textContent = "NO ESCAPE"
})
