import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home'; // Ensure correct naming and uppercase for component name
import Padre from './components/padre';
import { Pruebas } from './components/Pruebas';
import { Suma } from './components/Suma';
import { CronómetroPage } from './components/cronómetro';
import { ClientePage } from './components/cliente';

function App() {
  return (
    <div className="Aplicacion">
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="padre" element={<Padre />} />
          <Route path="prueba" element={<Pruebas />} />
          <Route path="suma" element={<Suma />} />
          <Route path="con" element={<CronómetroPage />} />
          <Route path="cliente" element={<ClientePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;