import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './components/Movies';
import React, { useState, useEffect} from 'react';
import Spinner from 'react-bootstrap/Spinner';

function App() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      async function getMovies() {
        let res = await fetch("https://swapi.py4e.com/api/films/");
        let data = await res.json();
        setMovies(data.results);
        setLoading(false)
      }
      getMovies();
    }, 3000)
  }, [])

  return (
    <>
    <div className='wrapper'>
      

  <div>
      {loading && (<Spinner animation="border" variant="danger" />)}
      {movies.map((movie) => (
        <Movies key={movie.id} movie={movie} />
      ))}
      </div>
    </div>
    </>
  );
}

export default App;