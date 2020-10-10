const $playVideo = document.getElementById('play')
const $closeVideo = document.getElementById('close')

$playVideo.addEventListener('click', toggle)
$closeVideo.addEventListener('click', toggle)


function toggle(ev) {
    ev.preventDefault()

    const $trailer = document.querySelector('.trailer')
    $trailer.classList.toggle('active')
}