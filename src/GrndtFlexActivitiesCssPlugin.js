import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';

import { injectGlobal } from 'react-emotion';

injectGlobal`
   .Twilio-Menu.Twilio-UserControls-AccountMenu {
     overflow-y: scroll;
     height: 90vh;
   }
`;

const PLUGIN_NAME = 'GrndtFlexActivitiesCssPlugin';

export default class GrndtFlexActivitiesCssPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  async init(flex, manager) {
    // This plugin has nothing to "init"
  }
}
