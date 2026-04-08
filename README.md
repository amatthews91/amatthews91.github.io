 கட்டி
# 🚀 Personal Blog - Built with Eleventy

This repository hosts a personal blog built using [Eleventy](https://www.11ty.dev/). It is a static site generated from Markdown content, making it fast, secure, and ideal for content-focused websites.

## 📚 Structure Overview

The repository is organized to separate configuration, templates, and content sources:

*   `index.njk`: The main template for the root page, which displays the list of all blog posts.
*   `_posts/`: **(Content Source)** This directory holds all individual blog posts. Each Markdown file in this folder is automatically processed by Eleventy.
*   `_includes/`: Partial files used across multiple templates for reusable components (e.g., headers, footers, reusable card components).
*   `_layouts/`: Contains the main layout templates for the site.
*   `eleventy.js`: The primary configuration file for Eleventy, telling it where to find content and how to build the site.
*   `package.json`: Defines the project dependencies and build scripts.

## 🚀 Getting Started

**Prerequisites:**
*   Node.js and npm installed on your machine.

**Installation:**
1.  Clone this repository to your local machine.
2.  Navigate into the project directory:
    ```bash
    cd amatthews91.github.io
    ```
3.  Install the necessary dependencies:
    ```bash
    npm install
    ```

**Running the Blog:**
1.  To run the development server (for live previewing):
    ```bash
    npm run serve
    ```
    *(Note: This assumes we set up a `serve` script in `package.json`)*
2.  To generate the final, optimized static HTML files (for deployment to GitHub Pages):
    ```bash
    npm run build
    ```
    The generated files will be placed in the build output directory (usually `_site/`).

## 🗒️ Writing & Contributing

1.  **Creating a New Post:**
    *   Create a new file in the `_posts/` directory.
    *   The file must use **YAML Front Matter** at the very top to provide metadata.

    **Example:**
    ```markdown
    ---
    title: My Awesome New Post
    date: 2026-04-08
    excerpt: A short summary used on the homepage card.
    ---

    # Main Content Goes Here

    Write your full article content in standard Markdown.
    ```

2.  **Contribution:**
    *   If you wish to modify the design, edit the templates located in `_includes/` or create new layouts in `_layouts/`.
    *   All changes should result in a clean, static output; avoid writing JavaScript that requires a backend server to function.
    *   Please open a new Issue or submit a Pull Request detailing the changes you want to make.

---
*This site is built with Eleventy.*
\
[github:amatthews91/amatthews91.github.io](https://github.com/amatthews91/amatthews91.github.io)
<!-- End of README content -->\
"