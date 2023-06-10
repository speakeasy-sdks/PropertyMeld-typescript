# propertyGroup

### Available Operations

* [propertyGroupList](#propertygrouplist)
* [propertyGroupRetrieve](#propertygroupretrieve)

## propertyGroupList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { PropertyGroupListResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.propertyGroup.propertyGroupList({
  xPmOrg: 888044,
  limit: 505866,
  offset: 708609,
  ordering: "quaerat",
}, {
  pmoAuth2Authentication: "",
}).then((res: PropertyGroupListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.PropertyGroupListRequest](../../models/operations/propertygrouplistrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.PropertyGroupListSecurity](../../models/operations/propertygrouplistsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.PropertyGroupListResponse](../../models/operations/propertygrouplistresponse.md)>**


## propertyGroupRetrieve

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { PropertyGroupRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.propertyGroup.propertyGroupRetrieve({
  xPmOrg: 277773,
  id: "5e80ca55-efd2-40e4-97e1-858b6a89fbe3",
}, {
  pmoAuth2Authentication: "",
}).then((res: PropertyGroupRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.PropertyGroupRetrieveRequest](../../models/operations/propertygroupretrieverequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.PropertyGroupRetrieveSecurity](../../models/operations/propertygroupretrievesecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PropertyGroupRetrieveResponse](../../models/operations/propertygroupretrieveresponse.md)>**

