import React from 'react'
import { Navbar as BsNavbar, Container } from 'react-bootstrap'

const Navbar = () => {
  return (
    <BsNavbar expand="lg" bg="dark" variant="dark" className="shadow-sm">
        <Container>
            <BsNavbar.Brand className="fw-bold">
                <i className="bi bi-shop me-2"></i>
                Sistema de Gestão
            </BsNavbar.Brand>

        </Container>
    </BsNavbar>
  )
}

export default Navbar