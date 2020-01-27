/**
 * Flowtype definitions for xml
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.10.0
 * @flow
 */

declare module 'N/xml' {

  declare interface NSNode {
    appendChild: (options: AppendChildOptions) => NSNode;
    cloneNode: (options?: CloneNodeOptions) => NSNode;
    compareDocumentPosition: (options: CompareDocumentOptions) => number;
    hasAttributes: () => boolean;
    hasChildNodes: () => boolean;
    insertBefore: (options: InsertBeforeOptions) => NSNode;
    isDefaultNamespace: (options: IsDefaultNamespaceOptions) => boolean;
    isEqualNode: (options: CompareDocumentOptions) => boolean;
    isSameNode: (options: CompareDocumentOptions) => boolean;
    lookupNamespaceURI: (options: LookupNamespaceURIOptions) => string;
    lookupPrefix: (options: LookupPrefixOptions) => string;
    normalize: () => void;
    removeChild: (options: RemoveChildOptions) => NSNode;
    replaceChild: (options: ReplaceChildOptions) => NSNode;
    attributes: string;
    baseURI: string;
    childNodes: NSNode[];
    firstChild: NSNode;
    lastChild: NSNode;
    localName: string;
    namespaceURI: string;
    nextSibling: NSNode;
    nodeName: string;
    nodeType: $Values<typeof NodeType>;
    nodeValue: string;
    ownerDocument: NSXMLDocument;
    parentNode: NSNode;
    prefix: string;
    previousSibling: NSNode;
    textContent: string;
  }
  declare interface AppendChildOptions {
    newChild: NSNode;
  }
  declare interface CloneNodeOptions {
    deep?: boolean;
  }
  declare interface CompareDocumentOptions {
    other: NSNode;
  }
  declare interface InsertBeforeOptions {
    newChild: NSNode;
    refChild: NSNode;
  }
  declare interface IsDefaultNamespaceOptions {
    namespaceURI: string;
  }
  declare interface LookupNamespaceURIOptions {
    prefix: string;
  }
  declare interface LookupPrefixOptions {
    namespaceURI: string;
  }
  declare interface RemoveChildOptions {
    oldChild: NSNode;
  }
  declare interface ReplaceChildOptions {
    newChild: NSNode;
    oldChild: NSNode;
  }
  declare type NSAttr = {
    name: string,
    ownerElement: NSElement,
    specified: boolean,
    value: string,
    ...
  } & NSNode;
  declare interface EscapeOptions {
    xmlText: string;
  }
  declare interface ValidateOptions {
    xml: NSXMLDocument;
    xsdFilePathOrId: number | string;
    importFolderPathOrId?: number | string;
  }
  declare type NSElement = {
    getAttribute: (options: GetAttributeOptions) => NSAttr,
    getAttributeNodeNS: (options: GetAttributeNodeNSOpts) => NSAttr,
    getAttributeNS: (options: GetAttributeNodeNSOpts) => string,
    getElementsByTagName: (options: CreateElementOptions) => NSElement[],
    getElementsByTagNameNS: (options: GetAttributeNodeNSOpts) => NSElement[],
    hasAttribute: (options: GetAttributeOptions) => boolean,
    hasAttributeNS: (options: GetAttributeNodeNSOpts) => boolean,
    removeAttributes: (options: GetAttributeOptions) => void,
    removeAttributeNode: (options: RemoveAttributeNodeOptions) => NSAttr,
    removeAttributeNS: (options: GetAttributeNodeNSOpts) => void,
    setAttribute: (options: SetAttributeOptions) => void,
    setAttributeNode: (options: SetAttributeNodeOpts) => NSAttr,
    setAttributeNodeNS: (options: SetAttributeNodeOpts) => NSAttr,
    setAttributeNS: (options: SetAttributeNSOpts) => void,
    tagName: string,
    ...
  } & NSNode;
  declare interface GetAttributeOptions {
    name: string;
  }
  declare interface GetAttributeNodeNSOpts {
    namespaceURI: string;
    localName: string;
  }
  declare interface RemoveAttributeNodeOptions {
    oldAttr: NSAttr;
  }
  declare interface SetAttributeOptions {
    name: string;
    value: string;
  }
  declare interface SetAttributeNodeOpts {
    newAttr: NSAttr;
  }
  declare interface SetAttributeNSOpts {
    namespaceURI: string;
    qualifiedName: string;
    value: string;
  }
  declare type NSXMLDocument = {
    adoptNode: (options: AdoptNodeOptions) => NSNode,
    createAttribute: (options: CreateAttributeOptions) => NSAttr,
    createAttributeNS: (options: CreateAttributeNSOpts) => NSAttr,
    createCDATASection: (options: CDATAOptions) => NSNode,
    createComments: (options: CreateCommentOptions) => NSNode,
    createDocumentFragment: () => NSNode,
    createElements: (options: CreateElementOptions) => NSElement,
    createElementNS: (options: CreateElementNSOptions) => NSElement,
    createProcessingInstruction: (options: CreateProcessingOpts) => NSNode,
    createTextNode: (options: CreateTextNodeOptions) => NSNode,
    getElementById: (options: GetElementByIdOptions) => NSElement,
    getElementsByTagName: (options: GetElementsByTagNameOptions) => NSElement[],
    getElementsByTagNameNS: (options: GetElementsByTagNameNSOpts) => NSElement[],
    importNode: (options: ImportNodeOptions) => NSNode,
    doctype: NSElement,
    documentElement: NSElement,
    documentURI: string,
    inputEncoding: string,
    xmlEncoding: string,
    xmlStandalone: boolean,
    xmlVersion: string,
    ...
  } & NSNode;
  declare interface AdoptNodeOptions {
    source: NSNode;
  }
  declare interface CreateAttributeOptions {
    name: string;
    value?: string;
  }
  declare interface CreateAttributeNSOpts {
    namespaceURI: string;
    qualifiedName: string;
    value?: string;
  }
  declare interface CDATAOptions {
    data: string;
  }
  declare interface CreateCommentOptions {
    data: string;
  }
  declare interface CreateElementOptions {
    tagName: string;
  }
  declare interface CreateElementNSOptions {
    namespaceURI: string;
    qualifiedName: string;
  }
  declare interface CreateProcessingOpts {
    target: string;
    data: string;
  }
  declare interface CreateTextNodeOptions {
    data: string;
  }
  declare interface GetElementByIdOptions {
    elementId: string;
  }
  declare interface GetElementsByTagNameOptions {
    tagName: string;
  }
  declare interface GetElementsByTagNameNSOpts {
    namespaceURI: string;
    localName: string;
  }
  declare interface ImportNodeOptions {
    importedNode: NSNode;
    deep: boolean;
  }
  declare interface ParserFromStringOptions {
    text: string;
  }
  declare interface ParserToStringOptions {
    document: NSXMLDocument;
  }
  declare interface ParserObject {
    fromString: (options: ParserFromStringOptions) => NSXMLDocument;
    toString: (options: ParserToStringOptions) => string;
  }
  declare interface XPathObject {
    select: (options: SelectOptions) => NSNode[];
  }
  declare interface SelectOptions {
    node: NSNode;
    xpath: string;
  }
  declare type NodeTypeT = {|
                            +ATTRIBUTE_NODE: 0, // 0
                            +CDATA_SECTION_NODE: 1, // 1
                            +COMMENT_NODE: 2, // 2
                            +DOCUMENT_FRAGMENT_NODE: 3, // 3
                            +DOCUMENT_NODE: 4, // 4
                            +DOCUMENT_TYPE_NODE: 5, // 5
                            +ELEMENT_NODE: 6, // 6
                            +ENTITY_NODE: 7, // 7
                            +ENTITY_REFERENCE_NODE: 8, // 8
                            +NOTATION_NODE: 9, // 9
                            +PROCESSING_INSTRUCTION_NODE: 10, // 10
                            +TEXT_NODE: 11 // 11
                            |};

  declare export interface NXml {
    Parser: ParserObject;
    XPath: XPathObject;
    Node: NSNode;
    Document: NSXMLDocument;
    Element: NSElement;
    Attr: NSAttr;
    escape(options: EscapeOptions): string;
    validate(options: ValidateOptions): void;

    NodeType: NodeTypeT;
  }

}