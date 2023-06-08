# vendorInvite

### Available Operations

* [vendorInviteCreate](#vendorinvitecreate)

## vendorInviteCreate

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { VendorInviteCreateResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.vendorInvite.vendorInviteCreate({
  vendorInvite: {
    companyName: "fugiat",
    companyPhone: "unde",
    email: "Jeromy62@hotmail.com",
    firstName: "Owen",
    lastName: "Brown",
    line1: "dignissimos",
    postcode: "83139",
  },
  xPmOrg: 482584,
}, {
  pmoAuth2Authentication: "",
}).then((res: VendorInviteCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
