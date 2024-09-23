import './Css Components/BoxWelcome.css'
import Lupa from '../assets/FindMusic-Lupa.png';
function BoxWelcome() {
    return (
        <div className='BoxOrganization'>
            <div className="BoxWelcome">
                <h1>Bem vindo ao<p>Find</p><p1>Music</p1>!</h1>
                <h2>Procure as Músicas que você escutou no seu filme favorito.</h2>
            </div>
            <img src={Lupa} alt="Logo" />
        </div>
    )
}

export default BoxWelcome;