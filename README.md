things-cli
==========

CLI wrapper around Things URL Scheme

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/things-cli.svg)](https://npmjs.org/package/things-cli)
[![CircleCI](https://circleci.com/gh/blamattina/things-cli/tree/master.svg?style=shield)](https://circleci.com/gh/blamattina/things-cli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/things-cli.svg)](https://npmjs.org/package/things-cli)
[![License](https://img.shields.io/npm/l/things-cli.svg)](https://github.com/blamattina/things-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g things-cli
$ things COMMAND
running command...
$ things (-v|--version|version)
things-cli/0.0.0 darwin-x64 node-v13.11.0
$ things --help [COMMAND]
USAGE
  $ things COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`things hello [FILE]`](#things-hello-file)
* [`things help [COMMAND]`](#things-help-command)

## `things hello [FILE]`

describe the command here

```
USAGE
  $ things hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ things hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/blamattina/things-cli/blob/v0.0.0/src/commands/hello.ts)_

## `things help [COMMAND]`

display help for things

```
USAGE
  $ things help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
