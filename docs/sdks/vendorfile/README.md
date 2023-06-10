# vendorFile

### Available Operations

* [vendorFileList](#vendorfilelist)

## vendorFileList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { VendorFileListResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.vendorFile.vendorFileList({
  xPmOrg: 480061,
  limit: 664965,
  offset: 522176,
  ordering: "eligendi",
}, {
  pmoAuth2Authentication: "",
}).then((res: VendorFileListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.VendorFileListRequest](../../models/operations/vendorfilelistrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.VendorFileListSecurity](../../models/operations/vendorfilelistsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.VendorFileListResponse](../../models/operations/vendorfilelistresponse.md)>**

