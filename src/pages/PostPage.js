import { Row } from "antd";
import * as moment from "moment";
import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import PlacholderPost from "../components/Placeholder";

const PostPage = (props) => {
  const [postProp, setPostProp] = useState([]);

  const withEx =
    new URLSearchParams(props.location.search).get("ex") === "true";

  useEffect(() => {
    fetch(`${process.env.REACT_APP_RESOURCE_URI}.json`)
      .then((response) => response.json())
      .then((data) => {
        const payload = Object.keys(data)
          .map((item) => ({
            ...data[item],
            ex: withEx ? false : data[item].ex,
          }))
          .sort((a, b) => b.date - a.date);
        setPostProp(payload);
      });
  }, [withEx]);

  const posts = postProp.map((post, index) => {
    const date = moment.unix(post.date).format("DD MMM YYYY HH:mm");
    const image =
      post.image_url &&
      `https://firebasestorage.googleapis.com/v0/b/${
        process.env.REACT_APP_CLOUD_STORAGE
      }/o/${encodeURIComponent(post.image_url)}?alt=media`;
    return (
      <Post
        key={post.id}
        id={post.id}
        caption={post.text}
        img={image}
        date={date}
        ex={post.ex}
      />
    );
  });

  return (
    <Row>{posts.length ? posts : <PlacholderPost count={6} rows={4} />}</Row>
  );
};

export default PostPage;
