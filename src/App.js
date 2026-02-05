import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import imagen from './imagen.jpeg';

function Documentacion() {
  const descargarPDF = (nombreArchivo) => {
    // Apuntamos a la carpeta que creaste en public/pdfs
    const url = `${window.location.origin}/pdfs/${nombreArchivo}`;
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', nombreArchivo);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  return (
    <div className="App-header">
      <div className="download-card">
        <h1 className="card-title">Centro de Descargas</h1>
        <p className="card-subtitle">Haz clic en los botones para obtener tus archivos PDF.</p>
        
        <div className="button-group">
          <button className="btn btn-blue" onClick={() => descargarPDF('comandos.pdf')}>
            COMANDOS BÁSICOS DE REACT
          </button>
          
          <button className="btn btn-green" onClick={() => descargarPDF('ieee.pdf')}>
            ISO / ESTANDAR IEEE
          </button>
          
          <button className="btn btn-dark" onClick={() => descargarPDF('requerimientos.pdf')}>
            REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES
          </button>
          
          <button className="btn btn-dark" onClick={() => descargarPDF('sha_256.pdf')}>
            CÓDIGO PYTHON ALGORITMO SHA-256
          </button>
          
          <Link to="/" className="btn btn-back">
            REGRESAR AL PROYECTO PRINCIPAL
          </Link>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <header className="App-header">
      <img src={imagen} className="App-logo-atomo" alt="Jose Antonio" />
      <h1 className="main-title">Evaluación Parcial 1</h1>
      <h2 className="sub-title">Alumno: Jose Antonio Guevara Damas</h2>
      
      <div className="links-container">
        <a 
          className="App-link" 
          href="https://www.linkedin.com/in/guevara-damas-antonio-716a42396/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LINKEDIN DE MI PERFIL
        </a>
        <br />
        <Link className="App-link" to="/documentacion">
          Documentación Parcial 1
        </Link>
      </div>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentacion" element={<Documentacion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;