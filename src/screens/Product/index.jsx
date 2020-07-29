// React and style
import React, { useEffect } from 'react';
import styles from './index.module.scss';

// Image Gallery
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';

// Redux
import { connect } from 'react-redux';
import { getPost } from 'store/actions/post';

// Translations
import { useTranslation } from 'react-i18next';

// Components
import NotFound from 'screens/NotFound';

function Product({ getPost, post, match }) {
  const { t } = useTranslation();

  useEffect(() => {
    if (match.params) {
      getPost(match.params.id);
    }
  }, [getPost, match]);

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
    <section className={`${styles.product} mx-auto mt-lg-5`}>
      <article className={`px-3`}>
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

      <article className={`${styles.description} p-4 pb-5 p-lg-5`}>
        <h1 className={`mb-3 mt-4 mt-md-0`}>{post.name}</h1>
        <p className={`mb-3 mt-4`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem voluptatibus, laborum ut
          aliquid optio architecto quos libero sint odit earum fugiat alias. Consequuntur quam
          eaque, dolorum necessitatibus quisquam iste, harum pariatur quos qui placeat nam maiores
          debitis similique fugiat itaque, dolore doloribus magnam tempore natus ipsam aspernatur
          maxime molestias sequi?
        </p>

        <section
          className={`${styles.down} d-md-flex justify-content-between my-4 my-md-0 mt-md-5`}
        >
          <p>
            <i className={`fas fa-map-marker-alt mr-3`} />
            {post.location}
          </p>

          <p>
            <i className={`fas fa-clock mr-3`} />
            {post.date}
          </p>

          <p className={`mb-5`}>
            <i className={`fas fa-user mr-3`} />
            {post.seller}
          </p>
        </section>

        <section
          className={`${styles.nav} app-bg-white d-flex justify-content-around justify-content-sm-between align-items-center py-1 m-sm-0 mt-4 mt-md-0 w-100`}
        >
          <h5 className={`text-center my-2 my-md-0`}>
            {post.price} {t('general.currency')}
          </h5>
          <span className={`app-bg-primary app-text-white rounded py-3 px-5 px-md-4 py-md-2 mr-2`}>
            {t('product.call_button')}
            <i className={`fas fa-phone ml-3`} />
          </span>
        </section>
      </article>
    </section>
  );
}

const mapStateToProps = (state) => ({ post: state.posts.item });

export default connect(mapStateToProps, { getPost })(Product);
