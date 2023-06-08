# ping

### Available Operations

* [pingRetrieve](#pingretrieve) - Used to double check that the api is up an running.

## pingRetrieve

Used to double check that the api is up an running.

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { PingRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.ping.pingRetrieve().then((res: PingRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
