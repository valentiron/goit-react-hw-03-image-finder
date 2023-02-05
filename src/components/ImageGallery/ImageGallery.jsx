import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ imageList, getLargeUrl }) => {
  return (
    <ul className="ImageGallery">
      {imageList.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
        key={id}
          id={id}
          webformatURL={webformatURL}
          getLargeUrl={getLargeUrl}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
    imageList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
      })
    ),
  };