import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
            <Button variant="light" as={Link} to="/cadastrar-fornecedor">
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
                                <p className="mb-2">
                                    <small className="text-muted d-block">
                                        CNPJ
                                    </small>
                                    {fornecedor.cnpj}
                                </p>
                                <p className="mb-2">
                                    <small className="text-muted d-block">
                                        <i className="bi bi-envelope me-2"></i>
                                        Email
                                    </small>
                                    {fornecedor.email}
                                </p>
                                <p className="mb-2">
                                    <small className="text-muted d-block">
                                         <i className="bi bi-telephone me-2"></i>
                                        Telefone
                                    </small>
                                    {fornecedor.telefone}
                                </p>
                                <p className="mb-2">
                                    <small className="text-muted d-block">
                                        <i className="bi bi-geo-alt me-2"></i>
                                        Localização
                                    </small>
                                    {fornecedor.cidade}/{fornecedor.uf}
                                </p>
                            </Card.Body>
                            <Card.Footer className="bg-white border-0">
                                <div className="d-flex gap-2">
                                    <Button
                                        variant="outline-secondary"
                                        size="sm"
                                        className="flex-grow-1"
                                    >
                                        <i className="bi bi-pencil me-1"></i>Editar
                                        </Button>
                                        <Button
                                            variant="outline-danger"
                                            size="sm"
                                            className="flex-grow-1"
                                        >
                                            <i className="bi bi-trash me-1">
                                            </i>
                                            Excluir
                                        </Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))
            }
        </Row>



    </div>
  )
}

export default Fornecedores