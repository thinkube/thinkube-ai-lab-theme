import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the thinkube-ai-lab-theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'thinkube-ai-lab-theme:plugin',
  description: 'Thinkube AI Lab theme',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension thinkube-ai-lab-theme is activated!');
    const style = 'thinkube-ai-lab-theme/index.css';

    manager.register({
      name: 'thinkube-ai-lab-theme',
      displayName: 'Thinkube AI Lab',
      isLight: true,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
