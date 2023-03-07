import { defineConfig } from 'cypress';
import { nxComponentTestingPreset } from '@nrwl/react/plugins/component-testing';

const preset = nxComponentTestingPreset(__filename, {
  bundler: 'webpack',
});

export default defineConfig({
  component: preset,
});
