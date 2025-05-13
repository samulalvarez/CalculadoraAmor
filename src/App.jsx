import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Calculadora from './Calculadora';
import Resultado from './Resultado';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calculadora />} />
        <Route path="/resultado" element={<Resultado />} />
      </Routes>
    </Router>
  );
}

export default App;
