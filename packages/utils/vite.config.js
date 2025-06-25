import path from 'path';
import config from '../../vite.config.default';

export default config(
  {
    utils: path.resolve(__dirname, 'src/index.ts')
  },
  'rrwebUtils'
);
