import React from 'react';

<img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Logo" />

export default function Header(): React.JSX.Element {

    function staticAsset(assetName: string): string {
        return `${import.meta.env.BASE_URL}${assetName}`
    }
    return (
        <header>
            <nav className='flex w-full'>
                <img src={staticAsset('/logo.svg')} alt='logo' />
                <img src={staticAsset('/assets/icon-nav-home.svg')} alt='home icon' className='ml-auto'/>
                <img src={staticAsset('/assets/icon-nav-movies.svg')} alt='movie icon' />
                <img src={staticAsset('/assets/icon-nav-tv-series.svg')} alt='TV series icon' />
                <img src={staticAsset('/assets/icon-nav-bookmark.svg')} alt='bookmark icon' />
            </nav>
            {/* <nav className='flex w-full'>
                <img src='/logo.svg' alt='logo' />
                <img src='/assets/icon-nav-home.svg' alt='home icon' className='ml-auto'/>
                <img src='/assets/icon-nav-movies.svg' alt='movie icon' />
                <img src='/assets/icon-nav-tv-series.svg' alt='TV series icon' />
                <img src='/assets/icon-nav-bookmark.svg' alt='bookmark icon' />
            </nav> */}

        </header>
    );
}
