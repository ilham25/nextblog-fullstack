import Link from "next/link";
import { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

import { Button, Row, Col, Container, Card } from "react-bootstrap";
import Content from "../components/Content";

export default function Home() {
  const GET_POSTS_DATA = gql`
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
  `;
  const { loading, error, data, refetch } = useQuery(GET_POSTS_DATA, {
    pollInterval: 500,
  });

  const DELETE_POST = gql`
    mutation($id: Int) {
      deletePost(id: $id)
    }
  `;

  const [deletePost] = useMutation(DELETE_POST);

  const handleDelete = async (id) => {
    deletePost({ variables: { id } });
    refetch();
  };

  return (
    <>
      <Content>
        {loading ? (
          <h1>loading...</h1>
        ) : (
          data?.getAllPosts.map((post, index) => (
            <Col sm={12} key={index} className="mb-4">
              <Card>
                <Card.Header>User : {post.userPost.fullName}</Card.Header>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text className="text-nowrap overflow-hidden text-truncate text-secondary">
                    {post.content}
                  </Card.Text>
                  <Link href={"/post/" + post.id}>
                    <Button variant="primary">Read More</Button>
                  </Link>
                  <Button
                    onClick={() => handleDelete(post.id)}
                    className="ml-2"
                    variant="danger"
                  >
                    Delete
                  </Button>
                  <Link href={"/edit/" + post.id}>
                    <Button className="ml-2" variant="success">
                      Edit
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Content>
    </>
  );
}
