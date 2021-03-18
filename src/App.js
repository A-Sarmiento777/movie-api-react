import Header from './components/Header';
import Footer from './components/Footer';
import MovieAPI from './components/MovieAPI';

import './App.css';


//Api adress----- http://www.omdbapi.com/?apikey=ee2bebbc&s=star%20trek
function App() {
  return (
    <div className="App">
     <Header />
     
           <hr/>


     <MovieAPI /> 

            <hr/>

      <Footer />
      
    </div>
  );
}

export default App;
