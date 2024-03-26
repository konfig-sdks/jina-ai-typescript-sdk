<div align="center">

[![Visit Jina ai](./header.png)](https://jina.ai)

# [Jina ai](https://jina.ai)<a id="jina-ai"></a>

This is the UniversalAPI to access all the Jina embedding models

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`jinaai.bulkEmbeddings.downloadResultPost`](#jinaaibulkembeddingsdownloadresultpost)
  * [`jinaai.bulkEmbeddings.getJob`](#jinaaibulkembeddingsgetjob)
  * [`jinaai.bulkEmbeddings.uploadFileAndGetEmbeddings`](#jinaaibulkembeddingsuploadfileandgetembeddings)
  * [`jinaai.embeddings.createRepresentation`](#jinaaiembeddingscreaterepresentation)
  * [`jinaai.health.checkStatus`](#jinaaihealthcheckstatus)
  * [`jinaai.multiEmbeddings.generateEmbeddings`](#jinaaimultiembeddingsgenerateembeddings)
  * [`jinaai.rerank.pairRanking`](#jinaairerankpairranking)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Jina%20AI&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { JinaAi } from "jina-ai-typescript-sdk";

const jinaai = new JinaAi({
  // Defining the base path is optional and defaults to https://api.jina.ai
  // basePath: "https://api.jina.ai",
  accessToken: "ACCESS_TOKEN",
});

const downloadResultPostResponse =
  await jinaai.bulkEmbeddings.downloadResultPost({
    jobId: "jobId_example",
  });

console.log(downloadResultPostResponse);
```

## Reference<a id="reference"></a>


### `jinaai.bulkEmbeddings.downloadResultPost`<a id="jinaaibulkembeddingsdownloadresultpost"></a>

Download Result

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const downloadResultPostResponse =
  await jinaai.bulkEmbeddings.downloadResultPost({
    jobId: "jobId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### jobId: `string`<a id="jobid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DownloadResultResponse](./models/download-result-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/bulk-embeddings/{job_id}/download-result` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `jinaai.bulkEmbeddings.getJob`<a id="jinaaibulkembeddingsgetjob"></a>

Retrieve Job

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getJobResponse = await jinaai.bulkEmbeddings.getJob({
  jobId: "jobId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### jobId: `string`<a id="jobid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[BulkEmbeddingJobResponse](./models/bulk-embedding-job-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/bulk-embeddings/{job_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `jinaai.bulkEmbeddings.uploadFileAndGetEmbeddings`<a id="jinaaibulkembeddingsuploadfileandgetembeddings"></a>

Upload a file and get embeddings for each row

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadFileAndGetEmbeddingsResponse =
  await jinaai.bulkEmbeddings.uploadFileAndGetEmbeddings({
    file: fs.readFileSync("/path/to/file"),
    model: "model_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

##### model: `string`<a id="model-string"></a>

##### email: `string`<a id="email-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[BulkEmbeddingJobResponse](./models/bulk-embedding-job-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/bulk-embeddings` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `jinaai.embeddings.createRepresentation`<a id="jinaaiembeddingscreaterepresentation"></a>

Create embedding representations of the given input texts.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRepresentationResponse =
  await jinaai.embeddings.createRepresentation({
    model: "jina-embeddings-v2-base-en",
    input: ["string_example"],
    encoding_format: "float",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### model: `string`<a id="model-string"></a>

The identifier of the model.  Available models and corresponding param size and dimension: - `jina-embedding-t-en-v1`, 14m, 312 - `jina-embedding-s-en-v1`, 35m, 512 (default) - `jina-embedding-b-en-v1`, 110m, 768 - `jina-embedding-l-en-v1`, 330, 1024  For more information, please checkout our [technical blog](https://arxiv.org/abs/2307.11224). 

##### input: [`InputProperty`](./models/input-property.ts)<a id="input-inputpropertymodelsinput-propertyts"></a>

##### encoding_format: `string`<a id="encoding_format-string"></a>

The format in which you want the embeddings to be returned.Possible value are `float` and `base64`. Defaults to `float`

#### 🔄 Return<a id="🔄-return"></a>

[ModelEmbeddingOutput](./models/model-embedding-output.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/embeddings` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `jinaai.health.checkStatus`<a id="jinaaihealthcheckstatus"></a>

Get the health of this Gateway service.
.. # noqa: DAR201

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkStatusResponse = await jinaai.health.checkStatus();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `jinaai.multiEmbeddings.generateEmbeddings`<a id="jinaaimultiembeddingsgenerateembeddings"></a>

Create embedding representations of the given input texts.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateEmbeddingsResponse =
  await jinaai.multiEmbeddings.generateEmbeddings({
    model: "jina-colbert-v1-en",
    input: ["string_example"],
    input_type: "document",
    encoding_format: "float",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### model: `string`<a id="model-string"></a>

The identifier of the model.  Available models and corresponding param size and dimension: - `jina-embedding-t-en-v1`, 14m, 312 - `jina-embedding-s-en-v1`, 35m, 512 (default) - `jina-embedding-b-en-v1`, 110m, 768 - `jina-embedding-l-en-v1`, 330, 1024  For more information, please checkout our [technical blog](https://arxiv.org/abs/2307.11224). 

##### input: [`InputProperty1`](./models/input-property1.ts)<a id="input-inputproperty1modelsinput-property1ts"></a>

##### input_type: `string`<a id="input_type-string"></a>

Type of the embedding to compute, query or document

##### encoding_format: `string`<a id="encoding_format-string"></a>

The format in which you want the embeddings to be returned.Possible value are `float` and `base64`. Defaults to `float`

#### 🔄 Return<a id="🔄-return"></a>

[ColbertModelEmbeddingsOutput](./models/colbert-model-embeddings-output.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/multi-embeddings` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `jinaai.rerank.pairRanking`<a id="jinaairerankpairranking"></a>

Rank pairs.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const pairRankingResponse = await jinaai.rerank.pairRanking({
  model: "jina-reranker-v1-base-en",
  query: "string_example",
  documents: ["string_example"],
  return_documents: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### model: `string`<a id="model-string"></a>

The identifier of the model.  Available models and corresponding param size and dimension: - `jina-embedding-t-en-v1`, 14m, 312 - `jina-embedding-s-en-v1`, 35m, 512 (default) - `jina-embedding-b-en-v1`, 110m, 768 - `jina-embedding-l-en-v1`, 330, 1024  For more information, please checkout our [technical blog](https://arxiv.org/abs/2307.11224). 

##### query: [`QueryProperty`](./models/query-property.ts)<a id="query-querypropertymodelsquery-propertyts"></a>

##### documents: [`DocumentsProperty`](./models/documents-property.ts)<a id="documents-documentspropertymodelsdocuments-propertyts"></a>

##### top_n: `number`<a id="top_n-number"></a>

The number of most relevant documents or indices to return, defaults to the length of `documents`

##### return_documents: `boolean`<a id="return_documents-boolean"></a>

If false, returns results without the doc text - the api will return a list of {index, relevance score} where index is inferred from the list passed into the request. If true, returns results with the doc text passed in - the api will return an ordered list of {index, text, relevance score} where index + text refers to the list passed into the request. Defaults to true

#### 🔄 Return<a id="🔄-return"></a>

[RankingOutput](./models/ranking-output.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/rerank` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
