# managerFile

### Available Operations

* [managerFileList](#managerfilelist)

## managerFileList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ManagerFileListResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.managerFile.managerFileList({
  xPmOrg: 968962,
  limit: 652103,
  offset: 320997,
  ordering: "eum",
}, {
  pmoAuth2Authentication: "",
}).then((res: ManagerFileListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
