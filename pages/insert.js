import { useRouter } from "next/router";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

import { Form, Col, Button } from "react-bootstrap";

import Content from "../components/Content";

import client from "../utils/apollo-client";

const Insert = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const { title, content } = form;

  const INSERT_POST = gql`
    mutation($title: String, $content: String, $userId: Int) {
      addPost(title: $title, content: $content, userId: $userId) {
        title
        content
      }
    }
  `;

  const [insertPost] = useMutation(INSERT_POST);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ title, content, userId: 2 });

    insertPost({ variables: { title, content, userId: 2 } });
    router.push("/");
  };

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
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
                value={title}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="postContent">
              <Form.Label>Post Content</Form.Label>
              <Form.Control
                name="content"
                as="textarea"
                style={{ resize: "none", minHeight: "195px" }}
                rows={3}
                value={content}
                onChange={(e) => onChange(e)}
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
