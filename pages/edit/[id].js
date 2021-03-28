import { useRouter } from "next/router";
import { useState } from "react";
import { gql } from "@apollo/client";

import { Form, Col, Button } from "react-bootstrap";

import Content from "../../components/Content";

import client from "../../utils/apollo-client";

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        getAllPosts {
          id
          title
          content
          userPost {
            fullName
          }
        }
      }
    `,
  });
  const paths = data.getAllPosts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = parseInt(context.params.id);

  const response = await client.mutate({
    variables: { id },
    mutation: gql`
      mutation readPost($id: Int) {
        getPostById(id: $id) {
          id
          title
          content
          userPost {
            fullName
          }
        }
      }
    `,
  });
  return {
    props: {
      post: response.data.getPostById,
    },
  };
};

const Edit = ({ post }) => {
  const router = useRouter();
  const [form, setForm] = useState({
    title: post.title,
    content: post.content,
  });

  const { title, content } = form;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      content,
    };

    try {
      const response = await client.mutate({
        variables: {
          id: post.id,
          title: data.title,
          content: data.content,
        },
        mutation: gql`
          mutation editPost($id: Int, $title: String, $content: String) {
            updatePost(id: $id, title: $title, content: $content) {
              title
              content
            }
          }
        `,
        errorPolicy: "all",
      });
      console.log(response);
      response.data && router.push("/");
    } catch (error) {
      // errorLink;
      console.log("error", error);
    }
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
            <Button variant="success" type="submit">
              Edit Post
            </Button>
          </Form>
        </Col>
      </Content>
    </>
  );
};

export default Edit;
