# workLog

### Available Operations

* [workLogList](#workloglist)
* [workLogRetrieve](#worklogretrieve)

## workLogList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { WorkLogListResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.workLog.workLogList({
  xPmOrg: 491201,
  limit: 729828,
  offset: 72350,
  ordering: "ab",
}, {
  pmoAuth2Authentication: "",
}).then((res: WorkLogListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.WorkLogListRequest](../../models/operations/workloglistrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.WorkLogListSecurity](../../models/operations/workloglistsecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.WorkLogListResponse](../../models/operations/workloglistresponse.md)>**


## workLogRetrieve

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { WorkLogRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.workLog.workLogRetrieve({
  xPmOrg: 280114,
  id: "eeb52ff7-85fc-4378-94d4-c98e0c2bb89e",
}, {
  pmoAuth2Authentication: "",
}).then((res: WorkLogRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.WorkLogRetrieveRequest](../../models/operations/worklogretrieverequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.WorkLogRetrieveSecurity](../../models/operations/worklogretrievesecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.WorkLogRetrieveResponse](../../models/operations/worklogretrieveresponse.md)>**

