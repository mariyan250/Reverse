// React and style
import React, { useEffect } from 'react';
import './index.scss';

// Redux
import { connect } from 'react-redux';
import { getPost } from 'store/actions/post';

// Image Gallery
import ImageGallery from 'react-image-gallery';

// Components
import Header from 'shared/components/Header';
import NotFound from 'screens/NotFound';

function Product({ getPost, post, match }) {
  useEffect(() => {
    if (match.params) {
      getPost(match.params.id);
    }
  }, [getPost, post, match]);

  const getImages = (data) => {
    return data.images.map((val) => {
      return {
        original: val,
        thumbnail: val,
      };
    });
  };

  if (!post) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <section className="item-screen p-lg-4">
        <article className="gallery">
          {post.images && (
            <ImageGallery
              items={getImages(post)}
              showPlayButton={false}
              showBullets={true}
              showFullscreenButton={false}
            />
          )}
        </article>

        <article className="item-description px-3 p-lg-4 py-4">
          <h1 className="mb-2">{post.name}</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, corrupti. Debitis
            aliquam blanditiis a natus laudantium sint dolores possimus facere iste dolore libero
            qui laborum tempore labore ipsam, iusto ad repudiandae dicta. Alias voluptatibus autem
            ex beatae mollitia, ipsa placeat maxime culpa. Repudiandae et rem est quaerat, atque
            exercitationem odit!
          </p>
          <h3>{post.price}$</h3>
        </article>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({ post: state.posts.item });

export default connect(mapStateToProps, { getPost })(Product);
