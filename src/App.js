import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Carousel from './Carousel';
import Aboutus from './Aboutus';
import Services from './Services';


function App() {
  return (
    <div className="App">
    <Header/>
    <Carousel/>
    <Aboutus/>
    <Services/>
    </div>
  );
}

export default App;
