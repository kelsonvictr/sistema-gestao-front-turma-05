import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Button, Card, Col, Row } from 'react-bootstrap'
import { Link, useSearchParams } from 'react-router-dom'

const Fornecedores = () => {
  
    const [fornecedores, setFornecedores] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [mensagem, setMensagem] = useState("")



    useEffect(() => {
        carregarFornecedores()

        const msg = searchParams.get('msg')

        if (msg == "cadastrado") {
            setMensagem("Fornecedor cadastrado com sucesso!")
        } else if (msg === "editado") {
            setMensagem("Fornecedor atualizado com sucesso!")
        }

        if (msg) { 
            setSearchParams({})
        }

    }, [searchParams, setSearchParams])

    const carregarFornecedores = () => {
        axios.get("http://localhost:3000/fornecedores")
        .then(response => setFornecedores(response.data))
        .catch(error => console.error("Erro ao carregar fornecedores: ", error))
    }

    const excluirFornecedor = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este fornecedor?")) {
      axios.delete(`http://localhost:3000/fornecedores/${id}`)
        .then(() => {
          setMensagem("Fornecedor excluído com sucesso!")
          carregarFornecedores()
        })
        .catch(error => console.error("Erro ao excluir fornecedor: ", error))
    }
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

        {mensagem && (
        <Alert variant="success" dismissible onClose={() => setMensagem('')}>
          <i className="bi bi-check-circle me-2"></i>
          {mensagem}
        </Alert>
      )}

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
                                        as={Link}
                                        to={`/editar-fornecedor/${fornecedor.id}`}
                                    >
                                        <i className="bi bi-pencil me-1"></i>Editar
                                        </Button>
                                        <Button
                                            variant="outline-danger"
                                            size="sm"
                                            className="flex-grow-1"
                                            onClick={() => excluirFornecedor(fornecedor.id)}
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