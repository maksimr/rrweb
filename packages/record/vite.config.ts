import path from 'path';
import config from '../../vite.config.default';

export default config(
  {
    record: path.resolve(__dirname, 'src/index.ts'),
  },
  'rrweb',
);
