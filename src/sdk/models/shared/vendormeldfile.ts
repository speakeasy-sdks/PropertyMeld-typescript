/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class VendorMeldFile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "cloned" })
    cloned?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "created" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    created: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "filename" })
    filename: string;

    @SpeakeasyMetadata()
    @Expose({ name: "hidden_from_owner" })
    hiddenFromOwner?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "hidden_from_tenant" })
    hiddenFromTenant?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "hidden_from_vendor" })
    hiddenFromVendor?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "meld" })
    meld: number;

    @SpeakeasyMetadata()
    @Expose({ name: "updated" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updated: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "uploader" })
    uploader: number;

    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url: string;
}
