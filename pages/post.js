import { Col } from "react-bootstrap";

import Content from "../components/Content";

const Post = () => {
  return (
    <>
      <Content>
        <Col sm={12} style={{ borderBottom: "2px solid #f1f1f1" }}>
          <h1 className="display-4">My first post hehe</h1>
        </Col>
        <Col
          sm={12}
          className="mt-3 text-justify text-content"
          style={{ lineHeight: "1.66", fontSize: "1.3em" }}
        >
          <p className="font-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            culpa rem soluta laboriosam illo asperiores nemo libero commodi fuga
            architecto iure laudantium, accusantium placeat totam voluptatibus.
            Dolore eligendi enim voluptatum repellendus, sapiente impedit. Atque
            quam hic, labore ullam earum asperiores maxime nam quod et corporis
            aspernatur unde sunt rem vero maiores debitis a quaerat ipsa
            nesciunt fugit facilis tenetur quia perferendis voluptates. Fuga
            obcaecati sequi eius consequuntur, qui vero pariatur doloribus illum
            libero! Non, facere architecto, facilis recusandae voluptatibus
            culpa, accusantium voluptas quod ducimus sequi tempore ab iste
            dignissimos magnam? Nulla voluptate quibusdam error, modi nam,
            dignissimos ipsam adipisci maiores accusamus, saepe vel quae
            explicabo delectus quos enim excepturi voluptatem perspiciatis id
            quisquam optio voluptas! Impedit quia, exercitationem eaque ipsum
            excepturi maiores magni id, assumenda veritatis, obcaecati aliquid
            doloribus odio recusandae ipsa at possimus dolor. Culpa temporibus
            molestias eius cupiditate velit sed est, maiores odio nam,
            consequuntur libero, et quis ea. Nisi cumque animi consequuntur
            totam! Ab voluptates expedita omnis quidem et ea nesciunt sunt
            voluptatum. Maxime similique sit, delectus iusto velit reiciendis
            quisquam tempore quis, ab officiis at consectetur enim praesentium
            obcaecati aperiam eum neque quaerat alias error explicabo voluptatum
            incidunt libero cum consequuntur! Mollitia facilis commodi nesciunt?
            Esse.
          </p>
        </Col>
      </Content>
    </>
  );
};

export default Post;
