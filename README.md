# test-amd-bundle

## test
`npm i`

`npm run build`


## issue to solve

webpack gives error when bundling because of the `musement_api` dependency AMD export.
The library provides AMD and commonjs exports but the first one is chosen.
If the second one is forced, the import works as expected.

```
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ActivityTaxonomy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ActivityTaxonomy'));
  }
}(this, function(ApiClient, ActivityTaxonomy) {
.... module implementation
}
```

I am trying to find a way to tell webpack where to find 'ApiClient', 'model/ActivityTaxonomy' and the other modules by using the default import (AMD)
