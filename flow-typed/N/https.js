/**
 * Flowtype definitions for https
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.10.0
 * @flow
 */

declare module 'N/https' {

  import type {
    ClientResponse as _ClientResponse,
    ServerRequest as _ServerRequest,
    ServerResponse as _ServerResponse,
    HttpDeleteFunction,
    HttpGetFunction,
    HttpPostFunction,
    HttpPutFunction,
    HttpRequestFunction,
    CacheDurationT,
    MethodT,
    RedirectTypeT,
  } from "N/http";
  import type { EncodingT } from "N/encode";
  import type { HashAlgT, SecretKey } from "N/crypto";

  declare interface CreateSecureKeyOptions {
    /**
     * Specifies the encoding for the SecureKey.
     */
    encoding?: Encoding;

    /**
     * A GUID used to generate a secret key. The GUID can resolve to either data or metadata.
     */
    guid: string;
  }
  declare interface CreateSecureStringOptions {
    /**
     * The string to convert to a secure string.
     */
    input: string;

    /**
     * Identifies the encoding that the input string uses. The default value is UTF_8.
     */
    inputEncoding?: Encoding;
  }
  declare interface AppendStringOptions {
    /**
     * The string to append.
     */
    input: string;

    /**
     * The encoding of the string that is being appended.
     */
    encoding: Encoding;
  }
  declare interface AppendSecureStringOptions {
    /**
     * The https.SecureString to append.
     */
    secureString: SecureString;
  }
  declare interface ConvertEncodingOptions {
    /**
     * The encoding to apply to the returned string.
     */
    toEncoding: Encoding;
  }
  declare interface HashOptions {
    /**
     * The hash algorithm. Set the value using the crypto.Hash enum.
     */
    algorithm: HashAlg;
  }
  declare interface HmacOptions {
    /**
     * The hash algorithm. Set by the crypto.Hash enum.
     */
    algorithm: HashAlg;

    /**
     * A key returned from https.createSecureKey(options).
     */
    key: SecretKey;
  }
  declare interface HttpsCreateSecureKeyFunction {
    (options: CreateSecureKeyOptions): SecretKey;
    promise(options: CreateSecureKeyOptions): Promise<SecretKey>;
  }
  declare interface HttpsCreateSecureStringFunction {
    (options: CreateSecureStringOptions): SecureString;
    promise(options: CreateSecureStringOptions): Promise<SecureString>;
  }
  /**
   * Encapsulates data that may be sent to a third-party via an HTTPS call.
   */
  declare export interface SecureString {
    /**
     * Appends a passed in https.SecureString to another https.SecureString.
     */
    appendString(options: AppendStringOptions): SecureString;

    /**
     * Appends a passed in string to a https.SecureString.
     */
    appendSecureString(options: AppendSecureStringOptions): SecureString;

    /**
     * Changes the encoding of a https.SecureString.
     */
    convertEncoding(options: ConvertEncodingOptions): SecureString;

    /**
     * Produces the https.SecureString as a hash.
     */
    hash(options: HashOptions): SecureString;

    /**
     * Produces the https.SecureString as an hmac.
     */
    hmac(options: HmacOptions): SecureString;

    /**
     * Not Documented - 6/9/2016
     */
    toString(): string;
  }

  declare export type ClientResponse = _ClientResponse;
  declare export type ServerRequest = _ServerRequest;
  declare export type ServerResponse = _ServerResponse;
  declare export type GetOptions = _GetOptions;
  declare export type DeleteOptions = _DeleteOptions;
  declare export type PostOptions = _PostOptions;
  declare export type PutOptions = _PutOptions;
  declare export type RequestOptions = _RequestOptions;

  declare export interface NHttps {
    /**
     * Creates a key for the contents of a credential field.
     */
    createSecretKey: HttpsCreateSecureKeyFunction;
    /**
     * Creates an https.SecureString object.
     */
    createSecureString: HttpsCreateSecureStringFunction;
    get: HttpGetFunction;
    delete: HttpDeleteFunction;
    post: HttpPostFunction;
    put: HttpPutFunction;
    request: HttpRequestFunction;
    CacheDuration: CacheDurationT;
    Method: MethodT;
    RedirectType: RedirectTypeT;
    Encoding: EncodingT;
  }

}
