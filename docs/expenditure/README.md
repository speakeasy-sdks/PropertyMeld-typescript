# expenditure

### Available Operations

* [expenditureList](#expenditurelist)
* [expenditureRetrieve](#expenditureretrieve)

## expenditureList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ExpenditureListResponse, ExpenditureListStatus } from "MeldAPI/dist/sdk/models/operations";
import { PriorityEnum, Status5c6Enum, StatusD0bEnum, WorkCategoryEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.expenditure.expenditureList({
  xPmOrg: 449950,
  createdGte: new Date("2022-05-22T05:33:50.280Z"),
  createdInterval: new Date("2022-02-05T15:25:35.140Z"),
  createdLte: new Date("2022-10-20T12:36:28.767Z"),
  limit: 60225,
  offset: 969810,
  ordering: "est",
  status: [
    ExpenditureListStatus.Hold,
    ExpenditureListStatus.Approved,
    ExpenditureListStatus.Billed,
  ],
}, {
  pmoAuth2Authentication: "",
}).then((res: ExpenditureListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## expenditureRetrieve

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ExpenditureRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";
import { PriorityEnum, Status5c6Enum, StatusD0bEnum, WorkCategoryEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.expenditure.expenditureRetrieve({
  xPmOrg: 358152,
  id: "2c595590-7aff-41a3-a2fa-9467739251aa",
}, {
  pmoAuth2Authentication: "",
}).then((res: ExpenditureRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
