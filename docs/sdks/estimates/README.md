# estimates

### Available Operations

* [estimatesList](#estimateslist)
* [estimatesRetrieve](#estimatesretrieve)

## estimatesList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { EstimatesListEstimateStatus, EstimatesListResponse } from "MeldAPI/dist/sdk/models/operations";
import { EstimateStatusEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.estimates.estimatesList({
  xPmOrg: 978619,
  estimateStatus: [
    EstimatesListEstimateStatus.EstimateSubmitted,
    EstimatesListEstimateStatus.EstimateSubmitted,
  ],
  limit: 461479,
  offset: 520478,
  ordering: "porro",
}, {
  pmoAuth2Authentication: "",
}).then((res: EstimatesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.EstimatesListRequest](../../models/operations/estimateslistrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.EstimatesListSecurity](../../models/operations/estimateslistsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.EstimatesListResponse](../../models/operations/estimateslistresponse.md)>**


## estimatesRetrieve

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { EstimatesRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";
import { EstimateStatusEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.estimates.estimatesRetrieve({
  xPmOrg: 678880,
  id: "1ba928fc-8167-442c-b739-205929396fea",
}, {
  pmoAuth2Authentication: "",
}).then((res: EstimatesRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.EstimatesRetrieveRequest](../../models/operations/estimatesretrieverequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.EstimatesRetrieveSecurity](../../models/operations/estimatesretrievesecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.EstimatesRetrieveResponse](../../models/operations/estimatesretrieveresponse.md)>**

