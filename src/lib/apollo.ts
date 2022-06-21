import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4oijcsq05uk01ywhk2fc3sp/master",
  cache: new InMemoryCache(),
});
