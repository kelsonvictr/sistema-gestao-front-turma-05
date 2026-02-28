import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicial from './pages/Inicial'
import Fornecedores from './pages/Fornecedores'
import CadastrarFornecedor from './pages/CadastrarFornecedor'
import Navbar from './components/Navbar'
import EditarFornecedor from './pages/EditarFornecedor'


const App = () => {
  return (
    <BrowserRouter>
    <div style={{ minHeight: '100vh', backgroundColor: 'transparent' }}>
      <Navbar />
      <div className="container py-4">
        <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/fornecedores" element={<Fornecedores />} />
        <Route path="/cadastrar-fornecedor" element={<CadastrarFornecedor />} />
        <Route path="/editar-fornecedor/:id" element={<EditarFornecedor />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App