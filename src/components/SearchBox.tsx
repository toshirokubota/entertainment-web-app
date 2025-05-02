import React from 'react';
import { PageType } from '../types';

export default function SearchBox({page, setSearchStr}: 
    {page: PageType, setSearchStr: React.Dispatch<React.SetStateAction<string>>}): React.JSX.Element {
    const placeholder = page === 'Full' ? 'Search for movies or TV series' : 
        page === 'Movies' ? 'Search for movies' :
        page === 'TV series' ? 'Search for TV series' :
        page === 'Bookmarked' ? 'Search for bookmarked shows' : 'Search for movies or TV series';

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if(event.key === 'Enter') {
            //console.log(event.target.value);
            setSearchStr((event.target as HTMLInputElement).value);
        }
    }

    return (
        <div className='flex items-center gap-4 w-full px-4 py-2'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input className='flex-1' type='text' placeholder={placeholder} onKeyDown={handleKeyDown}/>
        </div>
    )

}
