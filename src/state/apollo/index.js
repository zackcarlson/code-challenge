import React from "react";
import PropTypes from "prop-types";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache, createHttpLink } from "@apollo/client";

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: "https://colourlovers-graphql-api.herokuapp.com/graphql",
});

const client = new ApolloClient({
  cache,
  link,
});

const ApolloContext = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

ApolloContext.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ApolloContext;
