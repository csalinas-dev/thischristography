import abqImages from 'shared/data/images/artwork/albuquerque.json';
import lvImages from 'shared/data/images/artwork/las-vegas.json';
import ArtworkImage from './ArtworkImage';
import Layout from 'components/Layout';
import nfImages from 'shared/data/images/artwork/niagara-falls.json';
import React, { useContext, useEffect } from 'react';
import { find } from 'lodash';
import { ImageViewerContext } from 'containers/ImageViewer/context';
import { resetImageViewer } from 'containers/ImageViewer/actions';
import './index.scss';

const albuquerque = find(abqImages, ['id', 'TUPMPRfm628t']);
const niagaraFalls = find(nfImages, ['id', '82mWs4QzBSfA']);
const lasVegas = find(lvImages, ['id', '3Y2bkrc6wh36']);

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
        <ArtworkImage images={abqImages} selected={albuquerque} className="mt-5">
          <h1 className="font-house">Albuquerque, NM</h1>
        </ArtworkImage>
      }
      {niagaraFalls &&
        <ArtworkImage images={nfImages} selected={niagaraFalls}>
          <h1 className="font-house">Niagara Falls, NY/Ontario</h1>
        </ArtworkImage>
      }
      {lasVegas &&
        <ArtworkImage images={lvImages} selected={lasVegas}>
          <h1 className="font-house">Las Vegas, NV</h1>
        </ArtworkImage>
      }
    </Layout>
  );
};

export default Landscapes;