import React from "react";
import NextLink from "next/link";
import { getPosts } from "../utils/axios/posts";
import {
  Box,
  Container,
  GridItem,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";

export default function Home({ posts }) {
  return (
    <Box>
      <Container>
        <Heading as="h1" mb="4">
          Home
        </Heading>
        <SimpleGrid columns="2" spacing="6">
          {posts &&
            posts.map((post) => (
              <GridItem as="article" key={post.id}>
                <LinkBox as="article">
                  <Heading
                    fontSize="lg"
                    mb="2"
                    color="blue.500"
                    _hover={{
                      textDecoration: "underline",
                    }}
                  >
                    <NextLink href={`posts/${post.id}`} passHref>
                      <LinkOverlay colorScheme="blue">
                        {post?.title.rendered}
                      </LinkOverlay>
                    </NextLink>
                  </Heading>
                  <Text
                    dangerouslySetInnerHTML={{ __html: post?.excerpt.rendered }}
                  />
                </LinkBox>
              </GridItem>
            ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export const getServerSideProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts: posts || null,
    },
  };
};
