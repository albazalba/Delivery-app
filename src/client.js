import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
    uri: 'https://delivery-app.hasura.app/v1/graphql',
    headers: {'x-hasura-admin-secret': "QCKp7zGP7RQhq89r7zPem8G1YpvFcr5nuhfFDhJm2ubyi3HxGDv0Clk8tgTjKjEc"},
    cache: new InMemoryCache()
});