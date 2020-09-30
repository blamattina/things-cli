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
things-cli/0.0.1 darwin-x64 node-v13.11.0
$ things --help [COMMAND]
USAGE
  $ things COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`things add TODO`](#things-add-todo)
* [`things add-project PROJECT`](#things-add-project-project)
* [`things help [COMMAND]`](#things-help-command)

## `things add TODO`

Add a to-do

```
USAGE
  $ things add TODO

ARGUMENTS
  TODO  task to add

OPTIONS
  -c, --checklist=checklist  add an item to the checklist
  -h, --help                 show CLI help
  -l, --list=list            [default: Inbox] list to add to
  -w, --when=when            when this should appear in the today view

EXAMPLES
  $ things add testing 1 2 3
  Added 'testing 1 2 3' to 'Inbox'

  $ things add Milk -l="Shopping List"
  Added 'Milk' to 'Shopping List'

  $ things add Milk -w="tomorrow"
  Added 'Milk' to 'Inbox'

  $ things add Shopping List -c="Eggs" -c="Milk"
  Added 'Milk' to 'Inbox'
```

_See code: [src/commands/add.ts](https://github.com/blamattina/things-cli/blob/v0.0.1/src/commands/add.ts)_

## `things add-project PROJECT`

Add a project

```
USAGE
  $ things add-project PROJECT

ARGUMENTS
  PROJECT  project to add

OPTIONS
  -h, --help       show CLI help
  -t, --todo=todo  add a task

EXAMPLES
  $ things add-project chores
  Added project 'chores'

  $ things add-project chores -t="water plants" -t="take out recycling"
  Added project 'chores' with todos: water plants, take out recycling
```

_See code: [src/commands/add-project.ts](https://github.com/blamattina/things-cli/blob/v0.0.1/src/commands/add-project.ts)_

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
