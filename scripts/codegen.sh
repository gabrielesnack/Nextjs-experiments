#!/bin/bash

export "$(grep -vE "^(#.*|\s*)$" .env)"

pnpm get-graphql-schema $NEXT_PUBLIC_GRAPHQL_API > schema.graphql