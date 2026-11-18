# Splattastic — Theme Park Lab
A mobile-first Ink Studio theme park. Walk around the central park with the on-screen D-pad (or WASD), drag to look, approach an attraction gate and tap Enter. Use Park to return to your previous location. Switch between orbit and first-person riding on Thunder Trail and Crystal Caverns. In Crystal Caverns, aim at eight glowing crystals and tap Fire or tap the crystal directly for 100 points each. Starlight Wheel and Fireworks Kingdom remain available.

## Run locally
`npm install && node smoke.cjs && npm run build`, then `npx serve dist`.

## Deploy
[Enable GitHub Pages](https://github.com/RStevens-dev/Splattastic/settings/pages) → Source → GitHub Actions. Run [Deploy mobile demo](https://github.com/RStevens-dev/Splattastic/actions/workflows/pages.yml). The workflow runs engine smoke tests before deployment. Physical-device testing pending.

The park is a hub with separate attraction scenes, not a seamless world. It uses a simplified square-splat preview and bounded walking without collision detection.

## Sleeping Dog — Living Splats
Open `dog.html` or choose **Sleeping Dog (import)** from the scene selector. Select the original 428,351-splat SOG ZIP from your device. The viewer decodes the scan locally, then applies feathered breathing and front/hind paw twitch masks. Orbit, pinch, pause or adjust motion strength. It uses a WebGL2 point-splat renderer with a lower-resolution Canvas2D fallback. Original scan by [Jae Kim](https://superspl.at/user/foreverblue), [Sleeping Dog on a Blue Blanket](https://superspl.at/scene/d8562860), [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/). The scan is not redistributed in this repository. For noncommercial use only; the rig animates the source scan and uses base colors rather than full higher-order SH.
