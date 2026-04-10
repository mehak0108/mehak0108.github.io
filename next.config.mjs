import createMDX from '@next/mdx';

const withMDX = createMDX({
  options: {
    // Disable @mdx-js/react provider to avoid SSR createContext errors
    providerImportSource: undefined,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // TODO: set basePath to '/your-repo-name' before deploying to GitHub Pages
  basePath: '',
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

export default withMDX(nextConfig);
