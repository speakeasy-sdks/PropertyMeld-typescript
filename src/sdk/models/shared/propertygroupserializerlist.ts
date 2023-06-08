/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class PropertyGroupSerializerList extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "created" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    created: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updated" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updated: Date;
}
