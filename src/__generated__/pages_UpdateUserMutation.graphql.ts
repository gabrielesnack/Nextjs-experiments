/**
 * @generated SignedSource<<c52c936bfbaefb98f2faef83fe17af48>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type pages_UpdateUserMutation$variables = {};
export type pages_UpdateUserMutation$data = {
  readonly updateUser: {
    readonly data: {
      readonly id: string;
      readonly name: string;
    } | null;
    readonly response: {
      readonly ok: boolean;
    };
  };
};
export type pages_UpdateUserMutation = {
  response: pages_UpdateUserMutation$data;
  variables: pages_UpdateUserMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "UserQueryPayload",
    "kind": "LinkedField",
    "name": "updateUser",
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
    "name": "pages_UpdateUserMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pages_UpdateUserMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "8a5111db10ca67cd618c1cfd36484c53",
    "id": null,
    "metadata": {},
    "name": "pages_UpdateUserMutation",
    "operationKind": "mutation",
    "text": "mutation pages_UpdateUserMutation {\n  updateUser {\n    data {\n      id\n      name\n    }\n    response {\n      ok\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1127b8e6f813ef5927c60395108a12ea";

export default node;
