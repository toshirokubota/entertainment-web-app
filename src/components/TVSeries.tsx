import React from 'react';
import ImageGallery from './ImageGallery';
import { ShowType } from '../types';

export default function TVSeries({shows, searchStr}: {shows: ShowType[], searchStr:string}): React.JSX.Element {
    //const { shows } = useContext(ShowContext);

    let series = shows.filter((show)=>show.category === 'TV Series');
    if(searchStr) {
        series = series.filter((show) => show.title.toLowerCase().includes(searchStr.toLowerCase()));
    }
    return (
        <main className='w-full p-4'>
            <div className='p-4'>
                <h1>TV Series</h1>
                <ImageGallery shows={series} />
            </div>
        </main>
    );
}
