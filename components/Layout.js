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
            {/* <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text> */}
            <NavDropdown title="Ilham Adiputra" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link href="/insert">
                  <a>Insert post</a>
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {children}
      <footer className="py-3">
        <Row>
          <Col sm={12} className="text-center">
            <p>
              <p className="text-secondary">
                Copyright | Ilham Adiputra | 2021
              </p>
            </p>
          </Col>
        </Row>
      </footer>
    </>
  );
};

export default Layout;
