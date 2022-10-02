export function Sounds() {

    const bgSoundFlorest = new Audio("./sounds/floresta.wav")
    const bgSoundRain = new Audio("./sounds/chuva.wav")
    const bgSoundCoffeeshop = new Audio("./sounds/cafeteria.wav")
    const bgSoundFireplace = new Audio("./sounds/lareira.wav")

    function stopSounds() {
        bgSoundFlorest.pause()
        bgSoundFlorest.currentTime = 0
        bgSoundRain.pause()
        bgSoundRain.currentTime = 0
        bgSoundCoffeeshop.pause()
        bgSoundCoffeeshop.currentTime = 0
        bgSoundFireplace.pause()
        bgSoundFireplace.currentTime = 0
    }

    return {
        bgSoundFlorest,
        bgSoundRain,
        bgSoundCoffeeshop,
        bgSoundFireplace,
        stopSounds,
    }
}