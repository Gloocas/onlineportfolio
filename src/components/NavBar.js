import { useState, useEffect } from "react" 
import { Navbar, Container } from "react-bootstrap" 
import logo from src/logo.svg

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img src={''} alt="Logo"  />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon" />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Link</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Link</Nav.Link>
                    <Nav.Dropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <Navdropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated Action</NavDropdown.Item>
                    </Nav.Dropdown>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"><img src={logo} alt="" /></a>
                        <a href="#"><img src={logo} alt="" /></a>
                        <a href="#"><img src={logo} alt="" /></a>
                    </div>
                    <button className="vvd" onClick={() => console.log('connect')}> <span>Let's Connect</span></button>
                </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}