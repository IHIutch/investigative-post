import { Box, Container, Heading } from "@chakra-ui/layout";
import React from "react";
import { getPost } from "../../utils/axios/posts";

export default function SinglePost({ post }) {
  return (
    <Box>
      <Container>
        <Heading as="h1" mb="4">
          {post?.title.rendered}
        </Heading>
        <Box dangerouslySetInnerHTML={{ __html: post?.content.rendered }} />
      </Container>
    </Box>
  );
}

export const getServerSideProps = async (context) => {
  const postId = context.params.postId;
  const post = await getPost(postId);

  return {
    props: {
      post: post || null,
    },
  };
};
