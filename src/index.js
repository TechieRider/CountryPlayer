import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
import _ from 'lodash';
import './App.css';

const API_KEY = 'AIzaSyBEHNDOLlaMav4xDeeZI8YbHN5Sk0-07a0';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('country music vevo')

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term + 'country music vevo official', }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300)
  return (
          <div>
            <SearchBar onSearchTermChange={videoSearch} />
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-8">
                  <VideoDetails video={this.state.selectedVideo}/>
                </div>
                <div  className="col-sm-12 col-md-12 col-lg-4">
                  <VideoList
                  onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                  videos={this.state.videos}/>
                </div>
            </div>
          </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))