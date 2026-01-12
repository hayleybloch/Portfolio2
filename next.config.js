/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/Portfolio2',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/Portfolio2',
    NEXT_PUBLIC_DESKTOP_BASE: '/Portfolio2'
  },
  images: { 
    unoptimized: true,
    qualities: [25, 50, 75, 100]
  },
  devIndicators: false,
  reactStrictMode: true,
  // Allow importing local rpc shim via bare specifier
  transpilePackages: ['rpc'],
  webpack: (webpackConfig, { webpack }) => {
    webpackConfig.resolve = webpackConfig.resolve || {};
    webpackConfig.resolve.alias = {
      ...(webpackConfig.resolve?.alias || {}),
      rpc: require('path').join(__dirname, 'rpc'),
    };

    webpackConfig.plugins.push(
      // Remove node: from import specifiers, because Next.js does not yet support node: scheme
      new webpack.NormalModuleReplacementPlugin(
        /^node:/,
        (resource) => {
          resource.request = resource.request.replace(/^node:/, '');
        },
      ),
    );

    return webpackConfig;
  },
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Provide dev-only rewrites
  async rewrites() {
    return [];
  }
};

module.exports = nextConfig;
