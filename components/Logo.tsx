// import * as React from 'react'
import { chakra, keyframes, PropsWithAs, ChakraProps } from "@chakra-ui/core";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Logo = (props: PropsWithAs<"img", ChakraProps>) => (
  <chakra.img
    css={{
      "@media (prefers-reduced-motion: no-preference)": {
        animation: `${spin} infinite 20s linear`,
      },
    }}
    alt=""
    src="/favicon/logo.svg"
    {...props}
  />
);
