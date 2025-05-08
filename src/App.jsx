import { useState } from "react"
import Menu from "./components/Menu"
import GameCanvas from "./components/GameCanvas"

import titleImg from "./assets/images/title_snake.png"

function App() {
  const [ screenComponent, setScreenComponent ] = useState("menu")

  return (
    <>
      <header className="title-container">
        <img src={ titleImg } alt="Title image" />
      </header>

      {screenComponent === "menu" && <Menu start={() => setScreenComponent("game")} />}
      {screenComponent === "game" && <GameCanvas />}
    </>
  )
}

export default App
