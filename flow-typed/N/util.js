/**
 * Flowtype definitions for util
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.10.0
 * @flow
 */

declare interface NUtil {

  isArray(obj: any): boolean;
  isBoolean(obj: any): boolean;
  isDate(obj: any): boolean;
  isNumber(obj: any): boolean;
  isObject(obj: any): boolean;
  isRegExp(obj: any): boolean;
  isString(obj: any): boolean;
  isFunction(obj: any): boolean;

  /**
   * Returns the number of nanoseconds elapsed since an arbitrary epoch.
   * Use this to calculate the time between two events.
   */
  nanoTime(): number;

  /**
   * Iterate over each element of an array or each property of an object.
   * @param iterable
   * @param callback
   */
  each<T>(
    iterable: T[],
    callback: (item: T, idx: number, iterable: T[]) => void
  ): T[];
  each<T>(
    iterable: T,
    callback: (property: any, key: $Keys<T>, iterable: T) => void
  ): T;

  /**
   * Copy all properties from contributor into receiver.
   * Properties in contributor that are already in receiver get overwritten.
   * @param receiver
   * @param contributor
   */
  extend<T, U>(receiver: T, contributor: U): T & U;
}

declare export var util: NUtil;
