import React from 'react'
import { Navbar as BsNavbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <BsNavbar expand="lg" bg="dark" variant="dark" className="shadow-sm">
            <Container>
                <BsNavbar.Brand className="fw-bold">
                    <i className="bi bi-shop me-2"></i>
                    Sistema de Gestão
                </BsNavbar.Brand>
                <BsNavbar.Toggle aria-controls="navbarNav" />
                <BsNavbar.Collapse id="navbarNav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">
                            <i className="bi bi-house-door me-1"></i>
                            Início
                        </Nav.Link>
                        <Nav.Link as={Link} to="/fornecedores">
                            <i className="bi bi-building me-1"></i>
                            Fornecedores
                        </Nav.Link>
                        <Nav.Link as={Link} to="/produtos">
                            <i className="bi bi-box-seam me-1"></i>
                            Produtos
                        </Nav.Link>
                        <Nav.Link as={Link} to="/clientes">
                            <i className="bi bi-people me-1"></i>
                            Clientes
                        </Nav.Link>

                    </Nav>
                </BsNavbar.Collapse>

            </Container>
        </BsNavbar>
    )
}

export default Navbar