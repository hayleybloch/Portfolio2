/** @type {import('next').NextConfig} */
const repo = 'Portfolio2';
const isGitHub = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: isGitHub ? 'export' : undefined,
  basePath: isGitHub ? `/${repo}` : '',
  assetPrefix: isGitHub ? `/${repo}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHub ? `/${repo}` : '',
    NEXT_PUBLIC_DESKTOP_BASE: isGitHub ? `/${repo}` : ''
  },
  images: { 
    unoptimized: true,
    qualities: [25, 50, 75, 100]
  },
  devIndicators: false,
  webpack: (webpackConfig, { webpack }) => {
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
  reactStrictMode: true,
  transpilePackages: ['rpc'],

  // Provide dev-only rewrites so hardcoded /Portfolio2/... paths work when running locally
  async rewrites() {
    if (isGitHub) { return [] }

    return [
      {
        source: `/${repo}/:path*`,
        destination: `/:path*`
      }
    ];
  }
};

module.exports = nextConfig;
