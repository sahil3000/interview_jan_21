import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
const Header =()=>{
    return(
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home">React-Test</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <LinkContainer to='/'>
                    <Nav.Link >Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/fake_api'>
                    <Nav.Link >Fake Api with pagination</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/fake_api_scroll'>
                    <Nav.Link >Fake Api with scroll</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/parent_child'>
                    <Nav.Link >Parent Child CallBack</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/todo'>
                    <Nav.Link >To Do App</Nav.Link>
                </LinkContainer>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}
export default Header;