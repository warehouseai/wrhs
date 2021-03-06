# `wrhs`

[![Version npm](https://img.shields.io/npm/v/wrhs.svg?style=flat-square)](https://www.npmjs.com/package/wrhs)
[![License](https://img.shields.io/npm/l/wrhs.svg?style=flat-square)](https://github.com/warehouseai/wrhs/blob/master/LICENSE)
[![npm Downloads](https://img.shields.io/npm/dm/wrhs.svg?style=flat-square)](https://npmcharts.com/compare/wrhs?minimal=true)
[![Build Status](https://travis-ci.org/warehouseai/wrhs.svg?branch=master)](https://travis-ci.org/warehouseai/wrhs)
[![Dependencies](https://img.shields.io/david/warehouseai/wrhs.svg?style=flat-square)](https://github.com/warehouseai/wrhs/blob/master/package.json)

CLI for [Warehouse.ai]. CLI to manage build pipelines & asset deployments
for your front-end apps powered by [Warehouse.ai]. There is also a
[web-based UI][wrhs-ui] available for [Warehouse.ai].

* [Install](#install)
* [Usage](#usage)
* [Configuration](#configuration)
* [Commands](#commands)

## Install

Global installation of the CLI is preferred.

```sh-session
npm install -g wrhs
```

Ensure [configuration](#configuration) is setup before you run any commands.

## Usage
<!-- usage -->
```sh-session
$ npm install -g wrhs
$ wrhs COMMAND
running command...
$ wrhs (-v|--version|version)
wrhs/0.8.0 darwin-x64 node-v10.16.2
$ wrhs --help [COMMAND]
USAGE
  $ wrhs COMMAND
...
```
<!-- usagestop -->

## Configuration

`wrhs` configuration can be passed in via CLI flags (more information on this
below), or by creating a configuration file at `~/.wrhs`. _Note: by default
the CLI expects the configuration file to be available under your home folder._

### Example `.wrhs` file:
```
{
  "hosts": {
    "wrhs": "warehouse.ai",
    "status": "warehouse-status.ai"
  },
  "auth": {
    "user": "username",
    "pass": "password"
  }
}
```

## Commands
<!-- commands -->
* [`wrhs build PACKAGE ENV`](#wrhs-build-package-env)
* [`wrhs get:build PACKAGE ENV [LOCALE]`](#wrhs-getbuild-package-env-locale)
* [`wrhs get:head PACKAGE ENV`](#wrhs-gethead-package-env)
* [`wrhs get:release-line PACKAGE`](#wrhs-getrelease-line-package)
* [`wrhs get:status PACKAGE ENV`](#wrhs-getstatus-package-env)
* [`wrhs help [COMMAND]`](#wrhs-help-command)
* [`wrhs promote PACKAGE ENV`](#wrhs-promote-package-env)

## `wrhs build PACKAGE ENV`

Triggers a build for a specific version on warehouse. 

```
USAGE
  $ wrhs build PACKAGE ENV

ARGUMENTS
  PACKAGE  The package to build. Make sure it is in the form packageName@version where `version` is the specific version
           to build

  ENV      The environment to build in

OPTIONS
  -c, --config=config            The file location of the warehouse config, defaults to `~/.wrhs`
  -h, --host=host                The base url for the warehouse API
  -j, --json                     Output response data as JSON
  -m, --promote                  Should promotion happen on successful build. Defaults to false
  -p, --pass=pass                Password
  -s, --status-host=status-host  The base url for the warehouse status API
  -u, --user=user                Username

DESCRIPTION
  -m Optionally specify if promotion should happen on successful build
```

_See code: [src/commands/build.js](https://github.com/warehouseai/wrhs/blob/0.8.0/src/commands/build.js)_

## `wrhs get:build PACKAGE ENV [LOCALE]`

Gets information about builds that exist in warehouse.

```
USAGE
  $ wrhs get:build PACKAGE ENV [LOCALE]

ARGUMENTS
  PACKAGE  The package to get builds for
  ENV      The environment to get builds for
  LOCALE   The specific locale to fetch. Defaults to en-US

OPTIONS
  -c, --config=config            The file location of the warehouse config, defaults to `~/.wrhs`
  -h, --host=host                The base url for the warehouse API
  -j, --json                     Output response data as JSON
  -p, --pass=pass                Password
  -s, --status-host=status-host  The base url for the warehouse status API
  -u, --user=user                Username

DESCRIPTION
  If no version is specified, the head version will be returned.
```

_See code: [src/commands/get/build.js](https://github.com/warehouseai/wrhs/blob/0.8.0/src/commands/get/build.js)_

## `wrhs get:head PACKAGE ENV`

Shows information about the head build for the given package in the given environment.

```
USAGE
  $ wrhs get:head PACKAGE ENV

ARGUMENTS
  PACKAGE  The package to get the head build for
  ENV      The environment to get the head build for

OPTIONS
  -c, --config=config            The file location of the warehouse config, defaults to `~/.wrhs`
  -h, --host=host                The base url for the warehouse API
  -j, --json                     Output response data as JSON
  -p, --pass=pass                Password
  -s, --status-host=status-host  The base url for the warehouse status API
  -u, --user=user                Username

DESCRIPTION
  Accepts an optional locale.
```

_See code: [src/commands/get/head.js](https://github.com/warehouseai/wrhs/blob/0.8.0/src/commands/get/head.js)_

## `wrhs get:release-line PACKAGE`

Gets information about a given release line from warehouse.

```
USAGE
  $ wrhs get:release-line PACKAGE

ARGUMENTS
  PACKAGE  The package and version (optional) to get the release line for (example: `pkg@1.2.3`)

OPTIONS
  -c, --config=config            The file location of the warehouse config, defaults to `~/.wrhs`
  -h, --host=host                The base url for the warehouse API
  -j, --json                     Output response data as JSON
  -p, --pass=pass                Password
  -s, --status-host=status-host  The base url for the warehouse status API
  -u, --user=user                Username
```

_See code: [src/commands/get/release-line.js](https://github.com/warehouseai/wrhs/blob/0.8.0/src/commands/get/release-line.js)_

## `wrhs get:status PACKAGE ENV`

Get information about the status of a build.

```
USAGE
  $ wrhs get:status PACKAGE ENV

ARGUMENTS
  PACKAGE  The package to get status information for
  ENV      The environment to get status information for

OPTIONS
  -c, --config=config            The file location of the warehouse config, defaults to `~/.wrhs`
  -e, --events                   Should status events be fetched. Defaults to false
  -h, --host=host                The base url for the warehouse API
  -j, --json                     Output response data as JSON
  -l, --locale=locale            Only get events for a specific locale
  -p, --pass=pass                Password
  -s, --status-host=status-host  The base url for the warehouse status API
  -u, --user=user                Username

  -v, --verbose                  Should status events be more verbose. Events will print out their details property.
                                 Defaults to false

DESCRIPTION
  -e can be used to get the more granular status events.
```

_See code: [src/commands/get/status.js](https://github.com/warehouseai/wrhs/blob/0.8.0/src/commands/get/status.js)_

## `wrhs help [COMMAND]`

display help for wrhs

```
USAGE
  $ wrhs help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_

## `wrhs promote PACKAGE ENV`

Promotes a build for a specific version on warehouse. 

```
USAGE
  $ wrhs promote PACKAGE ENV

ARGUMENTS
  PACKAGE  The package to promote. Make sure it is in the form packageName@version where `version` is the specific
           version to promote. If NOT using the -b optional build flag,please make sure that the specific version is
           already built.

  ENV      The environment to promote to

OPTIONS
  -b, --build                    Should build the package before promoting. Defaults to false
  -c, --config=config            The file location of the warehouse config, defaults to `~/.wrhs`
  -h, --host=host                The base url for the warehouse API
  -j, --json                     Output response data as JSON
  -p, --pass=pass                Password
  -s, --status-host=status-host  The base url for the warehouse status API
  -u, --user=user                Username

DESCRIPTION
  -b Optionally specify to build as well
```

_See code: [src/commands/promote.js](https://github.com/warehouseai/wrhs/blob/0.8.0/src/commands/promote.js)_
<!-- commandsstop -->

[Warehouse.ai]: https://github.com/godaddy/warehouse.ai
[wrhs-ui]: https://github.com/godaddy/warehouse.ai-ui
