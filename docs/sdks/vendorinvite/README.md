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

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.VendorInviteCreateRequest](../../models/operations/vendorinvitecreaterequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.VendorInviteCreateSecurity](../../models/operations/vendorinvitecreatesecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.VendorInviteCreateResponse](../../models/operations/vendorinvitecreateresponse.md)>**

