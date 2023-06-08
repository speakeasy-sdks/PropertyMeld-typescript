# project

### Available Operations

* [projectList](#projectlist)
* [projectRetrieve](#projectretrieve)

## projectList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ProjectListResponse } from "MeldAPI/dist/sdk/models/operations";
import { ProjectTypeEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.project.projectList({
  xPmOrg: 731398,
  limit: 240020,
  offset: 766964,
  ordering: "consequuntur",
}, {
  pmoAuth2Authentication: "",
}).then((res: ProjectListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## projectRetrieve

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ProjectRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";
import { ProjectTypeEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.project.projectRetrieve({
  xPmOrg: 9766,
  id: "c4f3789f-d871-4f99-9d2e-fd121aa6f1e6",
}, {
  pmoAuth2Authentication: "",
}).then((res: ProjectRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
