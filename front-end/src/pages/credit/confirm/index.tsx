import { Link } from "react-router-dom";
function App() {

  return (
    <div className="App">
      confirm
      <div>
        完了画面は<Link to={`/complete/`}>こちら</Link>
      </div>
    </div>
  )
}

export default App
