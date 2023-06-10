# managementAgent

### Available Operations

* [managementAgentList](#managementagentlist)
* [managementAgentRetrieve](#managementagentretrieve)

## managementAgentList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ManagementAgentListResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.managementAgent.managementAgentList({
  xPmOrg: 588465,
  limit: 725255,
  offset: 659669,
  ordering: "blanditiis",
}, {
  pmoAuth2Authentication: "",
}).then((res: ManagementAgentListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ManagementAgentListRequest](../../models/operations/managementagentlistrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.ManagementAgentListSecurity](../../models/operations/managementagentlistsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ManagementAgentListResponse](../../models/operations/managementagentlistresponse.md)>**


## managementAgentRetrieve

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ManagementAgentRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.managementAgent.managementAgentRetrieve({
  xPmOrg: 533206,
  id: "f3a66997-074b-4a44-a9b6-e2141959890a",
}, {
  pmoAuth2Authentication: "",
}).then((res: ManagementAgentRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.ManagementAgentRetrieveRequest](../../models/operations/managementagentretrieverequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.ManagementAgentRetrieveSecurity](../../models/operations/managementagentretrievesecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.ManagementAgentRetrieveResponse](../../models/operations/managementagentretrieveresponse.md)>**

