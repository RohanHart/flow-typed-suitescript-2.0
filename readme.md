Flow-typed does not support installing from npm packages yet so for now copy the entire `flow-typed` directory contents into your projects `flow-typed` directory.

If using SuiteScript v2.0 then the CoreES5 library should also be included unless using a transpiler and polyfills to convert to ES5. SuiteScript v2.1 targets a much more recent ES version.

``` shell
yarn flow-typed install core.es5@5.1
```
