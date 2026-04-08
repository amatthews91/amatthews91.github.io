# Development Commands

## Site Generator
This project uses **Eleventy (11ty)** for static site generation.

## Build Process
The production build compiles the entire site into the `_site` directory.

\`\`\`bash
npx @11ty/eleventy --output _site
\`\`\`

## Local Development
This command starts a local server for development, enabling live reloading.

\`\`\`bash
npx @11ty/eleventy --serve
\`\`\`