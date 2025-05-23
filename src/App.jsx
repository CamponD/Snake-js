import { useState, useCallback } from "react"
import Border from "./components/Border"
import Menu from "./components/Menu"
import GameCanvas from "./components/GameCanvas"
import GameOver from "./components/GameOver"

import titleImg from "./assets/images/title_snake.png"

function App() {
  const [screenComponent, setScreenComponent] = useState("menu")
  const [gameKey, setGameKey] = useState(0)
  const [score, setScore] = useState(0)

  const gameOver = useCallback(() => {
    setScreenComponent("death")
  }, [])
  
  const handleRestart = () => {
    setScore(0)
    setGameKey(prev => prev + 1)
    setScreenComponent("game")
  }

  return (
    <>
      <header className="title-container">
        <img src={titleImg} alt="Title image" />
      </header>

      <div className="score-display">
        Score: {score}
      </div>

      <Border>
        {screenComponent === "menu" && <Menu start={() => setScreenComponent("game")} />}
        {screenComponent === "game" && <GameCanvas key={gameKey} gameOver={gameOver} setScore={setScore} />}
        {screenComponent === "death" && <GameOver restart={() => handleRestart()} />}
      </Border>
    </>
  )
}

export default App
