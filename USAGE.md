<!-- Start SDK Example Usage -->
```typescript
import { MeldAPI } from "MeldAPI";
import { BuildingListResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.building.buildingList({
  xPmOrg: 548814,
  limit: 592845,
  offset: 715190,
  ordering: "quibusdam",
}, {
  pmoAuth2Authentication: "",
}).then((res: BuildingListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->