import React from 'react';
import ImageGallery from './ImageGallery';
import { ShowType } from '../types';

export default function Bookmarked({shows, searchStr}: {shows: ShowType[], searchStr:string}): React.JSX.Element {
    //const { shows } = useContext(ShowContext);

    let marked = shows.filter((show)=>show.isBookmarked);
    if(searchStr) {
        marked = marked.filter((show) => show.title.toLowerCase().includes(searchStr.toLowerCase()));
    }

    return (
        <main className='w-full p-4'>
            <h1>Bookmarked</h1>
            <ImageGallery shows={marked} />
        </main>
    );
}
