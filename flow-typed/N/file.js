/**
 * Flowtype definitions for file
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.10.0
 * @flow
 */

declare module 'N/file' {

  declare export interface File {
    description: string;
    encoding: string;
    fileType: $Values<TypeT>;
    folder: number;
    +id: number;
    isInactive: boolean;
    isOnline: boolean;
    +isText: boolean;
    name: string;
    +path: string;
    +size: number;
    +url: string;
    save: () => number;
    getContents: () => string;
    resetStream: () => void;
    appendLine: (option: FileAppendLineOptions) => File;
    lines: {
      iterator: () => FileIterator;
      ...
    };
  }
  declare export interface FileIterator {
    each: (options: any) => boolean;
  }
  declare export interface FileAppendLineOptions {
    /**
     * Internal ID of the file as a number or a string, or the relative file path to the file in the file cabinet.
     */
    value: string;
  }
  declare interface FileLoadOptions {
    /**
     * Internal ID of the file as a number or a string, or the relative file path to the file in the file cabinet.
     */
    +id: number | string;
  }
  declare interface FileDeleteOptions {
    /**
     * Internal ID of the file.
     */
    +id: number | string;
  }
  declare interface FileCreateOptions {
    /**
     * The file name.
     */
    name: string;

    /**
     * The file type.
     */
    fileType: $Values<TypeT>;

    /**
     * The file content.
     */
    contents?: string;

    /**
     * The file content.
     */
    description?: string;

    /**
     * The internal ID of the folder used when the file is saved.
     */
    folder?: number;

    /**
     * The file encoding.
     */
    encoding?: $Values<EncodingT>;

    /**
     * The file status.
     */
    isInactive?: boolean;

    /**
     * The file status.
     */
    isOnline?: boolean;
  }

  /**
   * Enumeration that holds the string values for supported character encoding.
   */

  declare type EncodingT = {|
                            +UTF8: 0, // 0
                            +WINDOWS_1252: 1, // 1
                            +ISO_8859_1: 2, // 2
                            +GB18030: 3, // 3
                            +SHIFT_JIS: 4, // 4
                            +MAC_ROMAN: 5, // 5
                            +GB2312: 6, // 6
                            +BIG5: 7 // 7
                            |};

  /**
   * Enumeration that holds the string values for supported file types.
   */

  declare type TypeT = {|
                        +AUTOCAD: 0, // 0
                        +BMPIMAGE: 1, // 1
                        +CSV: 2, // 2
                        +EXCEL: 3, // 3
                        +FLASH: 4, // 4
                        +FREEMARKER: 5, // 5
                        +GIFIMAGE: 6, // 6
                        +GZIP: 7, // 7
                        +HTMLDOC: 8, // 8
                        +ICON: 9, // 9
                        +JAVASCRIPT: 10, // 10
                        +JPGIMAGE: 11, // 11
                        +JSON: 12, // 12
                        +MESSAGERFC: 13, // 13
                        +MP3: 14, // 14
                        +MPEGMOVIE: 15, // 15
                        +MSPROJECT: 16, // 16
                        +PDF: 17, // 17
                        +PJPGIMAGE: 18, // 18
                        +PLAINTEXT: 19, // 19
                        +PNGIMAGE: 20, // 20
                        +POSTSCRIPT: 21, // 21
                        +POWERPOINT: 22, // 22
                        +QUICKTIME: 23, // 23
                        +RTF: 24, // 24
                        +SMS: 25, // 25
                        +STYLESHEET: 26, // 26
                        +TAR: 27, // 27
                        +TIFFIMAGE: 28, // 28
                        +VISIO: 29, // 29
                        +WEBAPPPAGE: 30, // 30
                        +WEBAPPSCRIPT: 31, // 31
                        +WORD: 32, // 32
                        +XMLDOC: 33, // 33
                        +XSD: 34, // 34
                        +ZIP: 35 // 35
                        |};

  declare export interface NFile {
    /**
     * Method used to create a new file in the NetSuite file cabinet.
     */
    create(options: FileCreateOptions): File;

    /**
     * Method used to delete an existing file from the NetSuite file cabinet.
     */
    delete(options: FileDeleteOptions): void;

    /**
     * Method used to load an existing file from the NetSuite file cabinet.
     */
    load(options: FileLoadOptions): File;

    /**
     * Method used to load an existing file from the NetSuite file cabinet.
     */
    load(idOrPath: number | string): File;
  }
}
