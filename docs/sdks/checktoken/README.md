# checkToken

### Available Operations

* [checkTokenRetrieve](#checktokenretrieve) - Used to check the validity of an oauth2 token

## checkTokenRetrieve

Used to check the validity of an oauth2 token

### Example Usage

```typescript
import { MeldAPI } from "MeldAPI";
import { CheckTokenRetrieveResponse } from "MeldAPI/dist/sdk/models/operations";

const sdk = new MeldAPI();

sdk.checkToken.checkTokenRetrieve({
  pmoAuth2Authentication: "",
}).then((res: CheckTokenRetrieveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `security`                                                                                     | [operations.CheckTokenRetrieveSecurity](../../models/operations/checktokenretrievesecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CheckTokenRetrieveResponse](../../models/operations/checktokenretrieveresponse.md)>**

