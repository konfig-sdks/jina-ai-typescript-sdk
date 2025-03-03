/*
The Jina Embedding Serving API

This is the UniversalAPI to access all the Jina embedding models

The version of the OpenAPI document: 0.0.86


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  BulkEmbeddingsApi,
  EmbeddingsApi,
  HealthApi,
  MultiEmbeddingsApi,
  RerankApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { JinaAiCustom } from "./client-custom";

export class JinaAi extends JinaAiCustom {
  readonly bulkEmbeddings: BulkEmbeddingsApi;
  readonly embeddings: EmbeddingsApi;
  readonly health: HealthApi;
  readonly multiEmbeddings: MultiEmbeddingsApi;
  readonly rerank: RerankApi;

  constructor(configurationParameters: ConfigurationParameters = {}) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.bulkEmbeddings = new BulkEmbeddingsApi(configuration);
    this.embeddings = new EmbeddingsApi(configuration);
    this.health = new HealthApi(configuration);
    this.multiEmbeddings = new MultiEmbeddingsApi(configuration);
    this.rerank = new RerankApi(configuration);
  }

}
