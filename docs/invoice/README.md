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
