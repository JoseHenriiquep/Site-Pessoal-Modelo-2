import React, { useState } from "react";
import { Nav, Navbar, NavbarToggler, Collapse, NavbarBrand, NavItem, NavLink } from "reactstrap"
import { Link, animanteScroll as scroll } from "react-scroll"

const Header = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <>
            <Navbar expand="md" className="navigation">
                <NavbarBrand>
                    <h3> Desenvolvedor de Sistemas</h3>
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink>
                                <Link to="sobre">Sobre Mim</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="servicos">Serviços</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="projetos">Projetos</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="contato">Contato</Link> 
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
};

export default Header;