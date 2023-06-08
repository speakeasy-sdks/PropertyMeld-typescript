# vendor

### Available Operations

* [vendorDestroy](#vendordestroy)
* [vendorList](#vendorlist)
* [vendorRetrieve](#vendorretrieve)

## vendorDestroy

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { VendorDestroyResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.vendor.vendorDestroy({
  id: "e189dbb3-0fcb-433e-a055-b197cd44e2f5",
}, {
  pmoAuth2Authentication: "",
}).then((res: VendorDestroyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## vendorList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { VendorListResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.vendor.vendorList({
  xPmOrg: 164532,
  limit: 813880,
  offset: 512905,
  ordering: "odit",
}, {
  pmoAuth2Authentication: "",
}).then((res: VendorListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## vendorRetrieve

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { VendorRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.vendor.vendorRetrieve({
  id: "d3513bb6-f48b-4656-bcdb-35ff2e4b2753",
}, {
  pmoAuth2Authentication: "",
}).then((res: VendorRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
