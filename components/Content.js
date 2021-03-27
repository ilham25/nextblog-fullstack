import { Container, Row, Col } from "react-bootstrap";

const Content = ({ children }) => {
  return (
    <>
      <Container className="min-vh-100 mt-5">
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <Row>{children}</Row>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Content;
