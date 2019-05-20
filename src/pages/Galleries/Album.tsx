import * as React from 'react';
import { Redirect } from 'react-router-dom';
import Gallery from 'src/components/Gallery';
import Header from 'src/components/Header';
import Galleries from 'src/data/Galleries';

interface IParams {
  album: string;
};

interface IMatchProps {
  params: IParams;
};

interface IRouteProps {
  match: IMatchProps;
};

class Album extends React.Component<IRouteProps> {
  public render() {
    const { match: { params: { album } }} = this.props;
    const photos = Galleries[album];
    
    if (!photos || !photos.length) {
      return <Redirect to="/not-found" />;
    }

    return (
      <div className="galleries">
        <Header />
        <main>
          <section className="container">
            <Gallery photos={photos} />
          </section>
        </main>
      </div>
    );
  }
};

export default Album;
