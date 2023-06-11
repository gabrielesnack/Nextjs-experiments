/**
 * @generated SignedSource<<de6b776268a92b601cdbaf9c432882a5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type pages_UserQuery$variables = {};
export type pages_UserQuery$data = {
  readonly user: {
    readonly data: {
      readonly __typename: "User";
      readonly id: string;
      readonly name: string;
    } | null;
    readonly response: {
      readonly ok: boolean;
    };
  };
};
export type pages_UserQuery = {
  response: pages_UserQuery$data;
  variables: pages_UserQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "UserQueryPayload",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "data",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "UserResponse",
        "kind": "LinkedField",
        "name": "response",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "ok",
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
    "name": "pages_UserQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pages_UserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "4466d6aece88158b1db2811ed287ffcc",
    "id": null,
    "metadata": {},
    "name": "pages_UserQuery",
    "operationKind": "query",
    "text": "query pages_UserQuery {\n  user {\n    data {\n      __typename\n      id\n      name\n    }\n    response {\n      ok\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fdb09b5c795e7f112b84ac64122e0dd8";

export default node;
