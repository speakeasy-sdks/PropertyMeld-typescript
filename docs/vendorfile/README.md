# vendorFile

### Available Operations

* [vendorFileList](#vendorfilelist)

## vendorFileList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { VendorFileListResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.vendorFile.vendorFileList({
  xPmOrg: 480061,
  limit: 664965,
  offset: 522176,
  ordering: "eligendi",
}, {
  pmoAuth2Authentication: "",
}).then((res: VendorFileListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
