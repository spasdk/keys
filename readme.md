Keyboard keys codes
===================

[![build status](https://img.shields.io/travis/spasdk/keys.svg?style=flat-square)](https://travis-ci.org/spasdk/keys)
[![npm version](https://img.shields.io/npm/v/spa-keys.svg?style=flat-square)](https://www.npmjs.com/package/spa-keys)
[![dependencies status](https://img.shields.io/david/spasdk/keys.svg?style=flat-square)](https://david-dm.org/spasdk/keys)
[![devDependencies status](https://img.shields.io/david/dev/spasdk/keys.svg?style=flat-square)](https://david-dm.org/spasdk/keys?type=dev)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/spasdk)


Generated by keyboards key codes used in SPA applications.


## Installation ##

```bash
npm install spa-keys
```


## Usage ##

Add to the scope:

```js
var keys = require('spa-keys');
```

In some event handler:

```js
if ( event.code === keys.enter ) {
    /* ... */
}
```


## Contribution ##

If you have any problems or suggestions please open an [issue](https://github.com/spasdk/keys/issues)
according to the contribution [rules](.github/contributing.md).


## License ##

`spa-keys` is released under the [MIT License](license.md).
