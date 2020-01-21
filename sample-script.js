// @flow strict

/**
 * An example of how to integrate Flow's module system into the module style which SuiteScript 2.0 uses
 *
 * @NApiVersion 2.x
 * @NScriptType MapReduceScript
*/

/*::
  // import the modules in a Flow supported way
  import type { MapReduceScript } from 'N/types';
  import { runtime, task } from 'N';

  // provide the modules to the define function
  const define = (_, build) => build(runtime, task);

  // export the script in a Flow supported way
  module.exports =
*/
define(
  ['N/runtime','N/task'],
  function(runtime,task) {
    /**
     * Assign types to a variable
     */
    var getInputData = function(context){
      /**
       * Determine which of the possible types this method returns in this case
       */
      var foo = runtime
          .getCurrentScript()
          .getParameter({name: 'foo'});
      if (typeof foo === 'string') {
        foo.substr(0,1);
      }

      return [];
    };

    var reduce = function(context){
    };

    var summarize = function(context){

      /**
       * Unfortunately due to limitations some parameters will require a type annotation
       */
      var bob = task.create({
        taskType: (task.TaskType.MAP_REDUCE /*: typeof task.TaskType.MAP_REDUCE */),
        scriptId: 'bob'
      });
    };

    /**
     * Define the script's entry points
     */
    return ({
      getInputData: getInputData,
      reduce: reduce,
      summarize: summarize
    } /*: MapReduceScript */);
});
