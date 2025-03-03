/*
The Jina Embedding Serving API

This is the UniversalAPI to access all the Jina embedding models

The version of the OpenAPI document: 0.0.86


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * BaseDoc is the base class for all Documents. This class should be subclassed to create new Document types with a specific schema.  The schema of a Document is defined by the fields of the class.  Example: ```python from docarray import BaseDoc from docarray.typing import NdArray, ImageUrl import numpy as np   class MyDoc(BaseDoc):     embedding: NdArray[512]     image: ImageUrl   doc = MyDoc(embedding=np.zeros(512), image=\'https://example.com/image.jpg\') ```   BaseDoc is a subclass of [pydantic.BaseModel](https://docs.pydantic.dev/usage/models/) and can be used in a similar way.
 * @export
 * @interface ImageDoc
 */
export interface ImageDoc {
    /**
     * The ID of the BaseDoc. This is useful for indexing in vector stores. If not set by user, it will automatically be assigned a random value
     * @type {string}
     * @memberof ImageDoc
     */
    'id'?: string;
    /**
     * URL of an image file
     * @type {string}
     * @memberof ImageDoc
     */
    'url'?: string;
    /**
     * Bytes representation of the Image.
     * @type {Uint8Array | File | buffer.File}
     * @memberof ImageDoc
     */
    'bytes'?: Uint8Array | File | buffer.File;
}

