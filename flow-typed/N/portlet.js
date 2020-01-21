/**
 * Flowtype definitions for portlet
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.10.0
 * @flow
 */

declare module 'N/portlet' {

  import type {
    BaseForm,
    Button,
    Field,
    FieldType,
    LayoutJustification,
    ListColumn
  } from "N/ui/serverWidget";
  import type { Result } from "N/search";

  declare interface SetSubmitButtonOptions {
    url: string;
    label?: string;
    target?: string;
  }
  declare interface AddColumnOptions {
    id: string;
    label: string;
    type: FieldType;
    align?: LayoutJustification;
  }
  declare interface AddEditColumnOptions {
    column: string;
    showHrefCol?: boolean;
    showView?: boolean;
  }
  declare interface AddFieldOptions {
    id: string;
    label: string;
    type: string | FieldType;
    source?: string;
  }
  declare interface AddLineOptions {
    text: string;
    url?: string;

    /**
     * This value indicates the number of spaces to indent.
     */
    align?: number;
  }
  declare interface AddRowOptions {
    /**
     * A row that consists of either a search.Result, or name/value pairs. Each pair should contain the value for the corresponding Column object in the list.
     */
    row: Result | Object;
  }
  declare interface AddRowsOptions {
    /**
     * An array of rows that consist of either a search.Result array, or an array of name/value pairs. Each pair should contain the value for the corresponding Column object in the list.
     */
    rows: Result[] | Object[];
  }
  declare export type Portlet = {
    addColumn(options: AddColumnOptions): ListColumn,
    addEditColumn(options: AddEditColumnOptions): ListColumn,
    addField(options: AddFieldOptions): Field,
    addLine(options: AddLineOptions): Object,
    addRow(options: AddRowOptions): Object,
    addRows(options: AddRowsOptions): Object,
    setSubmitButton(options: SetSubmitButtonOptions): Button,

    /**
     * The script file ID to be used in the portlet.
     */
    clientScriptFileId: number,

    /**
     * The script path to be used in the portlet.
     */
    clientScriptModulePath: string,
    html: string,
    title: string,
    ...
  } & BaseForm;

  declare export interface NPortlet {
    /**
     * Resizes a form portlet immediately.
     */
    resize(): void;

    /**
     * Refreshes a form portlet immediately.
     */
    refresh(): void;
  }

}
