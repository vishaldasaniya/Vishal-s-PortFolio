import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer =() => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon" id="footer-adjust">
                            <a href="https://www.linkedin.com/in/vishal-dasaniya"><img src={navIcon1} /></a>
                            <a href="https://www.facebook.com/vishal.dasaniya.9"><img src={navIcon2} /></a>
                            <a href="https://www.instagram.com/vishaldasaniya"><img src={navIcon3} /></a>
                        </div>
                        <p>CopyRight &copy; 2024. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}