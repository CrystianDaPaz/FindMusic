import { useState, useEffect } from 'react';
import SearchFilter from './SearchFilter';
import { getMusics } from '../Services/MusicsServices.js';
import './Css Components/MusicsFilmsSearch.css';

function MusicsFilmsSearch() {
    const [musics, setMusics] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {   
        getMusics()
            .then(data => {
                if (data && Array.isArray(data.musics)) {
                    setMusics(data.musics);
                    setFilteredData(data.musics);
                } else {
                    console.error("Os dados retornados não contêm um array em 'musics':", data);
                }
            })
            .catch(err => console.error("Erro ao carregar músicas e filmes:", err));
    }, []);

    const handleSearchResults = (results) => {
        setFilteredData(results);
    };

    return (
        <div className="music-film-search" id='filter'>
            <h1>Pesquisar Músicas e Filmes</h1>

            <div className='Search'>
                <SearchFilter data={musics} onSearch={handleSearchResults} />
            </div>

            <div className="results">
                {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                        <div key={`${item.name}-${item.band}-${item.album}-${index}`} className="BoxItem">
                            <h2>{item.name}</h2>
                            <p><strong>Artista:</strong> {item.band}</p>
                            <p><strong>Álbum:</strong> {item.album}</p>
                            <p><strong>Ano de Lançamento:</strong> {item.releaseYear}</p>
                        </div>
                    ))
                ) : (
                    <span>Nenhum resultado encontrado.</span>
                )}
            </div>
        </div>
    );
}

export default MusicsFilmsSearch;
