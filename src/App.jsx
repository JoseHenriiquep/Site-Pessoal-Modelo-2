import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
//import Components
import Header from './components/Header'
import Servicos from './components/Servicos'
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Sobre from './components/Sobre';

function App() {

  return (
    <>
      <Header/>
      <Container fluid className='d-flex flex-column' style={{padding: "0", backgroundColor: "#b86dff"}}>
        <Sobre/>
        <Servicos/>
        <Projetos/>
        <Contato/>
      </Container>
    </>
  )
}

export default App
