import { useState, useEffect } from 'react'; 
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from "../images/logo.svg"
import NavLink from 'react-bootstrap/esm/NavLink';
import handshake from "../images/handshake.png"
import twitch from "../images/twitch.png"
import twitter from "../images/twitter.png"





function navBarAnim(scrollDirection) {
    console.log(scrollDirection)
    let NavVar = document.getElementById("navClass");
    let upAnim  = [
        { transform: "translateY(0px)" }
    ]
    let downAnim = [
        { transform: "translateY(-150px)"  }
    ];
    let animTiming = {
        duration: 1000,
        iterations: 1,
        easing: "ease-in-out",
        fill: "forwards"
    };
    if (scrollDirection === -1) {
        NavVar.animate(upAnim, animTiming);
        
    }
    if (scrollDirection === 1) {
        NavVar.animate(downAnim, animTiming);
        
    }
    
}

var scrollDirection = null;
var oldDirection = null;
var oldScrollY = window.scrollY;

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

        window.addEventListener("scroll", (onScroll) => {
            oldDirection = scrollDirection;
            console.log(oldDirection + " old");
            console.log(scrollDirection + " new");
            if (oldScrollY < window.scrollY) { scrollDirection = 1; }
            else if (oldScrollY > window.scrollY) { scrollDirection = -1; }
            oldScrollY = window.scrollY;

            if (oldDirection !== scrollDirection) {
                navBarAnim(scrollDirection) 
            }
        });

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
    
    <div>
        <Navbar id="navClass">
            <Container>
               <Nav className="Links">

               <NavLink href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</NavLink>

                <NavLink href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</NavLink>

                <NavLink href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</NavLink>

                </Nav> 
                <span className="title">Under Construction</span>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://virginia.joinhandshake.com/stu/users/41839122"><img src={handshake} alt="" /></a>

                        <a href="https://twitch.tv/MajorGluke"><img src={twitch} alt="" /></a>

                        <a href="https://twitter.com/Gloocas"><img src={twitter} alt="" /></a>
                    </div>
                    <button className="vvd" onClick={() => window.open('mailto:lukiewebb@hotmail.com')}> <span>Contact</span></button>
                </span>
            </Container>
        </Navbar>
    </div>
    );
    
}

