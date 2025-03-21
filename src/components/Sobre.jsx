import React from "react"
import foto from '../assets/img/foto-homem.jpg'
import { Container, Row, Col, Button } from "reactstrap";

const Sobre = () => {
    return(
        <>
            <Container fluid style={{marginTop: '20px'}} name="sobre">
                <Row className="d-flex justify-content-evenly align-items-center" >
                    <Col>
                        <h1>Olá, me chamo Henrique</h1>
                        <h2>Desenvolvedor Full Stack</h2>
                        <Button id="btn">Entre em contato</Button>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <img src={foto} alt="" className="image"/> 
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Sobre;