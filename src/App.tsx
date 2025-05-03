import { useState, useEffect, createContext } from 'react'
import './App.css'
import { staticAsset } from './libs';
import { ShowType, ShowContextType } from './types';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const ShowContext = createContext<ShowContextType>({shows:[], setShows:()=>{}});
export {ShowContext}


function App() {
  const [shows, setShows] = useState<ShowType[]>([]);
  const [logged, setLogged] = useState<boolean>(true);
  const [needSignup, setNeedSignup] = useState<boolean>(false);

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
      {
        needSignup ?
          <SignUpPage setLogged={setLogged} setNeedSignup={setNeedSignup} />
          :
        !needSignup && !logged ? 
          <LoginPage setLogged={setLogged} setNeedSignup={setNeedSignup} />
          :
        !needSignup && logged && shows ? 
          <ShowContext.Provider value={{shows, setShows}}>
            <MainPage setLogged={setLogged}/>
          </ShowContext.Provider>
          : <h2>Loading...</h2>
      }
    </>
  )
}

export default App
