/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProjectProperty } from "./projectproperty";
import { Expose, Transform, Type } from "class-transformer";

export class PmAPIUnit extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "apartment" })
    apartment?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    created: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "department" })
    department?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "is_active" })
    isActive?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "maintenance_notes" })
    maintenanceNotes?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "prop" })
    @Type(() => ProjectProperty)
    prop: ProjectProperty;

    @SpeakeasyMetadata()
    @Expose({ name: "room" })
    room?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "suite" })
    suite?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "unit" })
    unit?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updated" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updated: Date;
}
