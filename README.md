# graphql_sample

Graphql sample repository

## 🚀 Get started

Run apollo server.

```sh
pnpm i && pnpm start
```

Then, you can request the query for `http://localhost:4000` with some tools like Apollo Sandbox.

[Apllo Sandbox](https://studio.apollographql.com/sandbox/explorer/?_gl=1%2A16er0h%2A_ga%2AMTIwMDgyOTQwOS4xNzE3ODAzMTgy%2A_ga_0BGG5V2W2K%2AMTcxNzgwMzE4Mi4xLjEuMTcxNzgwMzc5NC4wLjAuMA..)

### Codegen

After running server, you can run below command to create schema type definition.

```sh
pnpm codegen
```

Then, the `./arc/generated/graphql.ts` is generated.
