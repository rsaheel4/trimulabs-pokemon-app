import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useGetAllPokemons } from './apollo/queries';
import HomePage from './components/HomePage';
import PokemonDetail from './components/PokemonDetail';
import Loading from './components/Loading';

function App() {
  const {loading, data} = useGetAllPokemons()
  const [pokemons, setPokemons] = useState([])

  if(loading) return <Loading />

  return (
    <Router>
      <div className="App">
      <Routes>
          <Route exact path="/" element={<HomePage data={data} pokemons={pokemons} setPokemons={setPokemons}/>} />
          <Route exact path="/:key" element={<PokemonDetail />} />
          <Route path="*" element={<h1 className='error-page'>404 Page Not Found</h1>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
