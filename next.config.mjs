import createMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';

const withMDX = createMDX({
  options: {
    // Disable @mdx-js/react provider to avoid SSR createContext errors
    providerImportSource: undefined,
    // Parse and strip YAML frontmatter so it isn't rendered as page content
    remarkPlugins: [remarkFrontmatter],
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
