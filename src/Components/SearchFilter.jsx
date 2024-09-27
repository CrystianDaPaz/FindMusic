import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import './Css Components/MusicsFilmsSearch.css'

function SearchFilter({ data, onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        debouncedFilter(term);
    };

    const filterData = (term) => {
        const regex = new RegExp(term, 'i');
        const filteredResults = data
            .filter(item => regex.test(item.name) || regex.test(item.band) || regex.test(item.album) || regex.test(item.musicFilm))
            .filter((item, index, self) =>
                index === self.findIndex((t) => (
                    t.name === item.name && t.band === item.band && t.album === item.album && t.musicFilm === item.musicFilm
                ))
            );

        console.log('Term:', term);
        console.log('Filtered Results:', filteredResults);

        onSearch(filteredResults);
    };

    const debouncedFilter = debounce(filterData, 300);

    useEffect(() => {
        return () => {
            debouncedFilter.cancel();
        };
    }, []);

    return (
        <div className="search-filter">
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Pesquise por música, banda, álbum ou filme..."
            />
        </div>
    );
}

export default SearchFilter;
