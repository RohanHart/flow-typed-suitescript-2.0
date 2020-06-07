The `.flowconfig` should be copied as is as should the entire `flow-typed` directory.

TODO Once the flow-typed definitions are in the official flow-typed repo this can be changed to a package.json import

If using SuiteScript v2.0 then the CoreES5 library should also be included unless using a transpiler and polyfills to convert to ES5. SuiteScript v2.1 targets a much more recent ES version.

``` shell
yarn flow-typed install core.es5@5.1
```
