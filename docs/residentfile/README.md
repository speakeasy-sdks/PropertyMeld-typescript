# residentFile

### Available Operations

* [residentFileList](#residentfilelist)

## residentFileList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ResidentFileListResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.residentFile.residentFileList({
  xPmOrg: 487676,
  limit: 144691,
  offset: 545,
  ordering: "magni",
}, {
  pmoAuth2Authentication: "",
}).then((res: ResidentFileListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
