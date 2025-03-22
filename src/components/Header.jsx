import React, { useState } from "react";
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, NavLink } from "reactstrap"
import { Link, animanteScroll as scroll } from "react-scroll"

const Header = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <>
            <Navbar expand="md"  className="navigation">
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem className="item">
                            <NavLink>
                                <Link to="sobre">Sobre Mim</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem className="item">
                            <NavLink>
                                <Link to="servicos">Serviços</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem className="item">
                            <NavLink>
                                <Link to="projetos">Projetos</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem className="item">
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