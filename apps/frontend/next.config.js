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
  async rewrites() {
    const env = process.env.NODE_ENV === 'development' ? 'dev' : 'prod';

    return [
      {
        source: '/dev/:path*',
        destination: serverMap[env]+"/:path*",
      },
      {
        source: '/prod/:path*',
        destination: serverMap[env]+"/:path*",
      },
    ];
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
