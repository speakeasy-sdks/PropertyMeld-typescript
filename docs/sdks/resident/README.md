# resident

### Available Operations

* [residentCreateForm](#residentcreateform)
* [residentCreateJson](#residentcreatejson)
* [residentCreateMultipart](#residentcreatemultipart)
* [residentDestroy](#residentdestroy)
* [residentList](#residentlist)
* [residentPartialUpdateForm](#residentpartialupdateform)
* [residentPartialUpdateJson](#residentpartialupdatejson)
* [residentPartialUpdateMultipart](#residentpartialupdatemultipart)
* [residentRetrieve](#residentretrieve)
* [residentUpdateForm](#residentupdateform)
* [residentUpdateJson](#residentupdatejson)
* [residentUpdateMultipart](#residentupdatemultipart)

## residentCreateForm

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ResidentCreateFormResponse } from "MeldAPI/dist/sdk/models/operations";
import { IncomingMeldFrequencyEnum, SuccessfulMeldFrequencyEnum, TimezoneEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.resident.residentCreateForm({
  address: "dolorum",
  contact: {
    businessPhone: "nostrum",
    businessPhoneExt: "officia",
    cellPhone: "dolorum",
    cellPhoneExt: "corrupti",
    fax: "accusamus",
    homePhone: "tempora",
    homePhoneExt: "atque",
    primaryEmail: "Easter63@gmail.com",
    secondaryEmail: "Elinor.Adams@hotmail.com",
    tertiaryEmail: "Justine.Lynch8@gmail.com",
  },
  firstName: "Jo",
  invite: false,
  lastName: "Jaskolski",
  middleName: "sed",
  notes: "sit",
  notificationSettings: {
    incomingMeldFrequency: IncomingMeldFrequencyEnum.Daily,
    smsNotifications: false,
    successfulMeldFrequency: SuccessfulMeldFrequencyEnum.Daily,
    timezone: TimezoneEnum.PacificGambier,
  },
  units: [
    8511,
    279068,
    968865,
  ],
}, {
  pmoAuth2Authentication: "",
}).then((res: ResidentCreateFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [shared.ResidentInput1](../../models/shared/residentinput1.md)                                 | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.ResidentCreateFormSecurity](../../models/operations/residentcreateformsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ResidentCreateFormResponse](../../models/operations/residentcreateformresponse.md)>**


## residentCreateJson

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ResidentCreateJsonResponse } from "MeldAPI/dist/sdk/models/operations";
import { IncomingMeldFrequencyEnum, SuccessfulMeldFrequencyEnum, TimezoneEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.resident.residentCreateJson({
  address: {
    city: "Lake Bettie",
    country: "Bhutan",
    countyProvince: "occaecati",
    line1: "labore",
    line2: "quidem",
    line3: "atque",
    postcode: "79302-6469",
  },
  contact: {
    businessPhone: "provident",
    businessPhoneExt: "repellendus",
    cellPhone: "delectus",
    cellPhoneExt: "voluptates",
    fax: "perferendis",
    homePhone: "est",
    homePhoneExt: "quidem",
    primaryEmail: "Raquel_Pfannerstill@yahoo.com",
    secondaryEmail: "Alessia.Schiller54@yahoo.com",
    tertiaryEmail: "Yvette_Leannon@yahoo.com",
  },
  firstName: "Rae",
  invite: false,
  lastName: "Borer",
  middleName: "esse",
  notes: "amet",
  notificationSettings: {
    incomingMeldFrequency: IncomingMeldFrequencyEnum.Never,
    smsNotifications: false,
    successfulMeldFrequency: SuccessfulMeldFrequencyEnum.Daily,
    timezone: TimezoneEnum.AsiaThimphu,
  },
  units: [
    887265,
    886961,
    880107,
  ],
}, {
  pmoAuth2Authentication: "",
}).then((res: ResidentCreateJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [shared.ResidentInput](../../models/shared/residentinput.md)                                   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.ResidentCreateJsonSecurity](../../models/operations/residentcreatejsonsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ResidentCreateJsonResponse](../../models/operations/residentcreatejsonresponse.md)>**


## residentCreateMultipart

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ResidentCreateMultipartResponse } from "MeldAPI/dist/sdk/models/operations";
import { IncomingMeldFrequencyEnum, SuccessfulMeldFrequencyEnum, TimezoneEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.resident.residentCreateMultipart({
  address: "natus",
  contact: {
    businessPhone: "minima",
    businessPhoneExt: "aspernatur",
    cellPhone: "ex",
    cellPhoneExt: "maiores",
    fax: "corrupti",
    homePhone: "at",
    homePhoneExt: "error",
    primaryEmail: "Genevieve_Walker@yahoo.com",
    secondaryEmail: "Theresia.Parisian96@gmail.com",
    tertiaryEmail: "Tevin10@gmail.com",
  },
  firstName: "Chandler",
  invite: false,
  lastName: "Halvorson",
  middleName: "laboriosam",
  notes: "velit",
  notificationSettings: {
    incomingMeldFrequency: IncomingMeldFrequencyEnum.Never,
    smsNotifications: false,
    successfulMeldFrequency: SuccessfulMeldFrequencyEnum.Daily,
    timezone: TimezoneEnum.AmericaPanama,
  },
  units: [
    160467,
    580107,
    886305,
    597937,
  ],
}, {
  pmoAuth2Authentication: "",
}).then((res: ResidentCreateMultipartResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [shared.ResidentInput1](../../models/shared/residentinput1.md)                                           | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.ResidentCreateMultipartSecurity](../../models/operations/residentcreatemultipartsecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.ResidentCreateMultipartResponse](../../models/operations/residentcreatemultipartresponse.md)>**


## residentDestroy

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ResidentDestroyResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.resident.residentDestroy({
  id: "73e922a5-7a15-4be3-a060-807e2b6e3ab8",
}, {
  pmoAuth2Authentication: "",
}).then((res: ResidentDestroyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ResidentDestroyRequest](../../models/operations/residentdestroyrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.ResidentDestroySecurity](../../models/operations/residentdestroysecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ResidentDestroyResponse](../../models/operations/residentdestroyresponse.md)>**


## residentList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ResidentListResponse } from "MeldAPI/dist/sdk/models/operations";
import { IncomingMeldFrequencyEnum, SuccessfulMeldFrequencyEnum, TimezoneEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.resident.residentList({
  limit: 523006,
  offset: 304446,
  ordering: "ad",
}, {
  pmoAuth2Authentication: "",
}).then((res: ResidentListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ResidentListRequest](../../models/operations/residentlistrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.ResidentListSecurity](../../models/operations/residentlistsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ResidentListResponse](../../models/operations/residentlistresponse.md)>**


## residentPartialUpdateForm

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ResidentPartialUpdateFormResponse } from "MeldAPI/dist/sdk/models/operations";
import { IncomingMeldFrequencyEnum, SuccessfulMeldFrequencyEnum, TimezoneEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.resident.residentPartialUpdateForm({
  patchedResidentInput1: {
    address: "repellat",
    contact: {
      businessPhone: "alias",
      businessPhoneExt: "corporis",
      cellPhone: "perspiciatis",
      cellPhoneExt: "nihil",
      fax: "mollitia",
      homePhone: "voluptas",
      homePhoneExt: "alias",
      primaryEmail: "Waldo.Daniel@hotmail.com",
      secondaryEmail: "Marilyne92@gmail.com",
      tertiaryEmail: "Elsa.Kreiger@yahoo.com",
    },
    firstName: "Loren",
    invite: false,
    lastName: "Ferry",
    middleName: "debitis",
    notes: "laudantium",
    notificationSettings: {
      incomingMeldFrequency: IncomingMeldFrequencyEnum.Daily,
      smsNotifications: false,
      successfulMeldFrequency: SuccessfulMeldFrequencyEnum.Daily,
      timezone: TimezoneEnum.PacificNiue,
    },
    units: [
      592081,
      337477,
    ],
  },
  id: "6f9251a5-a9da-4660-bf57-bfaad4f9efc1",
}, {
  pmoAuth2Authentication: "",
}).then((res: ResidentPartialUpdateFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.ResidentPartialUpdateFormRequest](../../models/operations/residentpartialupdateformrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.ResidentPartialUpdateFormSecurity](../../models/operations/residentpartialupdateformsecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.ResidentPartialUpdateFormResponse](../../models/operations/residentpartialupdateformresponse.md)>**


## residentPartialUpdateJson

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ResidentPartialUpdateJsonResponse } from "MeldAPI/dist/sdk/models/operations";
import { IncomingMeldFrequencyEnum, SuccessfulMeldFrequencyEnum, TimezoneEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.resident.residentPartialUpdateJson({
  patchedResidentInput: {
    address: {
      city: "Goldnerborough",
      country: "Belgium",
      countyProvince: "fugit",
      line1: "cumque",
      line2: "quae",
      line3: "perferendis",
      postcode: "14258",
    },
    contact: {
      businessPhone: "impedit",
      businessPhoneExt: "eos",
      cellPhone: "sapiente",
      cellPhoneExt: "eum",
      fax: "dicta",
      homePhone: "minima",
      homePhoneExt: "beatae",
      primaryEmail: "Lambert_Weber84@yahoo.com",
      secondaryEmail: "Tremaine_Metz39@gmail.com",
      tertiaryEmail: "Geo76@hotmail.com",
    },
    firstName: "Marlene",
    invite: false,
    lastName: "Dickens",
    middleName: "animi",
    notes: "necessitatibus",
    notificationSettings: {
      incomingMeldFrequency: IncomingMeldFrequencyEnum.Never,
      smsNotifications: false,
      successfulMeldFrequency: SuccessfulMeldFrequencyEnum.Immediately,
      timezone: TimezoneEnum.AmericaAntigua,
    },
    units: [
      497777,
    ],
  },
  id: "996312fd-e047-4717-b8ff-61d017476360",
}, {
  pmoAuth2Authentication: "",
}).then((res: ResidentPartialUpdateJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.ResidentPartialUpdateJsonRequest](../../models/operations/residentpartialupdatejsonrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.ResidentPartialUpdateJsonSecurity](../../models/operations/residentpartialupdatejsonsecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.ResidentPartialUpdateJsonResponse](../../models/operations/residentpartialupdatejsonresponse.md)>**


## residentPartialUpdateMultipart

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ResidentPartialUpdateMultipartResponse } from "MeldAPI/dist/sdk/models/operations";
import { IncomingMeldFrequencyEnum, SuccessfulMeldFrequencyEnum, TimezoneEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.resident.residentPartialUpdateMultipart({
  patchedResidentInput1: {
    address: "laborum",
    contact: {
      businessPhone: "sunt",
      businessPhoneExt: "nostrum",
      cellPhone: "fugiat",
      cellPhoneExt: "expedita",
      fax: "aliquid",
      homePhone: "officia",
      homePhoneExt: "suscipit",
      primaryEmail: "Alanis_Kemmer@yahoo.com",
      secondaryEmail: "Anthony_Muller65@yahoo.com",
      tertiaryEmail: "Mollie.Hane@hotmail.com",
    },
    firstName: "Bernie",
    invite: false,
    lastName: "Skiles",
    middleName: "ex",
    notes: "quo",
    notificationSettings: {
      incomingMeldFrequency: IncomingMeldFrequencyEnum.Daily,
      smsNotifications: false,
      successfulMeldFrequency: SuccessfulMeldFrequencyEnum.Immediately,
      timezone: TimezoneEnum.AmericaRegina,
    },
    units: [
      29950,
      561577,
      737254,
    ],
  },
  id: "61891baa-0fe1-4ade-808e-6f8c5f350d8c",
}, {
  pmoAuth2Authentication: "",
}).then((res: ResidentPartialUpdateMultipartResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.ResidentPartialUpdateMultipartRequest](../../models/operations/residentpartialupdatemultipartrequest.md)   | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `security`                                                                                                             | [operations.ResidentPartialUpdateMultipartSecurity](../../models/operations/residentpartialupdatemultipartsecurity.md) | :heavy_check_mark:                                                                                                     | The security requirements to use for the request.                                                                      |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.ResidentPartialUpdateMultipartResponse](../../models/operations/residentpartialupdatemultipartresponse.md)>**


## residentRetrieve

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ResidentRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";
import { IncomingMeldFrequencyEnum, SuccessfulMeldFrequencyEnum, TimezoneEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.resident.residentRetrieve({
  id: "db5a3418-1430-4104-a181-3d5208ece7e2",
}, {
  pmoAuth2Authentication: "",
}).then((res: ResidentRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ResidentRetrieveRequest](../../models/operations/residentretrieverequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.ResidentRetrieveSecurity](../../models/operations/residentretrievesecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ResidentRetrieveResponse](../../models/operations/residentretrieveresponse.md)>**


## residentUpdateForm

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ResidentUpdateFormResponse } from "MeldAPI/dist/sdk/models/operations";
import { IncomingMeldFrequencyEnum, SuccessfulMeldFrequencyEnum, TimezoneEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.resident.residentUpdateForm({
  residentInput1: {
    address: "veniam",
    contact: {
      businessPhone: "nesciunt",
      businessPhoneExt: "expedita",
      cellPhone: "eum",
      cellPhoneExt: "vel",
      fax: "voluptatum",
      homePhone: "magnam",
      homePhoneExt: "exercitationem",
      primaryEmail: "Oswald.Jones92@gmail.com",
      secondaryEmail: "Alessia.Heller39@gmail.com",
      tertiaryEmail: "Shaina.Orn98@hotmail.com",
    },
    firstName: "Terrence",
    invite: false,
    lastName: "Rowe",
    middleName: "occaecati",
    notes: "nemo",
    notificationSettings: {
      incomingMeldFrequency: IncomingMeldFrequencyEnum.Daily,
      smsNotifications: false,
      successfulMeldFrequency: SuccessfulMeldFrequencyEnum.Daily,
      timezone: TimezoneEnum.CanadaSaskatchewan,
    },
    units: [
      254025,
      364912,
    ],
  },
  id: "84273a84-18d1-4623-89fb-0929921aefb9",
}, {
  pmoAuth2Authentication: "",
}).then((res: ResidentUpdateFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ResidentUpdateFormRequest](../../models/operations/residentupdateformrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.ResidentUpdateFormSecurity](../../models/operations/residentupdateformsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ResidentUpdateFormResponse](../../models/operations/residentupdateformresponse.md)>**


## residentUpdateJson

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ResidentUpdateJsonResponse } from "MeldAPI/dist/sdk/models/operations";
import { IncomingMeldFrequencyEnum, SuccessfulMeldFrequencyEnum, TimezoneEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.resident.residentUpdateJson({
  residentInput: {
    address: {
      city: "Framingham",
      country: "Liechtenstein",
      countyProvince: "maxime",
      line1: "magnam",
      line2: "temporibus",
      line3: "quos",
      postcode: "94592",
    },
    contact: {
      businessPhone: "nam",
      businessPhoneExt: "vero",
      cellPhone: "voluptatem",
      cellPhoneExt: "ipsam",
      fax: "vel",
      homePhone: "alias",
      homePhoneExt: "quasi",
      primaryEmail: "Wilford_Hamill@gmail.com",
      secondaryEmail: "Jaden_Hickle@yahoo.com",
      tertiaryEmail: "Kiana_Thompson90@yahoo.com",
    },
    firstName: "Zachariah",
    invite: false,
    lastName: "Jakubowski",
    middleName: "voluptas",
    notes: "debitis",
    notificationSettings: {
      incomingMeldFrequency: IncomingMeldFrequencyEnum.Never,
      smsNotifications: false,
      successfulMeldFrequency: SuccessfulMeldFrequencyEnum.Immediately,
      timezone: TimezoneEnum.EuropeSaratov,
    },
    units: [
      675689,
      231070,
      244889,
    ],
  },
  id: "83c2beb4-7737-43c8-972f-64d1db1f2c43",
}, {
  pmoAuth2Authentication: "",
}).then((res: ResidentUpdateJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ResidentUpdateJsonRequest](../../models/operations/residentupdatejsonrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.ResidentUpdateJsonSecurity](../../models/operations/residentupdatejsonsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ResidentUpdateJsonResponse](../../models/operations/residentupdatejsonresponse.md)>**


## residentUpdateMultipart

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ResidentUpdateMultipartResponse } from "MeldAPI/dist/sdk/models/operations";
import { IncomingMeldFrequencyEnum, SuccessfulMeldFrequencyEnum, TimezoneEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.resident.residentUpdateMultipart({
  residentInput1: {
    address: "illo",
    contact: {
      businessPhone: "accusantium",
      businessPhoneExt: "vel",
      cellPhone: "ea",
      cellPhoneExt: "beatae",
      fax: "vero",
      homePhone: "excepturi",
      homePhoneExt: "eum",
      primaryEmail: "Ed.Metz77@gmail.com",
      secondaryEmail: "Leonora39@hotmail.com",
      tertiaryEmail: "Deangelo22@hotmail.com",
    },
    firstName: "Jayne",
    invite: false,
    lastName: "Bailey",
    middleName: "doloremque",
    notes: "consequatur",
    notificationSettings: {
      incomingMeldFrequency: IncomingMeldFrequencyEnum.Daily,
      smsNotifications: false,
      successfulMeldFrequency: SuccessfulMeldFrequencyEnum.Never,
      timezone: TimezoneEnum.AsiaAshkhabad,
    },
    units: [
      377406,
      705148,
      809365,
    ],
  },
  id: "9b8f759e-ac55-4a97-81d3-11352965bb8a",
}, {
  pmoAuth2Authentication: "",
}).then((res: ResidentUpdateMultipartResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.ResidentUpdateMultipartRequest](../../models/operations/residentupdatemultipartrequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.ResidentUpdateMultipartSecurity](../../models/operations/residentupdatemultipartsecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.ResidentUpdateMultipartResponse](../../models/operations/residentupdatemultipartresponse.md)>**

