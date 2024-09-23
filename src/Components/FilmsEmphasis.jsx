import './Css Components/FilmsEmphasis.css'
import Lupa from '../assets/FindMusic-Lupa.png';


function FilmsEmphasis () {
    return (
        <div className="Films" id='Films'>
            <h1>Filmes em Destaque</h1>
            <div className="OrganizationFilmsEmphasis">
                <div className='BoxFilms'>
                    <h1>
                        Nome do Filme
                    </h1>
                    <img src={Lupa} alt="Logo" />
                    <h2>
                        Generos Musicais do filme
                    </h2>
                </div>
                <div className='BoxFilms'>
                <h1>
                        Nome do Filme
                    </h1>
                    <img src={Lupa} alt="Logo" />
                    <h2>
                        Generos Musicais do filme
                    </h2>
                </div>
                <div className='BoxFilms'>
                <h1>
                        Nome do Filme
                    </h1>
                    <img src={Lupa} alt="Logo" />
                    <h2>
                        Generos Musicais do filme
                    </h2>
                </div>
            </div>
            <div className="OrganizationFilmsEmphasis">
                <div className='BoxFilms'>
                <h1>
                        Nome do Filme
                    </h1>
                    <img src={Lupa} alt="Logo" />
                    <h2>
                        Generos Musicais do filme
                    </h2>
                </div>
                <div className='BoxFilms'>
                <h1>
                        Nome do Filme
                    </h1>
                    <img src={Lupa} alt="Logo" />
                    <h2>
                        Generos Musicais do filme
                    </h2>
                </div>
                <div className='BoxFilms'>
                <h1>
                        Nome do Filme
                    </h1>
                    <img src={Lupa} alt="Logo" />
                    <h2>
                        Generos Musicais do filme
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default FilmsEmphasis;