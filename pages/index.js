import Link from "next/link";
import { useState } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

import { Button, Row, Col, Container, Card } from "react-bootstrap";
import Content from "../components/Content";

import { gql } from "@apollo/client";
// import client from "../utils/apollo-client";

export default function Home({ results }) {
  const initialState = results;

  const [posts, setPosts] = useState(initialState);

  const handleDelete = async (id) => {
    try {
      const client = new ApolloClient({
        uri: "http://localhost:4000/",
        cache: new InMemoryCache(),
      });

      const response = await client.mutate({
        variables: { id },
        mutation: gql`
          mutation removePost($id: Int) {
            deletePost(id: $id)
          }
        `,
      });

      setPosts((previous) => {
        const tempPosts = previous.filter((item) => item.id !== id);
        return tempPosts;
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Content>
        {posts.map((post, index) => (
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
        ))}
      </Content>
    </>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
  });

  const response = await client.query({
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
  return {
    props: {
      results: response.data.getAllPosts,
    },
  };
}
