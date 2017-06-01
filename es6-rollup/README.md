<p align="center"><img src="https://gridonic.github.io/assets/images/logos/rollupjs.svg" alt="Rollup.js" width="160"></p>

# ES6+ and rollup.js

This setup uses [rollup.js] as the module bundler and *does not* transpile ES6+ code. One of the big benefits of rollup – as of the time of writing this – is the so called [tree-shaking].

Have fun! ✌️

## Build setup

``` bash
# install dependencies
npm install

# build for development
npm run build

# build for production
npm run build:prod

# watches the javascript files for changes and builds them automatically
npm run watch

# tests if the javascript files would build without errors
npm run test
```

[rollup.js]: http://rollupjs.org/
[tree-shaking]: http://www.google.com/search?q=tree+shaking

##  
<p align="center">
  <a href="https://gridonic.ch">gridonic.ch</a> ・
  <a href="https://gridonic.github.io">gridonic.github.io</a> ・
  <a href="https://twitter.com/gridonic">@gridonic</a>
</p>
