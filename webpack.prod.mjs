import { merge } from 'webpack-merge';
import commonConfig from './webpack.config.mjs';
import plugins from './webpack.plugins.mjs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export default merge(commonConfig, {
  mode: 'production',
  plugins,
});
