import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
    return (
        <footer className="site-footer" id="contact">
            <Container>
                <Row>
                    <Col md={3}>
                        <strong>Student Name</strong>
                        <span>Pham Minh Hai</span>
                    </Col>
                    <Col md={3}>
                        <strong>Student ID</strong>
                        <span>HE200055</span>
                    </Col>
                    <Col md={3}>
                        <strong>Class Name</strong>
                        <span>FER</span>
                    </Col>
                    <Col md={3}>
                        <strong>Email</strong>
                        <span>haiphamminh2k6@gmail.com</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
