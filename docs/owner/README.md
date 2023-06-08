# owner

### Available Operations

* [ownerCreate](#ownercreate)
* [ownerDestroy](#ownerdestroy)
* [ownerList](#ownerlist)
* [ownerPartialUpdate](#ownerpartialupdate)
* [ownerRetrieve](#ownerretrieve)
* [ownerUpdate](#ownerupdate)

## ownerCreate

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { OwnerCreateResponse } from "MeldAPI/dist/sdk/models/operations";
import { HubAccessLevelEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.owner.ownerCreate({
  address: {
    city: "State College",
    country: "Saint Helena",
    countyProvince: "dicta",
    line1: "laborum",
    line2: "totam",
    line3: "incidunt",
    postcode: "17734",
  },
  contact: {
    businessPhone: "molestias",
    businessPhoneExt: "temporibus",
    cellPhone: "qui",
    cellPhoneExt: "neque",
    fax: "fugit",
    homePhone: "magni",
    homePhoneExt: "odio",
    primaryEmail: "Fiona.Reichert76@gmail.com",
    secondaryEmail: "Nella.Bosco8@hotmail.com",
    tertiaryEmail: "Katrine.Reynolds@hotmail.com",
  },
  email: "Corene24@hotmail.com",
  firstName: "Marianne",
  hubAccessLevel: HubAccessLevelEnum.DirectOnly,
  invitedToHub: false,
  lastName: "Berge",
  properties: [
    555649,
  ],
}, {
  pmoAuth2Authentication: "",
}).then((res: OwnerCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## ownerDestroy

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { OwnerDestroyResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.owner.ownerDestroy({
  id: "e0adcf4b-9218-479f-8e95-3f73ef7fbc7a",
}, {
  pmoAuth2Authentication: "",
}).then((res: OwnerDestroyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## ownerList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { OwnerListResponse } from "MeldAPI/dist/sdk/models/operations";
import { HubAccessLevelEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.owner.ownerList({
  limit: 708548,
  offset: 874288,
  ordering: "ducimus",
}, {
  pmoAuth2Authentication: "",
}).then((res: OwnerListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## ownerPartialUpdate

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { OwnerPartialUpdateResponse } from "MeldAPI/dist/sdk/models/operations";
import { HubAccessLevelEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.owner.ownerPartialUpdate({
  patchedOwnerInput: {
    address: {
      city: "Port Rosina",
      country: "Comoros",
      countyProvince: "natus",
      line1: "impedit",
      line2: "aut",
      line3: "voluptatibus",
      postcode: "81799",
    },
    contact: {
      businessPhone: "iusto",
      businessPhoneExt: "eligendi",
      cellPhone: "ducimus",
      cellPhoneExt: "alias",
      fax: "officia",
      homePhone: "tempora",
      homePhoneExt: "ipsam",
      primaryEmail: "Brielle.Keebler18@yahoo.com",
      secondaryEmail: "Johnpaul98@yahoo.com",
      tertiaryEmail: "Gustave_Stoltenberg@gmail.com",
    },
    email: "Victor.Schamberger77@yahoo.com",
    firstName: "Flossie",
    hubAccessLevel: HubAccessLevelEnum.AllNotifications,
    invitedToHub: false,
    lastName: "Jacobi",
    properties: [
      301831,
    ],
  },
  id: "6c3e250f-b008-4c42-a141-aac366c8dd6b",
}, {
  pmoAuth2Authentication: "",
}).then((res: OwnerPartialUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## ownerRetrieve

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { OwnerRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";
import { HubAccessLevelEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.owner.ownerRetrieve({
  id: "14429074-7477-48a7-bd46-6d28c10ab3cd",
}, {
  pmoAuth2Authentication: "",
}).then((res: OwnerRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## ownerUpdate

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { OwnerUpdateResponse } from "MeldAPI/dist/sdk/models/operations";
import { HubAccessLevelEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.owner.ownerUpdate({
  ownerInput: {
    address: {
      city: "Parkerburgh",
      country: "China",
      countyProvince: "voluptas",
      line1: "ab",
      line2: "cupiditate",
      line3: "consequatur",
      postcode: "83117",
    },
    contact: {
      businessPhone: "esse",
      businessPhoneExt: "recusandae",
      cellPhone: "aperiam",
      cellPhoneExt: "distinctio",
      fax: "quod",
      homePhone: "dignissimos",
      homePhoneExt: "inventore",
      primaryEmail: "Josiah48@yahoo.com",
      secondaryEmail: "Harvey64@yahoo.com",
      tertiaryEmail: "Alfonzo_Sawayn@yahoo.com",
    },
    email: "Carol68@yahoo.com",
    firstName: "Lysanne",
    hubAccessLevel: HubAccessLevelEnum.AllNotifications,
    invitedToHub: false,
    lastName: "Lindgren",
    properties: [
      325685,
    ],
  },
  id: "62f222e9-817e-4e17-8be6-1e6b7b95bc0a",
}, {
  pmoAuth2Authentication: "",
}).then((res: OwnerUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
