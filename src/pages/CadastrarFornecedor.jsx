import React from 'react'
import { Card, Form, Row, Col } from 'react-bootstrap'
import { useState } from 'react'

const CadastrarFornecedor = () => {

    const [nome, setNome] = useState("")

  return (
    <div>
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0 text-white">
                <i className="bi bi-building me-2"></i>
                Novo Fornecedor
            </h2>
        </div>
        
        <Card className="shadow-sm border-0">
            <Card.Body className="p-4">
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                />

                            </Form.Group>
                        </Col>
                        <Col md={6}>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
        
    </div>
  )
}

export default CadastrarFornecedor