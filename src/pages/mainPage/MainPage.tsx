import { useEffect } from "react";

import { Box, LinearProgress } from "@mui/material";
import { useDispatch } from "react-redux";

import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchPosts } from "../../redux/actionsCreators/posts";
import { WrapperPostCard } from "./MainPageStyle";
import { PostCard } from "../../components/PostCard";

const MainPage = () => {
  const dispatch = useDispatch();

  const postsArr = useAppSelector((state) => state.posts.posts);
  const postsLoading = useAppSelector((state) => state.posts.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      {postsLoading && <LinearProgress color="inherit" />}
      <Box sx={WrapperPostCard}>
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
