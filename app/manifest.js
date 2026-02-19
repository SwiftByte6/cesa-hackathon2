export default function manifest() {
  return {
    name: 'HACKFEST: INNOV8 TMRW',
    short_name: 'HACKFEST',
    description: 'Join HACKFEST: INNOV8 TMRW - A premier hackathon hosted by CESA at VIT Mumbai. Build beyond infinity with cutting-edge innovation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#8b5cf6',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/LogoCesa 1.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/LogoCesa 1.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/LogoCesa 1.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/LogoCesa 1.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['education', 'technology', 'events'],
    lang: 'en',
  };
}
