import React, {useContext} from 'react'
import { ShowContextType, ShowType } from '../types';
import { staticAsset } from '../libs';
import { ShowContext } from '../App';

export default function BookmarkIcon({show}: {show: ShowType}) : React.JSX.Element{
    const {shows, setShows}=useContext<ShowContextType>(ShowContext);

    const toggleBookmark = () => {
        const index = shows.indexOf(show);
        setShows([...shows.slice(0, index), {...show, isBookmarked: !show.isBookmarked}, ...shows.slice(index + 1)]);
    }
    return (
        <div className='bm-icon-container' onClick={toggleBookmark}>
            <img className='bm-icon'
                src={show.isBookmarked ? staticAsset('/assets/icon-bookmark-full.svg'): staticAsset('/assets/icon-bookmark-empty.svg')}
                alt='bookmark icon'/>
        </div>
    );
}