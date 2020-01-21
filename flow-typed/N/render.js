/**
 * Flowtype definitions for render
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.10.0
 * @flow
 */

declare module 'N/render' {

  import type { File } from 'N/file';
  import type { Record } from 'N/record';
  import type { ServerResponse } from 'N/http';
  import type { Result } from 'N/search';
  import type { NSXMLDocument } from 'N/xml';
  declare interface AddCustomDataSourceOptions {

    /**
     * Data source alias.
     */
    alias: string,

    /**
     * Data format, uses the render.DataSource enum.
     */
    format: $Values<DataSourceT>,

    /**
     * Object, document, or string.
     */
    +data: any | NSXMLDocument | string,
  } declare interface AddRecordOptions {

    /**
     * Name of the template.
     */
    templateName: string,

    /**
     * The loaded record object to add.
     */
    record: Record,
  } declare interface AddSearchResultsOptions {

    /**
     * Name of the template.
     */
    templateName: string,

    /**
     * The search results to add. Note: Documentation says this is a single result, but it's actually an array of results.
     */
    searchResult: Result[],
  } declare interface BOMOptions {

    /**
     * The internal ID of the bill of material to print.
     */
    entityId: number,

    /**
     * The print output type. Set using the render.PrintMode enum.
     */
    printMode?: $Values<PrintModeT>,
  } declare interface EmailMergeResult {

    /**
     * The body of the email distribution in string format.
     */
    body: string,

    /**
     * The subject of the email distribution in string format.
     */
    subject: string,
  } declare interface MergeEmailOptions {

    /**
     * Internal ID of the template.
     */
    templateId: number,

    /**
     * Entity record reference. For example, an employee.
     */
    entity?: RecordRef,

    /**
     * Recipient record reference.  For example, a lead.
     */
    recipient?: RecordRef,

    /**
     * Custom record reference.
     */
    customRecord?: RecordRef,

    /**
     * Support Case ID.
     */
    supportCaseId?: number,

    /**
     * Transaction ID.
     */
    transactionId?: number,
  } declare interface PackingSlipOptions {

    /**
     * The internal ID of the packing slip to print.
     */
    entityId: number,

    /**
     * The print output type. Set using the render.PrintMode enum.
     */
    printMode?: $Values<PrintModeT>,

    /**
     * The packing slip form number.
     */
    formId?: number,

    /**
     * Fulfillment ID number.
     */
    fulfillmentId?: number,
  } declare interface PickingTicketOptions {

    /**
     * The internal ID of the picking ticket to print.
     */
    entityId: number,

    /**
     * The print output type. Set using the render.PrintMode enum.
     */
    printMode?: $Values<PrintModeT>,

    /**
     * The packing slip form number.
     */
    formId?: number,

    /**
     * Shipping group for the ticket.
     */
    shipgroup?: number,

    /**
     * Location for the ticket.
     */
    location?: number,
  } declare interface RecordRef {
    id: number,
    type: string,
  } declare interface RenderToResponseOptions {

    /**
     * Response that will be written to PDF. For example, the response passed from a Suitelet.
     */
    response: ServerResponse,
  } declare interface StatementOptions {

    /**
     * The internal ID of the statement to print.
     */
    entityId: number,

    /**
     * The print output type. Set using the render.PrintMode enum.
     */
    printMode?: $Values<PrintModeT>,

    /**
     * Internal ID of the form to use to print the statement.
     */
    formId?: number,

    /**
     * Date of the oldest transaction to appear on the statement.
     */
    startDate?: string,

    /**
     * Statement date. NS Docs say this should be a Date object, but in practice it should be a string.
     */
    statementDate?: string,

    /**
     * Include only open transactions.
     */
    openTransactionsOnly?: boolean,
  } declare interface XMLToPDFOptions {

    /**
     * XML document or string to convert to PDF.
     */
    xmlString: string,
  } declare interface TemplateRenderer {

    /**
     * Adds XML or JSON as custom data source to an advanced PDF/HTML template.
     */
    addCustomDataSource(options: AddCustomDataSourceOptions): void,

    /**
     * Uses Query as the renderer’s data source.
     * You can specify the SuiteAnalytics workbook query either in the query.Query object, or provide a workbook ID to use the query from an existing SuiteAnalytics workbook.
     * One of options.query or options.id is required in the script.
     */
    addQuery(options: AddQueryOptions): void,

    /**
     * Binds a record to a template variable.
     */
    addRecord(options: AddRecordOptions): void,

    /**
     * Binds a search result to a template variable.
     */
    addSearchResults(options: AddSearchResultsOptions): void,

    /**
     * Uses the advanced template to produce a PDF printed form.
     */
    renderAsPdf(): File,

    /**
     * Renders a server response into a PDF file.
     */
    renderAsPdfToResponse(options: RenderToResponseOptions): void,

    /**
     * Return template content in string form.
     */
    renderAsString(): string,

    /**
     * Writes template content to a server response.
     */
    renderToResponse(options: RenderToResponseOptions): void,

    /**
     * Sets the template using the internal ID.
     */
    setTemplateById(options: {
      id: number,...
    }): void,

    /**
     * Sets the template using the script ID.
     */
    setTemplateByScriptId(options: {
      scriptId: string,...
    }): void,

    /**
     * Content of template.
     */
    templateContent: string,
  } declare interface AddQueryOptions {

    /**
     * Template name.
     */
    templateName: string,

    /**
     * Workbook query definition. Required if options.id is not specified.
     */
    query?: Query,

    /**
     * Workbook query ID. Required if options.query is not specified.
     */
    id?: string,
  } declare interface TransactionOptions {

    /**
     * The internal ID of the transaction to print.
     */
    entityId: number,

    /**
     * The print output type. Set using the render.PrintMode enum.
     */
    +printMode?: $Values<PrintModeT> | string,

    /**
     * The transaction form number.
     */
    formId?: number,

    /**
     * Applies when advanced templates are used. Print the document in the customer's locale. If basic printing is used, this parameter is ignored and the transaction form is printed in the customer's locale.
     */
    inCustLocale?: boolean,
  }

  /**
   * Holds the string values for supported data source types. Use this enum to set the options.format parameter.
   */

  declare type DataSourceT = {|
                              +JSON: 0,// 0
                              +OBJECT: 1,// 1
                              +XML_DOC: 2,// 2
                              +XML_STRING: 3,// 3
                              |};

  /**
   * Holds the string values for supported print output types. Use this enum to set the options.printMode parameter.
   */

  declare type PrintModeT = {|
                             +DEFAULT: 0,// 0
                             +HTML: 1,// 1
                             +PDF: 2,// 2
                             |};

  declare export interface NRender {
    /**
     * Use this method to create a PDF or HTML object of a bill of material.
     */
    bom(options: BOMOptions): File;

    /**
     * Use this method to produce HTML and PDF printed forms with advanced PDF/HTML templates.
     */
    create(): TemplateRenderer;

    /**
     * Creates a render.EmailMergeResult object for a mail merge with an existing scriptable email template.
     */
    mergeEmail(options: MergeEmailOptions): EmailMergeResult;

    /**
     * Use this method to create a PDF or HTML object of a packing slip.
     */
    packingSlip(options: PackingSlipOptions): File;

    /**
     * Use this method to create a PDF or HTML object of a picking ticket.
     */
    pickingTicket(options: PickingTicketOptions): File;

    /**
     * Use this method to create a PDF or HTML object of a statement.
     */
    statement(options: StatementOptions): File;

    /**
     * Use this method to create a PDF or HTML object of a transaction.
     */
    transaction(options: TransactionOptions): File;

    /**
     * Method used to pass XML to the Big Faceless Organization tag library (which is stored by NetSuite), and return a PDF file.
     */
    xmlToPdf(options: XMLToPDFOptions): File;

    DataSource: DataSourceT;
    PrintMode: PrintModeT;
  }

}
