# floor

### Available Operations

* [floorList](#floorlist)
* [floorRetrieve](#floorretrieve)

## floorList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { FloorListResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.floor.floorList({
  xPmOrg: 317202,
  limit: 138183,
  offset: 778346,
  ordering: "sequi",
}, {
  pmoAuth2Authentication: "",
}).then((res: FloorListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.FloorListRequest](../../models/operations/floorlistrequest.md)   | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.FloorListSecurity](../../models/operations/floorlistsecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.FloorListResponse](../../models/operations/floorlistresponse.md)>**


## floorRetrieve

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { FloorRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.floor.floorRetrieve({
  xPmOrg: 949572,
  id: "5ad019da-1ffe-478f-897b-0074f15471b5",
}, {
  pmoAuth2Authentication: "",
}).then((res: FloorRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.FloorRetrieveRequest](../../models/operations/floorretrieverequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.FloorRetrieveSecurity](../../models/operations/floorretrievesecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.FloorRetrieveResponse](../../models/operations/floorretrieveresponse.md)>**

