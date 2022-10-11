import {Link} from 'react-router-dom'
import {Container, Navbar, Nav} from 'react-bootstrap'
import './navbar.css'
import {useContext} from 'react'
import Context from '../../context'



const Header = () => {
    const {lightMode} = useContext(Context)
    return ( 
        <>
            <header>
                <Navbar collapseOnSelect 
                bg={
                    localStorage.getItem('theme') === 'dark' ? 'dark' : localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
                } 
                variant={
                    localStorage.getItem('theme') === 'dark' ? 
                    'dark' : localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
                } 
                expand='lg'>
                    <Container>
                        <Navbar.Brand href="#home"><span className='kings'>Kings</span>Code</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            {/* <Nav className="me-auto">
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav> */}
                            <Nav className='ml-auto'>
                                    <Nav.Link href = '#projects'>Projects</Nav.Link>
                                <Nav.Link href="#memes">
                                    Contact
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
     );
}
 
export default Header;