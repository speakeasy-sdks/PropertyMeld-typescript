# meld

### Available Operations

* [meldList](#meldlist)
* [meldManagerFilesList](#meldmanagerfileslist)
* [meldRetrieve](#meldretrieve)
* [meldTenantFilesList](#meldtenantfileslist)
* [meldVendorFilesList](#meldvendorfileslist)

## meldList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import {
  MeldListAckApproval,
  MeldListCategories,
  MeldListDueDateChoice,
  MeldListEverBeenAssigned,
  MeldListExp,
  MeldListHasEstimates,
  MeldListMaintType,
  MeldListMeldinvoice,
  MeldListOrderBy,
  MeldListOwnerApproval,
  MeldListPriority,
  MeldListProjectAssigned,
  MeldListRating,
  MeldListRecurring,
  MeldListReminderChoice,
  MeldListResponse,
  MeldListStatus,
  MeldListTpr,
} from "MeldAPI/dist/sdk/models/operations";
import {
  OwnerApprovalStatusEnum,
  PriorityEnum,
  Status5c6Enum,
  StatusD0bEnum,
  WorkCategoryEnum,
} from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.meld.meldList({
  xPmOrg: 221262,
  ackApproval: MeldListAckApproval.False,
  assignedToMe: "odit",
  categories: MeldListCategories.General,
  commentsGte: "quasi",
  commentsLte: "iure",
  completedGte: "doloribus",
  completedInterval: "debitis",
  completedLte: "eius",
  createdGte: "maxime",
  createdInterval: "deleniti",
  createdLte: "facilis",
  createdOffsetLte: "in",
  dueDateChoice: MeldListDueDateChoice.Overdue,
  dueDateGte: "architecto",
  dueDateLte: "repudiandae",
  everBeenAssigned: MeldListEverBeenAssigned.True,
  exp: MeldListExp.False,
  expS: "nihil",
  filesGte: "repellat",
  filesLte: "quibusdam",
  hasEstimates: MeldListHasEstimates.False,
  invoiceS: "saepe",
  limit: 868126,
  maint: "accusantium",
  maintType: MeldListMaintType.One,
  markedCompleteGte: "praesentium",
  markedCompleteInterval: "natus",
  markedCompleteLte: "magni",
  meldinvoice: MeldListMeldinvoice.True,
  offset: 779051,
  orderBy: MeldListOrderBy.MinusOwnerApprovalRequestDate,
  ownerApproval: MeldListOwnerApproval.OwnerApprovalRequestedEstimates,
  pg: "maxime",
  priority: MeldListPriority.Medium,
  project: "excepturi",
  projectAssigned: MeldListProjectAssigned.True,
  prop: "ea",
  rating: MeldListRating.One,
  recurring: MeldListRecurring.True,
  recurringMeld: "maiores",
  remindees: "quidem",
  reminderChoice: MeldListReminderChoice.Today,
  reminderGte: "voluptate",
  reminderLte: "autem",
  scheduledGte: "nam",
  scheduledInterval: "eaque",
  scheduledLte: "pariatur",
  scheduling: "nemo",
  status: MeldListStatus.PendingAssignment,
  tags: "perferendis",
  tagsEx: "fugiat",
  tpr: MeldListTpr.False,
  unit: "aut",
  updatedGte: "cumque",
  updatedInterval: "corporis",
  updatedLte: "hic",
  updatedOffsetLte: "libero",
  vendorScheduledGte: "nobis",
  vendorScheduledInterval: "dolores",
  vendorScheduledLte: "quis",
  wlGte: "totam",
  wlLte: "dignissimos",
}, {
  pmoAuth2Authentication: "",
}).then((res: MeldListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.MeldListRequest](../../models/operations/meldlistrequest.md)   | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `security`                                                                 | [operations.MeldListSecurity](../../models/operations/meldlistsecurity.md) | :heavy_check_mark:                                                         | The security requirements to use for the request.                          |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.MeldListResponse](../../models/operations/meldlistresponse.md)>**


## meldManagerFilesList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { MeldManagerFilesListResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.meld.meldManagerFilesList({
  xPmOrg: 54338,
  id: "53202c73-d5fe-49b9-8c28-909b3fe49a8d",
  limit: 589910,
  offset: 750844,
  ordering: "libero",
}, {
  pmoAuth2Authentication: "",
}).then((res: MeldManagerFilesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.MeldManagerFilesListRequest](../../models/operations/meldmanagerfileslistrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.MeldManagerFilesListSecurity](../../models/operations/meldmanagerfileslistsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.MeldManagerFilesListResponse](../../models/operations/meldmanagerfileslistresponse.md)>**


## meldRetrieve

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { MeldRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";
import {
  OwnerApprovalStatusEnum,
  PriorityEnum,
  Status5c6Enum,
  StatusD0bEnum,
  WorkCategoryEnum,
} from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.meld.meldRetrieve({
  xPmOrg: 964490,
  id: "48633323-f9b7-47f3-a410-0674ebf69280",
}, {
  pmoAuth2Authentication: "",
}).then((res: MeldRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.MeldRetrieveRequest](../../models/operations/meldretrieverequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.MeldRetrieveSecurity](../../models/operations/meldretrievesecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.MeldRetrieveResponse](../../models/operations/meldretrieveresponse.md)>**


## meldTenantFilesList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { MeldTenantFilesListResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.meld.meldTenantFilesList({
  xPmOrg: 854614,
  id: "1ba77a89-ebf7-437a-a420-3ce5e6a95d8a",
  limit: 55,
  offset: 872651,
  ordering: "quaerat",
}, {
  pmoAuth2Authentication: "",
}).then((res: MeldTenantFilesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.MeldTenantFilesListRequest](../../models/operations/meldtenantfileslistrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.MeldTenantFilesListSecurity](../../models/operations/meldtenantfileslistsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.MeldTenantFilesListResponse](../../models/operations/meldtenantfileslistresponse.md)>**


## meldVendorFilesList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { MeldVendorFilesListResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.meld.meldVendorFilesList({
  xPmOrg: 273542,
  id: "6ce2af7a-73cf-43be-853f-870b326b5a73",
  limit: 277628,
  offset: 186458,
  ordering: "cupiditate",
}, {
  pmoAuth2Authentication: "",
}).then((res: MeldVendorFilesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.MeldVendorFilesListRequest](../../models/operations/meldvendorfileslistrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.MeldVendorFilesListSecurity](../../models/operations/meldvendorfileslistsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.MeldVendorFilesListResponse](../../models/operations/meldvendorfileslistresponse.md)>**

