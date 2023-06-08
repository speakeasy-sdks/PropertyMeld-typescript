# propertyGroup

### Available Operations

* [propertyGroupList](#propertygrouplist)
* [propertyGroupRetrieve](#propertygroupretrieve)

## propertyGroupList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { PropertyGroupListResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.propertyGroup.propertyGroupList({
  xPmOrg: 888044,
  limit: 505866,
  offset: 708609,
  ordering: "quaerat",
}, {
  pmoAuth2Authentication: "",
}).then((res: PropertyGroupListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## propertyGroupRetrieve

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { PropertyGroupRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.propertyGroup.propertyGroupRetrieve({
  xPmOrg: 277773,
  id: "5e80ca55-efd2-40e4-97e1-858b6a89fbe3",
}, {
  pmoAuth2Authentication: "",
}).then((res: PropertyGroupRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
