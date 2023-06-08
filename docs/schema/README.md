# schema

### Available Operations

* [schemaRetrieve](#schemaretrieve) - OpenApi3 schema for this API. Format can be selected via content negotiation.

- YAML: application/vnd.oai.openapi
- JSON: application/vnd.oai.openapi+json

## schemaRetrieve

OpenApi3 schema for this API. Format can be selected via content negotiation.

- YAML: application/vnd.oai.openapi
- JSON: application/vnd.oai.openapi+json

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { SchemaRetrieveFormat, SchemaRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.schema.schemaRetrieve({
  xPmOrg: 425402,
  format: SchemaRetrieveFormat.Json,
}, {
  pmoAuth2Authentication: "",
}).then((res: SchemaRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
