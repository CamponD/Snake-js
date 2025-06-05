/**
 * Módulo para gestionar efectos de sonido y música de fondo.
 * Permite reproducir sonidos individuales y controlar música global.
 */

let currentMusic = null  // Referencia a la música en reproducción actual

/**
 * Reproduce un efecto de sonido corto (sin bucle).
 *
 * @param {string} filePath - Ruta del archivo de sonido (relativa a /public).
 * @param {number} volume - Volumen del sonido (0.0 a 1.0). Por defecto: 1.
 */
export const playSound = (filePath, volume = 1) => {
  const sound = new Audio(filePath)
  sound.volume = volume
  sound.play().catch((err) => {
    console.warn("Sonido bloqueado por el navegador:", err)
  })
}

/**
 * Reproduce música de fondo en bucle.
 * Si ya hay música en reproducción, la detiene antes de iniciar una nueva.
 *
 * @param {string} filePath - Ruta del archivo de música (relativa a /public).
 * @param {number} volume - Volumen de la música (0.0 a 1.0). Por defecto: 0.3.
 * @returns {HTMLAudioElement} - Referencia al objeto de música.
 */
export const playMusic = (filePath, volume = 0.3) => {
  if (currentMusic) {
    currentMusic.pause()
    currentMusic.currentTime = 0
  }

  currentMusic = new Audio(filePath)
  currentMusic.loop = true
  currentMusic.volume = volume

  currentMusic.play().catch((err) => {
    console.warn("Música bloqueada por el navegador:", err)
  })

  return currentMusic
}

/**
 * Detiene la música en reproducción, si existe.
 * Limpia la referencia para evitar múltiples audios simultáneos.
 */
export const stopMusic = () => {
  if (currentMusic) {
    currentMusic.pause()
    currentMusic.currentTime = 0
    currentMusic = null
  }
}