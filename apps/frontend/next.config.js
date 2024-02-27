//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

const serverMap = {
  dev: 'http://localhost:3002/api',
  prod: 'http://localhost:3002/api',
};

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  reactStrictMode: false,
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },

  /**
   * # notice 
   * - 本地代理转发只适用于use client下的axios。
   * - 如果在服务端组件开头调接口，此时重写函数是尚未初始化的。
  */
  async rewrites() {
    const env = process.env.NODE_ENV === 'development' ? 'dev' : 'prod';

    return [
      {
        source: '/dev/:path*',
        destination: serverMap[env] + "/:path*",
      },
      {
        source: '/prod/:path*',
        destination: serverMap[env] + "/:path*",
      },
    ];
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
