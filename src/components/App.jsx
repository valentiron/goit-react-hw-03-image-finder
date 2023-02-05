import * as API from '../api/imageFind';
import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export class App extends Component {
  state = {
    searchQuery: '',
    galleryImages: [],
    searchLoading: false,
    imageModalUrl: '',
    totalHits: 0,
    page: 1,
    errorLoading: null,
    id: '',
    modalOpen: false,
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.page !== page || prevState.searchQuery !== searchQuery) {
      try {
        this.setState({ searchLoading: true });
        const response = await API.getImages(searchQuery, page);
        const { hits, totalHits } = response;
        
        this.setState(prevState => ({
          galleryImages:[...prevState.galleryImages, ...hits],
          totalHits,
        }));
      } catch (error) {
        this.setState({ errorLoading: error });
      } finally {
        this.setState({ searchLoading: false });
      }
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }));
  }

  getAPIImages = searchInput => {
    this.setState ({
      searchQuery:searchInput,
      galleryImages: [],
      totalHits: 0,
      page: 1,
    });
  };

  getLargeImageURL = (value, id) => {
    this.setState({
      imageModalUrl: value,
      id
    })
    this.toggleModalWindow();
  };

  toggleModalWindow = (event) => {
  this.setState(({modalOpen}) => ({modalOpen: !modalOpen}))
  }

  render() {
    const { errorLoading, galleryImages, searchLoading, imageModalUrl, totalHits, modalOpen, id } = this.state;
    return (
      <div className='app'>
        <Searchbar onSubmit={this.getAPIImages} formSubmitting={searchLoading}/>
        {errorLoading && <p>It occures an error: {errorLoading}</p>}
        {searchLoading && <Loader/>}
        <ImageGallery imageList={galleryImages} getLargeUrl={this.getLargeImageURL} />
        {modalOpen && <Modal imgUrl={imageModalUrl} id={id} onModalWindowClose={this.toggleModalWindow} />}
        {totalHits / 12 >= 1 && <Button loadMore={this.loadMore} />}
      </div>
    )
  }

}