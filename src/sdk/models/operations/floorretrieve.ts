/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class FloorRetrieveSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    pmoAuth2Authentication: string;
}

export class FloorRetrieveRequest extends SpeakeasyBase {
    /**
     * The management ID (MID), found in the first number of your URL when logged in:  https://app.propertymeld.com/{MID}/m/123
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Pm-Org" })
    xPmOrg: number;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class FloorRetrieveResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    floorSerializerDetail?: shared.FloorSerializerDetail;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
