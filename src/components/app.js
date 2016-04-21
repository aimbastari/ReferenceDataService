import React from 'react';
import { Component } from 'react';
import SearchBar from '../containers/search_bar';
import SearchDetail from '../containers/search_detail';
import CusipList from './cusip_list';


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {cusips: ['xyz1232', 'xyz12366', 'x1231233']};

  }

  //Call the SME backend to get list of cusips
  //Use the angio library
  cusipSearch(term){



  }

  render() {
    return (
      <div>
        <div className='sme-header'>Swap Maintenance</div>
        <div><SearchBar onSearchTermChange={term => this.cusipSearch(term)} /></div>
        <div className='sme-search-detail'><CusipList cusips={this.state.cusips}/></div>
        <div>Swap Detail </div>
      </div>
    );
  }
}
