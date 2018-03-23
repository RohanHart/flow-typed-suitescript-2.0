// @flow

/**
 * An example of how to integrate Flow's module system into the module style which SuiteScript 2.0 uses
 */

/*::
import type {MapReduce$getInputData, MapReduce$map, MapReduce$reduce, MapReduce$summarize} from 'N/types';

import * as record from 'N/record';
import * as runtime from 'N/runtime';
import * as search from 'N/search';
import { Filter } from 'N/search';
import * as format from 'N/format';
import * as task from 'N/task';
import { MapReduceScriptTaskCreateOptions } from 'N/task';

const define = (_, build) => build(record, runtime, search, format, task);
*/

/**
 *@NApiVersion 2.x
 *@NScriptType MapReduceScript
*/

/*::
module.exports =
*/
define(
  ['N/record','N/runtime','N/search','N/format','N/task'],
  function(record,runtime,search,formater,task) {

    /**
     * How to assign types to a variable
     */ 
    var getInputData /*: MapReduce$getInputData */ = function(){

      /**
       * How to specify which of the possible types this method returns in this case
       */
      var foo /*: string */ = runtime
          .getCurrentScript()
          .getParameter({name: 'foo'});
      
    };
    
    var map /*: MapReduce$map */ = function(context){
    };
   
    var reduce /*: MapReduce$reduce */ = function(context){
    };
    
    var summarize /*: MapReduce$summarize */ = function(summary){

      /**
       * Unfortunately due to limitations some parameters will require a type annotation
       */
      task.create({taskType: (task.TaskType.MAP_REDUCE /*: typeof task.TaskType.MAP_REDUCE */)});
    };
    
    return {
      getInputData : getInputData,
      map : map,
      reduce : reduce,
      summarize : summarize
    };
});
