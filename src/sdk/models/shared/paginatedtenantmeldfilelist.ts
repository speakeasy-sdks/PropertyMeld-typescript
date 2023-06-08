/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TenantMeldFile } from "./tenantmeldfile";
import { Expose, Type } from "class-transformer";

export class PaginatedTenantMeldFileList extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "count" })
    count?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "next" })
    next?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "previous" })
    previous?: string;

    @SpeakeasyMetadata({ elemType: TenantMeldFile })
    @Expose({ name: "results" })
    @Type(() => TenantMeldFile)
    results?: TenantMeldFile[];
}
