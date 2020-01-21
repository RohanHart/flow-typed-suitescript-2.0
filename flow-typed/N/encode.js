/**
 * Flowtype definitions for encode
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.10.0
 * @flow
 */

declare module 'N/encode' {

  declare export interface ConvertOptions {
    string: string;
    inputEncoding: $Values<EncodingT>;
    outputEncoding: $Values<EncodingT>;
  }

  declare export type EncodingT = {|
                   +UTF_8: 0, // 0
                   +BASE_16: 1, // 1
                   +BASE_32: 2, // 2
                   +BASE_64: 3, // 3
                   +BASE_64_URL_SAFE: 4, // 4
                   +HEX: 5 // 5
                   |};

  declare export interface NEncode {
    /**
     * Converts a string to another type of encoding and returns the re-encoded string.
     */
    convert(options: ConvertOptions): string;

    Encoding: EncodingT;
  }

}
