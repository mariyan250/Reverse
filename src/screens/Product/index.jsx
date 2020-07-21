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
              showThumbnails={false}
              showFullscreenButton={false}
            />
          )}
        </article>

        <article className="item-description p-4 p-lg-5">
          <h1 className="mb-3 app-text-primary">{post.name}</h1>
          <p className="mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem voluptatibus, laborum
            ut aliquid optio architecto quos libero sint odit earum fugiat alias. Consequuntur quam
            eaque, dolorum necessitatibus quisquam iste, harum pariatur quos qui placeat nam maiores
            debitis similique fugiat itaque, dolore doloribus magnam tempore natus ipsam aspernatur
            maxime molestias sequi?
          </p>
          <section className="item-description-nav d-flex justify-content-between align-items-center mt-4">
            <h1 className="app-text-pr">{post.price}$</h1>
            <span className="app-bg-primary app-text-white px-5 py-3 px-lg-4 py-lg-2 rounded">
              Call Now
            </span>
          </section>
        </article>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({ post: state.posts.item });

export default connect(mapStateToProps, { getPost })(Product);
