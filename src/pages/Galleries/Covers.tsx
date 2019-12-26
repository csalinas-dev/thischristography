import imagesAlbuquerque from 'shared/data/images/galleries/albuquerque.json';
import imagesBalloonFiesta from 'shared/data/images/galleries/balloon-fiesta.json';
import imagesFireworks from 'shared/data/images/galleries/fireworks.json';
import imagesLasVegas from 'shared/data/images/galleries/las-vegas.json';
import imagesNiagaraFalls from 'shared/data/images/galleries/niagara-falls.json';
import imagesThunderbirds from 'shared/data/images/galleries/thunderbirds.json';
import { CoverImageProps } from './CoverImage';

export const GalleryCovers: Array<CoverImageProps> = [
  {
    images: imagesAlbuquerque,
    selected: 'TUPMPRfm628t',
    title: 'Albuquerque, NM',
    className: 'mt-5'
  },
  {
    images: imagesNiagaraFalls,
    selected: '82mWs4QzBSfA',
    title: 'Niagara Falls, NY/Ontario',
  },
  {
    images: imagesLasVegas,
    selected: '3Y2bkrc6wh36',
    title: 'Las Vegas, NV',
  },
  {
    images: imagesThunderbirds,
    selected: '9vU3Wz2yFyB3',
    title: 'USAF Thunderbirds',
  },
  {
    images: imagesBalloonFiesta,
    selected: '9b3X8jSh5kek',
    title: 'Albuquerque International Balloon Fiesta',
  },
  {
    images: imagesFireworks,
    selected: '6R3mXuBafC2k',
    title: 'Fireworks',
  }
];