# vendor

### Available Operations

* [vendorDestroy](#vendordestroy)
* [vendorList](#vendorlist)
* [vendorRetrieve](#vendorretrieve)

## vendorDestroy

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { VendorDestroyResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.vendor.vendorDestroy({
  id: "e189dbb3-0fcb-433e-a055-b197cd44e2f5",
}, {
  pmoAuth2Authentication: "",
}).then((res: VendorDestroyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.VendorDestroyRequest](../../models/operations/vendordestroyrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.VendorDestroySecurity](../../models/operations/vendordestroysecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.VendorDestroyResponse](../../models/operations/vendordestroyresponse.md)>**


## vendorList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { VendorListResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.vendor.vendorList({
  xPmOrg: 164532,
  limit: 813880,
  offset: 512905,
  ordering: "odit",
}, {
  pmoAuth2Authentication: "",
}).then((res: VendorListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.VendorListRequest](../../models/operations/vendorlistrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.VendorListSecurity](../../models/operations/vendorlistsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.VendorListResponse](../../models/operations/vendorlistresponse.md)>**


## vendorRetrieve

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { VendorRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.vendor.vendorRetrieve({
  id: "d3513bb6-f48b-4656-bcdb-35ff2e4b2753",
}, {
  pmoAuth2Authentication: "",
}).then((res: VendorRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.VendorRetrieveRequest](../../models/operations/vendorretrieverequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.VendorRetrieveSecurity](../../models/operations/vendorretrievesecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.VendorRetrieveResponse](../../models/operations/vendorretrieveresponse.md)>**

