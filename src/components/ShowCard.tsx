import React from 'react';
import { ShowType } from '../types';
import { staticAsset } from '../libs';
import BookmarkIcon from './BookmarkIcon';
import PlayButton from './PlayButton';

export function categoryIcon(show: ShowType): React.JSX.Element {
    if(show.category == 'Movie') {
        return (
            <>
            <img src={staticAsset('/assets/icon-nav-movies.svg')} alt='movie icon' className='category-icon inline'/>
            </>
        )
    } else {
        return (
            <>
            <img src={staticAsset('/assets/icon-nav-tv-series.svg')} alt='tv series icon' className='category-icon inline'/>
            </>
        )

    }
}

export function ShowSummary({show}: {show: ShowType}): React.JSX.Element {
    return (
        <div className='show-summary text-white opacity-75'>
            <span>{show.year}</span>
            <span> • </span>{categoryIcon(show)}<span>{show.category}</span>
            <span> • </span><span>{show.rating}</span>
        </div>
    )
}

export default function ShowCard({show}: {show: ShowType}): React.JSX.Element {
    return (
        <div className='show-card'>
            <div tabIndex={0} className='playable-image'>
                <picture>
                    <source srcSet={staticAsset(show.thumbnail.regular.large.slice(1))} media="(min-width: 1000px)" />
                    <source srcSet={staticAsset(show.thumbnail.regular.medium.slice(1))} media="(min-width: 700px)" />
                    <img key={show.title} src={staticAsset(show.thumbnail.regular.small.slice(1))} alt={show.title} 
                        className='rounded-md'/>
                </picture>
                <div className='overlay'></div>
                <PlayButton />
            </div>
            <BookmarkIcon show={show} />
            {/* <img src={show.isBookmarked ? staticAsset('/assets/icon-bookmark-full.svg'): staticAsset('/assets/icon-bookmark-empty.svg')}
                alt='bookmark icon' className='bookmark-icon'/> */}
            <ShowSummary show={show} />
            {/* <div className='show-summary text-xs text-slate-100'>
                <span>{show.year}</span>
                <span> • </span><span>{categoryIcon(show)}</span>
                <span> • </span><span>{show.rating}</span>
            </div> */}
            <span className='show-title text-slate-100'>{show.title}</span>
        </div>
    )
}
