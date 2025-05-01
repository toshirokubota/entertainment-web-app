import React from 'react'
import { staticAsset } from '../libs'

export default function PlayButton(): React.JSX.Element {

    return (
        <button className='play-button'>
            <img src={staticAsset('/assets/icon-play.svg')} alt='play button' /><span>Play</span>
        </button>
    )
}
