export function Events({
    elements,
    controls,
    sounds,
}) {

    // Controls
    elements.buttonPlay.addEventListener("click", function() {
        controls.play()
    })
    
    elements.buttonStop.addEventListener("click", function() {
        controls.stop()
    })
    
    elements.buttonIncrease.addEventListener("click", function() {
        controls.increaseMinutes()
    })
    
    elements.buttonDecrease.addEventListener("click", function() {
        controls.decreaseMinutes()
    })

    // Sounds
    elements.buttonSoundFlorest.addEventListener("click", function() {
        let isPlaying = elements.buttonSoundFlorest.classList.contains("selected")
        if ( isPlaying ) {
            sounds.stopSounds()
            controls.unselectButtonsSounds()
        } else {
            sounds.stopSounds()
            controls.unselectButtonsSounds()
            sounds.bgSoundFlorest.play()
            elements.buttonSoundFlorest.classList.add("selected")
        }
    })

    elements.buttonSoundRain.addEventListener("click", function() {
        let isPlaying = elements.buttonSoundRain.classList.contains("selected")
        if ( isPlaying ) {
            sounds.stopSounds()
            controls.unselectButtonsSounds()
        } else {
            sounds.stopSounds()
            controls.unselectButtonsSounds()
            sounds.bgSoundRain.play()
            elements.buttonSoundRain.classList.add("selected")
        }
    })

    elements.buttonSoundCoffeeshop.addEventListener("click", function() {
        let isPlaying = elements.buttonSoundCoffeeshop.classList.contains("selected")
        if ( isPlaying ) {
            sounds.stopSounds()
            controls.unselectButtonsSounds()
        } else {
            sounds.stopSounds()
            controls.unselectButtonsSounds()
            sounds.bgSoundCoffeeshop.play()
            elements.buttonSoundCoffeeshop.classList.add("selected")
        }
    })

    elements.buttonSoundFireplace.addEventListener("click", function() {
        let isPlaying = elements.buttonSoundFireplace.classList.contains("selected")
        if ( isPlaying ) {
            sounds.stopSounds()
            controls.unselectButtonsSounds()
        } else {
            sounds.stopSounds()
            controls.unselectButtonsSounds()
            sounds.bgSoundFireplace.play()
            elements.buttonSoundFireplace.classList.add("selected")
        }
    })
}