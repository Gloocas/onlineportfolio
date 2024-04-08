import { useState, useEffect } from 'react'; 
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import logo from "./logo.svg";



export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const textRotation = [ "manic", "is a", "bitch"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker)};
    }, [text]);


    const tick = () => {
        let curWord = loopNum % textRotation.length;
        let fullText = textRotation[curWord];

        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
      
        setText(updatedText);
        
        if (isDeleting)  {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }  
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(250);
        }
    }

 
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} className="leftText">
                        <span className="tagline">DUMMIFIED DIMMSDALE DIMMA DUMMY</span>
                        <h1>test</h1> <span className="wrap">{text}</span>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={logo} alt="header img"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}