import { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModalWindow);
  }

  closeModalWindow = event => {
    if (event.code === 'Escape') {
      this.props.onModalWindowClose();
    }
  };

  closeModalOnBackDrop = event => {
    if (event.target === event.currentTarget) this.props.onModalWindowClose();
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalWindow);
  }

  render() {
    const { imgUrl, id } = this.props;

    return (
      <div className="Overlay" onClick={this.closeModalOnBackDrop}>
        <div className="Modal">
          <img src={imgUrl} alt={id} />
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};