# managerFile

### Available Operations

* [managerFileList](#managerfilelist)

## managerFileList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ManagerFileListResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.managerFile.managerFileList({
  xPmOrg: 968962,
  limit: 652103,
  offset: 320997,
  ordering: "eum",
}, {
  pmoAuth2Authentication: "",
}).then((res: ManagerFileListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ManagerFileListRequest](../../models/operations/managerfilelistrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.ManagerFileListSecurity](../../models/operations/managerfilelistsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ManagerFileListResponse](../../models/operations/managerfilelistresponse.md)>**

