# unit

### Available Operations

* [unitCreate](#unitcreate)
* [unitDestroy](#unitdestroy)
* [unitList](#unitlist)
* [unitPartialUpdate](#unitpartialupdate)
* [unitRetrieve](#unitretrieve)
* [unitUpdate](#unitupdate)

## unitCreate

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { UnitCreateResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.unit.unitCreate({
  approvalCurrencyLimit: "quae",
  currentResidents: [
    208253,
    348357,
  ],
  maintenanceNotes: "itaque",
  propertyId: 88248,
  unit: "ipsum",
  unitAddress: {
    city: "Stiedemanncester",
    country: "Sierra Leone",
    countyProvince: "quia",
    line1: "quia",
    line2: "nostrum",
    line3: "omnis",
    postcode: "16786-5804",
  },
}, {
  pmoAuth2Authentication: "",
}).then((res: UnitCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## unitDestroy

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { UnitDestroyResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.unit.unitDestroy({
  id: "0e1084cb-0672-4d1a-9879-eeb9665b85ef",
}, {
  pmoAuth2Authentication: "",
}).then((res: UnitDestroyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## unitList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { UnitListResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.unit.unitList({
  limit: 737279,
  offset: 872303,
  ordering: "alias",
}, {
  pmoAuth2Authentication: "",
}).then((res: UnitListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## unitPartialUpdate

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { UnitPartialUpdateResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.unit.unitPartialUpdate({
  patchedUnitInput: {
    approvalCurrencyLimit: "quia",
    currentResidents: [
      684126,
      919508,
      34070,
    ],
    maintenanceNotes: "expedita",
    propertyId: 885208,
    unit: "eos",
    unitAddress: {
      city: "Lawton",
      country: "Lithuania",
      countyProvince: "odit",
      line1: "explicabo",
      line2: "corporis",
      line3: "error",
      postcode: "29626-3164",
    },
  },
  id: "f92443da-7ce5-42b8-95c5-37c6454efb0b",
}, {
  pmoAuth2Authentication: "",
}).then((res: UnitPartialUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## unitRetrieve

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { UnitRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.unit.unitRetrieve({
  id: "34896c3c-a5ac-4fbe-afd5-707577929177",
}, {
  pmoAuth2Authentication: "",
}).then((res: UnitRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## unitUpdate

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { UnitUpdateResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.unit.unitUpdate({
  unitInput: {
    approvalCurrencyLimit: "pariatur",
    currentResidents: [
      627735,
      763165,
      401428,
      311486,
    ],
    maintenanceNotes: "commodi",
    propertyId: 888616,
    unit: "placeat",
    unitAddress: {
      city: "Heidenreichport",
      country: "Cote d'Ivoire",
      countyProvince: "modi",
      line1: "ipsa",
      line2: "sint",
      line3: "vero",
      postcode: "97193",
    },
  },
  id: "a2b12eb0-7f11-46db-9954-5fc95fa88970",
}, {
  pmoAuth2Authentication: "",
}).then((res: UnitUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
