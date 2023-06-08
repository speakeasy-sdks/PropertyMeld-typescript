# checkToken

### Available Operations

* [checkTokenRetrieve](#checktokenretrieve) - Used to check the validity of an oauth2 token

## checkTokenRetrieve

Used to check the validity of an oauth2 token

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { CheckTokenRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.checkToken.checkTokenRetrieve({
  pmoAuth2Authentication: "",
}).then((res: CheckTokenRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
