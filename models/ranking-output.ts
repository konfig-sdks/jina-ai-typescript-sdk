/*
The Jina Embedding Serving API

This is the UniversalAPI to access all the Jina embedding models

The version of the OpenAPI document: 0.0.86


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ApiSchemasRankUsage } from './api-schemas-rank-usage';

/**
 * Output of the embedding service
 * @export
 * @interface RankingOutput
 */
export interface RankingOutput {
    /**
     * The identifier of the model.  Available models and corresponding param size and dimension: - `jina-embedding-t-en-v1`, 14m, 312 - `jina-embedding-s-en-v1`, 35m, 512 (default) - `jina-embedding-b-en-v1`, 110m, 768 - `jina-embedding-l-en-v1`, 330, 1024  For more information, please checkout our [technical blog](https://arxiv.org/abs/2307.11224). 
     * @type {string}
     * @memberof RankingOutput
     */
    'model': string;
    /**
     * An ordered list of ranked documents
     * @type {Array<any>}
     * @memberof RankingOutput
     */
    'results': Array<any>;
    /**
     * Total usage of the request.
     * @type {ApiSchemasRankUsage}
     * @memberof RankingOutput
     */
    'usage': ApiSchemasRankUsage;
}

