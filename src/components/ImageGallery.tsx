import React from 'react'
//import { staticAsset } from '../libs'
import { ShowType } from '../types'
import ShowCard from './ShowCard'

export default function ImageGallery ({shows}: {shows: ShowType[]}): React.JSX.Element {

    return (
        <div className='image-grid'>
            {
                shows.map(show => <ShowCard show={show}/>)
            }
        </div>
    )
}
