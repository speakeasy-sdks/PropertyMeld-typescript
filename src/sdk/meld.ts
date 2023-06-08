/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Meld {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    async meldList(
        req: operations.MeldListRequest,
        security: operations.MeldListSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.MeldListResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.MeldListRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/api/v0.0.1/meld/";

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.MeldListSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.MeldListResponse = new operations.MeldListResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.paginatedMeldSerializerListList = utils.objectToClass(
                        httpRes?.data,
                        shared.PaginatedMeldSerializerListList
                    );
                }
                break;
        }

        return res;
    }

    async meldManagerFilesList(
        req: operations.MeldManagerFilesListRequest,
        security: operations.MeldManagerFilesListSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.MeldManagerFilesListResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.MeldManagerFilesListRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/api/v0.0.1/meld/{id}/manager-files/", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.MeldManagerFilesListSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.MeldManagerFilesListResponse =
            new operations.MeldManagerFilesListResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.paginatedPMApiMeldfileList = utils.objectToClass(
                        httpRes?.data,
                        shared.PaginatedPMApiMeldfileList
                    );
                }
                break;
        }

        return res;
    }

    async meldRetrieve(
        req: operations.MeldRetrieveRequest,
        security: operations.MeldRetrieveSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.MeldRetrieveResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.MeldRetrieveRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/api/v0.0.1/meld/{id}/", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.MeldRetrieveSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.MeldRetrieveResponse = new operations.MeldRetrieveResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.meldSerializerDetail = utils.objectToClass(
                        httpRes?.data,
                        shared.MeldSerializerDetailOutput
                    );
                }
                break;
        }

        return res;
    }

    async meldTenantFilesList(
        req: operations.MeldTenantFilesListRequest,
        security: operations.MeldTenantFilesListSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.MeldTenantFilesListResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.MeldTenantFilesListRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/api/v0.0.1/meld/{id}/tenant-files/", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.MeldTenantFilesListSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.MeldTenantFilesListResponse =
            new operations.MeldTenantFilesListResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.paginatedPmAPITenantMeldList = utils.objectToClass(
                        httpRes?.data,
                        shared.PaginatedPmAPITenantMeldList
                    );
                }
                break;
        }

        return res;
    }

    async meldVendorFilesList(
        req: operations.MeldVendorFilesListRequest,
        security: operations.MeldVendorFilesListSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.MeldVendorFilesListResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.MeldVendorFilesListRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/api/v0.0.1/meld/{id}/vendor-files/", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.MeldVendorFilesListSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.MeldVendorFilesListResponse =
            new operations.MeldVendorFilesListResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.paginatedPMApiVendorMeldFileList = utils.objectToClass(
                        httpRes?.data,
                        shared.PaginatedPMApiVendorMeldFileList
                    );
                }
                break;
        }

        return res;
    }
}
