import createNextIntlPlugin from 'next-intl/plugin';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    implementation: 'sass-embedded',
  },
  webpack: (config) => {
    config.cache = {
      type: 'filesystem',
      compression: 'gzip', // 使用 gzip 压缩缓存文件
      buildDependencies: {
        config: [__filename],
      },
    };
    return config;
  },
};

export default withNextIntl(nextConfig);
