import './App.css'
import './Components/Navbar.jsx'
import Navbar from './Components/Navbar.jsx'
import BoxWelcome from './Components/BoxWelcome.jsx'
import FilmsEmphasis from './Components/FilmsEmphasis.jsx'
function App() {

  return (
    <div>
      <Navbar/>
      <BoxWelcome/>
      <FilmsEmphasis/>
    </div>
  )
}

export default App
