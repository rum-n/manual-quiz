import localFont from 'next/font/local'

export const TTNorms = localFont({
  src: [
    {
      path: '../../public/fonts/TTNorms-Medium.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TTNorms-Pro-Compact-Trial-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})