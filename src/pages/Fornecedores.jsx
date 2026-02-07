import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

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

        <Row className="g-4">
            {
                fornecedores.map(fornecedor => (
                    <Col md={6} lg={4} key={fornecedor.id}>
                        <Card className="h-100 shadow-sm  border-0">
                            <Card.Body>
                                <Card.Title>
                                    <i className="bi bi-building text-primary me-2"></i>
                                    {fornecedor.nome}
                                </Card.Title>
                                <p>
                                    
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row>



    </div>
  )
}

export default Fornecedores