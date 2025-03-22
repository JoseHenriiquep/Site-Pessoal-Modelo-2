import React from "react";
import { Container } from "reactstrap";
import Button from "./Button";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";


function Contato() {

    const styles = {
        h1: {
            textAlign: "center",
            marginTop: "50px"
        },
        Container: {
            marginTop: "20px",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "30px"
        },
        icon: {
            color: "#fff"
        },
        Button: {
            height: "70px",
            width: "70px",
            borderRadius: "50%",
            border: "2px solid #fff",
            backgroundColor: "transparent"
        }
    }

    return(
        <>
            <h1 name="contato" style={styles.h1}>Contato</h1>
            <Container fluid className="d-flex justify-content-evenly" style={styles.Container}>
                <Button style={styles.Button} 
                    icon={<FaLinkedin size={30} style={styles.icon}/>}
                />
                <Button style={styles.Button} 
                    icon={<FaGithub size={30} style={styles.icon}/>}
                />
                <Button style={styles.Button}
                    icon={<FaInstagram size={30} style={styles.icon}/>}
                />
                <Button style={styles.Button} 
                    icon={<FaWhatsapp size={30} style={styles.icon}/>}
                /> 
            </Container>
        </>
    );
};

export default Contato;