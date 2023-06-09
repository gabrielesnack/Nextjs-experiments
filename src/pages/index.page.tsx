import { options } from "@/config/relay/options";
import { pages_UsersQuery } from "../__generated__/pages_UsersQuery.graphql";
import { graphql, usePreloadedQuery } from "react-relay";
import { RelayProps, withRelay } from "relay-nextjs";


const UsersQuery = graphql`
  query pages_UsersQuery {
    users {
      data {
        id
        name
      }
    }
  }
`;


function Home({ preloadedQuery }: RelayProps<{}, pages_UsersQuery>) {
  const query = usePreloadedQuery(UsersQuery,  preloadedQuery)

  console.log(query)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1>Testing With Relay</h1>
    </main>
  )
}

export default withRelay(Home, UsersQuery, options);

