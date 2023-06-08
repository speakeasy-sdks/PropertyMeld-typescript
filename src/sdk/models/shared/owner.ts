/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Address } from "./address";
import { Contact } from "./contact";
import { HubAccessLevelEnum } from "./hubaccesslevelenum";
import { Expose, Transform, Type } from "class-transformer";

export class OwnerInput extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "form, name=address;json=true, multipart_form, name=address;json=true",
    })
    @Expose({ name: "address" })
    @Type(() => Address)
    address?: Address;

    @SpeakeasyMetadata({
        data: "form, name=contact;json=true, multipart_form, name=contact;json=true",
    })
    @Expose({ name: "contact" })
    @Type(() => Contact)
    contact?: Contact;

    @SpeakeasyMetadata({ data: "form, name=email, multipart_form, name=email" })
    @Expose({ name: "email" })
    email: string;

    @SpeakeasyMetadata({ data: "form, name=first_name, multipart_form, name=first_name" })
    @Expose({ name: "first_name" })
    firstName: string;

    @SpeakeasyMetadata({
        data: "form, name=hub_access_level, multipart_form, name=hub_access_level",
    })
    @Expose({ name: "hub_access_level" })
    hubAccessLevel?: HubAccessLevelEnum;

    @SpeakeasyMetadata({ data: "form, name=invited_to_hub, multipart_form, name=invited_to_hub" })
    @Expose({ name: "invited_to_hub" })
    invitedToHub?: boolean;

    @SpeakeasyMetadata({ data: "form, name=last_name, multipart_form, name=last_name" })
    @Expose({ name: "last_name" })
    lastName: string;

    @SpeakeasyMetadata({ data: "form, name=properties, multipart_form, name=properties" })
    @Expose({ name: "properties" })
    properties?: number[];
}

export class Owner extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => Address)
    address?: Address;

    @SpeakeasyMetadata()
    @Expose({ name: "contact" })
    @Type(() => Contact)
    contact?: Contact;

    @SpeakeasyMetadata()
    @Expose({ name: "created" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    created: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "hub_access_level" })
    hubAccessLevel?: HubAccessLevelEnum;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "invited_to_hub" })
    invitedToHub?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "is_active" })
    isActive: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "properties" })
    properties?: number[];

    @SpeakeasyMetadata()
    @Expose({ name: "updated" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updated: Date;
}
