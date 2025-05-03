import React from 'react';
import { PageType } from '../types';

export default function SearchBox({page, setSearchStr}: 
    {page: PageType, setSearchStr: React.Dispatch<React.SetStateAction<string>>}): React.JSX.Element {
    const placeholder = page === 'Full' ? 'Search for movies or TV series' : 
        page === 'Movies' ? 'Search for movies' :
        page === 'TV series' ? 'Search for TV series' :
        page === 'Bookmarked' ? 'Search for bookmarked shows' : 'Search for movies or TV series';

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchStr((event.target as HTMLInputElement).value);
    }

    return (
        <label htmlFor='search-box' className='flex items-center gap-4 w-full px-4 py-2'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input id='search-box' className='flex-1' type='text' placeholder={placeholder} onChange={handleChange}/>
        </label>
    )

}
