import path from 'path';
import config from '../../vite.config.default';

export default config(
  {
    replay: path.resolve(__dirname, 'src/index.ts'),
  },
  'rrweb',
);
