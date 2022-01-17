# @tsed/schema bug reproduction

When sending a nullable value inside an object or array, it will error

## To reproduce

1. `npm install`
2. start API `npm run start`
3. Use `request.http` with the required vscode extension ([`rest-client`](https://marketplace.visualstudio.com/items?itemName=humao.rest-client))
4. Press "Send request" to the first request item. (there are multiple that can be viewed.)
5. See response with the following error:

```json
{
  "name": "TypeError",
  "message": "Cannot read properties of null (reading 'isNullable')",
  "status": 500,
  "errors": [],
  "stack": "TypeError: Cannot read properties of null (reading 'isNullable')
      at mapNullableType (/dev/projects/repro-tsed-io/node_modules/@tsed/schema/src/utils/mapNullableType.ts:11:15)
      at /dev/projects/repro-tsed-io/node_modules/@tsed/schema/src/components/objectMapper.ts:26:35
      at Array.reduce (<anonymous>)
      at objectMapper (/dev/projects/repro-tsed-io/node_modules/@tsed/schema/src/components/objectMapper.ts:17:32)
      at execMapper (/dev/projects/repro-tsed-io/node_modules/@tsed/schema/src/registries/JsonSchemaMapperContainer.ts:35:35)
      at anyMapper (/dev/projects/repro-tsed-io/node_modules/@tsed/schema/src/components/anyMapper.ts:22:20)
      at execMapper (/dev/projects/repro-tsed-io/node_modules/@tsed/schema/src/registries/JsonSchemaMapperContainer.ts:35:35)
      at itemMapper (/dev/projects/repro-tsed-io/node_modules/@tsed/schema/src/components/itemMapper.ts:5:83)
      at execMapper (/dev/projects/repro-tsed-io/node_modules/@tsed/schema/src/registries/JsonSchemaMapperContainer.ts:35:35)
      at /dev/projects/repro-tsed-io/node_modules/@tsed/schema/src/components/objectMapper.ts:25:30"
  }
```
