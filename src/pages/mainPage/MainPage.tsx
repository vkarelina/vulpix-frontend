import { useEffect } from "react";

import { Box, LinearProgress } from "@mui/material";
import { useDispatch } from "react-redux";

import { useTypeSelector } from "../../hooks/useTypeSelector";
import { fetchPosts } from "../../redux/actionsCreators/actionsPosts";

import PostCard from "../../components/PostCard/PostCard";
import { WrapperPostCard } from "./MainPageStyle";

const MainPage = () => {
  const dispatch = useDispatch();

  const postsArr = useTypeSelector((state) => state.posts.posts);
  const postsLoading = useTypeSelector((state) => state.posts.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      {postsLoading && <LinearProgress color="inherit" />}
      <Box {...WrapperPostCard}>
        {postsArr &&
          postsArr.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              description={post.description}
              picturePath={post.picturePath}
              tags={post.tags}
            />
          ))}
      </Box>
    </>
  );
};

export default MainPage;
