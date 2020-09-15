import * as moment from "moment";
import React, { useEffect, useState } from "react";
import Post from "../components/Post";

const PostPage = (props) => {
  const [postProp, setPostProp] = useState([]);

  const withEx =
    new URLSearchParams(props.location.search).get("ex") === "true";

  useEffect(() => {
    fetch(
      `https://archisdi-path.firebaseio.com/posts.json${
        withEx ? "" : '?orderBy="ex"&equalTo=false'
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        const payload = Array.isArray(data)
          ? data
          : Object.keys(data).map((item) => data[item]);
        setPostProp(payload);
      });
  }, [withEx]);

  const posts = postProp.map((post, index) => {
    const date = moment.unix(post.date).format("DD-MM-YYYY hh:mm");
    const image =
      post.image_url &&
      `https://firebasestorage.googleapis.com/v0/b/archisdi-path.appspot.com/o/${encodeURIComponent(
        post.image_url
      )}?alt=media`;
    return (
      <Post key={`post-${index}`} caption={post.text} img={image} date={date} />
    );
  });

  return posts;
};

export default PostPage;
