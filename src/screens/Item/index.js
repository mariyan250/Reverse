// React and style
import React, { useEffect } from 'react';
import './index.scss';

// Redux
import { connect } from 'react-redux';
import { getPost } from 'store/actions/post';

// Image Gallery
import ImageGallery from 'react-image-gallery';

function Item({ getPost, post, match }) {
  useEffect(() => {
    getPost(match.params.id);
  }, []);

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  return (
    <section className="item">
      <ImageGallery items={images} showPlayButton={false} originalClass="img-gallery" />
      <h2>{post.name}</h2>
      <p>{post.price} $</p>
    </section>
  );
}

const mapStateToProps = (state) => ({ post: state.posts.item });

export default connect(mapStateToProps, { getPost })(Item);
