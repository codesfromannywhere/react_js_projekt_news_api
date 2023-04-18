import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NewsDetails from './components/NewsDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:details' element={<NewsDetails />} />
      </Routes>

    </div>
  );
}

export default App;
