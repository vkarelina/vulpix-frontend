import { useEffect } from "react";

import { Box, LinearProgress } from "@mui/material";
import { useDispatch } from "react-redux";

import { useTypeSelector } from "../../hooks/useTypeSelector";
import { getAllPosts } from "../../redux/actions/actions";

import PostCard from "../../components/PostCard/PostCard";

const MainPage = () => {
  const dispatch = useDispatch();

  const postsArr = useTypeSelector((state) => state.posts.posts);
  const postsLoading = useTypeSelector((state) => state.posts.loading);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <>
      {postsLoading && <LinearProgress color="inherit" />}
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        gap={2}
        justifyContent={"center"}
        pt={2}
      >
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
