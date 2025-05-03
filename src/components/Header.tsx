import React, { useState } from 'react';
import '../App.css';
import { staticAsset } from '../libs';
import { PageType } from '../types';

export default function Header(
    {page, setPage, setLogged}: 
        {page: PageType, 
        setPage: React.Dispatch<React.SetStateAction<PageType>>,
        setLogged: React.Dispatch<React.SetStateAction<boolean>>}): React.JSX.Element {
    
    const [showAvatarMenu, setShowAvatarMenu] = useState(false);

    function AvatarMenu() {
        return (
            <div className={'avatar-menu'}>
                <button 
                    onClick={()=>setLogged(false)}
                    onKeyDown={(event)=>{event.key === 'Enter' && setLogged(false)} }>Logout</button>
            </div>
        )
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLImageElement>) => {
        if(event.key === 'Enter' || event.key === 'Space'){
            const target = event.target as HTMLButtonElement;
            setPage(target.dataset?.page as PageType);
        }
    }
    
    return (
        <header> 
            <nav> 
                <img src={staticAsset('/logo.svg')} alt='logo'/>
                <div className='nav-icons flex gap-6'>
                    <img src={staticAsset('/assets/icon-nav-home.svg')} alt='home icon'
                        className={`nav-icon ${page === 'Full' ? 'selected' : ''}`} 
                        data-page='Full'
                        onClick={()=>{setPage('Full')}}
                        onKeyDown={handleKeyDown} tabIndex={0}/>
                    <img src={staticAsset('/assets/icon-nav-movies.svg')} alt='movie icon' 
                        className={`nav-icon ${page === 'Movies' ? 'selected' : ''}`} 
                        data-page='Movies'
                        onClick={()=>{setPage('Movies')}}
                        onKeyDown={handleKeyDown} tabIndex={0}/>
                    <img src={staticAsset('/assets/icon-nav-tv-series.svg')} alt='TV series icon' 
                        className={`nav-icon ${page === 'TV series' ? 'selected' : ''}`} 
                        data-page='TV series'
                        onClick={()=>{setPage('TV series')}}
                        onKeyDown={handleKeyDown} tabIndex={0}/>
                    <img src={staticAsset('/assets/icon-nav-bookmark.svg')} alt='bookmark icon' 
                        className={`nav-icon ${page === 'Bookmarked' ? 'selected' : ''}`} 
                        data-page='Bookmarked'
                        onClick={()=>{setPage('Bookmarked')}}
                        onKeyDown={handleKeyDown} tabIndex={0}/>
                </div>
                <div className='avatar-container'
                        tabIndex={0}
                        onClick={()=>setShowAvatarMenu(prev=>!prev)}
                        onKeyDown={()=>setShowAvatarMenu(prev=>!prev)} >
                    <img src={staticAsset('/assets/image-avatar.png')} alt='user avatar image' />
                    {showAvatarMenu && <AvatarMenu />}
                </div>
            </nav>

        </header>
    );
}
