/**
 * @generated SignedSource<<86eb120fc79f5069706a81337e507dbd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type pages_UsersQuery$variables = {};
export type pages_UsersQuery$data = {
  readonly users: {
    readonly data: ReadonlyArray<{
      readonly id: string;
      readonly name: string;
    } | null> | null;
  };
};
export type pages_UsersQuery = {
  response: pages_UsersQuery$data;
  variables: pages_UsersQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "UsersQueryPayload",
    "kind": "LinkedField",
    "name": "users",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "data",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pages_UsersQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pages_UsersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a470eebf4af00c5fafc1fe96d727083b",
    "id": null,
    "metadata": {},
    "name": "pages_UsersQuery",
    "operationKind": "query",
    "text": "query pages_UsersQuery {\n  users {\n    data {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6e03df47343f7338405d9f5d7f4f7029";

export default node;
