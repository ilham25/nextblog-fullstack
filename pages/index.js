import Link from "next/link";

import { Button, Row, Col, Container, Card } from "react-bootstrap";
import Content from "../components/Content";

import { dummyPost } from "../utils/data";

export default function Home() {
  return (
    <>
      <Content>
        {dummyPost.map((post, index) => (
          <Col sm={12} key={index} className="mb-4">
            <Card>
              <Card.Header>User : {post.user.fullName}</Card.Header>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text className="text-nowrap overflow-hidden text-truncate text-secondary">
                  {post.content}
                </Card.Text>
                <Link href="/post">
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
