import { Link } from "react-router-dom";
function App() {

  return (
    <div className="App">
      register
      <div>
        確認画面は<Link to={`/confirm/`}>こちら</Link>
      </div>
    </div>
  )
}

export default App
