import { extendTheme } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      highlight: "#43766C",
      background: "#F8FAE5",
      lightBrown: "#B19470",
      darkBrown: "#76453B",
    },
  },
  components: {
    Button: {
      variants: {
        main: {
          bg: "#43766C",
          color: "white",
        },
        "main-outline": {
          border: "2px",
          borderColor: "#43766C",
          color: "#43766C",
        },
        "secondary" : {
          bg: "#76453B",
          color: "white",
        },
        "secondary-outline": {
          border: "2px",
          borderColor: "#76453B",
          color: "#76453B",
        },
      },
    },
  },
});
