import { gql } from "@apollo/client";

// eslint-disable-next-line import/prefer-default-export
export const LOAD_SWATCHES = gql`
  query Color($numResults: Int!) {
    colors(numResults: $numResults) {
      hex
    }
  }
`;
