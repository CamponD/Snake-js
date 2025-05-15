import { useState } from "react"
import Border from "./components/Border"
import Menu from "./components/Menu"
import GameCanvas from "./components/GameCanvas"
import GameOver from "./components/GameOver"

import titleImg from "./assets/images/title_snake.png"

function App() {
  const [ screenComponent, setScreenComponent ] = useState("menu")
  const [ gameKey, setGameKey ] = useState(0)

  const handleRestart = () => {
    setGameKey(prev => prev + 1)    
    setScreenComponent("game")
  }

  return (
    <>
      <header className="title-container">
        <img src={ titleImg } alt="Title image" />
      </header>

      <Border>
        {screenComponent === "menu" && <Menu start={() => setScreenComponent("game")} />}
        {screenComponent === "game" && <GameCanvas key={gameKey} gameOver={() => setScreenComponent("death")}/>}
        {screenComponent === "death" && <GameOver restart={() => handleRestart()} />}
      </Border>
    </>
  )
}

export default App
