# residentFile

### Available Operations

* [residentFileList](#residentfilelist)

## residentFileList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { ResidentFileListResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.residentFile.residentFileList({
  xPmOrg: 487676,
  limit: 144691,
  offset: 545,
  ordering: "magni",
}, {
  pmoAuth2Authentication: "",
}).then((res: ResidentFileListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ResidentFileListRequest](../../models/operations/residentfilelistrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.ResidentFileListSecurity](../../models/operations/residentfilelistsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ResidentFileListResponse](../../models/operations/residentfilelistresponse.md)>**

