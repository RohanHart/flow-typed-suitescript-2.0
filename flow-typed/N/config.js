/**
 * Flowtype definitions for config
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.10.0
 * @flow
 */

declare module 'N/config' {

  import type { NSRecord as Record } from 'N/record';

  declare export interface LoadOptions {
    /**
     * Use the config.Type enumeration.
     */
    type: $Values<typeof Type>;
  }

  declare type TypeT = {|
                       +USER_PREFERENCES: 0, // 0
                       +COMPANY_INFORMATION: 1, // 1
                       +COMPANY_PREFERENCES: 2, // 2
                       +ACCOUNTING_PREFERENCES: 3, // 3
                       +ACCOUNTING_PERIODS: 4, // 4
                       +TAX_PERIODS: 5, // 5
                       +FEATURES: 6 // 6
                       |};

  declare export interface NConfig {
    /**
     * Method used to load a record.Record object that encapsulates the specified NetSuite configuration page.
     */
    load(options: LoadOptions): Record;

    /**
     * Enumeration that holds the string values for supported configuration pages.
     * This enum is used to set the value of the Record.type property.
     * Note that the Record.type property is read-only.
     */
    Type: TypeT;
  }

}