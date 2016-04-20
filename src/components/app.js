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

  render() {
    return (
      <div>
        <div className='sme-header'>SME SEARCH</div>
        <div><SearchBar /></div>
        <div className='sme-search-detail'><CusipList cusips={this.state.cusips}/></div>
      </div>
    );
  }
}
