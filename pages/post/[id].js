import { useRouter } from "next/router";

import { Col } from "react-bootstrap";

import Content from "../../components/Content";

import { gql } from "@apollo/client";
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
  console.log(data.getAllPosts);
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

const Post = ({ post }) => {
  return (
    <>
      <Content>
        <Col
          sm={12}
          className="pb-3"
          style={{ borderBottom: "2px solid #f1f1f1" }}
        >
          <h1 className="display-4">{post.title}</h1>
          <small className="text-primary">
            Post by : {post.userPost.fullName}
          </small>
        </Col>
        <Col
          sm={12}
          className="mt-3 text-justify text-content"
          style={{ lineHeight: "1.66", fontSize: "1.3em" }}
        >
          <p className="font-content">{post.content}</p>
        </Col>
      </Content>
    </>
  );
};

export default Post;
