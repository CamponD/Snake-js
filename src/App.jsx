import Menu from "./components/Menu"
import GameCanvas from "./components/GameCanvas"

function App() {
  return (
    <>
      <header className="title-container">
        <img src="/title_snake.png" alt="Title image" />
      </header>

      <Menu></Menu>
      <GameCanvas></GameCanvas>
    </>
  )
}

export default App
