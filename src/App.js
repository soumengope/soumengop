import './App.css';
import Header from './Components/js/Header';
import Navigation from './Components/js/Navigation';
import Footer from './Components/js/Footer';
import Homepage from './Homepage';
import Projects from './Projects';
import Experience from './Experience';
import Cv from './Cv';
import Contacts from './Contacts';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
