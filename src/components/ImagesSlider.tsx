import React from 'react';
import { ShowType } from '../types';
import BookmarkIcon from './BookmarkIcon';
import { staticAsset } from '../libs';
import { ShowSummary } from './ShowCard';
import PlayButton from './PlayButton';

/* <BookmarkIcon show={show} /> */
function SlidingImage({show}: {show: ShowType}) : React.JSX.Element {
    return (
        <div key={show.title} className='image-container'>
            <div className='playable-image'>
                <picture >
                    <source srcSet={staticAsset(show.thumbnail.trending.large.slice(1))} media="(min-width: 700px)" />
                    <img src={staticAsset(show.thumbnail.trending.small.slice(1))} alt={show.title}/>
                </picture>
                <div className='overlay'></div>
                <PlayButton />
            </div>
            <span className='show-title'>{show.title}</span>
            <ShowSummary show={show} />
            <BookmarkIcon show={show}/>
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
