# building

### Available Operations

* [buildingList](#buildinglist)
* [buildingRetrieve](#buildingretrieve)

## buildingList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { BuildingListResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.building.buildingList({
  xPmOrg: 602763,
  limit: 857946,
  offset: 544883,
  ordering: "illum",
}, {
  pmoAuth2Authentication: "",
}).then((res: BuildingListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## buildingRetrieve

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { BuildingRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.building.buildingRetrieve({
  xPmOrg: 423655,
  id: "9a674e0f-467c-4c87-96ed-151a05dfc2dd",
}, {
  pmoAuth2Authentication: "",
}).then((res: BuildingRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
