import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'module' } },
  { languageOptions: { globals: globals.browser } },
  {
    ignores: [
      'node_modules/*',
      'dist/*',
      'packaje.json',
      'package-lock.json',
      'webpack.common.js',
      'webpack.dev.js',
      'webpack.prod.js'
    ]
  },
  pluginJs.configs.recommended
];
