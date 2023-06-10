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

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.OwnerInput](../../models/shared/ownerinput.md)                           | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.OwnerCreateSecurity](../../models/operations/ownercreatesecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.OwnerCreateResponse](../../models/operations/ownercreateresponse.md)>**


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

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.OwnerDestroyRequest](../../models/operations/ownerdestroyrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.OwnerDestroySecurity](../../models/operations/ownerdestroysecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.OwnerDestroyResponse](../../models/operations/ownerdestroyresponse.md)>**


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

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.OwnerListRequest](../../models/operations/ownerlistrequest.md)   | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.OwnerListSecurity](../../models/operations/ownerlistsecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.OwnerListResponse](../../models/operations/ownerlistresponse.md)>**


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

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.OwnerPartialUpdateRequest](../../models/operations/ownerpartialupdaterequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.OwnerPartialUpdateSecurity](../../models/operations/ownerpartialupdatesecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.OwnerPartialUpdateResponse](../../models/operations/ownerpartialupdateresponse.md)>**


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

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.OwnerRetrieveRequest](../../models/operations/ownerretrieverequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.OwnerRetrieveSecurity](../../models/operations/ownerretrievesecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.OwnerRetrieveResponse](../../models/operations/ownerretrieveresponse.md)>**


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

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.OwnerUpdateRequest](../../models/operations/ownerupdaterequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.OwnerUpdateSecurity](../../models/operations/ownerupdatesecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.OwnerUpdateResponse](../../models/operations/ownerupdateresponse.md)>**

