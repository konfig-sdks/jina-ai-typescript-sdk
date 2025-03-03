/* tslint:disable */
/* eslint-disable */
/*
The Jina Embedding Serving API

This is the UniversalAPI to access all the Jina embedding models

The version of the OpenAPI document: 0.0.86


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ApiSchemasMultiEmbeddingsTextEmbeddingInput } from '../models';
// @ts-ignore
import { ColbertModelEmbeddingsOutput } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { InputProperty1 } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * MultiEmbeddingsApi - axios parameter creator
 * @export
 */
export const MultiEmbeddingsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create embedding representations of the given input texts.
         * @summary Create Multi Embeddings
         * @param {ApiSchemasMultiEmbeddingsTextEmbeddingInput} apiSchemasMultiEmbeddingsTextEmbeddingInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateEmbeddings: async (apiSchemasMultiEmbeddingsTextEmbeddingInput: ApiSchemasMultiEmbeddingsTextEmbeddingInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiSchemasMultiEmbeddingsTextEmbeddingInput' is not null or undefined
            assertParamExists('generateEmbeddings', 'apiSchemasMultiEmbeddingsTextEmbeddingInput', apiSchemasMultiEmbeddingsTextEmbeddingInput)
            const localVarPath = `/v1/multi-embeddings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: apiSchemasMultiEmbeddingsTextEmbeddingInput,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/multi-embeddings',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(apiSchemasMultiEmbeddingsTextEmbeddingInput, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MultiEmbeddingsApi - functional programming interface
 * @export
 */
export const MultiEmbeddingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MultiEmbeddingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create embedding representations of the given input texts.
         * @summary Create Multi Embeddings
         * @param {MultiEmbeddingsApiGenerateEmbeddingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generateEmbeddings(requestParameters: MultiEmbeddingsApiGenerateEmbeddingsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ColbertModelEmbeddingsOutput>> {
            const apiSchemasMultiEmbeddingsTextEmbeddingInput: ApiSchemasMultiEmbeddingsTextEmbeddingInput = {
                model: requestParameters.model,
                input: requestParameters.input,
                input_type: requestParameters.input_type,
                encoding_format: requestParameters.encoding_format
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.generateEmbeddings(apiSchemasMultiEmbeddingsTextEmbeddingInput, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MultiEmbeddingsApi - factory interface
 * @export
 */
export const MultiEmbeddingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MultiEmbeddingsApiFp(configuration)
    return {
        /**
         * Create embedding representations of the given input texts.
         * @summary Create Multi Embeddings
         * @param {MultiEmbeddingsApiGenerateEmbeddingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateEmbeddings(requestParameters: MultiEmbeddingsApiGenerateEmbeddingsRequest, options?: AxiosRequestConfig): AxiosPromise<ColbertModelEmbeddingsOutput> {
            return localVarFp.generateEmbeddings(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for generateEmbeddings operation in MultiEmbeddingsApi.
 * @export
 * @interface MultiEmbeddingsApiGenerateEmbeddingsRequest
 */
export type MultiEmbeddingsApiGenerateEmbeddingsRequest = {
    
} & ApiSchemasMultiEmbeddingsTextEmbeddingInput

/**
 * MultiEmbeddingsApiGenerated - object-oriented interface
 * @export
 * @class MultiEmbeddingsApiGenerated
 * @extends {BaseAPI}
 */
export class MultiEmbeddingsApiGenerated extends BaseAPI {
    /**
     * Create embedding representations of the given input texts.
     * @summary Create Multi Embeddings
     * @param {MultiEmbeddingsApiGenerateEmbeddingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MultiEmbeddingsApiGenerated
     */
    public generateEmbeddings(requestParameters: MultiEmbeddingsApiGenerateEmbeddingsRequest, options?: AxiosRequestConfig) {
        return MultiEmbeddingsApiFp(this.configuration).generateEmbeddings(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
