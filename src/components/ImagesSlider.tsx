import React from 'react';
import { ShowType } from '../types';
import BookmarkIcon from './BookmarkIcon';
import { staticAsset } from '../libs';
import { ShowSummary } from './ShowCard';

/* <BookmarkIcon show={show} /> */
function SlidingImage({show}: {show: ShowType}) : React.JSX.Element {
    return (
        // <img key={show.title} src={staticAsset(show.thumbnail.trending.small.slice(1))} alt={show.title}/>
        <div key={show.title} className='image-container'>
            <img src={staticAsset(show.thumbnail.trending.small.slice(1))} alt={show.title}/>
            <span className='show-title'>{show.title}</span>
            <ShowSummary show={show} />
            <BookmarkIcon show={show}/>
            {/* <span className='show-summary'>{show.year}{show.category}{show.rating}</span> */}
        </div>
    );
}

function ImagesSlider({shows}: {shows: ShowType[]}): React.JSX.Element {
    return (
        <div className='image-slider'>
            {
                shows.map((show) => <SlidingImage show={show}/>)
            }
        </div>
    );
}

export default ImagesSlider;
