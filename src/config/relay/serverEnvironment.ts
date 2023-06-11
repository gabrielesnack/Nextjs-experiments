import { graphql } from 'graphql';
import { Environment, GraphQLResponse, Network, RecordSource, Store } from 'relay-runtime';
import { API_GRAPHQL_URL } from '../contants';

async function makeGraphQLRequest(text: any, variables: any) {
  console.log('API_GRAPHQL_URL', API_GRAPHQL_URL)
  const response = await fetch(API_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  })

  const json = await response.text();
  return JSON.parse(json);
}

export function createServerNetwork() {
  return Network.create(async (params, variables) => {
    console.log('text', params)
    console.log('variables', variables)
    const results = await makeGraphQLRequest(params.text, variables);

    const res = JSON.parse(JSON.stringify(results)) as GraphQLResponse

    console.log(res)
    return res;
  });
}

// Optional: this function can take a token used for authentication and pass it into `createServerNetwork`.
export function createServerEnvironment() {
  return new Environment({
    network: createServerNetwork(),
    store: new Store(new RecordSource()),
    isServer: true,
  });
}