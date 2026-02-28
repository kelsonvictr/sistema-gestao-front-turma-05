import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const EditarFornecedor = () => {
    
    // receber o id que vem da url para editar
    const { id } = useParams()

    const [nome, setNome] = useState("")
    const [cnpj, setCnpj] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState('')
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')

    // antes precisamos PEGAR (get) o fornecedor que vai ser editado

    useEffect(() => {
        axios.get(`http://localhost:3000/fornecedores/${id}`)
        .then(response => {
            setNome(response.data.nome)
            setCnpj(response.data.cnpj)
            setEmail(response.data.email)
            setTelefone(response.data.telefone)
            setCep(response.data.cep)
            setLogradouro(response.data.logradouro)
            setNumero(response.data.numero)
            setBairro(response.data.bairro)
            setCidade(response.data.cidade)
            setUf(response.data.uf)
        })
    }, [id])


  return (
    <div>
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0 text-white">
                <i className="bi bi-building me-2"></i>
                Editar Fornecedor
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
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>CNPJ</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={cnpj}
                                    onChange={(e) => setCnpj(e.target.value)}
                                    required
                                />
                        </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                        </Form.Group>
                        </Col>
                        <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Telefone</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
                                    required
                                />
                        </Form.Group>
                        </Col>
                    </Row>

                    <hr className="my-4" />
                    <h5 className="mb-3">Endereço</h5>

                    <Row>
                        <Col md={3}>
                            <Form.Group className="mb-3">
                            <Form.Label>CEP</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={cep}
                                    onChange={(e) => setCep(e.target.value)}
                                    placeholder="Apenas números"
                                    onBlur={buscarCep}
                                    
                                />
                        </Form.Group>
                        </Col>
                        <Col md={7}>

                            <Form.Group className="mb-3">
                            <Form.Label>Logradouro</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={logradouro}
                                    onChange={(e) => setLogradouro(e.target.value)}
                                    
                                />
                        </Form.Group>

                        </Col>
                        <Col md={2}>

                        <Form.Group className="mb-3">
                            <Form.Label>Número</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={numero}
                                    onChange={(e) => setNumero(e.target.value)}
                                    
                                />
                        </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Bairro</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={bairro}
                                    onChange={(e) => setBairro(e.target.value)}
                                    
                                />
                        </Form.Group>
                        </Col>
                        <Col md={6}>

                            <Form.Group className="mb-3">
                            <Form.Label>Cidade</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={cidade}
                                    onChange={(e) => setCidade(e.target.value)}
                                    
                                />
                        </Form.Group>

                        </Col>
                        <Col md={2}>

                            <Form.Group className="mb-3">
                            <Form.Label>UF</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={uf}
                                    onChange={(e) => setUf(e.target.value)}
                                    
                                />
                        </Form.Group>

                        </Col>

                    </Row>

                    <div className="d-flex gap-2 mt-4">
                        <Button type="submit" variant="dark">
                            <i className="bi bi-check-lg me-2"></i>
                            Atualizar
                        </Button>
                        <Button variant="outline-secondary" onClick={() => navigate("/fornecedores")}>
                            <i className="bi bi-x-lg me-2"></i>
                            Cancelar
                        </Button>
                    </div>

                </Form>
            </Card.Body>
        </Card>
        
    </div>
  )
}

export default EditarFornecedor