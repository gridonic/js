<p align="center"><img src="https://gridonic.github.io/assets/images/logos/browserify.svg" alt="Browserify" height="192"></p>

# ES6+ and Browserify

This setup uses [Browserify] as the module bundler and transpiles ES6+ code into ES5 with [Babel]. Production build is being mangled and compressed with [UglifyJS].

Furthermore the following transforms are enabled:

- [browserify-shim]
- [deamdify]

Have fun! ✌️

## Build setup

``` bash
# install dependencies
yarn

# build for development
npm run build

# build for production
npm run build:prod

# watches the javascript files for changes and builds them automatically
npm run watch

# tests if the javascript files would build without errors
npm test
```

[Browserify]: http://browserify.org/
[Babel]: https://babeljs.io/
[UglifyJS]: https://github.com/mishoo/UglifyJS2
[browserify-shim]: https://github.com/thlorenz/browserify-shim
[deamdify]: https://github.com/jaredhanson/deamdify

##  
<p align="center">
  <a href="https://gridonic.ch">gridonic.ch</a> ・
  <a href="https://gridonic.github.io">gridonic.github.io</a> ・
  <a href="https://twitter.com/gridonic">@gridonic</a>
</p>
