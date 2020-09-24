import { Row, Spin } from "antd";
import * as moment from "moment";
import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import PlacholderPost from "../components/Placeholder";
import InfiniteScroll from "react-infinite-scroller";

const INCREMENT = 10;

const PostPage = (props) => {
  const [postProp, setPostProp] = useState([]);
  const [limitData, setLimitData] = useState(5);

  const loadData = (limit = INCREMENT) => {
    fetch(
      `${process.env.REACT_APP_RESOURCE_URI}.json?orderBy="date"&limitToLast=${limit}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPostProp(data.filter((item) => item));
        setLimitData(limit + INCREMENT);
      });
  };

  /** on page load */
  useEffect(() => {
    loadData();
  }, []);

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

  const Posts = (
    <InfiniteScroll
      loadMore={() => loadData(limitData)}
      hasMore={posts.length === limitData - INCREMENT}
      loader={<Spin />}
    >
      {posts}
    </InfiniteScroll>
  );

  return (
    <Row>{posts.length ? Posts : <PlacholderPost count={6} rows={4} />}</Row>
  );
};

export default PostPage;
