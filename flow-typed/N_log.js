/**
 * Flowtype definitions for log
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.2.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module "N/log" {
declare interface LogOptions {

    /**
     * String to appear in the Title column on the Execution Log tab of the script deployment. Maximum length is 99 characters. 
     */
    title?: string,

        /**
         * You can pass any value for this parameter.
         * If the value is a JavaScript object type, JSON.stringify(obj) is called on the object before displaying the value.
        NetSuite truncates any resulting string over 3999 characters.
        */
        details: any
}
declare interface LogFunction {
  (title: string, details: any): void;
  (options: LogOptions): void;
}
declare class Log {
  debug: LogFunction;
  audit: LogFunction;
  error: LogFunction;
  emergency: LogFunction;
}
  declare export default Log;
}

import * as Log from 'N/log';
declare var log: typeof Log;
