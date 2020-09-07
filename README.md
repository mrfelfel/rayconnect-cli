# rayconnect-cli

rayconnect cli dige :|

فعلا دارم یک نسخه ساده میسازم

خوب نمیدونم قراره دقیقا چی بسازم اما این یک نسخه اولیه از رابط دستوری رای کانکت هست

در دست ساخت

# به شدت در حال توسعه

توجه کنید این سیستم به شدت درحال توسعه است

<!-- toc -->
* [rayconnect-cli](#rayconnect-cli)
* [به شدت در حال توسعه](#به-شدت-در-حال-توسعه)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g rayconnect-cli
$ rayconnect-cli COMMAND
running command...
$ rayconnect-cli (-v|--version|version)
rayconnect-cli/0.1.2 linux-x64 node-v12.16.2
$ rayconnect-cli --help [COMMAND]
USAGE
  $ rayconnect-cli COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`rayconnect-cli help [COMMAND]`](#rayconnect-cli-help-command)
* [`rayconnect-cli login [USERNAME] [PASSWORD]`](#rayconnect-cli-login-username-password)
* [`rayconnect-cli me`](#rayconnect-cli-me)

## `rayconnect-cli help [COMMAND]`

display help for rayconnect-cli

```
USAGE
  $ rayconnect-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `rayconnect-cli login [USERNAME] [PASSWORD]`

login to rayconnect cli

```
USAGE
  $ rayconnect-cli login [USERNAME] [PASSWORD]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ rayconnect-cli login
```

_See code: [src/commands/login.ts](https://github.com/mrfelfel/rayconnect-cli/blob/v0.1.2/src/commands/login.ts)_

## `rayconnect-cli me`

user status rayconnect cli

```
USAGE
  $ rayconnect-cli me

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ rayconnect-cli me
```

_See code: [src/commands/me.ts](https://github.com/mrfelfel/rayconnect-cli/blob/v0.1.2/src/commands/me.ts)_
<!-- commandsstop -->
# rayconnect-cli
