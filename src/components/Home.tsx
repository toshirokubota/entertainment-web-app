import React from 'react';
//import SearchBox from './SearchBox';
//import { ShowContext } from '../App';
//import { ShowType } from '../types';
import ImagesSlider from './ImagesSlider';
import ImageGallery from './ImageGallery';
import { ShowType } from '../types';

export default function Home({shows, searchStr}: {shows: ShowType[], searchStr:string}): React.JSX.Element {
    //const { shows } = useContext(ShowContext);

    const trendings = shows.filter((show)=>show.thumbnail?.trending);
    const recommended = shows.filter((show)=>!show.thumbnail?.trending);
    const searchResults = searchStr ? shows.filter((show) => show.title.toLowerCase().includes(searchStr.toLowerCase())): [];

    return (
        <main className='w-full p-4'>
            {searchResults.length > 0 && 
                <div className='p-4'>
                    <h1>Search Result</h1>
                    <ImageGallery shows={searchResults} />
                </div>
            }
            {
                searchResults.length == 0 && 
                <>
                    <div className='p-4'>
                        <h1>Trending</h1>
                        <ImagesSlider shows={trendings} />
                    </div>
                    <div className='px-4'>
                        <h2>Recommended for you</h2>
                        <ImageGallery shows={recommended} />
                    </div>
                </>    
            }
        </main>
    );
}
