import path from 'path';
import config from '../../vite.config.default';

export default config(
  {
    types: path.resolve(__dirname, 'src/index.ts')
  },
  'rrwebTypes'
);
