/**
 * Flowtype definitions for currentRecord
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.10.0
 * @flow
 */

declare module 'N/currentRecord' {

  import type { ClientCurrentRecord } from'N/record';

  declare interface GetCurrentRecordFunction {
    (): ClientCurrentRecord;
    promise(): Promise<ClientCurrentRecord>;
  }

  declare export interface NCurrentRecord {
    get: GetCurrentRecordFunction;
  }

}