import path from 'path';
import config from '../../vite.config.default';

export default config(
  {
    all: path.resolve(__dirname, 'src/index.ts'),
  },
  'rrweb',
);
