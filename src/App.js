
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PageNotFound from './pages/404/PageNotFound';
import Home from './pages/home/Home';
import Details from './pages/details/Details';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Details />}></Route>
        {/* <Route path="/search/:query" element={<SearchResult />}></Route>
        <Route path="/explore/:mediaType" element={<Explore />}></Route> */}
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
