/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Address } from "./address";
import { Expose, Transform, Type } from "class-transformer";

export class Vendor extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => Address)
    address: Address;

    @SpeakeasyMetadata()
    @Expose({ name: "created" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    created: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "excluded_property_groups" })
    excludedPropertyGroups: number[];

    /**
     * Home phone number. Must be in E.164 format, e.g. '+14155552671'.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fax" })
    fax?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "is_active" })
    isActive: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Home phone number. Must be in E.164 format, e.g. '+14155552671'.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updated" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updated: Date;
}
