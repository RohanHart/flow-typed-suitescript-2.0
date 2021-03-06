/**
 * Flowtype definitions for plugin
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.10.0
 */

declare module 'N/plugin' {

  declare interface FindImplementationsOptions {
    type: string;
    includeDefault?: boolean;
  }
  declare interface LoadImplementationOptions {
    type: string;
    implementation?: string;
  }

  declare export interface NPlugin {
    findImplementations(options: FindImplementationsOptions): string[];
    loadImplementation(options: LoadImplementationOptions): any;
  }

}
