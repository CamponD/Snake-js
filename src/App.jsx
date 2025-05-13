import { useState } from "react"
import Border from "./components/Border"
import Menu from "./components/Menu"
import GameCanvas from "./components/GameCanvas"
import GameOver from "./components/GameOver"

import titleImg from "./assets/images/title_snake.png"

function App() {
  const [ screenComponent, setScreenComponent ] = useState("menu")

  return (
    <>
      <header className="title-container">
        <img src={ titleImg } alt="Title image" />
      </header>

      <Border>
        {screenComponent === "menu" && <Menu start={() => setScreenComponent("game")} />}
        {screenComponent === "game" && <GameCanvas gameOver={() => setScreenComponent("death")}/>}
        {screenComponent === "death" && <GameOver start={() => setScreenComponent("game")} />}
      </Border>
    </>
  )
}

export default App
