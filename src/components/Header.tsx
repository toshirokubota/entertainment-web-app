import React from 'react';
import '../App.css';
import { staticAsset } from '../libs';
import { PageType } from '../types';

export default function Header(
    {page, setPage}: {page: PageType, setPage: React.Dispatch<React.SetStateAction<PageType>>}): React.JSX.Element {

    return (
        <header> {/* className='flex items-center h-8 px-4 bg-slate-900'> */}
            <nav> {/* <nav className='flex justify-between w-full h-4'> */}
                <img src={staticAsset('/logo.svg')} alt='logo'/>
                <div className='nav-icons flex gap-6'>
                    <img src={staticAsset('/assets/icon-nav-home.svg')} alt='home icon'
                        className={`nav-icon ${page === 'Full' ? 'selected' : ''}`} 
                        onClick={()=>{setPage('Full')}}/>
                    <img src={staticAsset('/assets/icon-nav-movies.svg')} alt='movie icon' 
                        className={`nav-icon ${page === 'Movies' ? 'selected' : ''}`} 
                        onClick={()=>{setPage('Movies')}}/>
                    <img src={staticAsset('/assets/icon-nav-tv-series.svg')} alt='TV series icon' 
                        className={`nav-icon ${page === 'TV series' ? 'selected' : ''}`} 
                        onClick={()=>{setPage('TV series')}}/>
                    <img src={staticAsset('/assets/icon-nav-bookmark.svg')} alt='bookmark icon' 
                        className={`nav-icon ${page === 'Bookmarked' ? 'selected' : ''}`} 
                        onClick={()=>{setPage('Bookmarked')}}/>
                </div>
                <img src={staticAsset('/assets/image-avatar.png')} alt='user avatar image' />
            </nav>

        </header>
    );
}
