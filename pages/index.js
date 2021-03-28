import Link from "next/link";

import { Button, Row, Col, Container, Card } from "react-bootstrap";
import Content from "../components/Content";

import { gql } from "@apollo/client";
import client from "../utils/apollo-client";

// import { dummyPost } from "../utils/data";

export default function Home({ posts }) {
  console.log(posts);
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
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Content>
    </>
  );
}

export async function getStaticProps() {
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
  return {
    props: {
      posts: data.getAllPosts,
    },
  };
}
