/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BaseUser } from "./baseuser";
import { Expose, Transform, Type } from "class-transformer";

export class MeldListViewManagementAgent extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "created" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    created: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updated" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updated: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => BaseUser)
    user: BaseUser;
}
