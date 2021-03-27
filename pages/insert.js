import { Form, Col, Button } from "react-bootstrap";

import Content from "../components/Content";

const Insert = () => {
  return (
    <>
      <Content>
        <Col sm={12}>
          <Form>
            <Form.Group controlId="postTitle">
              <Form.Label>Post Title</Form.Label>
              <Form.Control type="text" placeholder="Enter your post title" />
            </Form.Group>
            <Form.Group controlId="postContent">
              <Form.Label>Post Content</Form.Label>
              <Form.Control
                as="textarea"
                style={{ resize: "none", minHeight: "195px" }}
                rows={3}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Content>
    </>
  );
};

export default Insert;
