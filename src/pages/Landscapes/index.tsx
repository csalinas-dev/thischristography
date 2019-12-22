import abqImages from 'shared/data/images/landscapes/albuquerque.json';
import LandscapeImage from './LandscapeImage';
import Layout from 'components/Layout';
import nfImages from 'shared/data/images/landscapes/niagara-falls.json';
import React, { useContext, useEffect } from 'react';
import { find } from 'lodash';
import { ImageViewerContext } from 'containers/ImageViewer/context';
import { resetImageViewer } from 'containers/ImageViewer/actions';
import './index.scss';

const albuquerque = find(abqImages, ['id', 'TUPMPRfm628t']);
const niagaraFalls = find(nfImages, ['id', '82mWs4QzBSfA']);

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
        <LandscapeImage images={abqImages} selected={albuquerque} className="mt-5">
          <h1>Albuquerque, NM</h1>
        </LandscapeImage>
      }
      {niagaraFalls &&
        <LandscapeImage images={nfImages} selected={niagaraFalls}>
          <h1>Niagara Falls, NY/Ontario</h1>
        </LandscapeImage>
      }
    </Layout>
  );
};

export default Landscapes;