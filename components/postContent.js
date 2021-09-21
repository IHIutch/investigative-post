import { Box } from "@chakra-ui/layout";
import React from "react";

export default function PostContent({ content }) {
  return (
    <Box
      sx={{
        a: {
          color: "blue.500",
          textDecoration: "underline",
        },
      }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
