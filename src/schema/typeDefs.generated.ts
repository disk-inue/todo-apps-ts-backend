import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 0, end: 10 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 17, end: 25 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 12, end: 25 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Todo", loc: { start: 31, end: 35 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 40, end: 42 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ID", loc: { start: 44, end: 46 } },
              loc: { start: 44, end: 46 },
            },
            loc: { start: 44, end: 47 },
          },
          directives: [],
          loc: { start: 40, end: 47 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "title", loc: { start: 50, end: 55 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String", loc: { start: 57, end: 63 } },
              loc: { start: 57, end: 63 },
            },
            loc: { start: 57, end: 64 },
          },
          directives: [],
          loc: { start: 50, end: 64 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "completed", loc: { start: 67, end: 76 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Boolean", loc: { start: 78, end: 85 } },
              loc: { start: 78, end: 85 },
            },
            loc: { start: 78, end: 86 },
          },
          directives: [],
          loc: { start: 67, end: 86 },
        },
      ],
      loc: { start: 26, end: 88 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 102, end: 107 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "todos", loc: { start: 112, end: 117 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "Todo", loc: { start: 120, end: 124 } },
                  loc: { start: 120, end: 124 },
                },
                loc: { start: 120, end: 125 },
              },
              loc: { start: 119, end: 126 },
            },
            loc: { start: 119, end: 127 },
          },
          directives: [],
          loc: { start: 112, end: 127 },
        },
      ],
      loc: { start: 90, end: 129 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 143, end: 151 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "createTodo", loc: { start: 156, end: 166 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "title", loc: { start: 167, end: 172 } },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "String", loc: { start: 174, end: 180 } },
                  loc: { start: 174, end: 180 },
                },
                loc: { start: 174, end: 181 },
              },
              directives: [],
              loc: { start: 167, end: 181 },
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "completed", loc: { start: 183, end: 192 } },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "Boolean", loc: { start: 194, end: 201 } },
                  loc: { start: 194, end: 201 },
                },
                loc: { start: 194, end: 202 },
              },
              directives: [],
              loc: { start: 183, end: 202 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Todo", loc: { start: 205, end: 209 } },
              loc: { start: 205, end: 209 },
            },
            loc: { start: 205, end: 210 },
          },
          directives: [],
          loc: { start: 156, end: 210 },
        },
      ],
      loc: { start: 131, end: 212 },
    },
  ],
  loc: { start: 0, end: 213 },
} as unknown as DocumentNode;
