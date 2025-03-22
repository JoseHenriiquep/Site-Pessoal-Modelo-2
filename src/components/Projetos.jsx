import React from "react";
import { Container} from "reactstrap";
import Card from "./CardProjetos";

function Projetos() {

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
                height: "300px",
                width: "350px",
            }
        };

    return(
        <>
            <h1 name="projetos" style={styles.h1}>Meus Projetos</h1>
            <Container fluid className="d-flex justify-content-evenly" style={styles.Container} >
                <Card style={styles.Card}
                    title="Título do projeto" 
                    text="Descrição" 
                    src="https://static.vecteezy.com/ti/vetor-gratis/p3/6852817-linhas-degrade-coloridas-abstratas-com-luz-azul-e-rosa-em-fundo-roxo-gratis-vetor.jpg" alt="Imagem do projeto"
                />
                <Card style={styles.Card}
                    title="Título do projeto" 
                    text="Descrição" 
                    src="https://static.vecteezy.com/ti/vetor-gratis/p3/6852817-linhas-degrade-coloridas-abstratas-com-luz-azul-e-rosa-em-fundo-roxo-gratis-vetor.jpg" alt="Imagem do projeto"
                />
                <Card style={styles.Card}
                    title="Título do projeto" 
                    text="Descrição" 
                    src="https://static.vecteezy.com/ti/vetor-gratis/p3/6852817-linhas-degrade-coloridas-abstratas-com-luz-azul-e-rosa-em-fundo-roxo-gratis-vetor.jpg" alt="Imagem do projeto"
                />
            </Container>
        </>
    );
};

export default Projetos;