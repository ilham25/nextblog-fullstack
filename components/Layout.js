import Link from "next/link";

import { Navbar, NavDropdown, Row, Col, Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar>
        <Container>
          <Link href="/">
            <a>
              <Navbar.Brand>Next Blog</Navbar.Brand>
            </a>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown title="Ilham Adiputra" id="basic-nav-dropdown">
              <Link href="/insert">
                <NavDropdown.Item as="a" href="/insert">
                  Insert Post
                </NavDropdown.Item>
              </Link>

              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {children}
      <footer className="py-3">
        <Row>
          <Col sm={12} className="text-center">
            <p className="text-secondary">Copyright | Ilham Adiputra | 2021</p>
          </Col>
        </Row>
      </footer>
    </>
  );
};

export default Layout;
