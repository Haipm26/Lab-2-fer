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
            <span>Update your student ID</span>
          </Col>
          <Col md={3}>
            <strong>Class Name</strong>
            <span>FER Lab</span>
          </Col>
          <Col md={3}>
            <strong>Email</strong>
            <span>student@example.com</span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
