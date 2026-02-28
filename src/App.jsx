import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicial from './pages/Inicial'
import Fornecedores from './pages/Fornecedores'
import CadastrarFornecedor from './pages/CadastrarFornecedor'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/fornecedores" element={<Fornecedores />} />
        <Route path="/cadastrar-fornecedor" element={<CadastrarFornecedor />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App