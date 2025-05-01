import React from 'react';
import { ShowType } from '../types';
import { staticAsset } from '../libs';
import BookmarkIcon from './BookmarkIcon';

export function categoryIcon(show: ShowType): React.JSX.Element {
    if(show.category == 'Movie') {
        return (
            <>
            <img src={staticAsset('/assets/icon-nav-movies.svg')} alt='movie icon' className='category-icon inline-block'/> Movie
            </>
        )
    } else {
        return (
            <>
            <img src={staticAsset('/assets/icon-nav-tv-series.svg')} alt='movie icon' className='category-icon inline-block'/> TV Series
            </>
        )

    }
}

export function ShowSummary({show}: {show: ShowType}): React.JSX.Element {
    return (
        <div className='show-summary text-xs text-slate-100'>
            <span>{show.year}</span>
            <span> • </span><span>{categoryIcon(show)}</span>
            <span> • </span><span>{show.rating}</span>
        </div>
    )
}

export default function ShowCard({show}: {show: ShowType}): React.JSX.Element {
    return (
        <div className='show-card'>
            <img key={show.title} src={staticAsset(show.thumbnail.regular.small.slice(1))} alt={show.title} 
                className='rounded-md'/>
            <BookmarkIcon show={show} />
            {/* <img src={show.isBookmarked ? staticAsset('/assets/icon-bookmark-full.svg'): staticAsset('/assets/icon-bookmark-empty.svg')}
                alt='bookmark icon' className='bookmark-icon'/> */}
            <ShowSummary show={show} />
            {/* <div className='show-summary text-xs text-slate-100'>
                <span>{show.year}</span>
                <span> • </span><span>{categoryIcon(show)}</span>
                <span> • </span><span>{show.rating}</span>
            </div> */}
            <span className='text-sm text-slate-100'>{show.title}</span>
        </div>
    )
}
