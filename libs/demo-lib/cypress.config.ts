import { nxComponentTestingPreset } from '@nrwl/angular/plugins/component-testing';
import { defineConfig } from 'cypress';
import * as rootConfig from '../../apps/demo-app/project.json';

const preset = nxComponentTestingPreset(__filename);
const presetStyles =
  preset.devServer.options.projectConfig.buildOptions.styles ?? [];

export default defineConfig({
  component: {
    ...preset,
    indexHtmlFile: './cypress/support/component-index.html',
    devServer: {
      ...preset.devServer,
      options: {
        projectConfig: {
          ...preset.devServer.options.projectConfig,
          buildOptions: {
            ...preset.devServer.options.projectConfig.buildOptions,
            styles: [
              ...presetStyles,
              ...rootConfig.targets.build.options.styles,
            ],
          },
        },
      },
    },
  },
});
