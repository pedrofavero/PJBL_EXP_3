import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ListaCarros from './components/ListaCarros';
import FormCarro from './components/FormCarro';
import DetalhesCarro from './components/DetalhesCarro';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1 className="logo">Carros CRUD</h1>

          <strong>Pedro Henrique Valente Favero</strong>

          <nav className="nav">
            <Link to="/">Lista</Link>
            <Link to="/novo">Cadastrar</Link>
          </nav>
        </header>

        <main className="main">
          <Routes>
            <Route path="/" element={<ListaCarros />} />
            <Route path="/novo" element={<FormCarro />} />
            <Route path="/editar/:id" element={<FormCarro />} />
            <Route path="/detalhes/:id" element={<DetalhesCarro />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;