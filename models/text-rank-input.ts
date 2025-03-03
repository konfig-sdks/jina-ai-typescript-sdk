/*
The Jina Embedding Serving API

This is the UniversalAPI to access all the Jina embedding models

The version of the OpenAPI document: 0.0.86


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DocumentsProperty } from './documents-property';
import { QueryProperty } from './query-property';

/**
 * The input to the API for text embedding. OpenAI compatible
 * @export
 * @interface TextRankInput
 */
export interface TextRankInput {
    /**
     * The identifier of the model.  Available models and corresponding param size and dimension: - `jina-embedding-t-en-v1`, 14m, 312 - `jina-embedding-s-en-v1`, 35m, 512 (default) - `jina-embedding-b-en-v1`, 110m, 768 - `jina-embedding-l-en-v1`, 330, 1024  For more information, please checkout our [technical blog](https://arxiv.org/abs/2307.11224). 
     * @type {string}
     * @memberof TextRankInput
     */
    'model': string;
    /**
     * 
     * @type {QueryProperty}
     * @memberof TextRankInput
     */
    'query': QueryProperty;
    /**
     * 
     * @type {DocumentsProperty}
     * @memberof TextRankInput
     */
    'documents': DocumentsProperty;
    /**
     * The number of most relevant documents or indices to return, defaults to the length of `documents`
     * @type {number}
     * @memberof TextRankInput
     */
    'top_n'?: number;
    /**
     * If false, returns results without the doc text - the api will return a list of {index, relevance score} where index is inferred from the list passed into the request. If true, returns results with the doc text passed in - the api will return an ordered list of {index, text, relevance score} where index + text refers to the list passed into the request. Defaults to true
     * @type {boolean}
     * @memberof TextRankInput
     */
    'return_documents'?: boolean;
}

