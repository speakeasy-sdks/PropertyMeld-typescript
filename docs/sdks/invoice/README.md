# invoice

### Available Operations

* [invoiceAttachmentRetrieve](#invoiceattachmentretrieve)
* [invoiceList](#invoicelist)
* [invoiceRetrieve](#invoiceretrieve)

## invoiceAttachmentRetrieve

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { InvoiceAttachmentRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.invoice.invoiceAttachmentRetrieve({
  id: "e6e13b99-d488-4e1e-91e4-50ad2abd4426",
}, {
  pmoAuth2Authentication: "",
}).then((res: InvoiceAttachmentRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.InvoiceAttachmentRetrieveRequest](../../models/operations/invoiceattachmentretrieverequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.InvoiceAttachmentRetrieveSecurity](../../models/operations/invoiceattachmentretrievesecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.InvoiceAttachmentRetrieveResponse](../../models/operations/invoiceattachmentretrieveresponse.md)>**


## invoiceList

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { InvoiceListDeclined, InvoiceListPaid, InvoiceListResponse, InvoiceListStatus } from "MeldAPI/dist/sdk/models/operations";
import { MethodEnum, Status09fEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.invoice.invoiceList({
  xPmOrg: 586513,
  createdGte: "quos",
  createdInterval: "perferendis",
  createdLte: "magni",
  declined: InvoiceListDeclined.False,
  limit: 369808,
  offset: 4695,
  ordering: "fugit",
  paid: InvoiceListPaid.True,
  paymentRequestedGte: "excepturi",
  paymentRequestedInterval: "tempora",
  paymentRequestedLte: "facilis",
  status: InvoiceListStatus.Approved,
  vendor: "labore",
  vendors: "delectus",
}, {
  pmoAuth2Authentication: "",
}).then((res: InvoiceListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.InvoiceListRequest](../../models/operations/invoicelistrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.InvoiceListSecurity](../../models/operations/invoicelistsecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.InvoiceListResponse](../../models/operations/invoicelistresponse.md)>**


## invoiceRetrieve

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { InvoiceRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";
import { MethodEnum, Status09fEnum } from "MeldAPI/dist/sdk/models/shared";

const sdk = new MeldAPI();

sdk.invoice.invoiceRetrieve({
  xPmOrg: 433288,
  id: "3c969e9a-3efa-477d-bb14-cd66ae395efb",
}, {
  pmoAuth2Authentication: "",
}).then((res: InvoiceRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.InvoiceRetrieveRequest](../../models/operations/invoiceretrieverequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.InvoiceRetrieveSecurity](../../models/operations/invoiceretrievesecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.InvoiceRetrieveResponse](../../models/operations/invoiceretrieveresponse.md)>**

