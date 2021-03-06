/**
 * Flowtype definitions for workflow
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.10.0
 * @flow
 */

declare module 'N/workflow' {

  declare interface InitiateOptions {
    recordType: string;
    +recordId: string | number;
    +workflowId: string | number;
    defaultValues?: any;
  }
  declare interface TriggerOptions {
    recordType: string;
    +recordId: string | number;

    /**
     * Internal ID (number) or script ID (string) for the workflow definition. This is the ID field on the Workflow Definition Page.
     */
    +workflowId: string | number;
    +workflowInstanceId?: number | string;
    defaultValues?: any;

    /**
     * Internal ID of a button that appears on the record in the workflow.
     * Use this parameter to trigger the workflow as if the specified button were clicked.
     */
    +actionId?: string | number;
  }

  declare export interface NWorkflow {
    initiate(options: InitiateOptions): number;
    trigger(options: TriggerOptions): number;
  }

}
