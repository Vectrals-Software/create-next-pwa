# create-next-pwa

This CLI tool enables you to quickly create a PWA on top of Next.js with zero config needed.


## Usage

To create your Next.js powered PWA run
```bash
  npx create-nextjs-pwa
```
Or clone this repo 🙂

This will create a basic Next.js template with additional files for PWA support.
## Features

These awesome features are possible thanks to the great - [@shadowwalker](https://github.com/shadowwalker/next-pwa), creator of next-pwa plugin.

- 0️⃣ Zero config for registering and generating service worker
- ✨ Optimized precache and runtime cache
- 💯 Maximize lighthouse score
- 🎈 Easy to understand examples
- 📴 Completely offline support with fallbacks [example](https://github.com/shadowwalker/next-pwa/tree/master/examples/offline-fallback-v2) 🆕
- 📦 Use [workbox](https://developer.chrome.com/docs/workbox/) and [workbox-window](https://developer.chrome.com/docs/workbox/modules/workbox-window) v6
- 🍪 Work with cookies out of the box
- 🔉 Default range requests for audios and videos
- ☕ No custom server needed for Next.js 9+ [example](https://github.com/shadowwalker/next-pwa/tree/master/examples/next-9)
- 🔧 Handle PWA lifecycle events opt-in [example](https://github.com/shadowwalker/next-pwa/tree/master/examples/lifecycle)
- 📐 Custom worker to run extra code with code splitting and **typescript** support [example](https://github.com/shadowwalker/next-pwa/tree/master/examples/custom-ts-worker)
- 📜 [Public environment variables](https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser) available in custom worker as usual
- 🐞 Debug service worker with confidence in development mode without caching
- 🌏 Internationalization (a.k.a I18N) with `next-i18next` [example](https://github.com/shadowwalker/next-pwa/tree/master/examples/next-i18next)
- 🛠 Configurable by the same [workbox configuration options](https://developer.chrome.com/docs/workbox/modules/workbox-webpack-plugin) for [GenerateSW](https://developer.chrome.com/docs/workbox/modules/workbox-webpack-plugin/#generatesw-plugin) and [InjectManifest](https://developer.chrome.com/docs/workbox/modules/workbox-webpack-plugin/#injectmanifest-plugin)
- 🚀 Spin up a [GitPod](https://gitpod.io/#https://github.com/shadowwalker/next-pwa/) and try out examples in rocket speed
- ⚡ Support [blitz.js](https://blitzjs.com/) (simply add to `blitz.config.js`)
- 🔩 (Experimental) precaching `.module.js` when `next.config.js` has `experimental.modern` set to `true`


## Contributing

Contributions are always welcome!

## Authors

- [@Enzo-21](https://github.com/Enzo-21)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

