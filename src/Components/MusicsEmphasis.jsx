import './Css Components/MusicsEmphasis.css';
import { getMusics } from '../Services/MusicsServices.js';
import { getFilms } from '../Services/FilmsServices';
import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';

function MusicsEmphasis() {
    const [musics, setMusics] = useState([]); 
    const [films, setFilms] = useState([]);
    const [selectedMusic, setSelectedMusic] = useState(null);
    const [open, setOpen] = useState(false);

    const highlightedMusics1 = [
        "Where Is My Mind?", 
        "Goin' Out West", 
        "Psycho Boy Jack"
    ];
    const highlightedMusics2 = [
        "One Summer's Day", 
        "Kaneda", 
        "Funeral"
    ];

    useEffect(() => {
        getMusics()
            .then(data => {
                console.log(data); 
                if (data && Array.isArray(data.musics)) {
                    setMusics(data.musics);
                } else {
                    console.error("Os dados retornados não contêm um array em 'musics':", data);
                }
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        getFilms()
            .then(data => setFilms(data))
            .catch(err => console.error(err));
    }, []);

    const musicsToDisplay1 = musics.filter(music => highlightedMusics1.includes(music.name));
    const musicsToDisplay2 = musics.filter(music => highlightedMusics2.includes(music.name));

    const openPopup = (music) => {
        setSelectedMusic(music);
        setOpen(true);
    };

    return (
        <div className="MusicEmphasis" id="musics">
            <h1>Músicas em Destaque</h1>
            <div className="Musics">
                {musicsToDisplay1.map(music => (
                    <div key={music.name} className="BoxMusics" onClick={() => openPopup(music)}>
                        <h2>{music.name}</h2>
                        <p>Ano de Lançamento: {music.releaseYear}</p>
                        <p>Artista: {music.band}</p>
                    </div>
                ))}
            </div>
            <div className='Musics'>
                {musicsToDisplay2.map(music => (
                    <div key={music.name} className="BoxMusics" onClick={() => openPopup(music)}>
                        <h2>{music.name}</h2>
                        <p>Ano de Lançamento: {music.releaseYear}</p>
                        <p>Artista: {music.band}</p>
                    </div>
                ))}
            </div>

            <Popup open={open} onClose={() => setOpen(false)} overlayStyle={{ background: 'rgba(0, 0, 0, 0.7)' }}>
                {selectedMusic ? (
                    <div className='popup-content'>
                        <h2>Música de {selectedMusic.musicFilm}</h2>
                        <button onClick={() => setOpen(false)}>Fechar</button>
                    </div>
                ) : (
                    <div>Carregando...</div>
                )}
            </Popup>
        </div>
    );
}

export default MusicsEmphasis;
