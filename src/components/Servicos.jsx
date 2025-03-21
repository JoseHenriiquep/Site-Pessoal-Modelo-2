import React, { useState } from "react";
import Card from "./CardServicos";
import { Container } from "reactstrap";
import { FaCode, FaMobileScreenButton, FaDesktop } from "react-icons/fa6";

function Servicos() {

    const styles = {
        h1: {
            textAlign: "center",
            marginTop: "100px"
        },
        Container: {
            marginTop: "20px",
            gap: "20px",
            flexWrap: "wrap"
        },
        Card: {
            backgroundColor: "transparent",
            border: "3px solid #fff",
            color: "#fff",
            height: "200px",
            width: "350px",
        },
        icon: {
            fontSize: "1.5rem",
            marginBottom: "10px"
        }
    };

    return(
        <>
            <h1 name="servicos" style={styles.h1}>Serviços oferecidos</h1>
            <Container fluid className="d-flex justify-content-evenly" style={styles.Container} >
                <Card style={styles.Card}
                    title="Criação de Web Sites" 
                    text="Web sites pessoais e empresariais" 
                    icon={<FaCode style={styles.icon}/>}
                />
                <Card style={styles.Card}
                    title="Layouts responsivos e dinâmicos" 
                    text="Acesso em qualquer lugar" 
                    icon={<FaMobileScreenButton style={styles.icon}/>}
                />
                <Card style={styles.Card}
                    title="UX/UI Design" 
                    text="Criação de design para sua marca" 
                    icon={<FaDesktop style={styles.icon}/>}
                />
            </Container>
        </>
    );
};

export default Servicos;