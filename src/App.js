import './App.css';
import ShowcaseTop from './components/ShowcaseTop';
import MainSection from './components/MainSection';
import Characters from './components/Characters';
import Footer from './components/Footer';
import Player from './components/Player'
function App() {
  return (
    <div className="App">
    <ShowcaseTop />
    <MainSection />
    <Characters />
    <Player />
    <Footer />
    </div>
  );
}

export default App;
