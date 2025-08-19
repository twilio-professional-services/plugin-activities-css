# Notice - Legacy Code

**This plugin is no longer maintained. An updated version of the plugin is available as part of the customizable [Flex Project Template](https://github.com/twilio-professional-services/flex-project-template), where it is an optional feature.**

# Twilio Flex Plugin - Activities Menu Styling 

Twilio Flex Plugins allow you to customize the appearance and behavior of [Twilio Flex](https://www.twilio.com/flex). If you want to learn more about the capabilities and how to use the APIs, check out our [Flex documentation](https://www.twilio.com/docs/flex).

This plugin updates the styling of the User Activities Menu, adding vertical scrolling for long lists of Activities.

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com). We support Node > 12 (and recommend the _even_ versions of Node). Afterwards, install the dependencies by running `npm install`:

```bash
cd 

# If you use npm
npm install
```

Next, please install the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) by running:

```bash
brew tap twilio/brew && brew install twilio
```

Finally, install the [Flex Plugin extension](https://www.twilio.com/docs/flex/developer/plugins/cli/install).

To install the [Flex Plugin extension](https://www.twilio.com/docs/flex/developer/plugins/cli/install) for the Twilio CLI:

```bash
twilio plugins:install @twilio-labs/plugin-flex
```

## Deploying the Activites Menu Styling plugin

Run `twilio flex:plugins --help` or and `twilio serverless --help` to see all the commands we currently support. For further details on Flex Plugins refer to our documentation on the [Twilio CLI Plugins Docs](https://www.twilio.com/docs/twilio-cli/plugins) page.

In the base project directory, deploy the Flex Plugin.

```bash
twilio flex:plugins:deploy --changelog "add your comment"
```

Note the instructions in the command output - the next command to run is supplied.  Copy and paste it, and run it to activate this release of the Plugin.

Close all browsers with Flex running, and open a new browser window to start Flex.

If necessary, run `npm install twilo-flex-token-validator` for dependencies in both base project directory and the `default` directory!

## License

[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer

No warranty expressed or implied. Software is as is.
