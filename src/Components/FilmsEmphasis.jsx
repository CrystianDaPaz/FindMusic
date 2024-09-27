import './Css Components/FilmsEmphasis.css';
import { getFilms } from '../Services/FilmsServices';
import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';


function FilmsEmphasis() {
    const [Films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [open, setOpen] = useState(false);

    const highlightedFilms1 = ["Hereditary", "Submarine", "Her"];
    const highlightedFilms2 = ["Fight Club", "Akira", "Spirited Away"];

    useEffect(() => {
        getFilms()
            .then(data => setFilms(data))
            .catch(err => console.error(err));
    }, []);

    const filmsToDisplay = Films.filter(film => highlightedFilms1.includes(film.nameFilm));
    const filmsToDisplay1 = Films.filter(film => highlightedFilms2.includes(film.nameFilm));

    const openPopup = (film) => {
        setSelectedFilm(film);
        setOpen(true);
    };

    return (
        <div className="FilmsEmphasis" id="films">
            <h1>Filmes em Destaque</h1>
            <div className="Films">
                {filmsToDisplay.map(film => (
                    <div key={film.nameFilm} className="BoxFilms" onClick={() => openPopup(film)}>
                        <h2>{film.nameFilm}</h2>
                        <p>Ano de Lançamento: {film.releaseYear}</p>
                        <p>Gêneros Musicais: {film.musicalGenres.join(", ")}</p>
                    </div>
                ))}
            </div>
            <div className='Films'>
                {filmsToDisplay1.map(film => (
                    <div key={film.nameFilm} className="BoxFilms" onClick={() => openPopup(film)}>
                        <h2>{film.nameFilm}</h2>
                        <p>Ano de Lançamento: {film.releaseYear}</p>
                        <p>Gêneros Musicais: {film.musicalGenres.join(", ")}</p>
                    </div>
                ))}
            </div>

            <Popup open={open} onClose={() => setOpen(false)} overlayStyle={{ background: 'rgba(0, 0, 0, 0.7)' }}>
                {selectedFilm ? (
                    <div className="popup-content">
                        <h2>Músicas de {selectedFilm.nameFilm}</h2>
                        <ul>
                            {selectedFilm.music && selectedFilm.music.length > 0 ? (
                                selectedFilm.music.map((music, index) => (
                                    <li key={index}>{music}</li>
                                ))
                            ) : (
                                <li>Nenhuma música disponível.</li>
                            )}
                        </ul>
                        <button onClick={() => setOpen(false)}>Fechar</button>
                    </div>
                ) : (
                    <div>Carregando...</div>
                )}
            </Popup>
        </div>
    );
}

export default FilmsEmphasis;
