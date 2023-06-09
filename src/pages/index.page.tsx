import { options } from "@/config/relay/options";
import { pages_UsersQuery } from "../__generated__/pages_UsersQuery.graphql";
import { graphql, usePreloadedQuery, useQueryLoader } from "react-relay";
import { RelayProps, withRelay } from "relay-nextjs";
import { useRef } from "react";
import { pages_NodeQuery } from "@/__generated__/pages_NodeQuery.graphql";
import { pages_UserQuery } from "@/__generated__/pages_UserQuery.graphql";


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

const NodeQuery =  graphql`
  query pages_NodeQuery($id: ID!) {
    node(id: $id) {
      ... on User {
        __typename
        id
        name
      }
    }
  }
`

const UserQuery =  graphql`
  query pages_UserQuery {
    user {
      data {
        id
        name
      }
      response {
        ok
      }
    }
  }
`

function Home({ preloadedQuery }: RelayProps<{}, pages_UsersQuery>) {
  const query = usePreloadedQuery(UsersQuery,  preloadedQuery)
  const inputRef = useRef<HTMLInputElement>(null)

  const [queryRef, loadQuery] = useQueryLoader<pages_NodeQuery>(NodeQuery)
  const [, loadUserQUery] = useQueryLoader<pages_UserQuery>(UserQuery)

  const onClick = () => {
    console.log(inputRef.current?.value)
    if(!inputRef.current?.value) return;
    // console.log('Called', inputRef.current?.target.value)
    loadQuery({
      id: inputRef.current?.value
    })
  }

  const onClickUserQuery = () => {
    console.log('onClickUserQuery')
    loadUserQUery({})
  }

  console.log(query)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1>Testing With Relay</h1>

      <div className="mb-6">
        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Base input</label>
        <input ref={inputRef} type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={onClickUserQuery}>Render UserQuery</button>

      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={onClick}>Render LoadQuery</button>
    </main>
  )
}

export default withRelay(Home, UsersQuery, options);

