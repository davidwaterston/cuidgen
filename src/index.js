const {Command, flags} = require('@oclif/command')
const cuid = require('cuid')

class CuidgenCommand extends Command {
  async run() {
    const {args, flags} = this.parse(CuidgenCommand)
    const count = args.count || 1
    const delimiter = flags.delimiter || ''
    const qualifier = flags.qualifier || ''

    let cuidFunction
    if (flags.short) {
      cuidFunction = cuid.slug
    } else {
      cuidFunction = cuid
    }

    for (let i = 0; i < count - 1; i++) {
      this.log(qualifier + cuidFunction() + qualifier + delimiter)
    }
    this.log(qualifier + cuidFunction() + qualifier)
  }
}

CuidgenCommand.args = [
  {
    name: 'count',
    required: false,
    description: 'The number of CUIDs to generate [default: 1]',
  },
]

CuidgenCommand.description = `Generate collision-resistant ids (CUIDs) optimized for horizontal scaling and performance.

A CUID is a short, random string with some collision-busting measures.
These are safe to use as HTML element id's and for unique, server-side record lookups.

This CLI is built on the work of Eric Elliott and makes use of the CUID package
found at https://www.npmjs.com/package/cuid.

A CUID comprises five parts:

  c jocr937e 0001 8drr ttyzbjg4

These parts, in order, are:

  'c' - identifies this as a CUID, and allows you to use it in html entity ids.
  A timestamp.
  A counter; as a single process might generate the same random string,
  the counter ensure uniqueness.
  The client fingerprint.
  A random portion.

`

CuidgenCommand.examples = [
  `$ cuidgen
cjocr937d00008drr0pfxxtxx
\n`,
  `$ cuidgen 3
cjocr937d00008drr0pfxxtxx
cjocr937e00018drrttyzbjg4
cjocr937e00028drrsgq9146m
\n`,
  `$ cuidgen 3 --delimiter=,
cjocr937d00008drr0pfxxtxx,
cjocr937e00018drrttyzbjg4,
cjocr937e00028drrsgq9146m
\n`,
  `$ cuidgen 3 -d=, --qualifier='"'
"cjocr937d00008drr0pfxxtxx",
"cjocr937e00018drrttyzbjg4",
"cjocr937e00028drrsgq9146m"
\n`,
  `$ cuidgen 2 --short
  sw0xrlc
  sy1xrqb
\n`,
  `$ cuidgen 2000 > myfile.txt
\n`,
]

CuidgenCommand.flags = {
  delimiter: flags.string({
    char: 'd',
    description:
      "the preferred delimiter to be included at the end of each line [default: '']",
  }),
  short: flags.boolean({
    char: 's',
    description:
      'generate short (7-10 characters) rather than full length CUIDs',
  }),
  help: flags.help({
    char: 'h',
    description: 'show the CUIDGEN CLI help',
  }),
  qualifier: flags.string({
    char: 'q',
    description:
      "the preferred qualifier wrapped round each CUID [default: '']",
  }),
  version: flags.version({
    char: 'v',
    description: 'show the CUIDGEN CLI version number',
  }),
}

module.exports = CuidgenCommand
