import { Container, Navbar } from "react-bootstrap"

const Footer=()=>{
    return <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <h5 className="text-center text-white mx-auto">React Test @2022</h5>
        </Container>
    </Navbar>
}
export default Footer;