import React, { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
