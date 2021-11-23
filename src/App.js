import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Books from './pages/Books/Books';
import Header from './pages/Shared/Header/Header';
AOS.init();

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Books></Books>
    </div>
  );
}

export default App;
