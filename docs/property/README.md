# property

### Available Operations

* [propertyCreate](#propertycreate)
* [propertyDestroy](#propertydestroy)
* [propertyList](#propertylist)
* [propertyPartialUpdate](#propertypartialupdate)
* [propertyRetrieve](#propertyretrieve)
* [propertyUpdate](#propertyupdate)

## propertyCreate

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { PropertyCreateResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.property.propertyCreate({
  city: "Destineecester",
  country: "Svalbard & Jan Mayen Islands",
  countyProvince: "soluta",
  line1: "accusantium",
  line2: "aliquam",
  line3: "sapiente",
  maintenanceNotes: "dicta",
  otherAddressDetails: "ullam",
  owners: [
    356707,
    391774,
  ],
  postcode: "51845",
  propertyGroups: [
    680270,
    99615,
    609178,
    945302,
  ],
  propertyName: "quasi",
  units: [
    92027,
    454162,
    55965,
    326701,
  ],
}, {
  pmoAuth2Authentication: "",
}).then((res: PropertyCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## propertyDestroy

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { PropertyDestroyResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.property.propertyDestroy({
  id: "1339d080-86a1-4840-b94c-26071f93f5f0",
}, {
  pmoAuth2Authentication: "",
}).then((res: PropertyDestroyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## propertyList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { PropertyListResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.property.propertyList({
  limit: 409054,
  offset: 310067,
  ordering: "consequuntur",
}, {
  pmoAuth2Authentication: "",
}).then((res: PropertyListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## propertyPartialUpdate

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { PropertyPartialUpdateResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.property.propertyPartialUpdate({
  patchedPropertyInput: {
    city: "Oklahoma City",
    country: "Singapore",
    countyProvince: "dignissimos",
    line1: "officia",
    line2: "asperiores",
    line3: "nemo",
    maintenanceNotes: "quae",
    otherAddressDetails: "quaerat",
    owners: [
      801836,
      288398,
      70447,
      241418,
    ],
    postcode: "63266-9584",
    propertyGroups: [
      554688,
      427834,
    ],
    propertyName: "labore",
    units: [
      706575,
      738227,
      414857,
      447144,
    ],
  },
  id: "5fd5e60b-375e-4d4f-afbe-e41f33317fe3",
}, {
  pmoAuth2Authentication: "",
}).then((res: PropertyPartialUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## propertyRetrieve

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { PropertyRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.property.propertyRetrieve({
  id: "5b60eb1e-a426-4555-ba3c-28744ed53b88",
}, {
  pmoAuth2Authentication: "",
}).then((res: PropertyRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## propertyUpdate

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { PropertyUpdateResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.property.propertyUpdate({
  propertyInput: {
    city: "Compton",
    country: "New Caledonia",
    countyProvince: "corrupti",
    line1: "pariatur",
    line2: "totam",
    line3: "hic",
    maintenanceNotes: "exercitationem",
    otherAddressDetails: "nobis",
    owners: [
      699575,
    ],
    postcode: "91974",
    propertyGroups: [
      70869,
      611749,
      292794,
    ],
    propertyName: "laborum",
    units: [
      447516,
    ],
  },
  id: "6b26916f-e1f0-48f4-a94e-3698f447f603",
}, {
  pmoAuth2Authentication: "",
}).then((res: PropertyUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
