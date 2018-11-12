# CUIDGEN

[![Semantic Versioning](https://img.shields.io/github/release/davidwaterston/cuidgen.svg)](http://semver.org/)
[![MIT Licence](http://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/davidwaterston/cuidgen/blob/master/LICENSE)
[![Version](https://img.shields.io/npm/v/cuidgen.svg)](https://npmjs.org/package/cuidgen)
[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)


A command-line interface to generate collision-resistant ids (CUIDs) optimized for horizontal scaling and performance.

A CUID is a short, random string with some collision-busting measures.
These are safe to use as HTML element id's and for unique, server-side record lookups.

This CLI is built on the work of [Eric Elliott](https://github.com/ericelliott/cuid#readme) and makes use of the CUID package found at https://www.npmjs.com/package/cuid.


## Installation

Install CUIDGEN globally as you would any other NPM package.

```
npm install -g cuidgen
```


## Compatibility

CUIDGEN is built using [oclif](https://oclif.io/). As such, it requires Node 8+.


## Examples

```
$ cuidgen --help

$ cuidgen
cjocr937d00008drr0pfxxtxx

$ cuidgen 3
cjocr937d00008drr0pfxxtxx
cjocr937e00018drrttyzbjg4
cjocr937e00028drrsgq9146m

$ cuidgen 3 --delimiter=,
cjocr937d00008drr0pfxxtxx,
cjocr937e00018drrttyzbjg4,
cjocr937e00028drrsgq9146m

$ cuidgen 3 -d=, --qualifier='"'
"cjocr937d00008drr0pfxxtxx",
"cjocr937e00018drrttyzbjg4",
"cjocr937e00028drrsgq9146m"

$ cuidgen 2 --short
sw0xrlc
sy1xrqb

$ cuidgen 2000 > myfile.txt

```


## Release History

See the [change log](https://github.com/davidwaterston/cuidgen/blob/master/CHANGELOG.md) file for more details.


## License

Copyright (c) 2018 David Waterston. All rights reserved.
Distributed under an MIT license. See the [LICENSE](https://github.com/davidwaterston/cuidgen/blob/master/LICENSE) file for more details.
