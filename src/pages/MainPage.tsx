
import React, { useState, useContext } from "react"
import Header from '../components/Header'
import Home from '../components/Home';
import Movies from '../components/Movies';
import TVSeries from '../components/TVSeries';
import Bookmarked from '../components/Bookmarked';
import SearchBox from '../components/SearchBox';
import { PageType, ShowContextType } from "../types";
import { ShowContext } from "../App";

export default function MainPage({setLogged}:
  {setLogged: React.Dispatch<React.SetStateAction<boolean>>}): React.JSX.Element {
    const { shows }=useContext<ShowContextType>(ShowContext);

    const [page, setPage] = useState<PageType>('Full');
    const [searchStr, setSearchStr] = useState<string>('');

    return (
        <div className='main-page'>
          <Header page={page} setPage={setPage} setLogged={setLogged}/>
          <div className='main-container'>
            <SearchBox setSearchStr={setSearchStr} page={page}/>
            {page === 'Full' && <Home shows={shows} searchStr={searchStr}/>}
            {page === 'Movies' && <Movies shows={shows} searchStr={searchStr}/>}
            {page === 'TV series' && <TVSeries shows={shows} searchStr={searchStr}/>}
            {page === 'Bookmarked' && <Bookmarked shows={shows} searchStr={searchStr}/>}
          </div>
        </div>
    )
}