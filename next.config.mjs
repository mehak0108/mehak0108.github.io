import createMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import { visit } from 'unist-util-visit';

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function headingText(node) {
  return (node.children || [])
    .map((child) => (child.type === 'text' ? child.value : headingText(child)))
    .join('');
}

// Adds a slug `id` to every h2 so the case-study sidebar TOC can link/scroll to it
function rehypeHeadingIds() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'h2') {
        node.properties = node.properties || {};
        node.properties.id = slugify(headingText(node));
      }
    });
  };
}

const withMDX = createMDX({
  options: {
    // Disable @mdx-js/react provider to avoid SSR createContext errors
    providerImportSource: undefined,
    // Parse and strip YAML frontmatter so it isn't rendered as page content
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [rehypeHeadingIds],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '',
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

export default withMDX(nextConfig);
