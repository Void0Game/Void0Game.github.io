# Void0 website

Official download landing page for [Void0](https://void0zero.github.io/).

The site is a static Vite application deployed through GitHub Pages. It reads
the public rolling release tagged `void0-latest` from
[`romajs/game-downloads`](https://github.com/romajs/game-downloads), then
connects each platform button to the matching package.

## Local development

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

## Release integration

The game release workflow publishes stable filenames:

- `Void0-macOS-universal.zip`
- `Void0-Windows-x86_64.zip`
- `Void0-Linux-x86_64.tar.gz`
- `SHA256SUMS.txt`

The private source repository keeps the versioned release history. Its release
workflow replaces the assets in `void0-latest`, allowing the page to update
version, date, file sizes, and download targets without a new site deployment.

No analytics or tracking scripts are included.
