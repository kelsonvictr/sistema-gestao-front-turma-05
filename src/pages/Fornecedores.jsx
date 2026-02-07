import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

const Fornecedores = () => {
  
    const [fornecedores, setFornecedores] = useState([])

    useEffect(() => {
        carregarFornecedores()
    }, [])

    const carregarFornecedores = () => {
        axios.get("http://localhost:3000/fornecedores")
        .then(response => setFornecedores(response.data))
        .catch(error => console.error("Erro ao carregar fornecedores: ", error))
    }

    return (
    <div>

        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0 text-white">
                <i className="bi bi-building me-2"></i>
                Fornecedores
            </h2>
            <Button variant="light">
                <i className="bi bi-plus-lg me-2"></i>
                Novo Fornecedor
            </Button>
        </div>

    </div>
  )
}

export default Fornecedores