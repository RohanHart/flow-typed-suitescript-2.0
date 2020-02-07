/**
 * Flowtype definitions for format
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.10.0
 * @flow
 */

declare module 'N/format' {

  import type { FieldValue } from 'N/record';

  declare export interface FormatOptions {
    /**
     * The input data to format.
     */
    +value: Date | string | number;

    /**
     * The field type (for example, DATE, CURRENCY, INTEGER). Set using the format.Type enum.
     */
    +type: $Values<TypeT>;
  }
  declare export interface FormatDateTimeOptions {
    /**
     * The Date Object being converted into a string.
     * If parsing a string to a timezone, the string must include seconds.
     */
    +value: FieldValue | Date | string;

    /**
     * The field type (DATE or DATETIME or DATETIMETX). Set using the format.Type enum.
     */
    +type: $Values<DateTypeT>;

    /**
     * -optional- The time zone specified for the returned string. Set using the format.Timezone enum or key.
     * If a time zone is not specified, the time zone is set based on user preference.
     * If the time zone is invalid, the time zone is set to GMT.
     */
    timezone?: $Values<TimezoneT>;
  }
  declare export interface FormatNumberOptions {
    /**
     * The input data to format.
     */
    +value: FieldValue | string | number;

    /**
     * The field type (for example, DATE, CURRENCY, INTEGER). Set using the format.Type enum.
     */
    +type: $Values<NumberTypeT>;
  }

  declare type DateTypeT = {|
                            +DATE: "date", // "date"
                            +DATETIME: "datetime", // "datetime"
                            +DATETIMETZ: "datetimetz", // "datetimetz"
                            +MMYYDATE: "mmyydate" // "mmyydate"
                            |}

  declare type NumberTypeT = {|
                              +CURRENCY: "currency", // "currency"
                              +CURRENCY2: "currency2", // "currency2"
                              +FLOAT: "float", // "float"
                              +INTEGER: "integer", // "integer"
                              +NONNEGCURRENCY: "nonnegcurrency", // "nonnegcurrency"
                              +NONNEGFLOAT: "nonnegfloat", // "nonnegfloat"
                              +PERCENT: "percent", // "percent"
                              +POSCURRENCY: "poscurrency", // "poscurrency"
                              +POSFLOAT: "posfloat", // "posfloat"
                              +POSINTEGER: "posinteger", // "posinteger"
                              +RATE: "rate", // "rate"
                              +RATEHIGHPRECISION: "ratehighprecision", // "ratehighprecision"
                             |}

  /**
   * -enum- Holds the string values for the supported field types.
   * Used to set the value of the options.type parameter.
   */
  declare type TypeT = {|
                        +ADDRESS: "address", // "address"
                        +CCEXPDATE: "ccexpdate", // "ccexpdate"
                        +CCNUMBER: "ccnumber", // "ccnumber"
                        +CCVALIDFROM: "ccvalidfrom", // "ccvalidfrom"
                        +CHECKBOX: "checkbox", // "checkbox"
                        +COLOR: "color", // "color"
                        +EMAIL: "email", // "email"
                        +EMAILS: "emails", // "emails"
                        +FULLPHONE: "fullphone", // "fullphone"
                        +FUNCTION: "function", // "function"
                        +FURIGANA: "furigana", // "furigana"
                        +IDENTIFIER: "identifier", // "identifier"
                        +PACKAGE: "package", // "package"
                        +PHONE: "phone", // "phone"
                        +QUOTEDFUNCTION: "'function'", // "'function'"
                        +RADIO: "radio", // "radio"
                        +TEXT: "text", // "text"
                        +TIME: "time", // "time"
                        +TIMEOFDAY: "timeofday", // "timeofday"
                        +TIMETRACK: "timetrack", // "timetrack"
                        +URL: "url" // "url"
                        |};

  /**
   * -enum- Holds the string values for supported time zone formats.
   * Used to set the value of the options.timezone parameter.
   */

  declare type TimezoneT = {|
                            +ETC_GMT_PLUS_12: 0, // 0
                            +PACIFIC_SAMOA: 1, // 1
                            +PACIFIC_HONOLULU: 2, // 2
                            +AMERICA_ANCHORAGE: 3, // 3
                            +AMERICA_LOS_ANGELES: 4, // 4
                            +AMERICA_TIJUANA: 5, // 5
                            +AMERICA_DENVER: 6, // 6
                            +AMERICA_PHOENIX: 7, // 7
                            +AMERICA_CHIHUAHUA: 8, // 8
                            +AMERICA_CHICAGO: 9, // 9
                            +AMERICA_REGINA: 10, // 10
                            +AMERICA_GUATEMALA: 11, // 11
                            +AMERICA_MEXICO_CITY: 12, // 12
                            +AMERICA_NEW_YORK: 13, // 13
                            +US_EAST_INDIANA: 14, // 14
                            +AMERICA_BOGOTA: 15, // 15
                            +AMERICA_CARACAS: 16, // 16
                            +AMERICA_HALIFAX: 17, // 17
                            +AMERICA_LA_PAZ: 18, // 18
                            +AMERICA_MANAUS: 19, // 19
                            +AMERICA_SANTIAGO: 20, // 20
                            +AMERICA_ST_JOHNS: 21, // 21
                            +AMERICA_SAO_PAULO: 22, // 22
                            +AMERICA_BUENOS_AIRES: 23, // 23
                            +ETC_GMT_PLUS_3: 24, // 24
                            +AMERICA_GODTHAB: 25, // 25
                            +AMERICA_MONTEVIDEO: 26, // 26
                            +AMERICA_NORONHA: 27, // 27
                            +ETC_GMT_PLUS_1: 28, // 28
                            +ATLANTIC_AZORES: 29, // 29
                            +EUROPE_LONDON: 30, // 30
                            +GMT: 31, // 31
                            +ATLANTIC_REYKJAVIK: 32, // 32
                            +EUROPE_WARSAW: 33, // 33
                            +EUROPE_PARIS: 34, // 34
                            +ETC_GMT_MINUS_1: 35, // 35
                            +EUROPE_AMSTERDAM: 36, // 36
                            +EUROPE_BUDAPEST: 37, // 37
                            +AFRICA_CAIRO: 38, // 38
                            +EUROPE_ISTANBUL: 39, // 39
                            +ASIA_JERUSALEM: 40, // 40
                            +ASIA_AMMAN: 41, // 41
                            +ASIA_BEIRUT: 42, // 42
                            +AFRICA_JOHANNESBURG: 43, // 43
                            +EUROPE_KIEV: 44, // 44
                            +EUROPE_MINSK: 45, // 45
                            +AFRICA_WINDHOEK: 46, // 46
                            +ASIA_RIYADH: 47, // 47
                            +EUROPE_MOSCOW: 48, // 48
                            +ASIA_BAGHDAD: 49, // 49
                            +AFRICA_NAIROBI: 50, // 50
                            +ASIA_TEHRAN: 51, // 51
                            +ASIA_MUSCAT: 52, // 52
                            +ASIA_BAKU: 53, // 53
                            +ASIA_YEREVAN: 54, // 54
                            +ETC_GMT_MINUS_3: 55, // 55
                            +ASIA_KABUL: 56, // 56
                            +ASIA_KARACHI: 57, // 57
                            +ASIA_YEKATERINBURG: 58, // 58
                            +ASIA_TASHKENT: 59, // 59
                            +ASIA_CALCUTTA: 60, // 60
                            +ASIA_KATMANDU: 61, // 61
                            +ASIA_ALMATY: 62, // 62
                            +ASIA_DHAKA: 63, // 63
                            +ASIA_RANGOON: 64, // 64
                            +ASIA_BANGKOK: 65, // 65
                            +ASIA_KRASNOYARSK: 66, // 66
                            +ASIA_HONG_KONG: 67, // 67
                            +ASIA_KUALA_LUMPUR: 68, // 68
                            +ASIA_TAIPEI: 69, // 69
                            +AUSTRALIA_PERTH: 70, // 70
                            +ASIA_IRKUTSK: 71, // 71
                            +ASIA_MANILA: 72, // 72
                            +ASIA_SEOUL: 73, // 73
                            +ASIA_TOKYO: 74, // 74
                            +ASIA_YAKUTSK: 75, // 75
                            +AUSTRALIA_DARWIN: 76, // 76
                            +AUSTRALIA_ADELAIDE: 77, // 77
                            +AUSTRALIA_SYDNEY: 78, // 78
                            +AUSTRALIA_BRISBANE: 79, // 79
                            +AUSTRALIA_HOBART: 80, // 80
                            +PACIFIC_GUAM: 81, // 81
                            +ASIA_VLADIVOSTOK: 82, // 82
                            +ASIA_MAGADAN: 83, // 83
                            +PACIFIC_KWAJALEIN: 84, // 84
                            +PACIFIC_AUCKLAND: 85, // 85
                            +PACIFIC_TONGATAPU: 86 // 86
                            |};

  declare export interface NFormat {

    /**
     * Use format to convert an Object (like a Date) into a specific NS string format.
     * Options: value (Date|string|number), type (format.FormatType).
     */
    format(options: FormatOptions): string | any;

    /**
     * Use format to convert an Object (like a Date) into a specific NS string format.
     * Options: value (Date|string), type (format.FormatType), timezone (enum).
     */
    format(options: FormatDateTimeOptions): string | any;

    /**
     * Use parse to convert a string into an object, like a Date.
     * Options: value (Date|string|number), type (format.FormatType).
     */
    parse(options: FormatOptions): Date | string | number;

    /**
     * Use parse to convert a string into an object, like a Date.
     * Options: value (Date|string), type (format.FormatType), timezone (enum).
     */
    parse(options: FormatDateTimeOptions): Date | string | number;

    /**
     * Use parse to convert a string into a number.
     * Options: value (number|string), type (format.FormatType).
     */
    parse(options: FormatNumberOptions): number;

    Type: {|
           ...DateTypeT,
           ...NumberTypeT,
           ...TypeT
           |};
    Timezone: TimezoneT;
  }

}
