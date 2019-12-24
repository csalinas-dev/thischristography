import abqImages from 'shared/data/images/galleries/albuquerque.json';
import CoverImage from './CoverImage';
import Layout from 'components/Layout';
import lvImages from 'shared/data/images/galleries/las-vegas.json';
import nfImages from 'shared/data/images/galleries/niagara-falls.json';
import tbImages from 'shared/data/images/galleries/thunderbirds.json';
import React, { useContext, useEffect } from 'react';
import { find } from 'lodash';
import { ImageViewerContext } from 'containers/ImageViewer/context';
import { resetImageViewer } from 'containers/ImageViewer/actions';
import './index.scss';

const albuquerque = find(abqImages, ['id', 'TUPMPRfm628t']);
const niagaraFalls = find(nfImages, ['id', '82mWs4QzBSfA']);
const lasVegas = find(lvImages, ['id', '3Y2bkrc6wh36']);
const thunderbird = find(tbImages, ['id', '9vU3Wz2yFyB3']);

const Landscapes = () => {
  const { dispatch } = useContext(ImageViewerContext);

  useEffect(() => {
    // Reset images in image viewer on unmount
    return () => {
      const action = resetImageViewer();
      dispatch(action);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout className="landscapes">
      {albuquerque &&
        <CoverImage images={abqImages} selected={albuquerque} className="mt-5">
          <h1 className="font-house">Albuquerque, NM</h1>
        </CoverImage>
      }
      {niagaraFalls &&
        <CoverImage images={nfImages} selected={niagaraFalls}>
          <h1 className="font-house">Niagara Falls, NY/Ontario</h1>
        </CoverImage>
      }
      {lasVegas &&
        <CoverImage images={lvImages} selected={lasVegas}>
          <h1 className="font-house">Las Vegas, NV</h1>
        </CoverImage>
      }
      {thunderbird &&
        <CoverImage images={tbImages} selected={thunderbird}>
          <h1 className="font-house">USAF Thunderbirds</h1>
        </CoverImage>
      }
    </Layout>
  );
};

export default Landscapes;