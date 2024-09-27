import './App.css';
import Navbar from './Components/Navbar.jsx';
import BoxWelcome from './Components/BoxWelcome.jsx';
import FilmsEmphasis from './Components/FilmsEmphasis.jsx';
import MusicsEmphasis from './Components/MusicsEmphasis.jsx';
import MusicsFilmsSearch from './Components/MusicsFilmsSearch.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <BoxWelcome />
      <FilmsEmphasis />
      <MusicsEmphasis />
      <MusicsFilmsSearch />
    </div>
  );
}

export default App;
