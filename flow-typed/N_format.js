/**
 * Flowtype definitions for format
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.2.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module "N/format" {

declare export var Type: {
    ADDRESS: "address",
    CCEXPDATE: "ccexpdate",
    CCNUMBER: "ccnumber",
    CCVALIDFROM: "ccvalidfrom",
    CHECKBOX: "checkbox",
    COLOR: "color",
    CURRENCY: "currency",
    CURRENCY2: "currency2",
    DATE: "date",
    DATETIME: "datetime",
    DATETIMETZ: "datetimetz",
    EMAIL: "email",
    EMAILS: "emails",
    FLOAT: "float",
    FULLPHONE: "fullphone",
    FUNCTION: "function",
    FURIGANA: "furigana",
    IDENTIFIER: "identifier",
    INTEGER: "integer",
    MMYYDATE: "mmyydate",
    NONNEGCURRENCY: "nonnegcurrency",
    NONNEGFLOAT: "nonnegfloat",
    PACKAGE: "package",
    PERCENT: "percent",
    PHONE: "phone",
    POSCURRENCY: "poscurrency",
    POSFLOAT: "posfloat",
    POSINTEGER: "posinteger",
    QUOTEDFUNCTION: "'function'",
    RADIO: "radio",
    RATE: "rate",
    RATEHIGHPRECISION: "ratehighprecision",
    TEXT: "text",
    TIME: "time",
    TIMEOFDAY: "timeofday",
    TIMETRACK: "timetrack",
    URL: "url"
}

declare type TypeT = $Values<typeof Type>

declare export var Timezone: {
    ETC_GMT_PLUS_12: "ETC_GMT_PLUS_12",
    PACIFIC_SAMOA: "PACIFIC_SAMOA",
    PACIFIC_HONOLULU: "PACIFIC_HONOLULU",
    AMERICA_ANCHORAGE: "AMERICA_ANCHORAGE",
    AMERICA_LOS_ANGELES: "AMERICA_LOS_ANGELES",
    AMERICA_TIJUANA: "AMERICA_TIJUANA",
    AMERICA_DENVER: "AMERICA_DENVER",
    AMERICA_PHOENIX: "AMERICA_PHOENIX",
    AMERICA_CHIHUAHUA: "AMERICA_CHIHUAHUA",
    AMERICA_CHICAGO: "AMERICA_CHICAGO",
    AMERICA_REGINA: "AMERICA_REGINA",
    AMERICA_GUATEMALA: "AMERICA_GUATEMALA",
    AMERICA_MEXICO_CITY: "AMERICA_MEXICO_CITY",
    AMERICA_NEW_YORK: "AMERICA_NEW_YORK",
    US_EAST_INDIANA: "US_EAST_INDIANA",
    AMERICA_BOGOTA: "AMERICA_BOGOTA",
    AMERICA_CARACAS: "AMERICA_CARACAS",
    AMERICA_HALIFAX: "AMERICA_HALIFAX",
    AMERICA_LA_PAZ: "AMERICA_LA_PAZ",
    AMERICA_MANAUS: "AMERICA_MANAUS",
    AMERICA_SANTIAGO: "AMERICA_SANTIAGO",
    AMERICA_ST_JOHNS: "AMERICA_ST_JOHNS",
    AMERICA_SAO_PAULO: "AMERICA_SAO_PAULO",
    AMERICA_BUENOS_AIRES: "AMERICA_BUENOS_AIRES",
    ETC_GMT_PLUS_3: "ETC_GMT_PLUS_3",
    AMERICA_GODTHAB: "AMERICA_GODTHAB",
    AMERICA_MONTEVIDEO: "AMERICA_MONTEVIDEO",
    AMERICA_NORONHA: "AMERICA_NORONHA",
    ETC_GMT_PLUS_1: "ETC_GMT_PLUS_1",
    ATLANTIC_AZORES: "ATLANTIC_AZORES",
    EUROPE_LONDON: "EUROPE_LONDON",
    GMT: "GMT",
    ATLANTIC_REYKJAVIK: "ATLANTIC_REYKJAVIK",
    EUROPE_WARSAW: "EUROPE_WARSAW",
    EUROPE_PARIS: "EUROPE_PARIS",
    ETC_GMT_MINUS_1: "ETC_GMT_MINUS_1",
    EUROPE_AMSTERDAM: "EUROPE_AMSTERDAM",
    EUROPE_BUDAPEST: "EUROPE_BUDAPEST",
    AFRICA_CAIRO: "AFRICA_CAIRO",
    EUROPE_ISTANBUL: "EUROPE_ISTANBUL",
    ASIA_JERUSALEM: "ASIA_JERUSALEM",
    ASIA_AMMAN: "ASIA_AMMAN",
    ASIA_BEIRUT: "ASIA_BEIRUT",
    AFRICA_JOHANNESBURG: "AFRICA_JOHANNESBURG",
    EUROPE_KIEV: "EUROPE_KIEV",
    EUROPE_MINSK: "EUROPE_MINSK",
    AFRICA_WINDHOEK: "AFRICA_WINDHOEK",
    ASIA_RIYADH: "ASIA_RIYADH",
    EUROPE_MOSCOW: "EUROPE_MOSCOW",
    ASIA_BAGHDAD: "ASIA_BAGHDAD",
    AFRICA_NAIROBI: "AFRICA_NAIROBI",
    ASIA_TEHRAN: "ASIA_TEHRAN",
    ASIA_MUSCAT: "ASIA_MUSCAT",
    ASIA_BAKU: "ASIA_BAKU",
    ASIA_YEREVAN: "ASIA_YEREVAN",
    ETC_GMT_MINUS_3: "ETC_GMT_MINUS_3",
    ASIA_KABUL: "ASIA_KABUL",
    ASIA_KARACHI: "ASIA_KARACHI",
    ASIA_YEKATERINBURG: "ASIA_YEKATERINBURG",
    ASIA_TASHKENT: "ASIA_TASHKENT",
    ASIA_CALCUTTA: "ASIA_CALCUTTA",
    ASIA_KATMANDU: "ASIA_KATMANDU",
    ASIA_ALMATY: "ASIA_ALMATY",
    ASIA_DHAKA: "ASIA_DHAKA",
    ASIA_RANGOON: "ASIA_RANGOON",
    ASIA_BANGKOK: "ASIA_BANGKOK",
    ASIA_KRASNOYARSK: "ASIA_KRASNOYARSK",
    ASIA_HONG_KONG: "ASIA_HONG_KONG",
    ASIA_KUALA_LUMPUR: "ASIA_KUALA_LUMPUR",
    ASIA_TAIPEI: "ASIA_TAIPEI",
    AUSTRALIA_PERTH: "AUSTRALIA_PERTH",
    ASIA_IRKUTSK: "ASIA_IRKUTSK",
    ASIA_MANILA: "ASIA_MANILA",
    ASIA_SEOUL: "ASIA_SEOUL",
    ASIA_TOKYO: "ASIA_TOKYO",
    ASIA_YAKUTSK: "ASIA_YAKUTSK",
    AUSTRALIA_DARWIN: "AUSTRALIA_DARWIN",
    AUSTRALIA_ADELAIDE: "AUSTRALIA_ADELAIDE",
    AUSTRALIA_SYDNEY: "AUSTRALIA_SYDNEY",
    AUSTRALIA_BRISBANE: "AUSTRALIA_BRISBANE",
    AUSTRALIA_HOBART: "AUSTRALIA_HOBART",
    PACIFIC_GUAM: "PACIFIC_GUAM",
    ASIA_VLADIVOSTOK: "ASIA_VLADIVOSTOK",
    ASIA_MAGADAN: "ASIA_MAGADAN",
    PACIFIC_KWAJALEIN: "PACIFIC_KWAJALEIN",
    PACIFIC_AUCKLAND: "PACIFIC_AUCKLAND",
    PACIFIC_TONGATAPU: "PACIFIC_TONGATAPU"
}

declare type TIMEZONE = $Values<typeof Timezone>

declare interface FormatOptions {

    /**
     * The input data to format.
     */
    value: Date | string | number,

        /**
         * The field type (for example, DATE, CURRENCY, INTEGER). Set using the format.Type enum.
         */
        type: TypeT
}
declare interface FormatDateTimeOptions {

    /**
     * The Date Object being converted into a string.
     * If parsing a string to a timezone, the string must include seconds.
     */
    value: Date | string,

        /**
         * The field type (either DATETIME or DATETIMETX). Set using the format.Type enum.
         */
        type: typeof Type.DATETIME | typeof Type.DATETIMETZ | typeof Type.MMYYDATE,

        /**
         * -optional- The time zone specified for the returned string. Set using the format.Timezone enum or key.
         * If a time zone is not specified, the time zone is set based on user preference.
        If the time zone is invalid, the time zone is set to GMT.
        */
        timezone?: TIMEZONE
}
declare interface FormatNumberOptions {

    /**
     * The input data to format.
     */
    value: string | number,

        /**
         * The field type (for example, DATE, CURRENCY, INTEGER). Set using the format.Type enum.
         */
        type: typeof Type.CURRENCY |
              typeof Type.CURRENCY2 |
              typeof Type.FLOAT |
              typeof Type.INTEGER |
              typeof Type.NONNEGCURRENCY |
              typeof Type.NONNEGFLOAT |
              typeof Type.PERCENT |
              typeof Type.POSCURRENCY |
              typeof Type.POSFLOAT |
              typeof Type.POSINTEGER |
              typeof Type.RATE |
              typeof Type.RATEHIGHPRECISION
}
/**
 * Use format to convert an Object (like a Date) into a specific NS string format. 
 * Options: value (Date|string|number), type (format.FormatType).
 */
declare export function format(options: FormatOptions): string | any
/**
 * Use parse to convert a string into an object, like a Date.
 * Options: value (Date|string|number), type (format.FormatType).
 */
declare export function parse(options: FormatOptions): Date | string | number
/**
 * Use parse to convert a string into an object, like a Date.
 * Options: value (Date|string), type (format.FormatType), timezone (enum).
 */
declare export function parse(options: FormatDateTimeOptions): Date | string | number;
/**
 * Use parse to convert a string into a number.
 * Options: value (number|string), type (format.FormatType).
 */
declare export function parse(options: FormatNumberOptions): number;

}
