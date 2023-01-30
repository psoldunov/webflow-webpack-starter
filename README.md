# Webpack Starter Project for Webflow

This project was created to help manage custom code in a Webflow project. It uses Webpack and supports ES2015 import/export syntax, npm packages, custom CSS/SASS, and Typescript. The "watch" command allows for live code editing using a cloud storage of choice. When the Webflow project is ready to go live, a "js.txt" file can be generated and added to Webflow as a document for use in custom code fields.

## Features

- Webpack
- CSS/SASS loader
- Typescript (optional)
- Source mapping for dev build

## Usage

- Download and run `npm install` to install Webpack and dependencies
- Build custom code bundle with `npm run build` (output in `dist/` folder)
- Start Webpack in watch mode with `npm run watch`

## SRC folder

The `src/` folder only requires one file: `index.js` (or `index.ts` if TypeScript is being used). The folders `components/`, `plugins/`, `pages/`, and `styles/` have established shortcuts (aliases) in Webpack, so they can be directly referenced in import statements.

## Configuration

In `./wfconfig.js` there are 3 configurable options:

- `bundleName`: name of bundle in` dist/` folder
- `cloudPath`: path to cloud folder on your machine for dev copy of bundle
- `typescript`: set to true to use TypeScript (rename file extensions to `.ts` in `src/` folder)

### CSS

CSS files can be used with Webpack. See examples in `src/` folder for import examples.

### Watch Mode

Webpack watch mode will include source map in the inline bundle (resulting in large file size). The `npm run build` command will produce a minified bundle without source map in a '.js.txt' format suitable for deployment in Webflow.

### Cloud folder for watch mode

Use services like Dropbox or Google Drive. Change the link for Dropbox inside Webflow custom code section as follows:

Default: `https://www.dropbox.com/s/asdfdgsvgcvsf23/app.js?dl=0`
Webflow-ready: `<script src="https://dl.dropboxusercontent.com/s/asdfdgsvgcvsf23/app.js"></script>`

## Contributing

Feel free to use or modify this project. If you appreciate it, consider buying me a coffee.

<a href="https://www.buymeacoffee.com/psoldunov" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;"></a>
