import React from 'react';
import { Component } from 'react';
import SearchBar from '../containers/search_bar';
import SearchDetail from '../containers/search_detail';


export default class App extends Component {
  render() {
    return (
      <div>
        <div className='sme-header'>SME SEARCH</div>
        <div><SearchBar /></div>
        <div className='sme-search-detail'><SearchDetail /></div>

      </div>
    );
  }
}
