import { useState, useEffect, createContext } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home';
import Movies from './components/Movies';
import TVSeries from './components/TVSeries';
import Bookmarked from './components/Bookmarked';
import { staticAsset } from './libs';
import { ShowType, ShowContextType, PageType } from './types';
import SearchBox from './components/SearchBox';

const ShowContext = createContext<ShowContextType>({shows:[], setShows:()=>{}});
export {ShowContext}


function App() {
  const [shows, setShows] = useState<ShowType[]>([]);
  const [page, setPage] = useState<PageType>('Full');
  const [searchStr, setSearchStr] = useState<string>('');

  useEffect(()=>{
    fetch(staticAsset('/data.json'))
    .then(res => {                
        return res.json();
    })
    .then(data => {
        setShows(data);
        console.log(shows);
    })
    .catch(error => {
      console.error('Fetch Error:', error);
    })
    .finally(() => {
      console.log('done fetching the data.')
    });
  }, [])

  return (
    <>
      <ShowContext.Provider value={{shows, setShows}}>
        <Header page={page} setPage={setPage}/>
        <SearchBox setSearchStr={setSearchStr}/>
        {page === 'Full' && <Home shows={shows} searchStr={searchStr}/>}
        {page === 'Movies' && <Movies shows={shows} searchStr={searchStr}/>}
        {page === 'TV series' && <TVSeries shows={shows} searchStr={searchStr}/>}
        {page === 'Bookmarked' && <Bookmarked shows={shows} searchStr={searchStr}/>}
      </ShowContext.Provider>
    </>
  )
}

export default App
