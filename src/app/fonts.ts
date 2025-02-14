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
    {
      path: '../../public/fonts/TTNorms-Pro-Trial-Normal.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TTNorms-Pro-Trial-Regular.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TTNorms-Pro-Trial-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TTNorms-Pro-Trial-Expanded-Light.ttf',
      weight: '200',
      style: 'normal',
    },
  ],
})