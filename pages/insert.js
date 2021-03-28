import { gql } from "@apollo/client";

import { Form, Col, Button } from "react-bootstrap";

import Content from "../components/Content";

import client from "../utils/apollo-client";

const Insert = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: e.target.title.value,
      content: e.target.content.value,
      userId: 1,
    };

    try {
      const response = await client.mutate({
        variables: {
          title: data.title,
          content: data.content,
          userId: data.userId,
        },
        mutation: gql`
          mutation insertPost($title: String, $content: String, $userId: Int) {
            addPost(title: $title, content: $content, userId: $userId) {
              title
              content
            }
          }
        `,
        errorPolicy: "all",
      });
    } catch (error) {
      // errorLink;
      console.log("error", error);
    }
  };

  return (
    <>
      <Content>
        <Col sm={12}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="postTitle">
              <Form.Label>Post Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Enter your post title"
              />
            </Form.Group>
            <Form.Group controlId="postContent">
              <Form.Label>Post Content</Form.Label>
              <Form.Control
                name="content"
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
