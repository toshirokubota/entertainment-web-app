import React from 'react';
import ImageGallery from './ImageGallery';
import { ShowType } from '../types';

export default function Movies({shows, searchStr}: {shows: ShowType[], searchStr:string}): React.JSX.Element {
    //const { shows } = useContext(ShowContext);

    let movies = shows.filter((show)=>show.category === 'Movie');
    if(searchStr) {
        movies = movies.filter((show) => show.title.toLowerCase().includes(searchStr.toLowerCase()));
    }

    return (
        <main className='w-full p-4'>
            <div className='p-4'>
                <h1>Movies</h1>
                <ImageGallery shows={movies} />
            </div>
        </main>
    );
}
