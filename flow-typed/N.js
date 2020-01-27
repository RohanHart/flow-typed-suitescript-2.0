// @flow

declare module N {
  import type { NAction } from 'N/action';
  declare export var action: NAction;

  import type { NAuth } from 'N/auth';
  declare export var auth: NAuth;

  import type { NCache } from 'N/cache';
  declare export var cache: NCache;

  import type { NCommerce$RecordView } from 'N/commerce_recordView';
  declare export var commerce$recordView: NCommerce$RecordView;

  import type { NConfig } from 'N/config';
  declare export var config: NConfig;

  import type { NCrypto } from 'N/crypto';
  declare export var crypto: NCrypto;

  import type { NCurrency } from 'N/currency';
  declare export var currency: NCurrency;

  import type { NCurrentRecord } from 'N/currentRecord';
  declare export var currentRecord: NCurrentRecord;

  import type { NEmail } from 'N/email';
  declare export var email: NEmail;

  import type { NEncode } from 'N/encode';
  declare export var encode: NEncode;

  import type { NError } from 'N/error';
  declare export var error: NError;

  import type { NFile } from 'N/file';
  declare export var file: NFile;

  import type { NFormat } from 'N/format';
  declare export var format: NFormat;

  import type { NHttp } from 'N/http';
  declare export var http: NHttp;

  import type { NHttps } from 'N/https';
  declare export var https: NHttps;

  declare export var log: NLog;

  import type { NPlugin } from 'N/plugin';
  declare export var plugin: NPlugin;

  import type { NPortlet } from 'N/portlet';
  declare export var portlet: NPortlet;

  import type { NQuery } from 'N/query';
  declare export var query: NQuery;

  import type { NRecord } from 'N/record';
  declare export var record: NRecord;

  import type { NRedirect } from 'N/redirect';
  declare export var redirect: NRedirect;

  import type { NRender } from 'N/render';
  declare export var render: NRender;

  import type { NRuntime } from 'N/runtime';
  declare export var runtime: NRuntime;

  import type { NSearch } from 'N/search';
  declare export var search: NSearch;

  import type { NSftp } from 'N/sftp';
  declare export var sftp: NSftp;

  import type { NSso } from 'N/sso';
  declare export var sso: NSso;

  import type { NTask } from 'N/task';
  declare export var task: NTask;

  import type { NTransaction } from 'N/transaction';
  declare export var transaction: NTransaction;

  import type { NUrl } from 'N/url';
  declare export var url: NUrl;

  import type { NUi$Dialog } from 'N/ui/dialog';
  declare export var ui$dialog: NUi$Dialog;

  import type { NUi$Message } from 'N/ui/message';
  declare export var ui$message: NUi$Message;

  import type { NUi$ServerWidget } from 'N/ui/serverWidget';
  declare export var ui$serverWidget: NUi$ServerWidget;

  declare export var util: NUtil;

  import type { NWorkflow } from 'N/workflow';
  declare export var workflow: NWorkflow;

  import type { NXml } from 'N/xml';
  declare export var xml: NXml;
}
