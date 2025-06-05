// Componente raíz que gestiona el flujo de pantallas del juego Snake.
// Maneja los estados globales como la puntuación, el componente activo y reinicio del juego.

import { useState, useCallback } from "react"
import Border from "./components/Border"
import Menu from "./components/Menu"
import GameCanvas from "./components/GameCanvas"
import GameOver from "./components/GameOver"

import titleImg from "./assets/images/title_snake.png"
import { playSound, playMusic, stopMusic } from "./utils/soundManager"

function App() {
  /**
   * screenComponent:
   * Define qué vista mostrar:
   * - "menu": pantalla de inicio
   * - "game": juego activo
   * - "death": pantalla Game Over
   */
  const [screenComponent, setScreenComponent] = useState("menu")
  
  /**
   * gameKey:
   * Se usa como prop "key" en GameCanvas para forzar el reinicio del componente.
   * Cambiar este valor desmonta y vuelve a montar el canvas.
   */
  const [gameKey, setGameKey] = useState(0)
  
  /**
   * score:
   * Puntuación actual del jugador. Se reinicia con cada nueva partida.
   */
  const [score, setScore] = useState(0)
  
  /**
   * gameOver:
   * Función llamada desde GameCanvas cuando la serpiente muere.
   * Cambia la pantalla y detiene la música de fondo.
   */
  const gameOver = useCallback(() => {  
    setScreenComponent("death")
    stopMusic()
  }, [])

  /**
   * start:
   * Inicia la partida desde el menú principal.
   * - Cambia la vista a juego
   * - Reproduce efecto de clic y música
   */
  const start = () => {
    setScreenComponent("game")
    playSound("/sounds/click.mp3", 0.6)
    playMusic("/sounds/music.mp3", 0.2)
  }

  /**
   * handleRestart:
   * Reinicia una nueva partida desde Game Over:
   * - Resetea puntuación
   * - Cambia gameKey para reiniciar GameCanvas
   * - Reproduce sonido y música
   */
  const handleRestart = () => {
    setScore(0)
    setGameKey(prev => prev + 1)
    setScreenComponent("game")
    playSound("/sounds/click.mp3", 0.6)
    playMusic("/sounds/music.mp3", 0.2)
  }
  
  /**
   * backMenu:
   * Vuelve al menú desde Game Over:
   * - Resetea puntuación
   * - Cambia la vista a menú
   * - Reproduce sonido
   */
  const backMenu = () => {
    setScore(0)
    setScreenComponent("menu")
    playSound("/sounds/click.mp3", 0.6)
  }

  return (
    <>
      <header className="title-container">
        <img src={titleImg} alt="Title image" />
      </header>

      {screenComponent === "game" && (
        <div className="score-display">
          Score: {score}
        </div>
      )}

      <Border>
        {screenComponent === "menu" && <Menu start={start} />}
        {screenComponent === "game" && <GameCanvas key={gameKey} gameOver={gameOver} score={score} setScore={setScore} />}
        {screenComponent === "death" && <GameOver restart={() => handleRestart()} backMenu={() => backMenu()} score={score} />}
      </Border>
    </>
  )
}

export default App
