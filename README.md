# Void0 website

Official download landing page for [Void0](https://void0game.github.io/).

The site is a static Vite application deployed through GitHub Pages. It reads
the public rolling release tagged `void0-latest` from
[`romajs/game-downloads`](https://github.com/romajs/game-downloads), then
connects each platform button to the matching package.

The current presentation tracks Void0 v0.21.0 while focusing on the lasting
game fantasy: sixteen-Signal survival, weaponized movement, signed Signal
Score, dynamic Fade pressure, electronic adrenaline, career progression, six
stored power-ups, and hostile collapsing Frames. The release presents Tempest
and Singularity with Prime Circuit Solo and Prime Teams 8v8 in an offline-only
desktop build.

## Brand language

The accepted public tagline is **Enter the Void. Outride the Light.** Physical maps are named
**Frames** (`Tempest` and `Singularity` in v0.21.0), **Circuit** identifies the
competitive format, **Signal** remains the rider identity, and **Voidlink**
identifies a future session connection. The site-specific editorial contract is documented in
[Brand Language and Copy](docs/brand-language-and-copy.md).

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
